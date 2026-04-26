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

/**
 * Shared helpers used by content-targeting linter rules
 * (banned-term-in-prose, approved-term-violation, reserved-name-form).
 *
 * Centralized so the rules apply identical suppression / code-block /
 * prose-iteration logic.
 */

import type { ComponentDef, DesignSystemState, ResolvedValue } from '../../model/spec.js';
import type { LineRange, SuppressionDirective } from '../../parser/spec.js';

/** Whether `line` (1-based, document-wide) falls in any code-block range. */
export function isInCodeBlock(line: number, ranges: LineRange[]): boolean {
  for (const r of ranges) {
    if (line >= r.startLine && line <= r.endLine) return true;
  }
  return false;
}

/** Whether `rule` is suppressed at `line` by any of the supplied directives. */
export function isSuppressed(line: number, rule: string, suppressions: SuppressionDirective[]): boolean {
  for (const s of suppressions) {
    if (line < s.fromLine || line > s.toLine) continue;
    if (s.rule === '*' || s.rule === rule) return true;
  }
  return false;
}

/**
 * Iterate the document's prose lines (skipping code blocks and suppressed
 * lines for the named rule). The visitor receives the line text plus the
 * absolute (1-based) line number and the section heading.
 *
 * No-op when `state.documentSections` is undefined.
 */
export function forEachProseLine(
  state: DesignSystemState,
  rule: string,
  visit: (info: { line: string; absLine: number; sectionHeading: string }) => void,
): void {
  const sections = state.documentSections;
  if (!sections) return;
  for (const section of sections) {
    const lines = section.content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i] ?? '';
      const absLine = section.startLine + i;
      if (isInCodeBlock(absLine, section.codeBlockRanges)) continue;
      if (isSuppressed(absLine, rule, section.suppressions)) continue;
      visit({ line, absLine, sectionHeading: section.heading || 'prose' });
    }
  }
}

/**
 * Iterate label-bearing component properties (`label`, `placeholder`,
 * `title`, `aria-label`). Yields a path string suitable for finding `path:`
 * fields plus the resolved string value. Components where these props are
 * absent are skipped.
 *
 * Used by content rules that want to validate component labels against the
 * voice/copy contract. Suppression directives do not apply here — labels
 * live in YAML, not prose.
 */
const LABEL_PROPS = ['label', 'placeholder', 'title', 'aria-label'] as const;

export function forEachComponentLabel(
  state: DesignSystemState,
  visit: (info: { path: string; component: string; prop: string; value: string; def: ComponentDef }) => void,
): void {
  for (const [name, def] of state.components) {
    for (const prop of LABEL_PROPS) {
      const value = def.properties.get(prop);
      const str = stringifyResolved(value);
      if (str === undefined) continue;
      visit({ path: `components.${name}.${prop}`, component: name, prop, value: str, def });
    }
  }
}

/** Coerce a ResolvedValue into a plain string when it represents text. */
function stringifyResolved(value: ResolvedValue | undefined): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value === 'string') return value;
  return undefined;
}

/**
 * Whole-word search for `needle` in `haystack`. Returns an array of zero-based
 * match indices (start positions). Case-sensitivity is controlled by the
 * caller; both arguments should be the same case before calling.
 */
export function findWholeWord(haystack: string, needle: string): number[] {
  if (needle.length === 0) return [];
  const matches: number[] = [];
  let from = 0;
  while (from <= haystack.length - needle.length) {
    const idx = haystack.indexOf(needle, from);
    if (idx < 0) break;
    const before = idx > 0 ? haystack.charCodeAt(idx - 1) : -1;
    const afterIdx = idx + needle.length;
    const after = afterIdx < haystack.length ? haystack.charCodeAt(afterIdx) : -1;
    if (!isWordCharCode(before) && !isWordCharCode(after)) {
      matches.push(idx);
    }
    from = idx + Math.max(1, needle.length);
  }
  return matches;
}

function isWordCharCode(c: number): boolean {
  if (c < 0) return false;
  // 0-9, A-Z, a-z, _
  return (c >= 48 && c <= 57) || (c >= 65 && c <= 90) || (c >= 97 && c <= 122) || c === 95;
}
