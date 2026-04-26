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
import { findWholeWord, forEachComponentLabel, forEachProseLine } from './content-helpers.js';

const RULE_NAME = 'banned-term-in-prose';

/**
 * `banned-term-in-prose` — flags any banned term (literal or regex) in
 * markdown prose, in component `label` / `placeholder` / `title` /
 * `aria-label` properties, and in any other authored text within the
 * `documentSections`.
 *
 * Whole-word match by default for literal terms. Phrase match when the
 * entry contains a space. Regex entries from `copy.bannedRegex` are run
 * verbatim (compiled once during model build).
 *
 * Suppressible per-line via
 * `<!-- design.md disable-next-line banned-term-in-prose -->`.
 */
export function bannedTermInProse(state: DesignSystemState): RuleFinding[] {
  const copy = state.copy;
  if (!copy) return [];
  if (copy.bannedTerms.length === 0 && copy.bannedRegex.length === 0) return [];

  const findings: RuleFinding[] = [];

  // Pre-split banned terms into literal vs. phrase for cheaper scanning.
  const literalTerms: string[] = [];
  const phraseTerms: string[] = [];
  for (const term of copy.bannedTerms) {
    if (/\s/.test(term)) phraseTerms.push(term);
    else literalTerms.push(term);
  }

  // Prose scan
  forEachProseLine(state, RULE_NAME, ({ line, absLine, sectionHeading }) => {
    const path = `prose:${sectionHeading}:${absLine}`;
    const lower = line.toLowerCase();

    for (const term of literalTerms) {
      const matches = findWholeWord(lower, term.toLowerCase());
      for (const _ of matches) {
        findings.push({
          path,
          message: `Banned term '${term}' in prose. Remove or rephrase.`,
        });
      }
    }
    for (const phrase of phraseTerms) {
      // Case-insensitive substring check; phrases include surrounding whitespace tolerance.
      if (lower.includes(phrase.toLowerCase())) {
        findings.push({
          path,
          message: `Banned phrase '${phrase}' in prose. Remove or rephrase.`,
        });
      }
    }
    for (const banned of copy.bannedRegex) {
      // Reset before each line so the global state of the regex doesn't carry over.
      banned.pattern.lastIndex = 0;
      if (banned.pattern.test(line)) {
        findings.push({
          path,
          message: `Banned pattern ${banned.source} matched in prose. Remove or rephrase.`,
        });
      }
    }
  });

  // Component-label scan
  forEachComponentLabel(state, ({ path, value }) => {
    const lower = value.toLowerCase();
    for (const term of literalTerms) {
      if (findWholeWord(lower, term.toLowerCase()).length > 0) {
        findings.push({ path, message: `Banned term '${term}' in component label.` });
      }
    }
    for (const phrase of phraseTerms) {
      if (lower.includes(phrase.toLowerCase())) {
        findings.push({ path, message: `Banned phrase '${phrase}' in component label.` });
      }
    }
    for (const banned of copy.bannedRegex) {
      banned.pattern.lastIndex = 0;
      if (banned.pattern.test(value)) {
        findings.push({ path, message: `Banned pattern ${banned.source} in component label.` });
      }
    }
  });

  return findings;
}

export const bannedTermInProseRule: RuleDescriptor = {
  name: RULE_NAME,
  severity: 'warning',
  description: 'Flags banned terms / regexes in prose and component labels.',
  run: bannedTermInProse,
};
