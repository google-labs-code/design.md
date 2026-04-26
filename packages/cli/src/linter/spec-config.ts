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
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import { z } from 'zod';

/**
 * DESIGN.md Spec Configuration
 *
 * THE single source of truth for the DESIGN.md format specification.
 * Both the linter and the spec generator read from this file.
 *
 * To change what the spec says:
 *   1. Edit spec-config.yaml
 *   2. Run `bun run spec:gen` to regenerate docs/spec.md
 *   3. Run `bun test` to verify linter alignment
 */

// ── Schema ────────────────────────────────────────────────────────────

const PropertyDefSchema = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string().optional(),
});

const MotionExampleSchema = z.object({
  duration: z.record(z.string(), z.string()),
  easing: z.record(z.string(), z.string()),
  reducedMotion: z.object({
    duration: z.string(),
    easing: z.string(),
  }).optional(),
});

const IconographyExampleSchema = z.object({
  library: z.object({
    name: z.string(),
    version: z.string().optional(),
    style: z.string(),
  }),
  strokeWeight: z.string().optional(),
  sizes: z.record(z.string(), z.string()),
  defaultSize: z.string(),
  colorBinding: z.string(),
});

const ComponentKindSchema = z.object({
  name: z.string(),
  interactive: z.boolean(),
});

const ComponentStateDefSchema = z.object({
  name: z.string(),
  interaction: z.enum(['pointer-only', 'keyboard', 'any']),
  required: z.boolean().optional(),
  description: z.string().optional(),
});

/**
 * Component example values. Each property is a primitive (string/number/boolean)
 * or a nested map (for `states:` and similar grouped overrides).
 */
const ComponentExampleValueSchema: z.ZodType<unknown> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.record(z.string(), ComponentExampleValueSchema),
  ])
);

const ConfigSchema = z.object({
  version: z.string(),
  units: z.array(z.string()).min(1),
  sections: z.array(z.object({
    canonical: z.string(),
    aliases: z.array(z.string()).optional(),
  })).min(1),
  typography_properties: z.array(PropertyDefSchema).min(1),
  component_sub_tokens: z.array(PropertyDefSchema).min(1),
  component_states: z.array(ComponentStateDefSchema).min(1),
  color_roles: z.array(z.string()).min(1),
  icon_libraries: z.array(z.string()).min(1),
  easing_keywords: z.array(z.string()).min(1),
  component_kinds: z.array(ComponentKindSchema).min(1),
  component_modifiers: z.array(z.string()).min(1),
  recommended_tokens: z.record(z.string(), z.array(z.string())),
  examples: z.object({
    colors: z.record(z.string(), z.string()),
    elevation: z.record(z.string(), z.string()).optional(),
    typography: z.record(z.string(), z.record(z.string(), z.union([z.string(), z.number()]))),
    motion: MotionExampleSchema.optional(),
    iconography: IconographyExampleSchema.optional(),
    components: z.record(z.string(), z.record(z.string(), ComponentExampleValueSchema)),
  }),
});

// ── Load & Validate ──────────────────────────────────────────────────

export function loadSpecConfig(filePath?: string) {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const yamlPath = filePath ? resolve(filePath) : resolve(currentDir, './spec-config.yaml');
  const raw = parse(readFileSync(yamlPath, 'utf-8'));
  return ConfigSchema.parse(raw);
}

// ── Lazy singleton ───────────────────────────────────────────────────
// Config is loaded on first access, not at module evaluation time.
// This prevents redundant file reads and provides a clean entry point
// for programmatic consumers who want to defer loading.

type ParsedConfig = ReturnType<typeof loadSpecConfig>;
let _cachedConfig: ParsedConfig | undefined;

/** Return the parsed spec config, loading and caching it on first call. */
export function getSpecConfig(): ParsedConfig {
  if (!_cachedConfig) {
    _cachedConfig = loadSpecConfig();
  }
  return _cachedConfig;
}

// ── Interfaces ───────────────────────────────────────────────────────

export interface SectionDef {
  /** The canonical section heading. */
  canonical: string;
  /** Acceptable alternative headings that resolve to this section. */
  aliases?: readonly string[] | undefined;
}

export interface TypographyPropertyDef {
  /** Property name as it appears in YAML. */
  name: string;
  /** Human-readable type for the spec document. */
  type: string;
  /** Extended description for the spec (appears after the type). */
  description?: string | undefined;
}

export interface ComponentSubTokenDef {
  /** Sub-token property name. */
  name: string;
  /** The type displayed in the spec (e.g., 'Color', 'Dimension'). */
  type: string;
  /** Extended description for the spec (appears after the type). */
  description?: string | undefined;
}

export interface ComponentKindDef {
  /** Kind name (e.g., 'button', 'container'). */
  name: string;
  /** Whether components of this kind are interactive by default. */
  interactive: boolean;
}

export interface ComponentStateDef {
  /** Canonical state name (e.g., 'hover', 'focus-visible'). */
  name: string;
  /** What kind of input triggers the state. */
  interaction: 'pointer-only' | 'keyboard' | 'any';
  /** True if every interactive component MUST declare this state. */
  required?: boolean | undefined;
  /** Extended description for the spec. */
  description?: string | undefined;
}

