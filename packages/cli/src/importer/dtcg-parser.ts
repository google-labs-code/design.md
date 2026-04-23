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
  DesignSystemState,
  ResolvedColor,
  ResolvedDimension,
  ResolvedTypography,
} from '../linter/model/spec.js';
import { parseDimensionParts } from '../linter/model/spec.js';
import { hexToResolvedColor } from './color-math.js';
import { safeJsonParse } from './safe-json.js';

export interface DtcgPartial extends Partial<DesignSystemState> {
  warnings?: string[];
}

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

export function parseDtcgTokens(absPath: string): DtcgPartial {
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
  walk(raw, [], colors, spacing, rounded, typography);
  return { colors, spacing, rounded, typography };
}
