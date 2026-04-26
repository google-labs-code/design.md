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

import { z } from 'zod';
import type { ParsedDesignSystem, DocumentSection } from '../parser/spec.js';
import {
  STANDARD_UNITS as _STANDARD_UNITS,
  VALID_TYPOGRAPHY_PROPS as _VALID_TYPOGRAPHY_PROPS,
  VALID_COMPONENT_SUB_TOKENS as _VALID_COMPONENT_SUB_TOKENS,
} from '../spec-config.js';

export const SeveritySchema = z.enum(['error', 'warning', 'info']);
export type Severity = z.infer<typeof SeveritySchema>;

export interface Finding {
  severity: Severity;
  path?: string;
  message: string;
}

// ── RESOLVED VALUE TYPES ───────────────────────────────────────────
export interface ResolvedColor {
  type: 'color';
  hex: string;
  r: number;
  g: number;
  b: number;
  /** Alpha channel from 0 to 1. Optional, defaults to 1 if not present. */
  a?: number;
  /** WCAG relative luminance */
  luminance: number;
  /** If this color was derived as a ramp step, its provenance. */
  rampMember?: { ramp: string; step: number };
  /** If this color is a pair member, the pair name and its role. */
  pairRole?: { pair: string; role: 'container' | 'on-container' };
  /** Optional human-readable name (e.g., "Boston Clay") attached to ramp anchors. */
  humanName?: string;
}

/**
 * A ramp's structural metadata after resolution. Step values are also stored
 * flat in `state.colors` keyed as `<rampName>.<step>`; this map is for rules
 * and exporters that need the original grouping.
 */
export interface RampDef {
  name: string;
  anchor: ResolvedColor;
  humanName?: string;
  description?: string;
  steps: Map<number, ResolvedColor>;
  /** Inline pair derivations declared on the ramp (e.g., container → step 100/800). */
  pairs: Map<string, { bg: number; fg: number }>;
}

/**
 * A pair's structural metadata. Members are also stored flat in `state.colors`
 * keyed as `<pairName>.container` / `<pairName>.onContainer`. For ramp-inline
 * pairs, additional flat aliases `<rampName>-<pairKey>` and `on-<rampName>-<pairKey>`
 * are also synthesized for back-compat with M3-style naming.
 */
export interface PairDef {
  name: string;
  container: ResolvedColor;
  onContainer: ResolvedColor;
  minContrast: number;
  /** True if this pair was derived inline on a ramp. */
  derivedFromRamp?: string;
}

export interface ResolvedDimension {
  type: 'dimension';
  value: number;
  /** The unit string. Standard units are 'px' and 'rem'; others are preserved but flagged by the linter. */
  unit: string;
}

export interface ResolvedTypography {
  type: 'typography';
  fontFamily?: string | undefined;
  fontSize?: ResolvedDimension | undefined;
  fontWeight?: number | undefined;
  lineHeight?: ResolvedDimension | undefined;
  letterSpacing?: ResolvedDimension | undefined;
  fontFeature?: string | undefined;
  fontVariation?: string | undefined;
}

/**
 * Semantic elevation token — a CSS shadow string (e.g., "0 4px 8px rgba(0,0,0,0.08)").
 * Components reference elevation via `shadow: "{elevation.raised}"` or `elevation: raised`.
 */
export interface ResolvedShadow {
  type: 'shadow';
  /** The raw CSS shadow string. */
  raw: string;
}

/** Resolved CSS border shorthand `<width> <style> <color>`. */
export interface ResolvedBorder {
  type: 'border';
  width: ResolvedDimension;
  style: string;
  color: ResolvedColor;
  /** The original raw shorthand string, preserved for exporters. */
  raw: string;
}

/**
 * A motion duration token. The unit is `ms` or `s`; numeric value is the
 * count in that unit. Renderers can convert with `value * (unit === 's' ? 1000 : 1)`.
 */
export interface ResolvedDuration {
  type: 'duration';
  value: number;
  unit: 'ms' | 's';
}

