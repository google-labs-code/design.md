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

import { readFileSync } from 'node:fs';
import type {
  ResolvedColor,
  ResolvedDimension,
  ResolvedTypography,
} from '../linter/model/spec.js';
import { parseDimensionParts } from '../linter/model/spec.js';
import { hexToResolvedColor } from './color-math.js';
import { safeJsonParse } from './safe-json.js';
import type { PartialState } from './merger.js';
import type { IconsData } from './spec.js';

interface DtcgNode {
  $type?: string;
  $value?: unknown;
  [k: string]: unknown;
}

function isTokenNode(node: unknown): node is DtcgNode {
  return !!node && typeof node === 'object' && '$value' in (node as object);
}

function colorFromValue(val: unknown): ResolvedColor | null {
  if (typeof val === 'string') return hexToResolvedColor(val);
  if (val && typeof val === 'object') {
    const v = val as { hex?: string };
    if (typeof v.hex === 'string') return hexToResolvedColor(v.hex);
  }
  return null;
}

function dimensionFromValue(val: unknown): ResolvedDimension | null {
  if (typeof val === 'string') {
    const parts = parseDimensionParts(val);
    return parts ? { type: 'dimension', value: parts.value, unit: parts.unit } : null;
  }
  if (val && typeof val === 'object') {
    const v = val as { value?: number; unit?: string };
    if (typeof v.value === 'number' && typeof v.unit === 'string') {
      return { type: 'dimension', value: v.value, unit: v.unit };
    }
  }
  return null;
}

/**
 * Strip the DTCG `$value` wrapper. If the node is `{ $value: x }`,
 * return x; otherwise return the node as-is. Used so the parser
 * accepts both DTCG-wrapped and bare-value forms within the icons
 * block, since icon metadata is more often hand-authored.
 *
 * Arrays are returned as-is even if a positional element happens to
 * resemble a wrapper, because a DTCG value-wrapper is always an object.
 */
function unwrapValue(node: unknown): unknown {
  if (node && typeof node === 'object' && !Array.isArray(node)) {
    const n = node as Record<string, unknown>;
    if (Object.prototype.hasOwnProperty.call(n, '$value')) {
      return n['$value'];
    }
  }
  return node;
}

function parseIconsSubtree(raw: Record<string, unknown>): IconsData | undefined {
  const icons: IconsData = {};
  let any = false;

  const lib = unwrapValue(raw['library']);
  if (typeof lib === 'string') {
    icons.library = lib;
    any = true;
  }

  const style = unwrapValue(raw['style']);
  if (typeof style === 'string') {
    icons.style = style;
    any = true;
  }

  const stroke = unwrapValue(raw['strokeWidth']);
  if (typeof stroke === 'number' && Number.isFinite(stroke)) {
    icons.strokeWidth = stroke;
    any = true;
  } else if (typeof stroke === 'string') {
    const n = Number(stroke);
    if (Number.isFinite(n)) {
      icons.strokeWidth = n;
      any = true;
    }
  }

  const grid = unwrapValue(raw['grid']);
  if (typeof grid === 'string') {
    icons.grid = grid;
    any = true;
  }

  const color = unwrapValue(raw['color']);
  if (typeof color === 'string') {
    icons.color = color;
    any = true;
  }

  const sizeRaw = raw['size'];
  if (sizeRaw && typeof sizeRaw === 'object' && !Array.isArray(sizeRaw)) {
    const size = new Map<string, string>();
    for (const [k, v] of Object.entries(sizeRaw as Record<string, unknown>)) {
      // Defense in depth: safeJsonParse already strips these at parse
      // time, but reject them here too so the invariant survives any
      // future change to the JSON loader.
      if (k === '__proto__' || k === 'constructor' || k === 'prototype') continue;
      const dim = unwrapValue(v);
      if (typeof dim === 'string') size.set(k, dim);
    }
    if (size.size > 0) {
      icons.size = size;
      any = true;
    }
  }

  return any ? icons : undefined;
}

