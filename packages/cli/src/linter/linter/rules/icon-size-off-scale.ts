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
import type { RuleDescriptor, RuleFinding } from './types.js';

function dimEquals(a: ResolvedDimension, b: ResolvedDimension): boolean {
  return a.value === b.value && a.unit === b.unit;
}

/**
 * Icon size off-scale — warns when a component's `iconSize` is a literal
 * dimension that doesn't match any size in `iconography.sizes`. Catches
 * `iconSize: 18px` when the scale is 16/20/24/32.
 *
 * Skipped when iconography is undeclared (no scale to check against) or
 * when the resolved value is the literal string `auto` (the default).
 */
export function iconSizeOffScale(state: DesignSystemState): RuleFinding[] {
  if (!state.iconography || state.iconography.sizes.size === 0) return [];
  const findings: RuleFinding[] = [];
  const scale = [...state.iconography.sizes.values()];

  for (const [compName, comp] of state.components) {
    const iconSize = comp.properties.get('iconSize');
    if (iconSize === undefined) continue;
    if (typeof iconSize === 'string') {
      if (iconSize.trim() === 'auto') continue;
      // String values that are not `auto` are unresolved refs or shorthands
      // — let other rules cover them.
      continue;
    }
    if (typeof iconSize !== 'object' || !('type' in iconSize)) continue;
    if (iconSize.type !== 'dimension') continue;

    const onScale = scale.some(s => dimEquals(s, iconSize));
    if (!onScale) {
      const scaleKeys = [...state.iconography.sizes.keys()].join(', ');
      findings.push({
        path: `components.${compName}.iconSize`,
        message: `iconSize ${iconSize.value}${iconSize.unit} is not on the iconography scale (${scaleKeys}). Reference {iconography.sizes.*} instead.`,
      });
    }
  }
  return findings;
}

export const iconSizeOffScaleRule: RuleDescriptor = {
  name: 'icon-size-off-scale',
  severity: 'warning',
  description: 'Icon size off-scale — warns when a component iconSize is not on the iconography.sizes scale.',
  run: iconSizeOffScale,
};