// ── Constant exports ─────────────────────────────────────────────────
// These are eagerly initialized from the lazy singleton on first import.
// The singleton cache ensures the YAML file is read exactly once.

const config = getSpecConfig();

/** Current spec version. Appears in the schema and the front matter example. */
export const SPEC_VERSION = config.version;

/** Units the spec formally supports for Dimension values. */
export const STANDARD_UNITS = config.units;
export type StandardUnit = (typeof STANDARD_UNITS)[number];

export const SECTIONS = config.sections;

export const TYPOGRAPHY_PROPERTIES: readonly TypographyPropertyDef[] = config.typography_properties;

export const COMPONENT_SUB_TOKENS: readonly ComponentSubTokenDef[] = config.component_sub_tokens;

/** Known component states with declared semantics. */
export const COMPONENT_STATES: readonly ComponentStateDef[] = config.component_states;

/** State names that every interactive component MUST declare. */
export const INTERACTIVE_REQUIRED_STATES: readonly string[] = config.component_states
  .filter(s => s.required)
  .map(s => s.name);

/** Core color roles that every design system should define. */
export const CORE_COLOR_ROLES = config.color_roles;

/** Closed enum of supported icon libraries. `custom-svg` is the escape hatch. */
export const ICON_LIBRARIES = config.icon_libraries;
export type IconLibrary = (typeof ICON_LIBRARIES)[number];

/** CSS easing keywords accepted alongside `cubic-bezier(...)` literals. */
export const EASING_KEYWORDS = config.easing_keywords;

/** Component kinds (button, container, etc.) and their default interactivity. */
export const COMPONENT_KINDS: readonly ComponentKindDef[] = config.component_kinds;

/** Set of valid kind names. */
export const VALID_COMPONENT_KINDS: readonly string[] = COMPONENT_KINDS.map(k => k.name);

/** Per-kind defaults, indexed by name. */
export const KIND_DEFAULTS: Record<string, { interactive: boolean }> = Object.fromEntries(
  COMPONENT_KINDS.map(k => [k.name, { interactive: k.interactive }])
);

/** Closed set of permitted name modifiers (the `-modifier` suffix in `noun-modifier`). */
export const COMPONENT_MODIFIERS: readonly string[] = config.component_modifiers;

/** Non-normative recommended token names, organized by category. */
export const RECOMMENDED_TOKENS = config.recommended_tokens;

/** Canonical examples that appear in the generated spec document. */
export const EXAMPLES = config.examples;

// ── Derived constants ─────────────────────────────────────────────────

/** Ordered list of canonical section names. */
export const CANONICAL_ORDER = SECTIONS.map(s => s.canonical);

/** Map of alias → canonical name. */
export const SECTION_ALIASES: Record<string, string> = Object.fromEntries(
  SECTIONS.flatMap(s =>
    (s.aliases ?? []).map(alias => [alias, s.canonical])
  )
);

/** Resolve a section heading to its canonical name. */
export function resolveAlias(heading: string): string {
  return SECTION_ALIASES[heading] ?? heading;
}

/** Valid typography property names (for linter validation). */
export const VALID_TYPOGRAPHY_PROPS = TYPOGRAPHY_PROPERTIES.map(p => p.name);

/** Valid component sub-token names (for linter validation). */
export const VALID_COMPONENT_SUB_TOKENS = COMPONENT_SUB_TOKENS.map(p => p.name);

/** Valid component state names (for linter validation). */
export const VALID_COMPONENT_STATES = COMPONENT_STATES.map(s => s.name);

// ── Aggregate type ────────────────────────────────────────────────────

/** All config values bundled as a single object for renderer injection. */
export interface SpecConfig {
  SPEC_VERSION: typeof SPEC_VERSION;
  STANDARD_UNITS: typeof STANDARD_UNITS;
  SECTIONS: typeof SECTIONS;
  TYPOGRAPHY_PROPERTIES: typeof TYPOGRAPHY_PROPERTIES;
  COMPONENT_SUB_TOKENS: typeof COMPONENT_SUB_TOKENS;
  COMPONENT_STATES: typeof COMPONENT_STATES;
  CORE_COLOR_ROLES: typeof CORE_COLOR_ROLES;
  ICON_LIBRARIES: typeof ICON_LIBRARIES;
  EASING_KEYWORDS: typeof EASING_KEYWORDS;
  COMPONENT_KINDS: typeof COMPONENT_KINDS;
  COMPONENT_MODIFIERS: typeof COMPONENT_MODIFIERS;
  RECOMMENDED_TOKENS: typeof RECOMMENDED_TOKENS;
  EXAMPLES: typeof EXAMPLES;
}

/** Build a SpecConfig from the module's exports. */
export const SPEC_CONFIG: SpecConfig = {
  SPEC_VERSION,
  STANDARD_UNITS,
  SECTIONS,
  TYPOGRAPHY_PROPERTIES,
  COMPONENT_SUB_TOKENS,
  COMPONENT_STATES,
  CORE_COLOR_ROLES,
  ICON_LIBRARIES,
  EASING_KEYWORDS,
  COMPONENT_KINDS,
  COMPONENT_MODIFIERS,
  RECOMMENDED_TOKENS,
  EXAMPLES,
};
