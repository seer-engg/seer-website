/**
 * Comparison Parser Utilities
 * 
 * Helper functions for parsing and working with comparison data
 */

import type { ComparisonData, ComparisonApp } from "@/content/comparisons-metadata";

/**
 * Generate a URL-friendly slug from app names
 */
export function generateComparisonSlug(app1Name: string, app2Name: string): string {
  const slug1 = app1Name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const slug2 = app2Name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `${slug1}-vs-${slug2}`;
}

/**
 * Generate SEO title from comparison data
 */
export function generateSEOTitle(app1Name: string, app2Name: string, year?: number): string {
  const yearTag = year ? ` [${year}]` : "";
  return `${app1Name} vs ${app2Name}: Which is best?${yearTag}`;
}

/**
 * Generate meta description from comparison data
 */
export function generateMetaDescription(
  app1Name: string,
  app2Name: string,
  description?: string
): string {
  if (description) {
    return description;
  }
  return `Compare ${app1Name} and ${app2Name} side-by-side. Find pricing, features, integrations, and more to choose the right tool for your needs.`;
}

/**
 * Estimate reading time based on content length
 */
export function estimateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Validate comparison data structure
 */
export function validateComparisonData(data: Partial<ComparisonData>): boolean {
  if (!data.slug || !data.app1 || !data.app2) {
    return false;
  }
  if (!data.app1.name || !data.app1.slug || !data.app1.websiteUrl) {
    return false;
  }
  if (!data.app2.name || !data.app2.slug || !data.app2.websiteUrl) {
    return false;
  }
  if (!data.seo || !data.seo.title || !data.seo.description) {
    return false;
  }
  return true;
}

/**
 * Format app name for display
 */
export function formatAppName(name: string): string {
  return name.trim();
}

/**
 * Get app display name with optional abbreviation
 */
export function getAppDisplayName(app: ComparisonApp): string {
  return app.name;
}

