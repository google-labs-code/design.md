// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { readFileSync } from 'node:fs';

/**
 * Read input from a file path or stdin ("-").
 * Never throws — returns the content string or exits with error JSON.
 */
export async function readInput(filePath: string): Promise<string> {
  if (filePath === '-') {
    // Read from stdin
    const chunks: Buffer[] = [];
    for await (const chunk of process.stdin) {
      chunks.push(chunk as Buffer);
    }
    return Buffer.concat(chunks).toString('utf-8');
  }

  try {
    return readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error(JSON.stringify({
      error: 'FILE_READ_ERROR',
      message: error instanceof Error ? error.message : String(error),
      path: filePath,
    }));
    process.exitCode = 2;
    throw error; // bubbles up, but process will exit with code 2 if uncaught
  }
}

/**
 * Format output as JSON or human-readable text.
 */
export function formatOutput(data: unknown, args: { format?: string }): string {
  if (args.format === 'markdown' || args.format === 'md') {
    return formatAsMarkdown(data);
  }
  return JSON.stringify(data, null, 2);
}

function formatAsMarkdown(data: unknown): string {
  if (typeof data === 'object' && data !== null) {
    const obj = data as Record<string, unknown>;
    let result = '';
    if (obj.summary) {
      result += `# ${obj.summary}\n\n`;
    }
    if (obj.details) {
      result += `## Details\n\n`;
      result += formatAsText(obj.details);
      result += '\n';
    }
    if (obj.patches && Array.isArray(obj.patches) && obj.patches.length > 0) {
      result += `## Patches\n\n`;
      result += formatAsText(obj.patches);
      result += '\n';
    }
    return result || formatAsText(data);
  }
  return String(data);
}

function formatAsText(data: unknown, indent = 0): string {
  if (data === null || data === undefined) return 'null';
  if (typeof data === 'string') return data;
  if (typeof data === 'number' || typeof data === 'boolean') return String(data);
  if (Array.isArray(data)) {
    return data.map(item => `${'  '.repeat(indent)}- ${formatAsText(item, indent + 1)}`).join('\n');
  }
  if (typeof data === 'object') {
    return Object.entries(data as Record<string, unknown>)
      .map(([key, val]) => {
        const valStr = typeof val === 'object' && val !== null
          ? '\n' + formatAsText(val, indent + 1)
          : ' ' + formatAsText(val, indent + 1);
        return `${'  '.repeat(indent)}${key}:${valStr}`;
      })
      .join('\n');
  }
  return String(data);
}

/**
 * Serialize a Map-based DesignSystemState to plain objects for JSON output.
 */
export function serializeDesignSystem(state: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(state)) {
    if (value instanceof Map) {
      result[key] = Object.fromEntries(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

/**
 * Diff two Maps — returns added, removed, and modified keys.
 */
export function diffMaps<V>(
  before: Map<string, V>,
  after: Map<string, V>,
): { added: string[]; removed: string[]; modified: string[] } {
  const added: string[] = [];
  const removed: string[] = [];
  const modified: string[] = [];

  for (const key of after.keys()) {
    if (!before.has(key)) {
      added.push(key);
    } else if (JSON.stringify(before.get(key)) !== JSON.stringify(after.get(key))) {
      modified.push(key);
    }
  }

  for (const key of before.keys()) {
    if (!after.has(key)) {
      removed.push(key);
    }
  }

  return { added, removed, modified };
}
