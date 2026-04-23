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

import { readdirSync, lstatSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import type { FrameworkName, ScanResult } from './spec.js';

const IGNORE_DIRS = new Set([
  'node_modules',
  '.git',
  '.next',
  '.nuxt',
  '.output',
  '.svelte-kit',
  '.turbo',
  'build',
  'bundles',
  'charting_library',
  'coverage',
  'dist',
  'public',
  'static',
  'third-party',
  'third_party',
  'vendor',
  'vendors',
]);

/**
 * Heuristic: skip files that look like bundler output, vendored copies,
 * or locale/RTL duplicates. These are not part of the project's own
 * design system even when they live under src/.
 */
function isLikelyVendored(absPath: string, basename: string): boolean {
  if (basename.endsWith('.min.css') || basename.endsWith('.rtl.css')) return true;
  // Hashed bundler output: "1996.25e6f30e7a095ec239f4.css"
  if (/\.[0-9a-f]{12,}\.(?:css|scss)$/.test(basename)) return true;
  // Generic path markers — even if a directory name slipped past IGNORE_DIRS
  // (e.g. because the user renamed it), these substrings are strong signals.
  if (/\/(?:charting_library|bundles|vendor|third[-_]party)\//.test(absPath)) return true;
  return false;
}

const MAX_DEPTH = 5;

const TAILWIND_BASENAMES = new Set([
  'tailwind.config.js',
  'tailwind.config.ts',
  'tailwind.config.cjs',
  'tailwind.config.mjs',
]);

const CSS_EXTENSIONS = new Set(['.css', '.scss', '.pcss', '.postcss']);

function looksLikeDtcg(name: string): boolean {
  return (
    name === 'tokens.json' ||
    name === 'design-tokens.json' ||
    name === 'design_tokens.json' ||
    name.endsWith('.tokens.json')
  );
}

/**
 * Walk with `lstatSync` (not `statSync`) so symlinks are visible as
 * symlinks and can be rejected. An attacker-controlled repo may plant
 * `src/ -> /` or `tokens.json -> ~/.ssh/id_rsa` — following either would
 * either read arbitrary files into DESIGN.md or silently escape the
 * project root. Symlinks are always skipped here, with no opt-in flag.
 */
function walk(root: string, maxDepth: number, visit: (absPath: string) => void): void {
  const stack: Array<{ dir: string; depth: number }> = [{ dir: root, depth: 0 }];
  while (stack.length > 0) {
    const { dir, depth } = stack.pop()!;
    let entries: string[];
    try {
      entries = readdirSync(dir);
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (IGNORE_DIRS.has(entry)) continue;
      const abs = join(dir, entry);
      let st;
      try {
        st = lstatSync(abs);
      } catch {
        continue;
      }
      if (st.isSymbolicLink()) continue;
      if (st.isDirectory()) {
        if (depth < maxDepth) stack.push({ dir: abs, depth: depth + 1 });
      } else if (st.isFile()) {
        visit(abs);
      }
    }
  }
}

export function scanSources(projectPath: string, _framework: FrameworkName): ScanResult {
  const tailwindConfigs: string[] = [];
  const cssFiles: string[] = [];
  const dtcgFiles: string[] = [];

  walk(projectPath, MAX_DEPTH, (abs) => {
    const base = basename(abs);
    if (TAILWIND_BASENAMES.has(base)) {
      tailwindConfigs.push(abs);
      return;
    }
    if (CSS_EXTENSIONS.has(extname(base))) {
      if (isLikelyVendored(abs, base)) return;
      cssFiles.push(abs);
      return;
    }
    if (extname(base) === '.json' && looksLikeDtcg(base)) {
      dtcgFiles.push(abs);
    }
  });

  return { tailwindConfigs, cssFiles, dtcgFiles };
}
