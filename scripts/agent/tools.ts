import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import type { ComparisonData, ComparisonApp, ComparisonRow } from "../../src/content/comparisons-metadata";

/**
 * Write todos tool for managing workflow todos list
 */
export const writeTodosTool = tool(
  async ({ todos }: { todos: string[] }) => {
    if (!Array.isArray(todos)) {
      return `Error: todos must be an array of strings. Received: ${typeof todos}`;
    }
    return `✅ Todos updated: ${todos.length} items`;
  },
  {
    name: "write_todos",
    description: "Update the todos list. Pass a list of todo items (strings). This replaces the entire todos list. Use this to create or update your plan.",
    schema: z.object({
      todos: z.array(z.string()).describe("List of todo items (strings) representing workflow steps"),
    }),
  }
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "../..");
const artifactsDir = join(__dirname, "artifacts");

// Ensure artifacts directory exists
if (!existsSync(artifactsDir)) {
  mkdirSync(artifactsDir, { recursive: true });
}

/**
 * Think tool for reasoning between tool calls
 * Enables alternating pattern: think() → action tool → think() → action tool
 */
export const thinkTool = tool(
  async ({ scratchpad, last_action }: { scratchpad: string; last_action?: string }) => {
    // Simple formatting - just return the thought and last action
    // This forces the agent to reason explicitly before and after each action
    const lastActionText = last_action || "No previous action";
    return `Thought: ${scratchpad}\nLast action: ${lastActionText}`;
  },
  {
    name: "think",
    description: "Use this tool to think and reason about the current situation. You MUST call this tool before and after every action tool call. Follow the pattern: think() → action tool → think() → action tool. Use scratchpad for your reasoning, plans, and analysis. Use last_action (optional) to summarize the most recent tool call and its result - omit for initial calls",
    schema: z.object({
      scratchpad: z.string().describe("Your reasoning, plans, and analysis"),
      last_action: z.string().optional().describe("Summary of the most recent tool call and its result (optional - omit for initial calls)"),
    }),
  }
);

/**
 * Web search call counter - tracks calls per worker instance
 */
const webSearchCallCounters = new WeakMap<object, number>();

/**
 * Create a web search tool with call limit tracking
 * Each worker instance gets its own counter
 */
export function createSearchTool(workerInstance: object) {
  // Initialize counter for this worker instance
  if (!webSearchCallCounters.has(workerInstance)) {
    webSearchCallCounters.set(workerInstance, 0);
  }

  return tool(
    async ({ query }: { query: string }) => {
      const currentCount = webSearchCallCounters.get(workerInstance) || 0;
      
      if (currentCount >= 4) {
        return `❌ WEB_SEARCH LIMIT EXCEEDED: You have already used web_search 4 times. ` +
          `This is your MAXIMUM limit. You cannot make any more web_search calls. ` +
          `You must now work with the information you have gathered so far. ` +
          `Immediately proceed to write all your research findings to the artifact file using write_artifact tool. ` +
          `Do not attempt any more web_search calls.`;
      }

      const tavilyApiKey = process.env.TAVILY_API_KEY;
      
      if (!tavilyApiKey) {
        return "Tavily API key not configured. Please set TAVILY_API_KEY environment variable.";
      }
      
      try {
        // Increment counter before making the call
        webSearchCallCounters.set(workerInstance, currentCount + 1);
        const newCount = webSearchCallCounters.get(workerInstance)!;
        
        // Dynamic import to handle optional dependency
        const { TavilySearch } = await import("@langchain/tavily");
        const tavily = new TavilySearch({
          apiKey: tavilyApiKey,
          maxResults: 5,
        });
        const results = await tavily.invoke({ query });
        
        const remainingCalls = 4 - newCount;
        const warning = remainingCalls > 0 
          ? `\n\n⚠️ WARNING: You have ${remainingCalls} web_search call${remainingCalls === 1 ? '' : 's'} remaining out of 4 total.`
          : `\n\n🚨 CRITICAL: This was your 4th and FINAL web_search call. You cannot make any more searches.`;
        
        return JSON.stringify(results, null, 2) + warning;
      } catch (error) {
        // Decrement counter on error (so failed calls don't count)
        webSearchCallCounters.set(workerInstance, currentCount);
        return `Error searching: ${error instanceof Error ? error.message : String(error)}. Make sure @langchain/tavily is installed: bun add @langchain/tavily`;
      }
    },
    {
      name: "web_search",
      description: "Search the web for information about apps, features, pricing, and comparisons. ⚠️ CRITICAL: You can ONLY use this tool 4 times TOTAL. Plan your searches carefully!",
      schema: z.object({
        query: z.string().describe("The search query to find information"),
      }),
    }
  );
}

