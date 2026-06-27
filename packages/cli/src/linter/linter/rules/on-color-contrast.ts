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

import type { DesignSystemState, ResolvedColor, ResolvedValue } from '../../model/spec.js';
import { contrastRatio } from '../../model/handler.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

const WCAG_AA_MINIMUM = 4.5;

const PAIRABLE_ROLES = [
  'primary',
  'secondary',
  'tertiary',
  'neutral',
  'surface',
  'error',
] as const;

function resolveToColor(value: ResolvedValue): ResolvedColor | null {
  if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'color') {
    return value as ResolvedColor;
  }
  return null;
}

/**
 * on-* color contrast — warns when a background/on-* token pair exists but
 * falls below WCAG AA (4.5:1).
 */
export function onColorContrastCheck(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];

  for (const role of PAIRABLE_ROLES) {
    const bgValue = state.colors.get(role);
    const onValue = state.colors.get(`on-${role}`);
    if (!bgValue || !onValue) continue;

    const bgColor = resolveToColor(bgValue);
    const onColor = resolveToColor(onValue);
    if (!bgColor || !onColor) continue;

    const ratio = contrastRatio(bgColor, onColor);
    if (ratio < WCAG_AA_MINIMUM) {
      findings.push({
        path: `colors.${role}`,
        message:
          `'on-${role}' (${onColor.hex}) on '${role}' (${bgColor.hex}) has contrast ratio ` +
          `${ratio.toFixed(2)}:1, below WCAG AA minimum of ${WCAG_AA_MINIMUM}:1.`,
      });
    }
  }

  return findings;
}

export const onColorContrastRule: RuleDescriptor = {
  name: 'on-color-contrast',
  severity: 'warning',
  description:
    'on-* color contrast — warns when background/on-* token pairs fall below WCAG AA (4.5:1).',
  run: onColorContrastCheck,
};