/**
 * A motion easing token — either a CSS keyword (`linear`, `ease-in`, ...)
 * or a `cubic-bezier(...)` literal. The four control points are extracted
 * for cubic-bezier values to support DTCG `cubicBezier` token emission.
 */
export interface ResolvedEasing {
  type: 'easing';
  /** The raw CSS easing string, preserved for exporters. */
  raw: string;
  /** When `raw` is a `cubic-bezier(x1, y1, x2, y2)`, the four control points. */
  controlPoints?: [number, number, number, number];
}

export type ResolvedValue =
  | ResolvedColor
  | ResolvedDimension
  | ResolvedTypography
  | ResolvedShadow
  | ResolvedBorder
  | ResolvedDuration
  | ResolvedEasing
  | string;

// ── Re-exported from spec-config (single source of truth) ─────────
export const VALID_TYPOGRAPHY_PROPS = _VALID_TYPOGRAPHY_PROPS;
export const VALID_COMPONENT_SUB_TOKENS = _VALID_COMPONENT_SUB_TOKENS;

/**
 * A resolved registry entry. When `componentRegistry` is present in the
 * `DesignSystemState`, it constitutes the closed set of valid component names
 * for the design system; any name outside the registry is a `unbound-component`
 * violation.
 */
export interface RegistryEntry {
  name: string;
  /** Kind drives default behaviors (e.g., interactivity). */
  kind?: string;
  /** Final interactivity flag — explicit setting wins over kind default. */
  interactive: boolean;
  /** Property names the matching definition must set. */
  requiredProperties: string[];
  /** Composition target — pre-merge that entry's definition before overrides. */
  composes?: string;
}

// ── VOICE + COPY ───────────────────────────────────────────────────

/**
 * Resolved voice block. Axes are validated to integers 1–5; out-of-range
 * values produce an error finding and the axis is omitted.
 */
export interface Voice {
  /** Numeric voice dials (formality, warmth, authority, playfulness). */
  axes: Map<string, number>;
  /** Grammatical person — first | second | third. */
  person?: string;
  /** Tense / voice descriptor, e.g. "present-active". Free-form. */
  tense?: string;
  /** Whether prose uses the Oxford comma. Recorded as a brand fact, not enforced. */
  oxfordComma?: boolean;
  /** "permitted" | "avoided" | "forbidden". Free-form for v1. */
  contractions?: string;
}

/** A precompiled banned-regex entry. */
export interface BannedRegex {
  /** Original source string for use in messages. */
  source: string;
  /** Compiled regex (global, line-oriented). */
  pattern: RegExp;
}

/**
 * Resolved copy block. Validated against the casing/title-case enums.
 * Banned regexes are pre-compiled once during model build so each lint pass
 * is allocation-free.
 */
export interface Copy {
  /** Per-surface casing convention (button, nav, section-heading, ...). */
  casing: Map<string, string>;
  buttonLabelMaxWords?: number;
  errorPattern?: string;
  emptyStateTone?: string;
  bannedTerms: string[];
  bannedRegex: BannedRegex[];
  /** canonical → required form. Whole-word match against canonical. */
  approvedTerms: Map<string, string>;
  /** Product / feature names that must never be lowercased / hyphenated. */
  reservedNames: string[];
  /** Optional title-case overrides (extra minor words / proper nouns). */
  titleCaseExceptions?: string[];
  knownProperNouns?: string[];
}

// ── THEMES ─────────────────────────────────────────────────────────

/**
 * Per-theme contrast targets. Defaults to WCAG AA when a theme does not
 * declare its own targets. AAA-style themes (e.g., `high-contrast`) typically
 * raise `body` to 7 and `ui` to 4.5.
 */
export interface ThemeContrastTarget {
  body: number;
  large: number;
  ui: number;
}

/** Default contrast target — WCAG AA. */
export const DEFAULT_CONTRAST_TARGET: ThemeContrastTarget = {
  body: 4.5,
  large: 3,
  ui: 3,
};

