# Comparison Generation Agent

This directory contains a LangGraph agent for generating app comparison content.

## Structure

- `tools.ts` - Tool definitions (web_search, update_metadata, logo tools)
- `graph.ts` - LangGraph agent definition and compilation
- `middleware.ts` - Tool call limit middleware

## Usage

### Using Agent Chat (agentchat.vercel.app)

The agent is designed to be used through [agentchat.vercel.app](https://agentchat.vercel.app).

1. Deploy or connect your agent to agentchat.vercel.app
2. Use the web interface to interact with the agent
3. Provide a prompt like: "Create a comprehensive comparison between Zapier and Lindy"

The graph is configured in `langgraph.json` at the project root.

## Environment Variables

- `OPENAI_API_KEY` (required) - OpenAI API key for the LLM
- `TAVILY_API_KEY` (optional) - Tavily API key for web search
- `LOGO_DEV_TOKEN` (optional) - Logo.dev API token for logo fetching

## How It Works

1. The agent receives a prompt with two app names
2. It uses `web_search` tool to research both applications
3. It gathers information about features, pricing, branding, etc.
4. It builds a complete `ComparisonData` JSON object
5. It calls `update_metadata` tool to write the final comparison to `src/content/comparisons-metadata.ts`

## Tools

- `web_search` - Search the web for app information
- `check_logo_exists` - Check if a logo file already exists
- `fetch_logo` - Fetch logo from Logo.dev API or web search
- `save_logo` - Save downloaded logo to filesystem
- `update_metadata` - Write comparison data to `src/content/comparisons-metadata.ts`

## Build-Time Tool

**Important**: This agent is a build-time tool. It generates static TypeScript files that are imported by the website. The agent code and all LangChain/LangGraph dependencies are excluded from the production build (see `vite.config.ts`).

The generated `comparisons-metadata.ts` file is the only artifact needed for the website to function.

