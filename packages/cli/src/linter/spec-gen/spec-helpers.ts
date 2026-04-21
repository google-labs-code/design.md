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

export function getSpecContent(): string {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  
  // Candidate paths based on different execution contexts
  const candidates = [
    resolve(currentDir, '../spec.md'), // Original assumption
    resolve(currentDir, './linter/spec.md'), // Running from dist/index.js
    resolve(currentDir, './spec.md'), // Running from dist/linter/index.js
    resolve(currentDir, '../../../../../docs/spec.md'), // Dev path from src/linter/spec-gen/
    resolve(currentDir, '../../../docs/spec.md'), // Dev path from dist/
  ];

  for (const p of candidates) {
    try {
      return readFileSync(p, 'utf-8');
    } catch {
      // try next
    }
  }

  throw new Error(`Failed to load spec.md. Tried: ${candidates.join(', ')}`);
}

export function getRulesTable(rules: RuleDescriptor[]): string {
  let table = '| Rule | Severity | What it checks |\n';
  table += '|------|----------|----------------|\n';
  
  for (const rule of rules) {
    table += `| ${rule.name} | ${rule.severity} | ${rule.description} |\n`;
  }
  
  return table;
}
