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

const RULE_NAME = 'reserved-name-form';

/**
 * `reserved-name-form` — product / feature names declared in
 * `copy.reservedNames` must appear verbatim. Lowercase / hyphenated /
 * mixed-case variants are flagged.
 *
 * For `DesignMD`, the rule flags `design-md`, `designmd`, `Designmd`, etc.
 */
export function reservedNameForm(state: DesignSystemState): RuleFinding[] {
  const copy = state.copy;
  if (!copy || copy.reservedNames.length === 0) return [];

  const findings: RuleFinding[] = [];

  // Build the variant lookup: each reserved name → the set of variants we flag.
  const variantsFor = (name: string): string[] => {
    const lower = name.toLowerCase();
    const hyphenated = name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    const titled = lower.charAt(0).toUpperCase() + lower.slice(1);
    return [...new Set([lower, hyphenated, titled].filter(v => v !== name))];
  };

  forEachProseLine(state, RULE_NAME, ({ line, absLine, sectionHeading }) => {
    for (const name of copy.reservedNames) {
      for (const variant of variantsFor(name)) {
        if (findWholeWord(line, variant).length > 0) {
          findings.push({
            path: `prose:${sectionHeading}:${absLine}`,
            message: `'${variant}' should be written as '${name}' (copy.reservedNames).`,
          });
        }
      }
    }
  });

  forEachComponentLabel(state, ({ path, value }) => {
    for (const name of copy.reservedNames) {
      for (const variant of variantsFor(name)) {
        if (findWholeWord(value, variant).length > 0) {
          findings.push({
            path,
            message: `Label uses '${variant}'; expected '${name}'.`,
          });
        }
      }
    }
  });

  return findings;
}

export const reservedNameFormRule: RuleDescriptor = {
  name: RULE_NAME,
  severity: 'warning',
  description: 'Reserved product / feature names must be written verbatim.',
  run: reservedNameForm,
};
