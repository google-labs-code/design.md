import { z } from 'zod';
import type { ParsedDesignSystem } from '../parser/spec.js';
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
  /** WCAG relative luminance */
  luminance: number;
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

export type ResolvedValue = ResolvedColor | ResolvedDimension | ResolvedTypography | string;

// ── Re-exported from spec-config (single source of truth) ─────────
export const VALID_TYPOGRAPHY_PROPS = _VALID_TYPOGRAPHY_PROPS;
export const VALID_COMPONENT_SUB_TOKENS = _VALID_COMPONENT_SUB_TOKENS;

// ── STATE ──────────────────────────────────────────────────────────
export interface DesignSystemState {
  name?: string | undefined;
  description?: string | undefined;
  colors: Map<string, ResolvedColor>;
  typography: Map<string, ResolvedTypography>;
  rounded: Map<string, ResolvedDimension>;
  spacing: Map<string, ResolvedDimension>;
  components: Map<string, ComponentDef>;
  /** Flat lookup: "colors.primary" → ResolvedColor */
  symbolTable: Map<string, ResolvedValue>;
  /** Markdown heading names found in the document */
  sections?: string[] | undefined;
}

export interface ComponentDef {
  properties: Map<string, ResolvedValue>;
  /** Unresolved references that failed to resolve */
  unresolvedRefs: string[];
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
 * Validate a hex color string. Accepts #RGB and #RRGGBB.
 */
export function isValidColor(raw: string): boolean {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(raw);
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