/**
 * A theme's resolved view of the token tree. Ramps and pairs are re-resolved
 * per theme so the same name can carry different values across themes
 * (`{colors.primary}` is one hex in `light`, another in `dark`).
 *
 * `light` is always present as the implicit base; named themes deep-merge
 * their overrides on top.
 */
export interface ThemeView {
  name: string;
  /** Optional parent theme. `undefined` = the implicit `light` base. */
  inheritsFrom?: string | undefined;
  description?: string | undefined;
  colors: Map<string, ResolvedColor>;
  typography: Map<string, ResolvedTypography>;
  rounded: Map<string, ResolvedDimension>;
  spacing: Map<string, ResolvedDimension>;
  elevation: Map<string, ResolvedShadow>;
  /** Re-resolved per theme so ramp anchors and steps reflect theme overrides. */
  colorRamps: Map<string, RampDef>;
  /** Re-resolved per theme so pair members reflect theme overrides. */
  colorPairs: Map<string, PairDef>;
  /**
   * Color names this theme *explicitly* declared in its overrides, distinct
   * from values that inherit unchanged from the parent. The `theme-parity`
   * rule uses this to catch colors that were silently inherited (the
   * "added a new color, forgot to override it for dark mode" failure).
   */
  explicitColorOverrides: Set<string>;
  /** Per-theme contrast target. Defaults to WCAG AA. */
  contrastTarget: ThemeContrastTarget;
}

// ── RESPONSIVE / LAYOUT ────────────────────────────────────────────

/**
 * Resolved breakpoints block. `philosophy` records whether the system is
 * mobile-first (base styles target the smallest viewport, larger breakpoints
 * are progressive enhancements) or desktop-first (the inverse). `values`
 * maps a breakpoint key (sm, md, lg, xl, 2xl, ...) to a resolved Dimension.
 */
export interface BreakpointsState {
  philosophy: string;
  values: Map<string, ResolvedDimension>;
}

/**
 * Resolved grid block. `gutter` and the per-key `margin` entries are
 * Dimensions resolved through the spacing token table. `bleedExceptions` is
 * the (informational) allow-list of region names that may break out of the
 * grid (full-bleed hero, modal overlay).
 */
export interface GridState {
  columns: number;
  gutter?: ResolvedDimension;
  margin: Map<string, ResolvedDimension>;
  maxWidth?: ResolvedDimension;
  bleedExceptions: string[];
}

/**
 * Resolved layout-rule primitives. `contentMaxWidth` enforces a readable
 * measure (~60–80 char) for body prose; `stackSpacing` is the default
 * vertical rhythm; `formFieldWidth` is the canonical form-field width.
 */
export interface LayoutRulesState {
  contentMaxWidth?: ResolvedDimension;
  stackSpacing?: ResolvedDimension;
  formFieldWidth?: ResolvedDimension;
}

/**
 * Resolved page-template definition. `regions` lists the named regions a
 * template instance may declare; `requiredRegions` is the subset that must
 * be present. `extra` carries additional, exporter-readable properties
 * (`maxWidth`, `sidebarWidth`, `container`).
 */
export interface TemplateDef {
  name: string;
  regions: string[];
  requiredRegions: string[];
  maxWidth?: ResolvedDimension;
  sidebarWidth?: ResolvedDimension;
  container?: string;
  extras: Map<string, unknown>;
}

/** Resolved page → template assignment. */
export interface PageDef {
  pattern: string;
  template: string;
  /** Optional explicit region declarations (consumed by `missing-region`). */
  regions?: string[];
}

