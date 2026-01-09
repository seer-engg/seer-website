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
    slug: "pre-commit-linting-vibe-coding",
    title: "Pre-Commit Lint Checks: Vibe Coding's Kryptonite",
    description: "How AI-assisted coding without discipline creates 523 lint violations. A case study in pre-commit linting, zero-trust AI guardrails, and why Ruff can't replace Pylint.",
    author: "Akshay",
    publishDate: "2026-01-09",
    readTime: 12,
    contentPath: "pre-commit-linting-vibe-coding",
    seo: {
      title: "Pre-Commit Lint Checks: Vibe Coding's Kryptonite | Seer",
      description: "How AI-assisted coding without discipline creates technical debt. A 523-issue case study in pre-commit linting, zero-trust AI guardrails, and Ruff vs Pylint tradeoffs.",
      keywords: [
        "pre-commit linting",
        "AI coding assistants",
        "code quality automation",
        "pylint vs ruff",
        "technical debt",
        "static analysis tools",
        "LLM code generation",
        "developer workflow",
        "code smells",
        "Python linting"
      ],
    },
  },
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

