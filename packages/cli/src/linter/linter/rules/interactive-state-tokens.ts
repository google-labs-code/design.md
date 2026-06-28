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
import type { RuleDescriptor, RuleFinding } from './types.js';

const INTERACTIVE_PREFIX =
  /^(button|input|chip|checkbox|select|toggle|switch|tab|link|menu-item|list-item|radio|slider|textarea)(-|$)/i;
const STATE_SUFFIX = /-(hover|active|disabled|selected|pressed|focus)$/i;
const COLOR_PROPS = ['backgroundColor', 'textColor', 'borderColor'] as const;

/**
 * Interactive state tokens — warns when interactive components lack hover/disabled
 * variants or when disabled states mirror base colors (opacity-only pattern).
 */
export function interactiveStateTokensCheck(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  const names = [...state.components.keys()];
  const nameSet = new Set(names);

  const interactiveBases = names.filter(n => INTERACTIVE_PREFIX.test(n) && !STATE_SUFFIX.test(n));

  for (const base of interactiveBases) {
    const hasHover = nameSet.has(`${base}-hover`) || nameSet.has(`${base}-active`);
    const hasDisabled = nameSet.has(`${base}-disabled`);

    if (!hasHover) {
      findings.push({
        path: `components.${base}`,
        message: `Interactive component '${base}' has no '-hover' or '-active' variant. Define explicit hover/active styling per the Components spec.`,
      });
    }

    if (!hasDisabled) {
      findings.push({
        path: `components.${base}`,
        message: `Interactive component '${base}' has no '-disabled' variant. Disabled states must use distinct colors, not opacity alone.`,
      });
    }

    const disabledName = `${base}-disabled`;
    if (nameSet.has(disabledName)) {
      const baseComp = state.components.get(base)!;
      const disabledComp = state.components.get(disabledName)!;
      if (disabledMirrorsBase(baseComp.properties, disabledComp.properties)) {
        findings.push({
          path: `components.${disabledName}`,
          message: `'${disabledName}' uses the same colors as '${base}'. Change backgroundColor, textColor, and/or borderColor for disabled — do not rely on reduced opacity alone.`,
        });
      }
    }
  }

  return findings;
}

function disabledMirrorsBase(
  baseProps: Map<string, ResolvedValue>,
  disabledProps: Map<string, ResolvedValue>,
): boolean {
  let compared = 0;
  for (const prop of COLOR_PROPS) {
    const baseVal = baseProps.get(prop);
    const disabledVal = disabledProps.get(prop);
    if (!baseVal || !disabledVal) continue;
    compared++;
    if (!colorsEqual(baseVal, disabledVal)) return false;
  }
  return compared > 0;
}

function colorsEqual(a: ResolvedValue, b: ResolvedValue): boolean {
  const colorA = resolveToColor(a);
  const colorB = resolveToColor(b);
  if (!colorA || !colorB) return a === b;
  return colorA.hex === colorB.hex;
}

function resolveToColor(value: ResolvedValue): ResolvedColor | null {
  if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'color') {
    return value as ResolvedColor;
  }
  return null;
}

export const interactiveStateTokensCheckRule: RuleDescriptor = {
  name: 'interactive-state-tokens',
  severity: 'warning',
  description: 'Interactive state tokens — warns about missing hover/disabled variants and opacity-only disabled states.',
  run: interactiveStateTokensCheck,
};
