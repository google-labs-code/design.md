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

const RULE_NAME = 'button-exceeds-word-limit';

/**
 * `button-exceeds-word-limit` — flags button-kind components whose `label`
 * exceeds `copy.buttonLabelMaxWords` words.
 *
 * Soft-depends on the registry (`#6`): when a registry is present, the rule
 * uses `kind: button` to identify buttons. When the registry is absent, it
 * falls back to a name-prefix heuristic (`button-*` or `button`).
 *
 * No-op when `copy.buttonLabelMaxWords` is unset.
 */
export function buttonExceedsWordLimit(state: DesignSystemState): RuleFinding[] {
  const copy = state.copy;
  const max = copy?.buttonLabelMaxWords;
  if (!copy || typeof max !== 'number') return [];

  const findings: RuleFinding[] = [];
  for (const [name, def] of state.components) {
    if (!isButton(name, state)) continue;
    const label = def.properties.get('label');
    if (typeof label !== 'string') continue;
    const words = label.trim().split(/\s+/).filter(Boolean);
    if (words.length > max) {
      findings.push({
        path: `components.${name}.label`,
        message: `Button label '${label}' is ${words.length} words; copy.buttonLabelMaxWords is ${max}.`,
      });
    }
  }
  return findings;
}

function isButton(name: string, state: DesignSystemState): boolean {
  const registry = state.componentRegistry;
  if (registry) {
    const entry = registry.get(name);
    return entry?.kind === 'button';
  }
  return name === 'button' || name.startsWith('button-');
}

export const buttonExceedsWordLimitRule: RuleDescriptor = {
  name: RULE_NAME,
  severity: 'warning',
  description: 'Flags button labels longer than copy.buttonLabelMaxWords.',
  run: buttonExceedsWordLimit,
};
