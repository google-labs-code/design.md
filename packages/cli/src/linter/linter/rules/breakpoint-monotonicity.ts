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

import type { DesignSystemState, ResolvedDimension } from '../../model/spec.js';
import { BREAKPOINT_KEYS } from '../../spec-config.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * Convert a breakpoint dimension to a comparable px value. `rem`/`em` are
 * approximated against a 16px root; that's sufficient for monotonicity since
 * authors rarely interleave units across breakpoints.
 */
function toPx(dim: ResolvedDimension): number {
  if (dim.unit === 'px') return dim.value;
  if (dim.unit === 'rem' || dim.unit === 'em') return dim.value * 16;
  return dim.value;
}

/**
 * Breakpoint monotonicity — values must increase across the conventional
 * `sm < md < lg < xl < 2xl` order. Catches typos (e.g., `md: 1280px`,
 * `lg: 768px`) that would otherwise silently produce broken responsive
 * cascades. Authors may declare additional keys outside the conventional
 * order; those are ignored by this rule.
 */
export function breakpointMonotonicity(state: DesignSystemState): RuleFinding[] {
  if (!state.breakpoints) return [];
  const values = state.breakpoints.values;
  if (values.size < 2) return [];

  const findings: RuleFinding[] = [];
  const ordered: { key: string; px: number }[] = [];
  for (const key of BREAKPOINT_KEYS) {
    const dim = values.get(key);
    if (dim) ordered.push({ key, px: toPx(dim) });
  }

  for (let i = 1; i < ordered.length; i++) {
    const prev = ordered[i - 1]!;
    const curr = ordered[i]!;
    if (curr.px <= prev.px) {
      findings.push({
        path: `breakpoints.values.${curr.key}`,
        message: `Breakpoint '${curr.key}' (${curr.px}px) is not greater than '${prev.key}' (${prev.px}px). Conventional order is sm < md < lg < xl < 2xl.`,
      });
    }
  }

  return findings;
}

export const breakpointMonotonicityRule: RuleDescriptor = {
  name: 'breakpoint-monotonicity',
  severity: 'error',
  description: 'Breakpoint values must increase across the conventional sm < md < lg < xl < 2xl sequence.',
  run: breakpointMonotonicity,
};
