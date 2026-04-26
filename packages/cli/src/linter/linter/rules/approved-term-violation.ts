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

const RULE_NAME = 'approved-term-violation';

/**
 * `approved-term-violation` — flags prose or labels that use a canonical
 * name where its approved form is required.
 *
 * `copy.approvedTerms` maps canonical → approved. e.g. `user: customer`
 * means "if the prose says `user`, the brand wants `customer` instead."
 *
 * Whole-word match, case-insensitive.
 */
export function approvedTermViolation(state: DesignSystemState): RuleFinding[] {
  const copy = state.copy;
  if (!copy || copy.approvedTerms.size === 0) return [];

  const findings: RuleFinding[] = [];

  forEachProseLine(state, RULE_NAME, ({ line, absLine, sectionHeading }) => {
    const lower = line.toLowerCase();
    for (const [canonical, approved] of copy.approvedTerms) {
      if (canonical.toLowerCase() === approved.toLowerCase()) continue;
      if (findWholeWord(lower, canonical.toLowerCase()).length > 0) {
        findings.push({
          path: `prose:${sectionHeading}:${absLine}`,
          message: `Prose uses '${canonical}' but '${approved}' is the approved form.`,
        });
      }
    }
  });

  forEachComponentLabel(state, ({ path, value }) => {
    const lower = value.toLowerCase();
    for (const [canonical, approved] of copy.approvedTerms) {
      if (canonical.toLowerCase() === approved.toLowerCase()) continue;
      if (findWholeWord(lower, canonical.toLowerCase()).length > 0) {
        findings.push({
          path,
          message: `Label uses '${canonical}' but '${approved}' is the approved form.`,
        });
      }
    }
  });

  return findings;
}

export const approvedTermViolationRule: RuleDescriptor = {
  name: RULE_NAME,
  severity: 'warning',
  description: 'Flags prose / labels using a canonical term where the approved form is required.',
  run: approvedTermViolation,
};
