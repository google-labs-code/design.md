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

import type { DesignSystemState } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';
import { TITLE_CASE_MINOR_WORDS } from '../../spec-config.js';

const RULE_NAME = 'casing-mismatch';

/**
 * `casing-mismatch` — verifies that component labels follow the casing
 * convention declared in `copy.casing.<surface>`.
 *
 * Surfaces are matched via the registry kind:
 *   - `kind: button`           → copy.casing.button
 *   - `kind: navigation`       → copy.casing.nav
 *   - `kind: section-heading`  → copy.casing.section-heading (also picked up by `display`-kind components)
 *
 * Heuristics for each casing value:
 *   - sentence-case: first letter upper, all subsequent words lower-cased
 *     unless they are listed in `copy.knownProperNouns`.
 *   - title-case: all words capitalized except minor words (a, an, the,
 *     and, of, in, on, ...).
 *   - UPPERCASE: every alphabetic character upper.
 *   - lowercase: every alphabetic character lower.
 *
 * False positives are expected for proper-noun-heavy prose; per-line
 * suppression and the `copy.knownProperNouns` allowlist exist to handle them.
 */
export function casingMismatch(state: DesignSystemState): RuleFinding[] {
  const copy = state.copy;
  if (!copy || copy.casing.size === 0) return [];

  const findings: RuleFinding[] = [];
  const properNouns = new Set((copy.knownProperNouns ?? []).map(s => s.toLowerCase()));
  const minor = new Set([
    ...TITLE_CASE_MINOR_WORDS,
    ...(copy.titleCaseExceptions ?? []).map(s => s.toLowerCase()),
  ]);

  for (const [name, def] of state.components) {
    const surface = surfaceFor(name, state);
    if (!surface) continue;
    const expected = copy.casing.get(surface);
    if (!expected) continue;
    const label = def.properties.get('label');
    if (typeof label !== 'string' || label.trim().length === 0) continue;

    if (!matchesCasing(label, expected, properNouns, minor)) {
      findings.push({
        path: `components.${name}.label`,
        message: `Label '${label}' is not ${expected} (copy.casing.${surface}).`,
      });
    }
  }
  return findings;
}

function surfaceFor(name: string, state: DesignSystemState): string | undefined {
  const registry = state.componentRegistry;
  if (!registry) return undefined;
  const entry = registry.get(name);
  if (!entry?.kind) return undefined;
  if (entry.kind === 'button') return 'button';
  if (entry.kind === 'navigation') return 'nav';
  if (entry.kind === 'section-heading') return 'section-heading';
  return undefined;
}

/**
 * Whether `text` matches the requested casing. Capitalization checks ignore
 * non-letter words (numbers, punctuation-only tokens).
 */
export function matchesCasing(
  text: string,
  expected: string,
  properNouns: Set<string>,
  minor: Set<string>,
): boolean {
  const trimmed = text.trim();
  if (trimmed.length === 0) return true;

  if (expected === 'UPPERCASE') {
    return trimmed === trimmed.toUpperCase();
  }
  if (expected === 'lowercase') {
    return trimmed === trimmed.toLowerCase();
  }
  const words = trimmed.split(/\s+/);
  if (words.length === 0) return true;

  if (expected === 'sentence-case') {
    for (let i = 0; i < words.length; i++) {
      const w = words[i]!;
      if (!hasLetters(w)) continue;
      if (i === 0) {
        if (!startsWithUpper(w)) return false;
      } else if (!properNouns.has(stripPunct(w).toLowerCase())) {
        // Non-first words that aren't proper nouns must start with a lowercase letter.
        if (startsWithUpper(w)) return false;
      }
    }
    return true;
  }

  if (expected === 'title-case') {
    for (let i = 0; i < words.length; i++) {
      const w = words[i]!;
      if (!hasLetters(w)) continue;
      const bare = stripPunct(w).toLowerCase();
      const isMinor = minor.has(bare);
      // First and last word always capitalized; minor words elsewhere stay lower.
      const last = i === words.length - 1;
      if (i === 0 || last || !isMinor) {
        if (!startsWithUpper(w)) return false;
      } else {
        if (startsWithUpper(w) && !properNouns.has(bare)) return false;
      }
    }
    return true;
  }

  // Unknown casing — defer to the model's enum validation; treat as match here.
  return true;
}

function hasLetters(word: string): boolean {
  return /[A-Za-z]/.test(word);
}

function startsWithUpper(word: string): boolean {
  for (const ch of word) {
    if (/[A-Za-z]/.test(ch)) return ch === ch.toUpperCase() && ch !== ch.toLowerCase();
  }
  return false;
}

function stripPunct(word: string): string {
  return word.replace(/[^\p{L}\p{N}'-]/gu, '');
}

export const casingMismatchRule: RuleDescriptor = {
  name: RULE_NAME,
  severity: 'warning',
  description: 'Component labels must match copy.casing.<surface>.',
  run: casingMismatch,
};
