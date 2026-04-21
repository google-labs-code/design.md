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
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { RuleDescriptor } from '../linter/rules/types.js';

/**
 * Load the DESIGN.md format specification document.
 *
 * @param specPath - Explicit absolute path to spec.md. When provided, this
 *   path is used directly with no fallback. Useful for tests and codegen
 *   scripts that know exactly where the file lives.
 *
 * When no path is given, resolution uses two deterministic strategies:
 *   1. Bundle path:  <currentDir>/spec.md — the build copies docs/spec.md here.
 *   2. Dev path:     <repo>/docs/spec.md — relative from src/linter/spec-gen/.
 *
 * This replaces the previous 5-candidate shotgun approach with clear,
 * auditable paths that work across OSes and execution contexts.
 */
export function getSpecContent(specPath?: string): string {
  // Explicit path: use it or fail. No guessing.
  if (specPath) {
    return readFileSync(specPath, 'utf-8');
  }

  const currentDir = dirname(fileURLToPath(import.meta.url));

  // Strategy 1: Bundled spec.md alongside the executing module.
  // After `bun run build`, spec.md is copied to dist/ and dist/linter/.
  const bundledPath = resolve(currentDir, 'spec.md');
  try {
    return readFileSync(bundledPath, 'utf-8');
  } catch {
    // Not a bundle context — fall through to dev path.
  }

  // Strategy 2: Development — spec.md lives at <repo>/docs/spec.md.
  // From src/linter/spec-gen/ that's ../../../docs/spec.md (3 levels up to packages/cli/).
  // Then 2 more to the repo root, then into docs/.
  const devPath = resolve(currentDir, '../../../../../docs/spec.md');
  try {
    return readFileSync(devPath, 'utf-8');
  } catch {
    throw new Error(
      `Failed to load spec.md.\n` +
      `  Bundled path: ${bundledPath}\n` +
      `  Dev path:     ${devPath}\n` +
      `If running from a built bundle, ensure the build script copies docs/spec.md into dist/.`
    );
  }
}

export function getRulesTable(rules: RuleDescriptor[]): string {
  let table = '| Rule | Severity | What it checks |\n';
  table += '|------|----------|----------------|\n';
  
  for (const rule of rules) {
    table += `| ${rule.name} | ${rule.severity} | ${rule.description} |\n`;
  }
  
  return table;
}
