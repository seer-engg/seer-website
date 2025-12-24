import { Annotation, MessagesAnnotation } from "@langchain/langgraph";
import type { ComparisonData } from "../../src/content/comparisons-metadata";

/**
 * State annotation for the comparison generation supervisor agent.
 * Uses explicit state management to prevent thread bloating and ensure
 * comparison JSON is never lost.
 */
export const ComparisonStateAnnotation = Annotation.Root({
  ...MessagesAnnotation.spec,
  
  /**
   * Explicit state for comparison JSON - always available, never lost
   */
  comparisonData: Annotation<ComparisonData | null>({
    reducer: (x, y) => y ?? x,
    default: () => null,
  }),

  /**
   * Research findings from researcher workers
   */
  researchFindings: Annotation<string | null>({
    reducer: (x, y) => y ?? x,
    default: () => null,
  }),

  /**
   * Workflow todos (e.g., ["research", "draft", "save"])
   */
  todos: Annotation<string[]>({
    reducer: (x, y) => y.length > 0 ? y : x,
    default: () => [],
  }),

  /**
   * File paths for artifact files
   */
  researchFile: Annotation<string | null>({
    reducer: (x, y) => y ?? x,
    default: () => null,
  }),
});

/**
 * TypeScript type for the comparison state
 */
export type ComparisonState = typeof ComparisonStateAnnotation.State;
