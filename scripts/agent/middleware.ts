import type { CompiledGraph } from "@langchain/langgraph";
import { GraphRecursionError } from "@langchain/langgraph";
import type { AIMessage } from "@langchain/core/messages";

/**
 * Configuration for tool call limit middleware
 */
export interface ToolCallLimitConfig {
  maxToolCalls?: number;
}

const DEFAULT_MAX_TOOL_CALLS = 5;

/**
 * Counts tool calls in a message array
 */
function countToolCalls(messages: any[]): number {
  let count = 0;
  for (const message of messages) {
    if (message && typeof message === "object") {
      // Check if it's an AIMessage with tool_calls
      if (message.tool_calls && Array.isArray(message.tool_calls)) {
        count += message.tool_calls.length;
      }
      // Also check for tool_call_id which indicates a tool was called
      // (though this is less reliable as it's on ToolMessage)
    }
  }
  return count;
}

/**
 * Wraps an agent graph with tool call limit middleware
 * 
 * @param agent The compiled agent graph
 * @param maxToolCalls Maximum number of tool calls allowed (default: 5)
 * @returns Wrapped agent with tool call limiting
 */
export function withToolCallLimit<T extends CompiledGraph<any, any>>(
  agent: T,
  maxToolCalls: number = DEFAULT_MAX_TOOL_CALLS
): T {
  // Use Proxy to preserve all methods while intercepting invoke and stream
  return new Proxy(agent, {
    get(target, prop) {
      // Intercept invoke and stream to add tool call limiting
      if (prop === 'invoke') {
        return async (input: any, config?: any) => {
      // Execute the agent
      const result = await agent.invoke(input, config);
      
      // Count unique tool calls in the result messages
      if (result && result.messages && Array.isArray(result.messages)) {
        const seenToolCallIds = new Set<string>();
        let toolCallCount = 0;
        
        for (const message of result.messages) {
          if (message && message.tool_calls && Array.isArray(message.tool_calls)) {
            for (const toolCall of message.tool_calls) {
              // Use tool call ID if available, otherwise create a unique identifier
              const toolCallId = toolCall.id || `${toolCall.name}-${JSON.stringify(toolCall.args)}`;
              if (!seenToolCallIds.has(toolCallId)) {
                seenToolCallIds.add(toolCallId);
                toolCallCount++;
              }
            }
          }
        }
        
        if (toolCallCount > maxToolCalls) {
          throw new GraphRecursionError(
            `Maximum tool call limit exceeded: ${toolCallCount} tool calls made, limit is ${maxToolCalls}. ` +
            `This prevents excessive API usage when tools fail repeatedly.`
          );
        }
      }
      
          return result;
        };
      }
      
      if (prop === 'stream') {
        return async (input: any, config?: any) => {
          let toolCallCount = 0;
          const toolCallLimit = maxToolCalls;
          const seenToolCallIds = new Set<string>();
          
          // Create an async generator that tracks tool calls
          const originalStream = target.stream(input, config);
          
          async function* trackedStream() {
            for await (const chunk of originalStream) {
              // Count tool calls in each chunk
              if (chunk && typeof chunk === "object") {
                // Handle different stream modes
                if (chunk.messages && Array.isArray(chunk.messages)) {
                  // Count only new tool calls (by tracking tool call IDs)
                  for (const message of chunk.messages) {
                    if (message && message.tool_calls && Array.isArray(message.tool_calls)) {
                      for (const toolCall of message.tool_calls) {
                        const toolCallId = toolCall.id || `${toolCall.name}-${JSON.stringify(toolCall.args)}`;
                        if (!seenToolCallIds.has(toolCallId)) {
                          seenToolCallIds.add(toolCallId);
                          toolCallCount++;
                          
                          if (toolCallCount > toolCallLimit) {
                            throw new GraphRecursionError(
                              `Maximum tool call limit exceeded: ${toolCallCount} tool calls made, limit is ${toolCallLimit}. ` +
                              `This prevents excessive API usage when tools fail repeatedly.`
                            );
                          }
                        }
                      }
                    }
                  }
                }
              }
              
              yield chunk;
            }
          }
          
          return trackedStream();
        };
      }
      
      // Forward all other properties/methods to the original agent
      const value = (target as any)[prop];
      if (typeof value === 'function') {
        return value.bind(target);
      }
      return value;
    },
  }) as T;
}