// ── STATE ──────────────────────────────────────────────────────────
export interface DesignSystemState {
  name?: string | undefined;
  description?: string | undefined;
  /**
   * Flat color map. Anchors live at `<name>`; ramp steps at `<name>.<step>`;
   * pair members at `<pairName>.container` / `<pairName>.onContainer`; and
   * inline-pair flat aliases at `<rampName>-<pairKey>` / `on-<rampName>-<pairKey>`.
   * Each entry's provenance (if any) is on the `ResolvedColor` itself.
   */
  colors: Map<string, ResolvedColor>;
  typography: Map<string, ResolvedTypography>;
  rounded: Map<string, ResolvedDimension>;
  spacing: Map<string, ResolvedDimension>;
  /**
   * Semantic elevation tokens. Keys are typically `resting`, `raised`,
   * `overlay`, `modal`. Values carry the raw CSS shadow string.
   */
  elevation: Map<string, ResolvedShadow>;
  /**
   * Motion primitives. `duration` carries timing tokens (ms or s),
   * `easing` carries CSS easings, and `reducedMotion` is the optional
   * fallback applied under `prefers-reduced-motion`.
   */
  motion: MotionState;
  /**
   * Iconography. A single library reference per system plus the size
   * scale, stroke weight, and color-binding rule.
   */
  iconography?: IconographyState | undefined;
  components: Map<string, ComponentDef>;
  /**
   * Closed-world registry of component names. Absent = open-world (back-compat);
   * present = the closed set of valid names.
   */
  componentRegistry?: Map<string, RegistryEntry> | undefined;
  /** Ramp definitions, keyed by ramp name. */
  colorRamps: Map<string, RampDef>;
  /** Pair definitions, keyed by pair name. */
  colorPairs: Map<string, PairDef>;
  /**
   * Resolved per-theme views, keyed by theme name. Always contains the
   * implicit `light` base view that mirrors the top-level fields. Other
   * theme views are deep-merge results of their declared overrides on top
   * of their `inheritsFrom` parent (default: `light`).
   */
  themes: Map<string, ThemeView>;
  /**
   * Currently-active theme name. Top-level `colors`/`typography`/etc. are
   * mirrors of this theme's view. Defaults to `light`. Rules that operate
   * on the active theme (the existing single-theme rules) keep working
   * unchanged; rules that need cross-theme reasoning iterate `themes`.
   */
  activeTheme: string;
  /** Flat lookup: "colors.primary" → ResolvedValue (active theme). */
  symbolTable: Map<string, ResolvedValue>;
  /** Markdown heading names found in the document */
  sections?: string[] | undefined;
  /** Partitioned markdown body, used by prose-aware rules. */
  documentSections?: DocumentSection[] | undefined;
  /**
   * Reverse index from a normalized hex (lowercased, expanded to #rrggbb or
   * #rrggbbaa) to every token whose value resolved to that hex. Used by the
   * `prose-token-mismatch` rule to verify hex literals in prose against
   * declared token values.
   */
  colorIndex: Map<string, ColorIndexEntry[]>;
  /** Voice dials and grammatical defaults. Optional. */
  voice?: Voice | undefined;
  /** Content rules — banned/approved terms, casing, error pattern, etc. Optional. */
  copy?: Copy | undefined;
  /** Responsive breakpoints. Optional. Absent = no responsive contract. */
  breakpoints?: BreakpointsState | undefined;
  /** Grid system (columns, gutter, margin, maxWidth). Optional. */
  grid?: GridState | undefined;
  /** Layout-rule primitives (readable measure, stack spacing, form width). */
  layoutRules?: LayoutRulesState | undefined;
  /**
   * Page-template registry. Keys are template names. Absent = open-world
   * (no `unknown-template` enforcement).
   */
  templates?: Map<string, TemplateDef> | undefined;
  /** Page → template assignments. Keys are route patterns. */
  pages?: Map<string, PageDef> | undefined;
}

export interface ColorIndexEntry {
  /** The token's symbol-table path, e.g. "colors.primary" or "colors.brand.500". */
  path: string;
  /** The token key relative to `colors.`, e.g. "primary" or "brand.500". */
  tokenKey: string;
  /** Optional human-readable name (e.g., "Boston Clay") attached to ramp anchors. */
  humanName?: string;
}

