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

import type { TailwindV4ThemeData } from './spec.js';

// Category → CSS-variable prefix. Iteration order of this array is the output order.
const CATEGORIES: ReadonlyArray<readonly [keyof TailwindV4ThemeData, string]> = [
  ['colors', '--color-'],
  ['fontFamily', '--font-'],
  ['fontSize', '--text-'],
  ['lineHeight', '--leading-'],
  ['letterSpacing', '--tracking-'],
  ['fontWeight', '--font-weight-'],
  ['borderRadius', '--radius-'],
  ['spacing', '--spacing-'],
];

/**
 * Serialize a Tailwind v4 theme data object to a CSS `@theme { ... }` block string.
 * Pure function — no I/O. Values are emitted verbatim (font-family quoting must
 * be done by the handler before calling this).
 */
export function serializeToCss(data: TailwindV4ThemeData): string {
  const lines: string[] = [];
  for (const [category, prefix] of CATEGORIES) {
    const entries = data[category];
    if (!entries) continue;
    for (const [name, value] of Object.entries(entries)) {
      lines.push(`  ${prefix}${name}: ${value};`);
    }
  }
  if (lines.length === 0) return '@theme {\n}\n';
  return `@theme {\n${lines.join('\n')}\n}\n`;
}
