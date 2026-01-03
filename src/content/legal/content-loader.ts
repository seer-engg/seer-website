/**
 * Content Loader for Legal Document Markdown Files
 *
 * Loads markdown files for privacy policy and terms of service.
 */

/**
 * Pre-load all markdown content files using Vite's import.meta.glob
 * This allows Vite to statically analyze and bundle all markdown files
 */
const contentModules = import.meta.glob<string>('./*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const contentCache = new Map<string, string>();

// Load all markdown files
Object.keys(contentModules).forEach((path) => {
  const slug = path.match(/\/(.+)\.md$/)?.[1];
  if (slug) {
    const markdownText = contentModules[path] as string;
    contentCache.set(slug, markdownText);
  }
});

/**
 * Get content for a legal document
 *
 * @param slug - Document slug (e.g., "privacy-policy" or "terms-of-service")
 * @returns Raw markdown string or undefined if not found
 */
export function getLegalContent(slug: string): string | undefined {
  return contentCache.get(slug);
}
