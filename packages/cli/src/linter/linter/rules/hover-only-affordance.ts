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

import type { ComponentDef, DesignSystemState, ResolvedValue } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

const AFFORDANCE_PROPS = ['backgroundColor', 'border', 'textColor'] as const;

/**
 * `hover-only-affordance` — flags an interactive component whose rest state
 * is visually identical to a non-interactive sibling along the affordance
 * properties (backgroundColor / border / textColor) and whose only signal of
 * interactivity is the hover state. Touch users never see hover, so the rest
 * state must already communicate that the element is interactive.
 */
export function hoverOnlyAffordance(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];

  const interactiveWithHover: Array<{ name: string; comp: ComponentDef }> = [];
  const nonInteractive: Array<{ name: string; comp: ComponentDef }> = [];

  for (const [name, comp] of state.components) {
    if (comp.interactive && comp.states.has('hover')) {
      interactiveWithHover.push({ name, comp });
    } else if (!comp.interactive) {
      nonInteractive.push({ name, comp });
    }
  }

  if (nonInteractive.length === 0) return findings;

  for (const { name, comp } of interactiveWithHover) {
    const restAffordance = pickAffordance(comp);
    if (restAffordance === null) continue;

    for (const sibling of nonInteractive) {
      const siblingAffordance = pickAffordance(sibling.comp);
      if (siblingAffordance === null) continue;
      if (sameAffordance(restAffordance, siblingAffordance)) {
        findings.push({
          path: `components.${name}`,
          message:
            `Rest state matches non-interactive sibling '${sibling.name}' on backgroundColor/border/textColor. ` +
            `Touch users see no affordance — the rest state must communicate interactivity, not just hover.`,
        });
        break;
      }
    }
  }

  return findings;
}

function pickAffordance(comp: ComponentDef): Record<string, string> | null {
  const out: Record<string, string> = {};
  let any = false;
  for (const prop of AFFORDANCE_PROPS) {
    const value = comp.properties.get(prop);
    if (value === undefined) continue;
    out[prop] = stringifyValue(value);
    any = true;
  }
  return any ? out : null;
}

function sameAffordance(a: Record<string, string>, b: Record<string, string>): boolean {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const k of keys) {
    if (a[k] !== b[k]) return false;
  }
  return true;
}

function stringifyValue(value: ResolvedValue): string {
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && value !== null && 'type' in value) {
    if (value.type === 'color') return value.hex;
    if (value.type === 'dimension') return `${value.value}${value.unit}`;
    if (value.type === 'typography') return JSON.stringify(value);
  }
  return String(value);
}

export const hoverOnlyAffordanceRule: RuleDescriptor = {
  name: 'hover-only-affordance',
  severity: 'warning',
  description: 'Interactive component is visually indistinguishable from a sibling at rest.',
  run: hoverOnlyAffordance,
};
