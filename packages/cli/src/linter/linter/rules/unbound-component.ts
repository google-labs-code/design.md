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

/**
 * Unbound component — flags any component whose name is not declared in the
 * `componentRegistry`. The registry, when present, is the closed set of valid
 * component names; anything outside it is an open-world drift.
 *
 * Two flag sources are covered here:
 *   1. Definitions side — every key in `state.components` not in the registry.
 *   2. Prose side — `{components.X}` references in document sections where X
 *      is not in the registry.
 *
 * Source-file scanning (TSX/HTML) is a separate, opt-in flag (`--src`); not
 * implemented in this rule.
 *
 * No-op when the registry is absent (back-compat / open-world).
 */
const PROSE_REF_RE = /\{components\.([a-zA-Z0-9_-]+)\}/g;

export function unboundComponent(state: DesignSystemState): RuleFinding[] {
  const registry = state.componentRegistry;
  if (!registry) return [];

  const findings: RuleFinding[] = [];

  // 1. Definitions not in the registry.
  for (const compName of state.components.keys()) {
    if (!registry.has(compName)) {
      findings.push({
        path: `components.${compName}`,
        message: `'${compName}' is not in the component registry. Add it to 'components.registry' or remove the definition.`,
      });
    }
  }

  // 2. Prose references (`{components.X}`) inside document sections.
  const seenProseRefs = new Set<string>();
  for (const section of state.documentSections ?? []) {
    PROSE_REF_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = PROSE_REF_RE.exec(section.content)) !== null) {
      const name = m[1]!;
      if (registry.has(name)) continue;
      const key = `${section.heading}::${name}`;
      if (seenProseRefs.has(key)) continue;
      seenProseRefs.add(key);
      findings.push({
        path: section.heading
          ? `prose.${section.heading}.${name}`
          : `prose.${name}`,
        message: `Prose references '{components.${name}}' but '${name}' is not in the component registry.`,
      });
    }
  }

  return findings;
}

export const unboundComponentRule: RuleDescriptor = {
  name: 'unbound-component',
  severity: 'error',
  description: 'Components referenced or defined outside the registry — the closed-world contract over component names.',
  run: unboundComponent,
};
