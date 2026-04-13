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

const ConfigSchema = z.object({
  version: z.string(),
  units: z.array(z.string()).min(1),
  sections: z.array(z.object({
    canonical: z.string(),
    aliases: z.array(z.string()).optional(),
  })).min(1),
  typography_properties: z.array(PropertyDefSchema).min(1),
  component_sub_tokens: z.array(PropertyDefSchema).min(1),
  color_roles: z.array(z.string()).min(1),
  recommended_tokens: z.record(z.string(), z.array(z.string())),
  examples: z.object({
    colors: z.record(z.string(), z.string()),
    typography: z.record(z.string(), z.record(z.string(), z.union([z.string(), z.number()]))),
    components: z.record(z.string(), z.record(z.string(), z.string())),
  }),
});

// ── Load & Validate ──────────────────────────────────────────────────

export function loadSpecConfig(filePath?: string) {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const yamlPath = filePath ? resolve(filePath) : resolve(currentDir, './spec-config.yaml');
  console.log(`Loading spec config from: ${yamlPath}`);
  try {
    const raw = parse(readFileSync(yamlPath, 'utf-8'));
    return ConfigSchema.parse(raw);
  } catch (e) {
    console.error(`Failed to load spec config from ${yamlPath}:`, e);
    throw e;
  }
}

const parsedConfig = loadSpecConfig();

// ── Version ───────────────────────────────────────────────────────────

/** Current spec version. Appears in the schema and the front matter example. */
export const SPEC_VERSION = parsedConfig.version;

// ── Units ─────────────────────────────────────────────────────────────

/** Units the spec formally supports for Dimension values. */
export const STANDARD_UNITS = parsedConfig.units;
export type StandardUnit = (typeof STANDARD_UNITS)[number];

// ── Sections ──────────────────────────────────────────────────────────

export interface SectionDef {
  /** The canonical section heading. */
  canonical: string;
  /** Acceptable alternative headings that resolve to this section. */
  aliases?: readonly string[] | undefined;
}

export const SECTIONS = parsedConfig.sections;

// ── Typography ────────────────────────────────────────────────────────

export interface TypographyPropertyDef {
  /** Property name as it appears in YAML. */
  name: string;
  /** Human-readable type for the spec document. */
  type: string;
  /** Extended description for the spec (appears after the type). */
  description?: string | undefined;
}

export const TYPOGRAPHY_PROPERTIES: readonly TypographyPropertyDef[] = parsedConfig.typography_properties;

// ── Components ────────────────────────────────────────────────────────

export interface ComponentSubTokenDef {
  /** Sub-token property name. */
  name: string;
  /** The type displayed in the spec (e.g., 'Color', 'Dimension'). */
  type: string;
  /** Extended description for the spec (appears after the type). */
  description?: string | undefined;
}

export const COMPONENT_SUB_TOKENS: readonly ComponentSubTokenDef[] = parsedConfig.component_sub_tokens;

// ── Color Roles ──────────────────────────────────────────────────────

/** Core color roles that every design system should define. */
export const CORE_COLOR_ROLES = parsedConfig.color_roles;

// ── Recommended Token Names ──────────────────────────────────────────

/** Non-normative recommended token names, organized by category. */
export const RECOMMENDED_TOKENS = parsedConfig.recommended_tokens;

// ── Canonical Examples ───────────────────────────────────────────────
// These examples appear in the generated spec document.
// Keeping them here ensures they stay in sync with the schema.

export const EXAMPLES = parsedConfig.examples;

// ── Derived constants ─────────────────────────────────────────────────
// These are computed from the config above for convenience.
// Consumers should prefer these over re-deriving.

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

// ── Aggregate type ────────────────────────────────────────────────────

/** All config values bundled as a single object for renderer injection. */
export interface SpecConfig {
  SPEC_VERSION: typeof SPEC_VERSION;
  STANDARD_UNITS: typeof STANDARD_UNITS;
  SECTIONS: typeof SECTIONS;
  TYPOGRAPHY_PROPERTIES: typeof TYPOGRAPHY_PROPERTIES;
  COMPONENT_SUB_TOKENS: typeof COMPONENT_SUB_TOKENS;
  CORE_COLOR_ROLES: typeof CORE_COLOR_ROLES;
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
  CORE_COLOR_ROLES,
  RECOMMENDED_TOKENS,
  EXAMPLES,
};
