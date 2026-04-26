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

import type { DesignSystemState, ResolvedColor } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * Opacity is for *state* (disabled, loading) — never for tinting.
 * A component that declares both `opacity` and a non-opaque
 * `backgroundColor` is almost certainly stacking transparency, which yields
 * unpredictable visual contrast and breaks WCAG calculations.
 */
export function opacityStacking(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    const hasOpacity = comp.properties.has('opacity');
    if (!hasOpacity) continue;

    const bg = comp.properties.get('backgroundColor');
    if (bg && typeof bg === 'object' && 'type' in bg && bg.type === 'color') {
      const color = bg as ResolvedColor;
      if (color.a !== undefined && color.a < 1) {
        findings.push({
          path: `components.${compName}`,
          message: `'${compName}' stacks 'opacity' on top of a non-opaque backgroundColor (alpha=${color.a}). Use a single tinted token instead — never stack opacity layers.`,
        });
      }
    }
  }
  return findings;
}

export const opacityStackingRule: RuleDescriptor = {
  name: 'opacity-stacking',
  severity: 'warning',
  description: "Opacity stacking — flags components that combine opacity with a non-opaque backgroundColor.",
  run: opacityStacking,
};
