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
import type { PartialState } from './merger.js';
import type { IconsData } from './spec.js';

interface Buckets {
  colors: Map<string, ResolvedColor>;
  spacing: Map<string, ResolvedDimension>;
  rounded: Map<string, ResolvedDimension>;
  typography: Map<string, ResolvedTypography>;
}

function emptyBuckets(): Buckets {
  return {
    colors: new Map(),
    spacing: new Map(),
    rounded: new Map(),
    typography: new Map(),
  };
}

// ── :root heuristic classification ──────────────────────────────────

const COLOR_NAME = /^(color|colour|bg|fg|text|surface|accent|brand|primary|secondary|tertiary|error|warn|warning|success|info)(-|$)/i;
const SPACE_NAME = /^(space|spacing|gutter|margin|padding|gap)(-|$)/i;
const ROUND_NAME = /^(radius|rounded|border-radius|rounding)(-|$)/i;

type RootClassified =
  | { kind: 'color'; value: ResolvedColor }
  | { kind: 'spacing' | 'rounded'; value: ResolvedDimension }
  | null;

function classifyRootVar(name: string, rawValue: string): RootClassified {
  const value = rawValue.trim();
  const color = hexToResolvedColor(value);
  if (color) return { kind: 'color', value: color };

  const dim = parseDimensionParts(value);
  if (!dim) return null;
  const resolved: ResolvedDimension = {
    type: 'dimension',
    value: dim.value,
    unit: dim.unit,
  };
  if (ROUND_NAME.test(name)) return { kind: 'rounded', value: resolved };
  if (SPACE_NAME.test(name)) return { kind: 'spacing', value: resolved };
  if (COLOR_NAME.test(name)) return null;
  return { kind: 'spacing', value: resolved };
}

// ── Tailwind v4 @theme prefix routing ───────────────────────────────

type ThemeSection =
  | { kind: 'color'; name: string }
  | { kind: 'spacing'; name: string }
  | { kind: 'rounded'; name: string }
  | { kind: 'typo'; name: string; prop: 'fontSize' | 'lineHeight' | 'letterSpacing' | 'fontWeight' | 'fontFamily' }
  | { kind: 'skip' };

function classifyThemeVar(rawName: string): ThemeSection {
  // Tailwind v4 uses `--category-name` where category is one of a fixed set.
  // `--color-primary` → color "primary"; `--spacing-bs-1` → spacing "bs-1".
  // Multi-word prefixes (`font-weight`) are matched first.
  const lower = rawName;

  if (lower.startsWith('font-weight-')) {
    return { kind: 'typo', name: lower.slice('font-weight-'.length), prop: 'fontWeight' };
  }
  if (lower.startsWith('color-')) return { kind: 'color', name: lower.slice('color-'.length) };
  if (lower.startsWith('spacing-')) return { kind: 'spacing', name: lower.slice('spacing-'.length) };
  if (lower.startsWith('radius-')) return { kind: 'rounded', name: lower.slice('radius-'.length) };
  if (lower.startsWith('rounded-')) return { kind: 'rounded', name: lower.slice('rounded-'.length) };
  if (lower.startsWith('font-')) return { kind: 'typo', name: lower.slice('font-'.length), prop: 'fontFamily' };
  if (lower.startsWith('text-')) return { kind: 'typo', name: lower.slice('text-'.length), prop: 'fontSize' };
  if (lower.startsWith('leading-')) return { kind: 'typo', name: lower.slice('leading-'.length), prop: 'lineHeight' };
  if (lower.startsWith('tracking-')) return { kind: 'typo', name: lower.slice('tracking-'.length), prop: 'letterSpacing' };
  return { kind: 'skip' };
}

