#!/usr/bin/env node
/**
 * Fetch CHANGELOG.md from seer-engg/seer repository
 * This runs before build to ensure the changelog is always up-to-date
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CHANGELOG_URL = 'https://raw.githubusercontent.com/seer-engg/seer/main/CHANGELOG.md';
const OUTPUT_PATH = resolve(__dirname, '../src/content/changelog/CHANGELOG.md');

async function fetchChangelog() {
  try {
    console.log('Fetching changelog from seer-engg/seer...');

    const response = await fetch(CHANGELOG_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch changelog: ${response.status} ${response.statusText}`);
    }

    const content = await response.text();

    writeFileSync(OUTPUT_PATH, content, 'utf-8');

    console.log('✓ Changelog updated successfully');
  } catch (error) {
    console.error('Failed to fetch changelog:', error);
    console.error('Continuing with existing changelog if available...');
    process.exit(0); // Don't fail the build
  }
}

fetchChangelog();