export interface ComponentDef {
  /** Base property values (rest state). */
  properties: Map<string, ResolvedValue>;
  /** Whether the component is interactive (drives state requirements). */
  interactive?: boolean | undefined;
  /**
   * State-only overrides. Each entry maps a state name to the properties that
   * differ from the base.
   */
  states: Map<string, Map<string, ResolvedValue>>;
  /**
   * Effective property maps per state — `properties` ⊕ each state's overrides.
   * Computed once during model build so downstream rules and exporters do
   * not reimplement merging.
   */
  resolvedStates: Map<string, Map<string, ResolvedValue>>;
  /** Unresolved references that failed to resolve */
  unresolvedRefs: string[];
  /**
   * Token paths the component referenced (whole-value or embedded). Recorded
   * pre-resolution so usage-aware rules (e.g., `orphaned-tokens`) can see
   * references that get substituted out of the resolved property value.
   */
  referencedTokens: string[];
  /**
   * Per-property whole-value token references, recorded pre-resolution.
   * Keyed by property name (`backgroundColor`); value is the bare path
   * (e.g., `colors.primary`). Per-theme rules use this to re-resolve a
   * property's color through the relevant theme's color map without
   * keeping the raw markdown around.
   */
  propertyRefs: Map<string, string>;
  /**
   * Per-state whole-value token references, recorded pre-resolution.
   * Outer key: state name (`hover`, `focus-visible`, ...). Inner key:
   * property name. Inner value: the bare path (e.g., `colors.primary`).
   */
  stateRefs: Map<string, Map<string, string>>;
}

/**
 * Resolved motion state. `duration` and `easing` are independently keyed
 * sub-maps. `reducedMotion` carries the names of the motion tokens that
 * become the active values under `prefers-reduced-motion` (the names are
 * resolved against `duration` / `easing` at consume time so authors can
 * see the canonical token instead of a duplicated literal).
 */
export interface MotionState {
  duration: Map<string, ResolvedDuration>;
  easing: Map<string, ResolvedEasing>;
  reducedMotion?: { duration: string; easing: string };
}

/** Resolved iconography state. */
export interface IconographyState {
  library: { name: string; version?: string; style: 'outlined' | 'filled' };
  strokeWeight?: ResolvedDimension;
  sizes: Map<string, ResolvedDimension>;
  defaultSize: string;
  /** `currentColor` (default), a hex literal, or a `{colors.*}` reference string. */
  colorBinding: string;
}

// ── ERROR CODES ────────────────────────────────────────────────────
export const ModelErrorCode = z.enum([
  'INVALID_COLOR',
  'INVALID_DIMENSION',
  'INVALID_TYPOGRAPHY_PROP',
  'UNRESOLVED_REFERENCE',
  'CIRCULAR_REFERENCE',
  'REFERENCE_TO_NON_PRIMITIVE',
  'UNKNOWN_ERROR',
]);

// ── RESULT ─────────────────────────────────────────────────────────
export interface ModelResult {
  designSystem: DesignSystemState;
  findings: Finding[];
}

// ── INTERFACE ──────────────────────────────────────────────────────
export interface ModelSpec {
  execute(input: ParsedDesignSystem): ModelResult;
}

// ── VALIDATION HELPERS ─────────────────────────────────────────────

/** Units the spec formally supports. Sourced from spec-config.ts. */
const STANDARD_UNITS: Set<string> = new Set(_STANDARD_UNITS);

/**
 * All known CSS length/percentage units.
 * Adding a new CSS unit = one string here. Never edit a regex.
 */
const CSS_UNITS = new Set([
  // Absolute
  'px', 'cm', 'mm', 'in', 'pt', 'pc',
  // Relative to font
  'em', 'rem', 'ex', 'ch', 'cap', 'ic', 'lh', 'rlh',
  // Viewport — classic
  'vh', 'vw', 'vmin', 'vmax',
  // Viewport — dynamic/small/large (CSS Level 4)
  'dvh', 'dvw', 'dvmin', 'dvmax',
  'svh', 'svw', 'svmin', 'svmax',
  'lvh', 'lvw', 'lvmin', 'lvmax',
  // Container query units
  'cqw', 'cqh', 'cqi', 'cqb', 'cqmin', 'cqmax',
  // Percentage
  '%',
]);

