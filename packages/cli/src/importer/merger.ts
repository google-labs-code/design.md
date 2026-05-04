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
import type { IconsData } from './spec.js';

export type PartialState = Partial<DesignSystemState> & {
  icons?: IconsData;
  /** Non-fatal parser warnings, surfaced to the user on the import result. */
  warnings?: string[];
};

export interface MergedState extends DesignSystemState {
  icons?: IconsData;
}

const MAX_ICON_SIZE_ENTRIES = 256;

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
 * Recommended caller order: CSS vars → DTCG, so the most structured
 * source has final say.
 */
export function mergeStates(partials: PartialState[]): MergedState {
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
  // We intentionally do NOT seed icons.* into symbolTable here. The
  // linter's ResolvedValue union (color | dimension | typography |
  // string) cannot represent an icons block, and extending it would be
  // a cross-cutting linter change out of scope for this PR. The
  // emitter consumes state.icons directly. When an icons-aware spec
  // lands on main, a follow-up will populate icons.size.*, icons.grid,
  // and icons.color into the symbolTable.

  let icons: IconsData | undefined;
  for (const p of partials) {
    if (!p.icons) continue;
    if (!icons) icons = {};
    const i = p.icons;
    if (i.library !== undefined) icons.library = i.library;
    if (i.style !== undefined) icons.style = i.style;
    if (i.strokeWidth !== undefined) icons.strokeWidth = i.strokeWidth;
    if (i.grid !== undefined) icons.grid = i.grid;
    if (i.color !== undefined) icons.color = i.color;
    if (i.size) {
      if (!icons.size) icons.size = new Map();
      for (const [k, v] of i.size) {
        // Bound the size map so an attacker-controlled tokens.json or
        // CSS file can't bloat the emitted YAML with thousands of
        // entries. 256 is well above any reasonable real-world
        // size scale (sm/md/lg + a few variants).
        if (icons.size.size >= MAX_ICON_SIZE_ENTRIES) break;
        icons.size.set(k, v);
      }
    }
  }

  const state: MergedState = {
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

  if (icons) state.icons = icons;

  return state;
}
