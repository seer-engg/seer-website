/**
 * Blog Metadata
 * 
 * This file contains type definitions and utility functions for blog posts.
 * Blog metadata is stored separately in blogs/data.ts
 * Content is stored in markdown files in blogs/content/
 */

import { blogs } from "./blogs/data";
import { getBlogContent } from "./blogs/content-loader";

/** Raw markdown content string */
export type BlogContent = string;

export interface BlogData {
  slug: string; // e.g., "introducing-seer"
  title: string;
  description: string;
  author: string;
  publishDate: string; // ISO date string
  readTime?: number; // in minutes
  /** Path to markdown content file relative to src/content/blogs/content/ */
  contentPath?: string;
  /** Raw markdown content string */
  content?: BlogContent;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

/**
 * Get a blog by slug
 * This function merges metadata with content from markdown files
 */
export function getBlogBySlug(slug: string): BlogData | undefined {
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) {
    return undefined;
  }

  // If contentPath is set, load content from markdown file
  if (blog.contentPath) {
    const content = getBlogContent(blog.contentPath);
    if (content) {
      return {
        ...blog,
        content: content,
      };
    }
  }

  // Fallback to legacy content if present
  return blog;
}

/**
 * Get all blog slugs
 */
export function getAllBlogSlugs(): string[] {
  return blogs.map(blog => blog.slug);
}

