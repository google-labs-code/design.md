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

/**
 * Validates omitted sections and alerts on redundant or unknown entries.
 */
export function omittedRules(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  if (!state.omitted) return findings;

  const validSections = new Set(['colors', 'typography', 'spacing', 'rounded', 'components']);

  for (const item of state.omitted) {
    const sectionName = item.section.toLowerCase();

    if (!validSections.has(sectionName)) {
      findings.push({
        severity: 'warning',
        rule: 'unknown-omission',
        path: 'omitted',
        message: `unknown section name '${item.section}' in omitted key`,
      });
      continue;
    }

    // Check if it's redundant (meaning it's defined and has tokens)
    let isPresent = false;
    if (sectionName === 'colors' && state.colors && state.colors.size > 0) isPresent = true;
    if (sectionName === 'typography' && state.typography && state.typography.size > 0) isPresent = true;
    if (sectionName === 'spacing' && state.spacing && state.spacing.size > 0) isPresent = true;
    if (sectionName === 'rounded' && state.rounded && state.rounded.size > 0) isPresent = true;
    if (sectionName === 'components' && state.components && state.components.size > 0) isPresent = true;

    if (isPresent) {
      findings.push({
        severity: 'warning',
        rule: 'redundant-omission',
        path: 'omitted',
        message: `${sectionName} listed in omitted but ${sectionName} tokens are defined — omitted declaration has no effect`,
      });
    } else {
      findings.push({
        severity: 'info',
        rule: 'declared-omission',
        path: `omitted.${sectionName}`,
        message: `${sectionName} intentionally omitted — no ${sectionName} tokens will be validated`,
      });
    }
  }

  return findings;
}

export const omittedRule: RuleDescriptor = {
  name: 'omitted-rules',
  severity: 'info',
  description: 'Validates omitted sections and alerts on redundant or unknown entries.',
  run: omittedRules,
};
