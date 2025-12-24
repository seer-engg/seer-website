/**
 * App Comparison Metadata
 * 
 * This file contains type definitions and utility functions for app comparisons.
 * Comparison metadata is stored separately in comparisons/data.ts
 * Content is stored in markdown files in comparisons/content/
 */

import { comparisons } from "./comparisons/data";
import { getComparisonContent } from "./comparisons/content-loader";

export interface ComparisonApp {
  name: string;
  slug: string;
  logo: string; // path to image (kept for backward compatibility)
  websiteUrl: string;
  domain?: string; // extracted domain from websiteUrl for logo.dev API
  description?: string;
}

export interface ComparisonRow {
  feature: string;
  app1Value: string;
  app2Value: string;
  app1Wins?: boolean;
  app2Wins?: boolean;
}

/** Raw markdown content string */
export type ComparisonContent = string;

export interface ComparisonData {
  slug: string; // e.g., "zapier-vs-lindy"
  app1: ComparisonApp;
  app2: ComparisonApp;
  comparisonRows: ComparisonRow[];
  /** Path to markdown content file relative to src/content/comparisons/content/ */
  contentPath?: string;
  /** Raw markdown content string */
  researchContent?: ComparisonContent;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hashtags?: string[]; // Up to 3 bespoke hashtags for each comparison
  // For index page display
  author?: string;
  readTime?: number; // in minutes
}

/**
 * Get a comparison by slug
 * This function merges metadata with content from markdown files
 */
export function getComparisonBySlug(slug: string): ComparisonData | undefined {
  const comparison = comparisons.find(comp => comp.slug === slug);
  if (!comparison) {
    return undefined;
  }

  // If contentPath is set, load content from markdown file
  if (comparison.contentPath) {
    const content = getComparisonContent(comparison.contentPath);
    if (content) {
      return {
        ...comparison,
        researchContent: content,
      };
    }
  }

  // Fallback to legacy researchContent if present
  return comparison;
}

/**
 * Get all comparison slugs
 */
export function getAllComparisonSlugs(): string[] {
  return comparisons.map(comp => comp.slug);
}

/**
 * Extract domain from website URL for logo.dev API
 */
export function extractDomain(url: string): string | null {
  try {
    const urlObj = new URL(url.startsWith("http") ? url : `https://${url}`);
    return urlObj.hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

/**
 * Get domain from ComparisonApp, extracting from websiteUrl if not set
 */
export function getAppDomain(app: ComparisonApp): string | null {
  if (app.domain) {
    return app.domain;
  }
  return extractDomain(app.websiteUrl);
}