function typographyFromValue(val: unknown): ResolvedTypography | null {
  if (!val || typeof val !== 'object') return null;
  const v = val as Record<string, unknown>;
  const out: ResolvedTypography = { type: 'typography' };
  if (typeof v['fontFamily'] === 'string') out.fontFamily = v['fontFamily'];
  const fs = dimensionFromValue(v['fontSize']);
  if (fs) out.fontSize = fs;
  const lh = dimensionFromValue(v['lineHeight']);
  if (lh) out.lineHeight = lh;
  const ls = dimensionFromValue(v['letterSpacing']);
  if (ls) out.letterSpacing = ls;
  const fw = v['fontWeight'];
  if (typeof fw === 'number') out.fontWeight = fw;
  else if (typeof fw === 'string') {
    const n = parseInt(fw, 10);
    if (!Number.isNaN(n)) out.fontWeight = n;
  }
  return out;
}

/**
 * Only extract tokens whose top-level section is a design-system section
 * we care about. Per-component dimensions (e.g. components.button.padding)
 * are intentionally skipped — they belong to a component definition,
 * not to the shared spacing scale.
 */
const TOP_LEVEL_SECTIONS: Record<string, 'colors' | 'spacing' | 'rounded' | 'typography'> = {
  color: 'colors',
  colors: 'colors',
  spacing: 'spacing',
  space: 'spacing',
  rounded: 'rounded',
  radius: 'rounded',
  borderradius: 'rounded',
  typography: 'typography',
  font: 'typography',
  fonts: 'typography',
  fontsize: 'typography',
};

function resolveTopSection(
  pathRoot: string,
): 'colors' | 'spacing' | 'rounded' | 'typography' | null {
  const key = pathRoot.toLowerCase().replace(/[^a-z]/g, '');
  return TOP_LEVEL_SECTIONS[key] ?? null;
}

function walk(
  node: Record<string, unknown>,
  path: string[],
  colors: Map<string, ResolvedColor>,
  spacing: Map<string, ResolvedDimension>,
  rounded: Map<string, ResolvedDimension>,
  typography: Map<string, ResolvedTypography>,
): void {
  for (const [key, val] of Object.entries(node)) {
    if (key.startsWith('$')) continue;
    // Skip the icons subtree at the top level — parseIconsSubtree
    // handles it separately, and resolveTopSection('icons') would
    // discard every leaf anyway. Avoids a wasted DFS over what may be
    // a deep subtree of size/grid/color entries.
    if (path.length === 0 && key === 'icons') continue;
    const nextPath = [...path, key];
    if (isTokenNode(val)) {
      const token = val as DtcgNode;
      const section = nextPath.length > 0 ? resolveTopSection(nextPath[0]!) : null;
      if (section === null) continue;
      if (token.$type === 'color' && section === 'colors') {
        const c = colorFromValue(token.$value);
        if (c) colors.set(key, c);
      } else if (token.$type === 'typography' && section === 'typography') {
        const t = typographyFromValue(token.$value);
        if (t) typography.set(key, t);
      } else if (token.$type === 'dimension') {
        const d = dimensionFromValue(token.$value);
        if (!d) continue;
        if (section === 'rounded') rounded.set(key, d);
        else if (section === 'spacing') spacing.set(key, d);
      }
    } else if (val && typeof val === 'object') {
      walk(val as Record<string, unknown>, nextPath, colors, spacing, rounded, typography);
    }
  }
}

export function parseDtcgTokens(absPath: string): PartialState {
  const colors = new Map<string, ResolvedColor>();
  const spacing = new Map<string, ResolvedDimension>();
  const rounded = new Map<string, ResolvedDimension>();
  const typography = new Map<string, ResolvedTypography>();
  let raw: Record<string, unknown> | null = null;
  try {
    raw = safeJsonParse<Record<string, unknown>>(readFileSync(absPath, 'utf-8'));
  } catch (err) {
    return {
      colors,
      spacing,
      rounded,
      typography,
      warnings: [`failed to read DTCG file ${absPath}: ${(err as Error).message}`],
    };
  }
  if (!raw) {
    return {
      colors,
      spacing,
      rounded,
      typography,
      warnings: [`failed to parse DTCG file ${absPath}: invalid JSON`],
    };
  }
  const result: PartialState = { colors, spacing, rounded, typography };

  // Top-level icons block: typed structure (not a generic flat-map of
  // $value-bearing tokens), so handle it before generic walking.
  for (const [topKey, topValue] of Object.entries(raw)) {
    if (
      topKey === 'icons' &&
      topValue &&
      typeof topValue === 'object' &&
      !Array.isArray(topValue)
    ) {
      const icons = parseIconsSubtree(topValue as Record<string, unknown>);
      if (icons) result.icons = icons;
    }
  }

  walk(raw, [], colors, spacing, rounded, typography);
  return result;
}
