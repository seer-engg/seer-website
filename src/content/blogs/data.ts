/**
 * Blogs Metadata
 * 
 * This file contains blog metadata (title, description, author, date, SEO, etc.).
 * Content is stored separately in markdown files in blogs/content/
 * Add new blogs to the blogs array below.
 */

import type { BlogData } from "../blogs-metadata";

export const blogs: BlogData[] = [
  {
    slug: "lessons-dec-2025",
    title: "Understated Lessons from Building Seer",
    description: "Insights from building production-grade AI agents: alignment strategies, eval-driven development, delegation patterns, and why the 'plumbing' matters more than the AI.",
    author: "Akshay",
    publishDate: "2025-12-26",
    readTime: 6,
    contentPath: "lessons-dec-2025",
    seo: {
      title: "Understated Lessons from Building Seer | Seer",
      description: "Insights from building production-grade AI agents: alignment strategies, eval-driven development, delegation patterns, and why the 'plumbing' matters more than the AI.",
      keywords: ["AI agents", "workflow automation", "agent development", "AI workflows", "enterprise AI", "agent architecture"],
    },
  },
];

