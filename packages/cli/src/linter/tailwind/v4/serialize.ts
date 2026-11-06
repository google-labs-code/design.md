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
import { getTailwindV4ModeRegistry } from '../../model/spec.js';
import type { TailwindV4ModeCategory, TailwindV4ModeRegistry } from '../../model/spec.js';

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
  const lines = collectThemeLines(data);
  const themeCss = lines.length === 0 ? '@theme {\n}\n' : `@theme {\n${lines.join('\n')}\n}\n`;
  const modeCss = serializeModeOverrides(data, getTailwindV4ModeRegistry());
  return modeCss ? `${themeCss}\n${modeCss}` : themeCss;
}

function collectThemeLines(data: TailwindV4ThemeData): string[] {
  const lines: string[] = [];
  for (const [category, prefix] of CATEGORIES) {
    const entries = data[category];
    if (!entries) continue;
    for (const [name, value] of Object.entries(entries)) {
      lines.push(`  ${prefix}${name}: ${value};`);
    }
  }
  return lines;
}

function serializeModeOverrides(data: TailwindV4ThemeData, registry: TailwindV4ModeRegistry): string {
  const defaultLines = collectRegisteredModeLines(data, registry);
  if (defaultLines.length === 0) return '';

  const blocks = [`:root {\n${defaultLines.join('\n')}\n}\n`];
  for (const mode of collectRegisteredModes(data, registry)) {
    const modeLines = collectRegisteredModeLines(data, registry, mode);
    if (modeLines.length === 0) continue;

    if (mode === 'dark') {
      blocks.push(`@media (prefers-color-scheme: dark) {\n  :root:not([data-theme]) {\n${modeLines.map(line => `  ${line}`).join('\n')}\n  }\n}\n`);
    }

    blocks.push(`[data-theme="${escapeAttributeValue(mode)}"] {\n${modeLines.join('\n')}\n}\n`);
  }

  return blocks.join('\n');
}

function collectRegisteredModes(data: TailwindV4ThemeData, registry: TailwindV4ModeRegistry): string[] {
  const modes = new Set<string>();
  for (const [category] of CATEGORIES) {
    const entries = data[category];
    const tokens = registry.tokens[category as TailwindV4ModeCategory];
    if (!entries || !tokens) continue;

    for (const [name, value] of Object.entries(entries)) {
      const token = tokens[name];
      if (!token || token.defaultValue !== value) continue;
      for (const mode of Object.keys(token.modes)) {
        modes.add(mode);
      }
    }
  }
  return [...modes];
}

function collectRegisteredModeLines(data: TailwindV4ThemeData, registry: TailwindV4ModeRegistry, mode?: string): string[] {
  const lines: string[] = [];
  for (const [category, prefix] of CATEGORIES) {
    const entries = data[category];
    const tokens = registry.tokens[category as TailwindV4ModeCategory];
    if (!entries || !tokens) continue;

    for (const [name, value] of Object.entries(entries)) {
      const token = tokens[name];
      if (!token || token.defaultValue !== value) continue;
      const modeValue = mode ? token.modes[mode] : token.defaultValue;
      if (modeValue) {
        lines.push(`  ${prefix}${name}: ${modeValue};`);
      }
    }
  }
  return lines;
}

function escapeAttributeValue(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
