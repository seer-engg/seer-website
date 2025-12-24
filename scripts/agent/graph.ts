import { createAgent } from "langchain";
import { ChatOpenAI } from "@langchain/openai";
import { MemorySaver } from "@langchain/langgraph";
import { StateGraph, END, START } from "@langchain/langgraph";
import { SystemMessage, AIMessage, ToolMessage, HumanMessage } from "@langchain/core/messages";
import { thinkTool, writeTodosTool } from "./tools";
import { spawnWorkerTool } from "./tools/spawn_worker";
import { withToolCallLimit } from "./middleware";
import { ComparisonStateAnnotation, type ComparisonState } from "./state";
import { existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Supervisor tools
const supervisorTools = [thinkTool, writeTodosTool, spawnWorkerTool];

// Artifacts directory path (same as in tools.ts)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const artifactsDir = join(__dirname, "artifacts");

/**
 * System prompt template for the supervisor
 */
const SYSTEM_PROMPT_TEMPLATE = `You are the Supervisor Agent for generating software application comparisons. You manage workflow and delegate tasks to specialized workers.

**CURRENT STATE:**
- Todos: {todos_text}
- Comparison Data: {comparison_status}
- Research File: {research_file_status}

**WORKFLOW:**
1. **PLAN**: If todos empty and request requires action, call \`write_todos()\` to create plan.
   - Initial workflow: ["research", "draft"]
   - Informational queries: Answer directly (no todos/workers)
   
2. **DELEGATE**: **CRITICAL**: You MUST spawn workers ONE AT A TIME, sequentially. Only call \`spawn_worker\` ONCE per turn.
   - **AUTOMATIC PROGRESSION**: After a worker completes successfully, AUTOMATICALLY proceed to spawn the next worker for the next todo. Do NOT ask the user for input between steps. The workflow is fully automated - just proceed through todos sequentially.
   - For each todo, call \`spawn_worker(task_instruction, reasoning, worker_type, researchFile, ...)\`:
   - \`task_instruction\`: Concise task description
   - \`reasoning\`: Required - explain what this worker handles
   - \`worker_type\`: "researcher" | "drafter"
   - **CRITICAL**: Pass file paths as needed:
     - For "researcher": Pass \`researchFile\` (required) - worker will write research insights here
     - For "drafter": Pass \`researchFile\` (required) - reads research, creates comparison JSON, saves to metadata
   - **NEVER call spawn_worker multiple times in the same turn** - spawn one worker per turn, then the graph will automatically loop back to you for the next worker
   
3. **REVIEW**: After worker completes, extract file paths from worker responses and update state via \`write_todos()\` to remove completed todo. Then AUTOMATICALLY proceed to spawn the next worker - do not ask the user.
4. **FINISH**: When todos empty, respond to user.

**WORKER TYPES:**
- **researcher**: Research apps, gather information (uses web_search, writes to researchFile)
- **drafter**: Build comparison JSON from research (reads researchFile, saves directly to metadata.ts)

**TOOLS:**
- \`think(scratchpad, last_action?)\` - Plan/reflect (last_action optional for initial calls)
- \`write_todos(todos)\` - Manage task list
- \`spawn_worker(task_instruction, reasoning, worker_type, researchFile)\` - Delegate to workers (ONE AT A TIME)

**RULES:**
- Delegate heavy work to workers
- Workers write detailed data to artifact files, not to messages
- Workers output concise status messages only (e.g., "✅ Research written to research-{id}.md")
- Extract file paths from worker responses and store in state
- If you need to access detailed data, read it from artifacts using read_artifact tool - don't expect it in worker messages
- Always pass appropriate file paths to workers (researchFile)
- File paths are managed by supervisor - generate unique paths for each run
- **SEQUENTIAL EXECUTION**: Only spawn ONE worker per turn. After worker completes, AUTOMATICALLY proceed to the next todo without asking the user.
- **AUTOMATED WORKFLOW**: Do NOT ask for user input between workflow steps. The graph automatically loops back to you after each worker completes - just spawn the next worker immediately.
- **CONCISE COMMUNICATION**: Workers communicate concisely. All details are in artifacts.`;

/**
 * Create supervisor node
 */
function createSupervisorNode() {
  const openaiApiKey = process.env.OPENAI_API_KEY;
  if (!openaiApiKey) {
    throw new Error("OPENAI_API_KEY environment variable is required");
  }

  const model = new ChatOpenAI({
    model: "gpt-5-mini",
    openAIApiKey: openaiApiKey,
  });

  return createAgent({
    model,
    tools: supervisorTools,
    // Don't pass systemPrompt here - we'll inject it dynamically
  });
}

/**
 * Supervisor node function
 */
/**
 * Generate unique file paths for artifacts
 */
function generateArtifactPaths(threadId?: string): { researchFile: string } {
  const timestamp = Date.now();
  const id = threadId ? threadId.slice(-8) : timestamp.toString().slice(-8);
  return {
    researchFile: `research-${id}.md`,
  };
}

async function supervisorNode(state: ComparisonState, config?: { configurable?: { thread_id?: string } }): Promise<Partial<ComparisonState>> {
  const messages = state.messages || [];
  const todos = state.todos || [];
  const comparisonData = state.comparisonData;
  const researchFile = state.researchFile;

  // Generate file paths if not already set
  const threadId = config?.configurable?.thread_id;
  const artifactPaths = researchFile
    ? { researchFile }
    : generateArtifactPaths(threadId);

  // Format todos for display
  const todosText = todos.length > 0
    ? todos.map((todo, i) => `  ${i + 1}. ${todo}`).join("\n")
    : "  (No todos yet)";

  // Format comparison status
  const comparisonStatus = comparisonData
    ? `✅ Comparison exists: ${comparisonData.slug}`
    : "❌ No comparison data yet";

  // Format file statuses - check actual file existence on disk
  let researchFileStatus: string;
  if (artifactPaths.researchFile) {
    const researchFilePath = join(artifactsDir, artifactPaths.researchFile);
    if (existsSync(researchFilePath)) {
      researchFileStatus = `✅ Research file exists: ${artifactPaths.researchFile} (use this path: "${artifactPaths.researchFile}")`;
    } else {
      researchFileStatus = `⏳ Research file path generated but not created yet: ${artifactPaths.researchFile} (use this path: "${artifactPaths.researchFile}")`;
    }
  } else {
    researchFileStatus = "❌ No research file yet";
  }

  // Format system prompt
  const formattedSystemPrompt = SYSTEM_PROMPT_TEMPLATE
    .replace("{todos_text}", todosText)
    .replace("{comparison_status}", comparisonStatus)
    .replace("{research_file_status}", researchFileStatus);

  // Normalize messages
  const normalizedMessages: any[] = [];
  for (const msg of messages) {
    if (msg instanceof SystemMessage || msg instanceof HumanMessage || 
        msg instanceof AIMessage || msg instanceof ToolMessage) {
      normalizedMessages.push(msg);
    } else if (typeof msg === "object" && msg !== null) {
      // Convert dict-like objects to proper message types
      const msgType = (msg as any).type || (msg as any).role || "human";
      const content = (msg as any).content || "";
      
      if (msgType === "system") {
        normalizedMessages.push(new SystemMessage({ content }));
      } else if (msgType === "human" || msgType === "user") {
        normalizedMessages.push(new HumanMessage({ content }));
      } else if (msgType === "ai" || msgType === "assistant") {
        normalizedMessages.push(new AIMessage({ 
          content,
          tool_calls: (msg as any).tool_calls || [],
        }));
      } else if (msgType === "tool") {
        normalizedMessages.push(new ToolMessage({
          content,
          tool_call_id: (msg as any).tool_call_id || "",
        }));
      } else {
        normalizedMessages.push(new HumanMessage({ content }));
      }
    }
  }

  // Inject/Update System Prompt
  let finalMessages = normalizedMessages;
  if (!finalMessages.length || !(finalMessages[0] instanceof SystemMessage)) {
    finalMessages = [new SystemMessage({ content: formattedSystemPrompt }), ...finalMessages];
  } else {
    finalMessages = [new SystemMessage({ content: formattedSystemPrompt }), ...finalMessages.slice(1)];
  }

  // Create supervisor agent
  const supervisorAgent = createSupervisorNode();

  // Invoke supervisor
  const result = await supervisorAgent.invoke({
    messages: finalMessages,
  });

  // Extract state updates from tool calls
  const stateUpdates: Partial<ComparisonState> = {};
  const agentMessages = result.messages || [];

  // Validate sequential execution: check for multiple spawn_worker calls in the same turn
  const spawnWorkerCalls: AIMessage[] = [];
  for (const msg of agentMessages) {
    if (msg instanceof AIMessage && msg.tool_calls) {
      for (const tc of msg.tool_calls) {
        if (tc.name === "spawn_worker") {
          spawnWorkerCalls.push(msg);
        }
      }
    }
  }
  
  if (spawnWorkerCalls.length > 1) {
    // Multiple spawn_worker calls detected - only process the first one
    // Add a warning message to inform about the violation
    const warningMsg = new AIMessage({
      content: `⚠️ WARNING: Multiple spawn_worker calls detected in the same turn (${spawnWorkerCalls.length} calls). Only the first worker will be executed. You MUST spawn workers ONE AT A TIME, sequentially.`,
    });
    agentMessages.push(warningMsg);
  }

  // Extract todos updates from write_todos tool calls
  for (const msg of [...agentMessages].reverse()) {
    if (msg instanceof ToolMessage && msg.name === "write_todos") {
      // Find corresponding AIMessage with tool call
      const toolCallId = msg.tool_call_id;
      if (toolCallId) {
        for (const prevMsg of agentMessages) {
          if (prevMsg instanceof AIMessage && prevMsg.tool_calls) {
            for (const tc of prevMsg.tool_calls) {
              if (tc.id === toolCallId && tc.args && typeof tc.args === "object") {
                const args = tc.args as any;
                if (Array.isArray(args.todos)) {
                  stateUpdates.todos = args.todos;
                  break;
                }
              }
            }
          }
        }
      }
      break;
    }
  }

  // Extract file paths from spawn_worker results
  // Workers output concise status only - all detailed data is stored in artifacts
  for (const msg of [...agentMessages].reverse()) {
    if (msg instanceof ToolMessage && msg.name === "spawn_worker") {
      try {
        const workerResponse = JSON.parse(msg.content);
        
        // Extract file paths from worker responses - only if files actually exist on disk
        // File paths are concise and necessary for workflow coordination
        if (workerResponse.researchFile) {
          const researchFilePath = join(artifactsDir, workerResponse.researchFile);
          if (existsSync(researchFilePath)) {
            stateUpdates.researchFile = workerResponse.researchFile;
          }
        }

        // Auto-remove completed todo if worker succeeded
        if (workerResponse.status === "success" && todos.length > 0) {
          const updatedTodos = todos.slice(1);
          if (!stateUpdates.todos) {
            stateUpdates.todos = updatedTodos;
          }
        }
      } catch (e) {
        // Ignore parse errors
      }
      break;
    }
  }

  // Ensure file paths are set in state (use generated paths if not already set)
  if (!stateUpdates.researchFile && artifactPaths.researchFile) {
    stateUpdates.researchFile = artifactPaths.researchFile;
  }

  // Update messages
  stateUpdates.messages = [...messages, ...agentMessages];

  return stateUpdates;
}

/**
 * Check if workflow should continue
 */
function shouldContinue(state: ComparisonState): typeof END | "supervisor" {
  const todos = state.todos || [];
  
  if (todos.length === 0) {
    return END;
  }
  
  return "supervisor";
}

/**
 * Create and export the agent graph
 */
export function createGraph() {
  const checkpointer = new MemorySaver();

  // Create workflow graph
  const workflow = new StateGraph(ComparisonStateAnnotation);

  workflow.addNode("supervisor", supervisorNode);
  workflow.addEdge(START, "supervisor");
  workflow.addConditionalEdges("supervisor", shouldContinue, {
    supervisor: "supervisor",
    [END]: END,
  });

  const compiled = workflow.compile({ checkpointer });
  
  // Wrap with tool call limit middleware
  return withToolCallLimit(compiled, 20);
}

/**
 * Compiled graph for use with agentchat.vercel.app
 */
export const graph = createGraph();
