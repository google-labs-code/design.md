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

import type { DesignSystemState, RegistryEntry } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * Composes-cycle — detects cycles in the registry's `composes:` graph
 * (e.g., `card-elevated → card-fancy → card-elevated`). The model handler
 * short-circuits cycles when merging properties; this rule surfaces them so
 * authors can fix the registry rather than silently ignore the broken chain.
 *
 * Each cycle is reported once, anchored on the registry entry whose `composes`
 * link closes the loop.
 */
export function composesCycle(state: DesignSystemState): RuleFinding[] {
  const registry = state.componentRegistry;
  if (!registry) return [];

  const findings: RuleFinding[] = [];
  const reported = new Set<string>();

  for (const [name] of registry) {
    const cycle = findCycle(name, registry);
    if (!cycle) continue;
    const key = canonicalCycleKey(cycle);
    if (reported.has(key)) continue;
    reported.add(key);
    findings.push({
      path: `components.registry.${cycle[0]}.composes`,
      message: `Composition cycle detected: ${cycle.join(' → ')} → ${cycle[0]}.`,
    });
  }
  return findings;
}

/** Walk the composes chain from `start`. Returns the cycle path if one closes back on a visited node. */
function findCycle(
  start: string,
  registry: Map<string, RegistryEntry>,
): string[] | null {
  const path: string[] = [];
  const inPath = new Set<string>();
  let current: string | undefined = start;
  while (current !== undefined) {
    if (inPath.has(current)) {
      // Slice from the cycle entry point onward.
      const idx = path.indexOf(current);
      return path.slice(idx);
    }
    path.push(current);
    inPath.add(current);
    const entry: RegistryEntry | undefined = registry.get(current);
    current = entry?.composes;
  }
  return null;
}

/** Rotation-invariant key so the same cycle reported from different starts collapses to one. */
function canonicalCycleKey(cycle: string[]): string {
  if (cycle.length === 0) return '';
  let minIdx = 0;
  for (let i = 1; i < cycle.length; i++) {
    if (cycle[i]! < cycle[minIdx]!) minIdx = i;
  }
  return [...cycle.slice(minIdx), ...cycle.slice(0, minIdx)].join('→');
}

export const composesCycleRule: RuleDescriptor = {
  name: 'composes-cycle',
  severity: 'error',
  description: 'Cycles in the component composition graph.',
  run: composesCycle,
};