function extractFirstFontFamily(value: string): string | null {
  const firstEntry = value.split(',')[0]?.trim();
  if (!firstEntry) return null;
  // Strip surrounding single or double quotes.
  const unquoted = firstEntry.replace(/^['"]|['"]$/g, '');
  return unquoted || null;
}

type TypographyProp = Extract<ThemeSection, { kind: 'typo' }>['prop'];

function absorbTypographyProp(
  buckets: Buckets,
  name: string,
  prop: TypographyProp,
  rawValue: string,
): void {
  const existing = buckets.typography.get(name) ?? ({ type: 'typography' } as ResolvedTypography);
  if (prop === 'fontFamily') {
    const family = extractFirstFontFamily(rawValue);
    if (family) existing.fontFamily = family;
  } else if (prop === 'fontWeight') {
    const n = Number.parseInt(rawValue.trim(), 10);
    if (!Number.isNaN(n)) existing.fontWeight = n;
  } else {
    const parts = parseDimensionParts(rawValue.trim());
    if (!parts) return;
    const dim: ResolvedDimension = { type: 'dimension', value: parts.value, unit: parts.unit };
    if (prop === 'fontSize') existing.fontSize = dim;
    else if (prop === 'lineHeight') existing.lineHeight = dim;
    else if (prop === 'letterSpacing') existing.letterSpacing = dim;
  }
  buckets.typography.set(name, existing);
}

function absorbThemeVar(buckets: Buckets, rawName: string, rawValue: string): void {
  const routed = classifyThemeVar(rawName);
  if (routed.kind === 'skip') return;

  const value = rawValue.trim();

  if (routed.kind === 'color') {
    const color = hexToResolvedColor(value);
    if (color) buckets.colors.set(routed.name, color);
    return;
  }
  if (routed.kind === 'spacing' || routed.kind === 'rounded') {
    const parts = parseDimensionParts(value);
    if (!parts) return;
    const dim: ResolvedDimension = { type: 'dimension', value: parts.value, unit: parts.unit };
    if (routed.kind === 'rounded') buckets.rounded.set(routed.name, dim);
    else buckets.spacing.set(routed.name, dim);
    return;
  }
  // routed.kind === 'typo'
  absorbTypographyProp(buckets, routed.name, routed.prop, rawValue);
}

function absorbRootVar(buckets: Buckets, rawName: string, rawValue: string): void {
  const classified = classifyRootVar(rawName, rawValue);
  if (!classified) return;
  if (classified.kind === 'color') buckets.colors.set(rawName, classified.value);
  else if (classified.kind === 'rounded') buckets.rounded.set(rawName, classified.value);
  else buckets.spacing.set(rawName, classified.value);
}

// ── Icon CSS variable classification ────────────────────────────────

type IconUpdate =
  | {
      library?: string;
      style?: string;
      strokeWidth?: number;
      grid?: string;
      color?: string;
      sizeEntry?: undefined;
    }
  | { sizeEntry: [string, string] };

function stripQuotes(v: string): string {
  if (
    v.length >= 2 &&
    ((v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'")))
  ) {
    return v.slice(1, -1).trim();
  }
  return v;
}

/**
 * Classify a single `--icon-*` CSS variable. Returns a structured
 * update applied to the accumulating IconsData, or null if the name
 * is not recognized as an icon variable. The `name` argument is the
 * variable name with the leading `--` already stripped.
 */
function classifyIconVar(name: string, rawValue: string): IconUpdate | null {
  if (!name.startsWith('icon-') && name !== 'icon') return null;
  const value = stripQuotes(rawValue.trim());

  if (name === 'icon-library') return { library: value };
  if (name === 'icon-style') return { style: value };
  if (name === 'icon-stroke-width' || name === 'icon-stroke') {
    const n = Number(value);
    if (!Number.isFinite(n)) return null;
    return { strokeWidth: n };
  }
  // `grid` is stored as a raw string (not parsed into a Dimension)
  // because it round-trips into YAML frontmatter verbatim, matching the
  // shape the spec's icons-token group expects (`grid: "24px"`).
  if (name === 'icon-grid') return { grid: value };
  if (name === 'icon-color') return { color: value };

  if (name === 'icon-size') return { sizeEntry: ['md', value] };
  if (name.startsWith('icon-size-')) {
    const bucket = name.slice('icon-size-'.length);
    if (!bucket) return null;
    return { sizeEntry: [bucket, value] };
  }
  return null;
}

function applyIconUpdate(icons: IconsData, update: IconUpdate): void {
  if ('sizeEntry' in update && update.sizeEntry) {
    if (!icons.size) icons.size = new Map();
    icons.size.set(update.sizeEntry[0], update.sizeEntry[1]);
    return;
  }
  if (update.library !== undefined) icons.library = update.library;
  if (update.style !== undefined) icons.style = update.style;
  if (update.strokeWidth !== undefined) icons.strokeWidth = update.strokeWidth;
  if (update.grid !== undefined) icons.grid = update.grid;
  if (update.color !== undefined) icons.color = update.color;
}

function hasAnyIcon(icons: IconsData): boolean {
  return !!(
    icons.library ||
    icons.style ||
    icons.strokeWidth !== undefined ||
    icons.grid ||
    icons.color ||
    (icons.size && icons.size.size > 0)
  );
}

// ── Block extraction ────────────────────────────────────────────────

const VAR_RE = /--([a-zA-Z0-9_-]+)\s*:\s*([^;]+);/g;

/**
 * Find all top-level blocks that match the given block-prefix regex and
 * return an array of their bodies. Handles nested braces safely.
 */
function extractBlocks(src: string, startPattern: RegExp): string[] {
  const bodies: string[] = [];
  let match: RegExpExecArray | null;
  const pattern = new RegExp(startPattern.source, 'g');
  while ((match = pattern.exec(src)) !== null) {
    const openIdx = src.indexOf('{', match.index + match[0].length - 1);
    if (openIdx === -1) continue;
    let depth = 1;
    let i = openIdx + 1;
    while (i < src.length && depth > 0) {
      const ch = src[i];
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
      i++;
    }
    if (depth === 0) {
      bodies.push(src.slice(openIdx + 1, i - 1));
      pattern.lastIndex = i;
    }
  }
  return bodies;
}

const ROOT_BLOCK_START = /(?::root|:where\(\s*:root\s*\))\s*\{/;
const THEME_BLOCK_START = /@theme(?:\s+inline)?\s*\{/;

function iterVars(body: string, visit: (name: string, value: string) => void): void {
  VAR_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = VAR_RE.exec(body)) !== null) {
    visit(m[1]!, m[2]!);
  }
}

// ── Public API ──────────────────────────────────────────────────────

export function parseCssVariablesFromString(src: string): PartialState {
  const buckets = emptyBuckets();
  const icons: IconsData = {};

  for (const body of extractBlocks(src, THEME_BLOCK_START)) {
    iterVars(body, (name, value) => {
      // Icon classifier MUST run first: --icon-size-sm: 16px would
      // otherwise be double-counted as generic spacing.
      const iconUpdate = classifyIconVar(name, value);
      if (iconUpdate) {
        applyIconUpdate(icons, iconUpdate);
        return;
      }
      absorbThemeVar(buckets, name, value);
    });
  }

  for (const body of extractBlocks(src, ROOT_BLOCK_START)) {
    iterVars(body, (name, value) => {
      const iconUpdate = classifyIconVar(name, value);
      if (iconUpdate) {
        applyIconUpdate(icons, iconUpdate);
        return;
      }
      absorbRootVar(buckets, name, value);
    });
  }

  return {
    colors: buckets.colors,
    spacing: buckets.spacing,
    rounded: buckets.rounded,
    typography: buckets.typography,
    ...(hasAnyIcon(icons) ? { icons } : {}),
  };
}

export function parseCssVariables(absPath: string): PartialState {
  try {
    return parseCssVariablesFromString(readFileSync(absPath, 'utf-8'));
  } catch (err) {
    return {
      colors: new Map(),
      spacing: new Map(),
      rounded: new Map(),
      typography: new Map(),
      warnings: [`failed to read ${absPath}: ${(err as Error).message}`],
    };
  }
}
