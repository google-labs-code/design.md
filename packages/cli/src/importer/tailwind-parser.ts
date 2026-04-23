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
import { pathToFileURL } from 'node:url';
import type {
  DesignSystemState,
  ResolvedColor,
  ResolvedDimension,
  ResolvedTypography,
} from '../linter/model/spec.js';
import { parseDimensionParts } from '../linter/model/spec.js';
import { hexToResolvedColor } from './color-math.js';

export interface TailwindPartial extends Partial<DesignSystemState> {
  warnings?: string[];
}

function toResolvedDimension(raw: string): ResolvedDimension | null {
  const parts = parseDimensionParts(raw);
  if (!parts) return null;
  return { type: 'dimension', value: parts.value, unit: parts.unit };
}

function flattenColors(
  obj: Record<string, unknown>,
  prefix = '',
  out: Map<string, ResolvedColor> = new Map(),
): Map<string, ResolvedColor> {
  for (const [key, val] of Object.entries(obj)) {
    const name = prefix ? `${prefix}-${key}` : key;
    if (typeof val === 'string') {
      const color = hexToResolvedColor(val);
      if (color) out.set(name, color);
    } else if (val && typeof val === 'object') {
      flattenColors(val as Record<string, unknown>, name, out);
    }
  }
  return out;
}

function parseFontSize(entry: unknown): ResolvedTypography | null {
  if (typeof entry === 'string') {
    const d = toResolvedDimension(entry);
    return d ? { type: 'typography', fontSize: d } : null;
  }
  if (!Array.isArray(entry)) return null;
  const sizeStr = entry[0] as string | undefined;
  const meta = entry[1] as Record<string, unknown> | string | undefined;
  const out: ResolvedTypography = { type: 'typography' };
  if (sizeStr) {
    const size = toResolvedDimension(sizeStr);
    if (size) out.fontSize = size;
  }
  if (meta && typeof meta === 'object') {
    const lh = meta['lineHeight'];
    const ls = meta['letterSpacing'];
    const fw = meta['fontWeight'];
    if (typeof lh === 'string') {
      const d = toResolvedDimension(lh);
      if (d) out.lineHeight = d;
    }
    if (typeof ls === 'string') {
      const d = toResolvedDimension(ls);
      if (d) out.letterSpacing = d;
    }
    if (fw !== undefined) {
      const n = typeof fw === 'number' ? fw : parseInt(String(fw), 10);
      if (!Number.isNaN(n)) out.fontWeight = n;
    }
  }
  return out;
}

async function loadConfigModule(absPath: string): Promise<Record<string, unknown>> {
  // Bun handles .ts/.cjs/.mjs/.js via dynamic import natively.
  const url = pathToFileURL(absPath).href + `?t=${Date.now()}`;
  const mod = (await import(url)) as { default?: unknown } & Record<string, unknown>;
  const target = (mod.default ?? mod) as Record<string, unknown>;
  return target;
}

function regexFallback(src: string, warnings: string[]): TailwindPartial {
  const colors = new Map<string, ResolvedColor>();
  const colorBlock = src.match(/colors\s*:\s*\{([\s\S]*?)\n\s*\}/);
  if (colorBlock) {
    const re = /['"]?([a-zA-Z0-9_-]+)['"]?\s*:\s*['"](#[0-9a-fA-F]{3,8})['"]/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(colorBlock[1]!)) !== null) {
      const color = hexToResolvedColor(m[2]!);
      if (color) colors.set(m[1]!, color);
    }
  }
  return {
    colors,
    rounded: new Map<string, ResolvedDimension>(),
    spacing: new Map<string, ResolvedDimension>(),
    typography: new Map<string, ResolvedTypography>(),
    warnings,
  };
}

function pickSection(
  theme: Record<string, unknown>,
  extend: Record<string, unknown>,
  key: string,
): Record<string, unknown> {
  const e = extend[key];
  const t = theme[key];
  if (e && typeof e === 'object') return e as Record<string, unknown>;
  if (t && typeof t === 'object') return t as Record<string, unknown>;
  return {};
}

export async function parseTailwindConfig(absPath: string): Promise<TailwindPartial> {
  const warnings: string[] = [];
  let cfg: Record<string, unknown>;
  try {
    cfg = await loadConfigModule(absPath);
  } catch (err) {
    warnings.push(
      `tailwind config could not be evaluated (${(err as Error).message}); used regex fallback`,
    );
    let src = '';
    try {
      src = readFileSync(absPath, 'utf-8');
    } catch {
      return { colors: new Map(), rounded: new Map(), spacing: new Map(), typography: new Map(), warnings };
    }
    return regexFallback(src, warnings);
  }

  const theme = (cfg['theme'] as Record<string, unknown> | undefined) ?? {};
  const extend = (theme['extend'] as Record<string, unknown> | undefined) ?? {};

  const colors = flattenColors(pickSection(theme, extend, 'colors'));

  const rounded = new Map<string, ResolvedDimension>();
  for (const [name, val] of Object.entries(pickSection(theme, extend, 'borderRadius'))) {
    if (typeof val === 'string') {
      const d = toResolvedDimension(val);
      if (d) rounded.set(name, d);
    }
  }

  const spacing = new Map<string, ResolvedDimension>();
  for (const [name, val] of Object.entries(pickSection(theme, extend, 'spacing'))) {
    if (typeof val === 'string') {
      const d = toResolvedDimension(val);
      if (d) spacing.set(name, d);
    }
  }

  const typography = new Map<string, ResolvedTypography>();
  for (const [name, val] of Object.entries(pickSection(theme, extend, 'fontSize'))) {
    const t = parseFontSize(val);
    if (t) typography.set(name, t);
  }
  for (const [name, val] of Object.entries(pickSection(theme, extend, 'fontFamily'))) {
    const family = Array.isArray(val)
      ? (val[0] as string | undefined)
      : typeof val === 'string'
        ? val
        : undefined;
    if (!family) continue;
    const existing = typography.get(name) ?? ({ type: 'typography' } as ResolvedTypography);
    existing.fontFamily = family;
    typography.set(name, existing);
  }

  return { colors, rounded, spacing, typography, warnings };
}
