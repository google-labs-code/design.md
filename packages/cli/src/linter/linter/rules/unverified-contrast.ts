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

import type { DesignSystemState, ResolvedValue } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

function hasContrastPair(state: DesignSystemState): boolean {
  for (const comp of state.components.values()) {
    const bg = comp.properties.get('backgroundColor');
    const text = comp.properties.get('textColor');
    if (bg && text) return true;
  }
  return false;
}

function isColorValue(value: ResolvedValue): boolean {
  return typeof value === 'object' && value !== null && 'type' in value && value.type === 'color';
}

/**
 * Warns when color tokens exist but no component declares backgroundColor/textColor
 * pairs for the contrast-ratio rule to evaluate.
 */
export function unverifiedContrastCheck(state: DesignSystemState): RuleFinding[] {
  if (state.colors.size === 0) return [];
  if (hasContrastPair(state)) return [];

  const hasResolvableColors = [...state.colors.values()].some(isColorValue);
  if (!hasResolvableColors) return [];

  return [{
    path: 'colors',
    severity: 'info',
    message:
      `${state.colors.size} color token(s) defined but no component backgroundColor/textColor pairs — ` +
      'contrast cannot be verified until at least one component pair is declared.',
  }];
}

export const unverifiedContrastRule: RuleDescriptor = {
  name: 'unverified-contrast',
  severity: 'info',
  description:
    'Surfaces when color tokens exist without any component-level contrast pairs to verify.',
  run: unverifiedContrastCheck,
};
