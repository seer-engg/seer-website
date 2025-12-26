/**
 * Content Loader for Blog Markdown Files
 * 
 * Loads markdown files and returns them as raw strings.
 * Markdown files can contain any valid markdown content.
 */

/**
 * Pre-load all markdown content files using Vite's import.meta.glob
 * This allows Vite to statically analyze and bundle all markdown files
 */
const contentModules = import.meta.glob<string>('./content/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true,
});

const contentCache = new Map<string, string>();

// Load all markdown files
Object.keys(contentModules).forEach((path) => {
  const slug = path.match(/\/content\/(.+)\.md$/)?.[1];
  if (slug) {
    const markdownText = contentModules[path] as string;
    contentCache.set(slug, markdownText);
  }
});

/**
 * Get content for a blog slug
 * 
 * @param slug - Blog slug (e.g., "lessons-dec-2025")
 * @returns Raw markdown string or undefined if not found
 */
export function getBlogContent(slug: string): string | undefined {
  return contentCache.get(slug);
}

