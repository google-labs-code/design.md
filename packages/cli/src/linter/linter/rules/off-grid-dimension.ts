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

import type { DesignSystemState, ResolvedDimension, ResolvedValue } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

const GRIDDED_PROPS = ['width', 'height', 'padding', 'gap', 'margin'];

/**
 * Convert a Dimension to a px value for divisibility comparison. `rem` /
 * `em` are normalized against a 16px root. Other units are not gridded
 * (return null) so the rule skips them.
 */
function toPx(dim: ResolvedDimension): number | null {
  if (dim.unit === 'px') return dim.value;
  if (dim.unit === 'rem' || dim.unit === 'em') return dim.value * 16;
  return null;
}

/**
 * Build the set of px values that count as "on grid": every spacing token
 * value, plus every multiple of the grid gutter up to a generous ceiling.
 */
function buildAllowed(state: DesignSystemState): Set<number> | null {
  const allowed = new Set<number>();
  for (const dim of state.spacing.values()) {
    const px = toPx(dim);
    if (px !== null) allowed.add(px);
  }
  const gutter = state.grid?.gutter;
  if (!gutter) return allowed.size > 0 ? allowed : null;
  const gutterPx = toPx(gutter);
  if (gutterPx === null || gutterPx <= 0) return allowed.size > 0 ? allowed : null;
  // 0 is always on-grid; populate multiples up to a typical max layout dim.
  allowed.add(0);
  for (let i = 1; i * gutterPx <= 2048; i++) {
    allowed.add(i * gutterPx);
  }
  return allowed;
}

function getDimension(value: ResolvedValue): ResolvedDimension | null {
  if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'dimension') {
    return value as ResolvedDimension;
  }
  return null;
}

/**
 * Off-grid dimension — components whose layout dimensions (`width`, `height`,
 * `padding`, `gap`, `margin`) are neither a declared spacing-token value nor
 * a multiple of `grid.gutter`. Catches one-off magic numbers (`13px`,
 * `27px`) that drift away from the system's rhythm.
 *
 * No-op when neither `grid.gutter` nor any spacing token is defined — the
 * rule needs *something* to compare against.
 */
export function offGridDimension(state: DesignSystemState): RuleFinding[] {
  const allowed = buildAllowed(state);
  if (!allowed || allowed.size === 0) return [];

  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    for (const propName of GRIDDED_PROPS) {
      const value = comp.properties.get(propName);
      if (value === undefined) continue;
      const dim = getDimension(value);
      if (!dim) continue;
      const px = toPx(dim);
      if (px === null) continue;
      if (!allowed.has(px)) {
        findings.push({
          path: `components.${compName}.${propName}`,
          message: `'${dim.value}${dim.unit}' is off-grid. Snap to a {spacing.*} token or a multiple of grid.gutter.`,
        });
      }
    }
  }
  return findings;
}

export const offGridDimensionRule: RuleDescriptor = {
  name: 'off-grid-dimension',
  severity: 'warning',
  description: 'Off-grid dimension — layout dimensions that are not a spacing token or a grid-gutter multiple.',
  run: offGridDimension,
};