/**
 * Extract domain from website URL for logo.dev API
 */
function extractDomain(url: string): string | null {
  try {
    const urlObj = new URL(url.startsWith("http") ? url : `https://${url}`);
    return urlObj.hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

/**
 * Helper function to format comparison as TypeScript
 */
function formatComparisonAsTypeScript(comparison: ComparisonData): string {
  const formatApp = (app: ComparisonApp) => {
    const domain = app.domain || extractDomain(app.websiteUrl);
    return `{
    name: "${app.name}",
    slug: "${app.slug}",
    logo: "${app.logo}",
    websiteUrl: "${app.websiteUrl}",
    ${domain ? `domain: "${domain}",` : ""}
    ${app.description ? `description: "${app.description}",` : ""}
  }`;
  };
  
  const formatRow = (row: ComparisonRow) => `{
      feature: "${row.feature}",
      app1Value: "${row.app1Value.replace(/"/g, '\\"')}",
      app2Value: "${row.app2Value.replace(/"/g, '\\"')}",
      ${row.app1Wins !== undefined ? `app1Wins: ${row.app1Wins},` : ""}
      ${row.app2Wins !== undefined ? `app2Wins: ${row.app2Wins},` : ""}
    }`;
  
  // Use contentPath if available, otherwise fallback to researchContent (legacy string)
  const contentPath = comparison.contentPath || (comparison.researchContent ? undefined : undefined);
  
  return `{
  slug: "${comparison.slug}",
  app1: ${formatApp(comparison.app1)},
  app2: ${formatApp(comparison.app2)},
  comparisonRows: [
    ${comparison.comparisonRows.map(formatRow).join(",\n    ")}
  ],
  ${contentPath ? `contentPath: "${contentPath}",` : comparison.researchContent ? `researchContent: ${JSON.stringify(comparison.researchContent)},` : ""}
  seo: {
    title: ${JSON.stringify(comparison.seo.title)},
    description: ${JSON.stringify(comparison.seo.description)},
    keywords: [${comparison.seo.keywords.map(k => JSON.stringify(k)).join(", ")}],
  },
  ${comparison.hashtags && comparison.hashtags.length > 0 ? `hashtags: [${comparison.hashtags.map(h => JSON.stringify(h)).join(", ")}],` : ""}
  ${comparison.author ? `author: ${JSON.stringify(comparison.author)},` : ""}
  ${comparison.readTime ? `readTime: ${comparison.readTime},` : ""}
}`;
}


/**
 * Write artifact tool - writes content to artifact files
 */
export const writeArtifactTool = tool(
  async ({ filePath, content }: { filePath: string; content: string }) => {
    try {
      // Ensure filePath is within artifacts directory for security
      const fullPath = join(artifactsDir, filePath);
      const normalizedPath = join(artifactsDir, join("/", filePath));
      
      if (!normalizedPath.startsWith(artifactsDir)) {
        return `Error: Invalid file path. File must be within artifacts directory.`;
      }

      // Ensure directory exists
      const fileDir = dirname(fullPath);
      if (!existsSync(fileDir)) {
        mkdirSync(fileDir, { recursive: true });
      }

      writeFileSync(fullPath, content, "utf-8");
      return `✅ Successfully wrote artifact to: ${filePath}`;
    } catch (error) {
      return `Error writing artifact: ${error instanceof Error ? error.message : String(error)}`;
    }
  },
  {
    name: "write_artifact",
    description: "Write content to an artifact file. Use this to save research insights, drafts, etc. The file will be stored in the artifacts directory.",
    schema: z.object({
      filePath: z.string().describe("Relative path to the artifact file (e.g., 'research-insights.md', 'draft-comparison.json')"),
      content: z.string().describe("Content to write to the file"),
    }),
  }
);

/**
 * Read artifact tool - reads content from artifact files
 */
export const readArtifactTool = tool(
  async ({ filePath }: { filePath: string }) => {
    try {
      // Ensure filePath is within artifacts directory for security
      const fullPath = join(artifactsDir, filePath);
      const normalizedPath = join(artifactsDir, join("/", filePath));
      
      if (!normalizedPath.startsWith(artifactsDir)) {
        return `Error: Invalid file path. File must be within artifacts directory.`;
      }

      if (!existsSync(fullPath)) {
        return `Error: File not found: ${filePath}\n\nThe file "${filePath}" does not exist in the artifacts directory. This means the file has not been created yet. Please ensure the previous step (that should create this file) has completed successfully before attempting to read it.`;
      }

      const content = readFileSync(fullPath, "utf-8");
      return content;
    } catch (error) {
      return `Error reading artifact: ${error instanceof Error ? error.message : String(error)}`;
    }
  },
  {
    name: "read_artifact",
    description: "Read content from an artifact file. Use this to read research insights, drafts, etc. from the artifacts directory. **IMPORTANT**: If the file doesn't exist, this tool will return an error message. Check for file existence errors before proceeding.",
    schema: z.object({
      filePath: z.string().describe("Relative path to the artifact file (e.g., 'research-insights.md', 'draft-comparison.json')"),
    }),
  }
);

/**
 * Write markdown content file tool - writes comparison content to markdown file
 */
export const writeContentTool = tool(
  async ({ slug, content }: { slug: string; content: string }) => {
    try {
      const contentDir = join(projectRoot, "src/content/comparisons/content");
      
      // Ensure content directory exists
      if (!existsSync(contentDir)) {
        mkdirSync(contentDir, { recursive: true });
      }

      const contentPath = join(contentDir, `${slug}.md`);
      writeFileSync(contentPath, content, "utf-8");
      
      return `✅ Successfully wrote content to: src/content/comparisons/content/${slug}.md`;
    } catch (error) {
      return `Error writing content file: ${error instanceof Error ? error.message : String(error)}`;
    }
  },
  {
    name: "write_content",
    description: "Write comparison content (introduction, sections, conclusion) to a markdown file. The file will be stored in src/content/comparisons/content/{slug}.md",
    schema: z.object({
      slug: z.string().describe("Comparison slug (e.g., 'make-vs-n8n')"),
      content: z.string().describe("Markdown content following the format: # Introduction\n\n...\n\n# Section Title\n\n...\n\n# Conclusion\n\n..."),
    }),
  }
);

/**
 * File system tool for updating metadata
 */
// Export spawn_worker tool
export { spawnWorkerTool } from "./tools/spawn_worker";

export const updateMetadataTool = tool(
  async ({ comparisonData }: { comparisonData: string }) => {
    try {
      const metadataPath = join(projectRoot, "src/content/comparisons/data.ts");
      const fileContent = readFileSync(metadataPath, "utf-8");
      
      // Parse and validate the comparison data
      let comparison: ComparisonData;
      try {
        comparison = JSON.parse(comparisonData);
      } catch (parseError) {
        return `Error: Invalid JSON format. ${parseError instanceof Error ? parseError.message : String(parseError)}`;
      }
      
      // Validate required fields
      if (!comparison.slug || !comparison.app1 || !comparison.app2 || !comparison.comparisonRows || !comparison.seo) {
        return `Error: Missing required fields. Required: slug, app1, app2, comparisonRows, seo`;
      }
      
      if (!comparison.app1.name || !comparison.app1.slug || !comparison.app1.websiteUrl) {
        return `Error: app1 missing required fields: name, slug, websiteUrl`;
      }
      
      if (!comparison.app2.name || !comparison.app2.slug || !comparison.app2.websiteUrl) {
        return `Error: app2 missing required fields: name, slug, websiteUrl`;
      }
      
      if (!comparison.seo.title || !comparison.seo.description || !comparison.seo.keywords) {
        return `Error: SEO missing required fields: title, description, keywords`;
      }
      
      // Check if comparison already exists
      if (fileContent.includes(`slug: "${comparison.slug}"`)) {
        return `Warning: Comparison with slug "${comparison.slug}" already exists. Skipping duplicate.`;
      }
      
      // Find the export const comparisons line and add the new comparison
      const exportMatch = fileContent.match(/export const comparisons: ComparisonData\[\] = \[/);
      if (!exportMatch) {
        return "Error: Could not find comparisons array in metadata file";
      }
      
      const insertIndex = exportMatch.index! + exportMatch[0].length;
      const beforeInsert = fileContent.substring(0, insertIndex);
      const afterInsert = fileContent.substring(insertIndex);
      
      // Format the comparison as TypeScript
      const formattedComparison = formatComparisonAsTypeScript(comparison);
      
      const newContent = beforeInsert + "\n  " + formattedComparison + "," + afterInsert;
      writeFileSync(metadataPath, newContent, "utf-8");
      
      return `✅ Successfully added comparison "${comparison.slug}" to metadata file with ${comparison.comparisonRows.length} comparison rows.`;
    } catch (error) {
      return `Error updating metadata: ${error instanceof Error ? error.message : String(error)}`;
    }
  },
  {
    name: "update_metadata",
    description: "Update the comparisons/data.ts file with new comparison data",
    schema: z.object({
      comparisonData: z.string().describe("JSON string of the ComparisonData object"),
    }),
  }
);

