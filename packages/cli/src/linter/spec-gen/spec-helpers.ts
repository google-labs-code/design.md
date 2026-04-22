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
import type { LintProfile } from '../model/spec.js';

/**
 * Load the DESIGN.md format specification document.
 *
 * @param specPath - Explicit absolute path to spec.md. When provided, this
 *   path is used directly with no fallback. Useful for tests and codegen
 *   scripts that know exactly where the file lives.
 *
 * When no path is given, resolution uses two deterministic strategies:
 *   1. Bundle path:  <currentDir>/<fileName> — the build copies profile docs here.
 *   2. Dev path:     <repo>/docs/<fileName> — relative from src/linter/spec-gen/.
 *
 * This replaces the previous 5-candidate shotgun approach with clear,
 * auditable paths that work across OSes and execution contexts.
 */
export function getSpecContent(specPath?: string): string {
  // Explicit path: use it or fail. No guessing.
  if (specPath) {
    return readFileSync(specPath, 'utf-8');
  }

  return getProfileSpecContent('upstream');
}

export function getProfileSpecContent(profile: LintProfile = 'upstream'): string {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const fileName = profile === 'hermes' ? 'spec.hermes.md' : 'spec.md';

  // Strategy 1: Bundled spec docs alongside the executing module.
  const bundledPath = resolve(currentDir, fileName);
  try {
    return readFileSync(bundledPath, 'utf-8');
  } catch {
    // Not a bundle context — fall through to dev path.
  }

  // Strategy 2: Development — docs live at <repo>/docs/.
  const devPath = resolve(currentDir, `../../../../../docs/${fileName}`);
  try {
    return readFileSync(devPath, 'utf-8');
  } catch {
    throw new Error(
      `Failed to load ${fileName}.\n` +
      `  Bundled path: ${bundledPath}\n` +
      `  Dev path:     ${devPath}\n` +
      `If running from a built bundle, ensure the build script copies docs/${fileName} into the package dist directories.`
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
