import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { HumanMessage } from "@langchain/core/messages";
import { createResearcherWorker } from "../workers/researcher";
import { createDrafterWorker } from "../workers/drafter";

/**
 * Worker response structure
 * Workers output concise status messages only - all detailed data is stored in artifacts
 */
interface WorkerResponse {
  status: "success" | "failure";
  message: string;
  error?: string;
  // File paths returned by workers (concise, necessary for workflow)
  researchFile?: string;
}

/**
 * Spawn worker tool that dynamically creates and executes workers
 */
export const spawnWorkerTool = tool(
  async ({
    task_instruction,
    reasoning,
    worker_type,
    researchFile,
    draftFile,
  }: {
    task_instruction: string;
    reasoning: string;
    worker_type: "researcher" | "drafter";
    researchFile?: string;
    draftFile?: string;
  }) => {
    try {
      // Create worker based on type
      let worker;
      let workerInput: any = {
        messages: [new HumanMessage({ content: task_instruction })],
      };

      switch (worker_type) {
        case "researcher":
          worker = createResearcherWorker();
          if (!researchFile) {
            return JSON.stringify({
              status: "failure",
              message: "Cannot research: researchFile path is missing",
              error: "researchFile required for researcher worker",
            } as WorkerResponse);
          }
          let researcherPrompt = `${task_instruction}\n\n**IMPORTANT**: Write all your research findings to the file: ${researchFile}\nUse the write_artifact tool with filePath="${researchFile}" to save your insights.`;
          workerInput.messages = [new HumanMessage({ content: researcherPrompt })];
          break;

        case "drafter":
          worker = createDrafterWorker();
          if (!researchFile) {
            return JSON.stringify({
              status: "failure",
              message: "Cannot draft: researchFile path is missing",
              error: "researchFile required for drafter worker",
            } as WorkerResponse);
          }
          let draftPrompt = `${task_instruction}\n\n**IMPORTANT**: 
1. First, read the research findings from: ${researchFile} using read_artifact tool
2. Then create a complete ComparisonData JSON object based on the research
3. Finally, call update_metadata tool with the JSON content to save it to the metadata file`;
          
          workerInput.messages = [new HumanMessage({ content: draftPrompt })];
          break;

        default:
          return JSON.stringify({
            status: "failure",
            message: `Unknown worker type: ${worker_type}`,
            error: "Invalid worker_type",
          } as WorkerResponse);
      }

      // Execute worker
      const result = await worker.invoke(workerInput);

      // Extract results from worker messages
      const messages = result.messages || [];
      let finalMessage = "";
      let fileWritten = false;
      let hasError = false;
      let errorMessage = "";

      // Process messages to detect success/failure and extract concise status
      // Look for tool messages (write_artifact, update_metadata) and final worker message
      for (const msg of messages) {
        const content = typeof msg.content === "string" ? msg.content : JSON.stringify(msg.content);
        
        // Check ToolMessage content for success/failure indicators
        // ToolMessages contain tool results - check content for success/failure patterns
        const isToolMessage = (msg as any).tool_call_id !== undefined || 
                             msg.constructor.name === "ToolMessage" ||
                             (msg as any).getType?.() === "tool";
        
        if (isToolMessage && typeof msg.content === "string") {
          // Check for write_artifact success (contains file path confirmation)
          if (content.includes("✅ Successfully wrote artifact") || 
              (content.includes("Successfully") && content.includes("artifact"))) {
            fileWritten = true;
          }
          // Check for update_metadata success
          else if (content.includes("✅ Successfully added comparison") ||
                   (content.includes("Successfully") && content.includes("metadata"))) {
            fileWritten = true;
          }
          // Check for errors
          else if (content.includes("Error") || content.includes("❌")) {
            hasError = true;
            if (!errorMessage) {
              errorMessage = content;
            }
          }
        }
        
        // Get the final worker message (should be concise status)
        // Prefer AIMessage content as it's the worker's final output
        const isAIMessage = msg.constructor.name === "AIMessage" || 
                            (msg as any).type === "ai" || 
                            (msg as any).getType?.() === "ai";
        
        if (isAIMessage) {
          const msgContent = typeof msg.content === "string" ? msg.content : "";
          // Only use if it looks like a concise status message (short, contains ✅ or ❌)
          if (msgContent && (msgContent.includes("✅") || msgContent.includes("❌") || msgContent.length < 200)) {
            finalMessage = msgContent;
          }
        }
      }

      // If no concise message found, generate one based on tool results
      if (!finalMessage) {
        if (hasError) {
          finalMessage = errorMessage || "❌ Worker failed";
        } else if (fileWritten) {
          // Generate concise status based on worker type
          if (worker_type === "researcher" && researchFile) {
            finalMessage = `✅ Research written to ${researchFile}`;
          } else if (worker_type === "drafter") {
            finalMessage = "✅ Comparison saved to metadata";
          } else {
            finalMessage = "✅ Worker completed successfully";
          }
        } else {
          finalMessage = "✅ Worker completed successfully";
        }
      }

      // Build response with concise status only
      const response: WorkerResponse = {
        status: hasError ? "failure" : "success",
        message: finalMessage,
      };

      if (hasError && errorMessage) {
        response.error = errorMessage;
      }

      // Set file paths based on worker type (if file was written or paths were provided)
      if (worker_type === "researcher" && researchFile && fileWritten) {
        response.researchFile = researchFile;
      }

      return JSON.stringify(response);
    } catch (error) {
      return JSON.stringify({
        status: "failure",
        message: `Error executing worker: ${error instanceof Error ? error.message : String(error)}`,
        error: String(error),
      } as WorkerResponse);
    }
  },
  {
    name: "spawn_worker",
    description: "Execute a task using a dynamically spawned worker. Workers are specialized agents with focused tools and context. **CRITICAL**: You MUST call this tool ONLY ONCE per turn. Spawn workers ONE AT A TIME, sequentially. Wait for each worker to complete before spawning the next one.",
    schema: z.object({
      task_instruction: z.string().describe("CONCISE instruction for the worker"),
      reasoning: z.string().describe("MANDATORY - Explanation of why this worker is needed and what it handles"),
      worker_type: z.enum(["researcher", "drafter"]).describe("Type of worker to spawn"),
      researchFile: z.string().optional().describe("Path to research file (required for researcher and drafter workers)"),
      draftFile: z.string().optional().describe("Path to draft file (deprecated, no longer used)"),
    }),
  }
);

