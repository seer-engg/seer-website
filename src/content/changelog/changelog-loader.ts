/**
 * Changelog Content Loader
 * Loads CHANGELOG.md as raw markdown string
 */

const changelogModule = import.meta.glob<string>('./CHANGELOG.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

/**
 * Get changelog content
 *
 * @returns Raw markdown string or undefined if not found
 */
export function getChangelogContent(): string | undefined {
  const path = Object.keys(changelogModule)[0];
  return path ? changelogModule[path] : undefined;
}