/**
 * Parse a dimension string into its numeric value and unit suffix.
 * Accepts an optional leading sign and optional decimal (`.5rem` is valid).
 * Returns null for non-dimension strings (bare numbers, keywords like `auto`).
 */
export function parseDimensionParts(raw: string): { value: number; unit: string } | null {
  const match = raw.match(/^(-?\d*\.?\d+)([a-zA-Z%]+)$/);
  if (!match) return null;
  const value = parseFloat(match[1]!);
  return Number.isNaN(value) ? null : { value, unit: match[2]! };
}

/**
 * Validate a hex color string. Accepts #RGB, #RGBA, #RRGGBB, and #RRGGBBAA.
 */
export function isValidColor(raw: string): boolean {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(raw);
}

/**
 * Validate a dimension string uses a spec-standard unit (px or rem only).
 */
export function isStandardDimension(raw: string): boolean {
  const parts = parseDimensionParts(raw);
  return parts !== null && STANDARD_UNITS.has(parts.unit);
}

/**
 * Check if a dimension string is parseable (any known CSS length/percentage unit).
 * Adding support for a new unit: add it to CSS_UNITS above.
 */
export function isParseableDimension(raw: string): boolean {
  const parts = parseDimensionParts(raw);
  return parts !== null && CSS_UNITS.has(parts.unit);
}

/**
 * @deprecated Use isStandardDimension for spec compliance or isParseableDimension for generous parsing.
 */
export const isValidDimension = isStandardDimension;

/**
 * Check if a string is a token reference ({section.token}).
 */
export function isTokenReference(raw: string): boolean {
  return /^\{[a-zA-Z0-9._-]+\}$/.test(raw);
}

/**
 * Parse a duration string (ms or s) into a numeric value + unit.
 * Returns null for non-duration strings (other CSS units, keywords, refs).
 */
export function parseDurationParts(raw: string): { value: number; unit: 'ms' | 's' } | null {
  const parts = parseDimensionParts(raw);
  if (!parts) return null;
  if (parts.unit !== 'ms' && parts.unit !== 's') return null;
  return { value: parts.value, unit: parts.unit };
}

/**
 * Validate a CSS easing string. Accepts:
 *   - keywords: linear, ease, ease-in, ease-out, ease-in-out, step-start, step-end
 *   - `cubic-bezier(x1, y1, x2, y2)` with four numeric control points
 *   - `steps(<int>[, <position>])`
 * Returns the parsed cubic-bezier control points when present, or `null`
 * when the easing is keyword-only / steps(...) / unparseable.
 */
const EASING_KEYWORD_SET = new Set([
  'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out',
  'step-start', 'step-end',
]);

export function isValidEasing(raw: string): boolean {
  const trimmed = raw.trim();
  if (EASING_KEYWORD_SET.has(trimmed)) return true;
  if (parseCubicBezier(trimmed) !== null) return true;
  if (/^steps\s*\(\s*\d+\s*(,\s*[a-z-]+\s*)?\)$/i.test(trimmed)) return true;
  return false;
}

/**
 * Parse `cubic-bezier(x1, y1, x2, y2)` into its four control points.
 * Returns null if the input is not a cubic-bezier literal.
 */
export function parseCubicBezier(raw: string): [number, number, number, number] | null {
  const match = raw.trim().match(/^cubic-bezier\s*\(\s*(-?\d*\.?\d+)\s*,\s*(-?\d*\.?\d+)\s*,\s*(-?\d*\.?\d+)\s*,\s*(-?\d*\.?\d+)\s*\)$/);
  if (!match) return null;
  const points: number[] = [];
  for (let i = 1; i <= 4; i++) {
    const n = parseFloat(match[i]!);
    if (Number.isNaN(n)) return null;
    points.push(n);
  }
  return [points[0]!, points[1]!, points[2]!, points[3]!];
}
