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
    slug: "true-cost-of-ai-automation",
    title: "The True Cost of AI Workflow Automation: Zapier, Make, Lindy, and Seer — With Real Math",
    description: "I ran the same workflow on four platforms. The most expensive bill: $212. The cheapest: $39. A brutally honest breakdown of per-task, per-operation, per-credit, and per-run billing models with side-by-side cost tables.",
    author: "Akshay",
    publishDate: "2026-02-27",
    readTime: 14,
    contentPath: "true-cost-of-ai-automation",
    seo: {
      title: "True Cost of AI Workflow Automation: Zapier vs Make vs Lindy vs Seer | Seer",
      description: "Side-by-side cost breakdown of Zapier (per-task), Make (per-operation), Lindy (per-credit), and Seer (per-run + MaxCap). Real math on 3 common AI workflows. Verify pricing before you commit.",
      keywords: [
        "true cost ai automation",
        "zapier pricing per task",
        "lindy credit burn",
        "make operations cost",
        "ai workflow cost calculator",
        "predictable automation pricing",
        "zapier vs make pricing",
        "lindy credits explained",
        "automation platform comparison",
        "MaxCap spending limit",
      ],
    },
  },
  {
    slug: "automate-client-onboarding-freelancer",
    title: "How I Automated My Client Onboarding in a Weekend (And Cut It From 3 Hours to 12 Minutes)",
    description: "Every new client was costing me 3 hours of admin work. Here's the exact workflow I built — contract signed to kickoff ready — with step-by-step instructions, cost breakdown, and what still needs a human.",
    author: "Akshay",
    publishDate: "2026-02-27",
    readTime: 9,
    contentPath: "automate-client-onboarding-freelancer",
    seo: {
      title: "Automate Client Onboarding as a Freelancer: 3 Hours to 12 Minutes | Seer",
      description: "Step-by-step guide to automating freelancer client onboarding: welcome email, contract, intake form, kickoff prep. Built with Seer's human-in-the-loop workflow. Costs $39/month to run.",
      keywords: [
        "automate client onboarding freelancer",
        "client onboarding workflow automation",
        "solopreneur automation",
        "freelance automation tools",
        "automate contract and payment",
        "human in the loop automation",
        "workflow automation for consultants",
        "automate welcome email",
        "HoneyBook Notion automation",
        "Seer workflow tutorial",
      ],
    },
  },
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

