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

import type { DesignSystemState } from '../model/spec.js';
import type { LintResult, Finding, GradedTokenEdits, TokenEditEntry } from './spec.js';
import type { LintRule, RuleDescriptor } from './rules/types.js';
import { DEFAULT_RULES, DEFAULT_RULE_DESCRIPTORS } from './rules/index.js';

/** Type guard: checks if the array contains RuleDescriptors (objects with `run`). */
function isDescriptorArray(rules: LintRule[] | RuleDescriptor[]): rules is RuleDescriptor[] {
  return rules.length > 0 && typeof rules[0] === 'object' && 'run' in rules[0];
}

/**
 * Pure functional linter runner.
 * Executes each rule against the state and aggregates findings.
 */
export function runLinter(
  state: DesignSystemState,
  rules: LintRule[] | RuleDescriptor[] = DEFAULT_RULES,
): LintResult {
  const findings: Finding[] = isDescriptorArray(rules)
    ? rules.flatMap(desc => desc.run(state).map(f => ({
        severity: f.severity ?? desc.severity,
        path: f.path,
        message: f.message,
      })))
    : rules.flatMap(rule => rule(state));
  return {
    findings,
    summary: {
      errors: findings.filter(d => d.severity === 'error').length,
      warnings: findings.filter(d => d.severity === 'warning').length,
      infos: findings.filter(d => d.severity === 'info').length,
    },
  };
}

/**
 * Groups lint findings into a graded edit menu (fixes / improvements / suggestions).
 */
export function preEvaluate(
  state: DesignSystemState,
  rules: LintRule[] | RuleDescriptor[] = DEFAULT_RULES,
): GradedTokenEdits {
  const { findings } = runLinter(state, rules);
  const fixes: TokenEditEntry[] = [];
  const improvements: TokenEditEntry[] = [];
  const suggestions: TokenEditEntry[] = [];

  for (const d of findings) {
    const entry: TokenEditEntry = { path: d.path ?? '', findings: [d] };
    if (d.severity === 'error') fixes.push(entry);
    else if (d.severity === 'warning') improvements.push(entry);
    else suggestions.push(entry);
  }

  return { fixes, improvements, suggestions };
}
