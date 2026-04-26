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

const LAYOUT_PROPERTIES = new Set(['width', 'height', 'padding', 'margin', 'top', 'left', 'right', 'bottom']);

/**
 * Animating layout-affecting properties (width, height, padding, margin)
 * forces the browser to reflow on every frame — janky and battery-hostile.
 * The compositor-friendly alternatives are `transform` and `opacity`.
 */
export function animatingLayoutProperty(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    const transition = comp.properties.get('transition');
    if (typeof transition !== 'string') continue;
    // First whitespace-separated token of the transition shorthand is the
    // animated property. References are skipped — they're inspected once
    // motion tokens land in #5.
    const propertyName = transition.trim().split(/\s+/)[0];
    if (propertyName && LAYOUT_PROPERTIES.has(propertyName)) {
      findings.push({
        path: `components.${compName}.transition`,
        message: `Avoid animating '${propertyName}' — it triggers layout on every frame. Animate 'transform' or 'opacity' instead.`,
      });
    }
  }
  return findings;
}

export const animatingLayoutPropertyRule: RuleDescriptor = {
  name: 'animating-layout-property',
  severity: 'warning',
  description: 'Animating layout property — flags transitions that animate width / height / padding / margin.',
  run: animatingLayoutProperty,
};
