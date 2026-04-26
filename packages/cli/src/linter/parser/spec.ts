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

// ── INPUT ──────────────────────────────────────────────────────────
export const ParserInputSchema = z.object({
  /** Raw DESIGN.md content (or standalone YAML string) */
  content: z.string().min(1, 'Content must not be empty'),
});
export type ParserInput = z.infer<typeof ParserInputSchema>;

// ── ERROR CODES ────────────────────────────────────────────────────
export const ParserErrorCode = z.enum([
  'EMPTY_CONTENT',
  'NO_YAML_FOUND',
  'YAML_PARSE_ERROR',
  'DUPLICATE_SECTION',
  'UNKNOWN_ERROR',
]);

// ── OUTPUT ──────────────────────────────────────────────────────────
export interface SourceLocation {
  line: number;
  column: number;
  block: 'frontmatter' | number;
}

/**
 * A ramp declaration: an anchor color plus a derived scale of steps.
 * Steps are interpolated in OKLCH from the anchor toward white (lighter steps)
 * and toward black (darker steps). The anchor occupies step 500 by default.
 */
export interface RawRampDef {
  type: 'ramp';
  anchor: string;
  /** Optional human-readable name (e.g., "Boston Clay") used by prose validation. */
  humanName?: string;
  description?: string;
  /** Reserved for future curves (apca, lightness-linear). Default: oklch. */
  curve?: 'oklch';
  /** Numeric steps to derive. Default: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]. */
  steps?: number[];
  /** Inline derivation of pair tokens (e.g., container/on-container) from steps. */
  pairs?: Record<string, { bg: number; fg: number }>;
}

/**
 * A pair declaration: a container color and its paired foreground.
 * The two members satisfy a minimum contrast invariant (`minContrast`).
 */
export interface RawPairDef {
  type: 'pair';
  container: string;
  onContainer: string;
  /** WCAG ratio floor. Default: 4.5 (AA body text). */
  minContrast?: number;
}

export type RawColorValue = string | RawRampDef | RawPairDef;

/**
 * Raw motion block (mirrors the YAML schema). Durations and easings live in
 * separate sub-maps; `reducedMotion` declares the fallback applied under
 * `prefers-reduced-motion`.
 */
export interface RawMotionDef {
  duration?: Record<string, string>;
  easing?: Record<string, string>;
  reducedMotion?: { duration?: string; easing?: string };
}

/**
 * Raw iconography block (mirrors the YAML schema). One library/style per
 * system; `sizes` is the icon-size scale referenced by `iconSize:` on
 * components.
 */
export interface RawIconographyDef {
  library?: { name: string; version?: string; style?: string };
  strokeWeight?: string;
  sizes?: Record<string, string>;
  defaultSize?: string;
  colorBinding?: string;
}

/**
 * A registry entry — the closed-world declaration that a component name is part
 * of the design system. Adding an entry is a deliberate, reviewable act.
 */
export interface RawRegistryEntry {
  name: string;
  /** Component kind (button, input, container, etc.). Drives default behaviors. */
  kind?: string;
  /** Override the kind's default interactivity. */
  interactive?: boolean;
  /** Properties the matching definition must set. */
  requiredProperties?: string[];
  /** Pre-merge another entry's definition before resolving overrides. */
  composes?: string;
}

/**
 * A raw component property value as it appears in YAML.
 * Most properties are scalars; `states` is a nested map of state-name →
 * state-property-map (each property a primitive); `interactive` is a boolean.
 * The recursive shape covers both layers without losing strictness.
 */
export type RawComponentValue =
  | string
  | number
  | boolean
  | { [key: string]: RawComponentValue };

/** Raw, unresolved parsed output — mirrors the YAML schema */
export interface ParsedDesignSystem {
  name?: string | undefined;
  description?: string | undefined;
  colors?: Record<string, RawColorValue> | undefined;
  typography?: Record<string, Record<string, string | number>> | undefined;
  rounded?: Record<string, string> | undefined;
  spacing?: Record<string, string> | undefined;
  /**
   * Semantic elevation tokens (resting / raised / overlay / modal). Values
   * are CSS shadow strings; component `shadow` props reference them via
   * `{elevation.<name>}`.
   */
  elevation?: Record<string, string> | undefined;
  /**
   * Motion primitives — durations, easings, and the reduced-motion fallback.
   * Components reference them via `{motion.duration.*}` / `{motion.easing.*}`
   * inside `transition:` shorthands.
   */
  motion?: RawMotionDef | undefined;
  /**
   * Iconography — library reference, size scale, stroke weight, color
   * binding. Components reference sizes via `{iconography.sizes.*}` on
   * `iconSize:`.
   */
  iconography?: RawIconographyDef | undefined;
  components?: Record<string, Record<string, RawComponentValue>> | undefined;
  /**
   * Closed-world registry of component names. When present, every entry in
   * `components` (the definitions) must correspond to a registry entry.
   * Absent = open-world (back-compat) behavior.
   */
  componentRegistry?: RawRegistryEntry[] | undefined;
  sourceMap: Map<string, SourceLocation>;
  /** Markdown heading names found in the document (e.g., 'Colors', 'Typography') */
  sections?: string[] | undefined;
  /** Full content of each section, including heading and body. */
  documentSections?: DocumentSection[] | undefined;
}

/**
 * A suppression directive parsed from `<!-- design.md ... -->` HTML comments.
 * `rule` is the rule name, or `*` for all rules. Line numbers are document-wide
 * and 1-based; both `fromLine` and `toLine` are inclusive.
 */
export interface SuppressionDirective {
  rule: string;
  fromLine: number;
  toLine: number;
}

/** A line range, 1-based, inclusive on both ends. */
export interface LineRange {
  startLine: number;
  endLine: number;
}

/** A document section partitioned by H2 heading. */
export interface DocumentSection {
  /** The heading text, or '' for the prelude before the first H2. */
  heading: string;
  /** The full content of the section, including its heading line. */
  content: string;
  /** 1-based line number of the section's first line in the original document. */
  startLine: number;
  /** 1-based line number of the section's last line in the original document. */
  endLine: number;
  /**
   * Suppression directives parsed from HTML comments inside the section.
   * Line numbers are absolute (document-wide), 1-based, inclusive.
   */
  suppressions: SuppressionDirective[];
  /**
   * Fenced code block ranges within the section. Used by prose-aware rules
   * to skip content that is intentionally illustrative rather than authored
   * narrative. Line numbers are absolute (document-wide), 1-based, inclusive.
   */
  codeBlockRanges: LineRange[];
}

// ── RESULT ─────────────────────────────────────────────────────────
export type ParserResult =
  | { success: true; data: ParsedDesignSystem }
  | {
      success: false;
      error: {
        code: z.infer<typeof ParserErrorCode>;
        message: string;
        recoverable: boolean;
      };
    };

// ── INTERFACE ──────────────────────────────────────────────────────
export interface ParserSpec {
  execute(input: ParserInput): ParserResult;
}
