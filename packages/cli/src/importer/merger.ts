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

import type {
  ComponentDef,
  DesignSystemState,
  ResolvedColor,
  ResolvedDimension,
  ResolvedTypography,
  ResolvedValue,
} from '../linter/model/spec.js';

export type PartialState = Partial<DesignSystemState>;

function mergeMaps<V>(parts: Array<Map<string, V> | undefined>): Map<string, V> {
  const out = new Map<string, V>();
  for (const p of parts) {
    if (!p) continue;
    for (const [k, v] of p) out.set(k, v);
  }
  return out;
}

/**
 * Merge partial DesignSystemState objects in precedence order (later wins).
 * Recommended caller order: CSS vars → tailwind → DTCG, so the most
 * structured source has final say.
 */
export function mergeStates(partials: PartialState[]): DesignSystemState {
  const colors = mergeMaps<ResolvedColor>(partials.map((p) => p.colors));
  const typography = mergeMaps<ResolvedTypography>(partials.map((p) => p.typography));
  const spacing = mergeMaps<ResolvedDimension>(partials.map((p) => p.spacing));
  const rounded = mergeMaps<ResolvedDimension>(partials.map((p) => p.rounded));
  const components = mergeMaps<ComponentDef>(partials.map((p) => p.components));

  const symbolTable = new Map<string, ResolvedValue>();
  for (const [k, v] of colors) symbolTable.set(`colors.${k}`, v);
  for (const [k, v] of typography) symbolTable.set(`typography.${k}`, v);
  for (const [k, v] of spacing) symbolTable.set(`spacing.${k}`, v);
  for (const [k, v] of rounded) symbolTable.set(`rounded.${k}`, v);

  const state: DesignSystemState = {
    colors,
    typography,
    spacing,
    rounded,
    components,
    symbolTable,
  };

  for (let i = partials.length - 1; i >= 0; i--) {
    const p = partials[i]!;
    if (state.name === undefined && p.name) state.name = p.name;
    if (state.description === undefined && p.description) state.description = p.description;
  }

  return state;
}
