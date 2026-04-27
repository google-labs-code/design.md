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

/**
 * Mixed pair foreground — a component using a pair's container as backgroundColor
 * must use the matching on-container as textColor (not some unrelated color).
 * Catches the "right container, wrong foreground" failure mode that breaks the
 * pair's contrast contract.
 */
export function mixedPairForeground(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    const bgValue = comp.properties.get('backgroundColor');
    const textValue = comp.properties.get('textColor');
    if (!bgValue || !textValue) continue;

    const bgColor = asColor(bgValue);
    const textColor = asColor(textValue);
    if (!bgColor || !textColor) continue;

    const bgRole = bgColor.pairRole;
    if (!bgRole || bgRole.role !== 'container') continue;

    const partner = state.colorPairs.get(bgRole.pair);
    if (!partner) continue;

    if (textColor.hex !== partner.onContainer.hex) {
      findings.push({
        path: `components.${compName}.textColor`,
        message: `'${compName}' uses pair '${bgRole.pair}' container as backgroundColor but textColor (${textColor.hex}) is not the matching on-container (${partner.onContainer.hex}).`,
      });
    }
  }
  return findings;
}

function asColor(value: ResolvedValue): ResolvedColor | null {
  if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'color') {
    return value as ResolvedColor;
  }
  return null;
}

export const mixedPairForegroundRule: RuleDescriptor = {
  name: 'mixed-pair-foreground',
  severity: 'warning',
  description: 'Component using a pair container as backgroundColor must use the matching on-container as textColor.',
  run: mixedPairForeground,
};
