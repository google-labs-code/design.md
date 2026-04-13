/**
 * Spec renderers: pure functions that turn spec-config data into
 * markdown fragments. Used by the MDX compiler via scope injection.
 *
 * Each function returns a ready-to-embed markdown string.
 */

import type { SpecConfig, TypographyPropertyDef, SectionDef, ComponentSubTokenDef } from '../spec-config.js';

// ── YAML code block helpers ─────────────────────────────────────

/** Render a fenced yaml code block from key-value entries. */
function yamlBlock(lines: string[]): string {
  return ['```yaml', ...lines, '```'].join('\n');
}

function yamlEntries(entries: Record<string, string>, indent = 2): string[] {
  return Object.entries(entries).map(
    ([k, v]) => `${' '.repeat(indent)}${k}: "${v}"`
  );
}

function yamlObject(entries: Record<string, string | number>, indent = 4): string[] {
  return Object.entries(entries).map(([k, v]) => {
    const val = typeof v === 'string' && v.startsWith('{') ? `"${v}"` : v;
    return `${' '.repeat(indent)}${k}: ${val}`;
  });
}

// ── Public renderers ────────────────────────────────────────────

/** Front matter example (overview section). */
export function frontmatterExample(config: SpecConfig): string {
  const [typoName, typoProps] = Object.entries(config.EXAMPLES.typography)[0]!;
  return yamlBlock([
    '---',
    `version: ${config.SPEC_VERSION}`,
    'name: Daylight Prestige',
    'colors:',
    ...yamlEntries(
      Object.fromEntries(Object.entries(config.EXAMPLES.colors).slice(0, 3)) as Record<string, string>
    ),
    'typography:',
    `  ${typoName}:`,
    ...yamlObject(typoProps as Record<string, string | number>),
    '---',
  ]);
}

/** Colors YAML example. */
export function colorsExample(config: SpecConfig): string {
  return yamlBlock(['colors:', ...yamlEntries(config.EXAMPLES.colors)]);
}

/** Typography YAML example. */
export function typographyExample(config: SpecConfig): string {
  const lines = ['typography:'];
  for (const [name, props] of Object.entries(config.EXAMPLES.typography)) {
    lines.push(`  ${name}:`);
    lines.push(...yamlObject(props as Record<string, string | number>));
  }
  return yamlBlock(lines);
}

/** Components YAML example. */
export function componentsExample(config: SpecConfig): string {
  const lines = ['components:'];
  for (const [name, props] of Object.entries(config.EXAMPLES.components)) {
    lines.push(`  ${name}:`);
    lines.push(...yamlObject(props as Record<string, string | number>));
  }
  return yamlBlock(lines);
}

/** Typography property list (for the schema section). */
export function typographyPropertyList(config: SpecConfig): string {
  return config.TYPOGRAPHY_PROPERTIES.map((p: TypographyPropertyDef) =>
    p.description
      ? `- \`${p.name}\` (${p.type}) - ${p.description}`
      : `- \`${p.name}\` (${p.type})`
  ).join('\n');
}

/** Numbered section order list with aliases. */
export function sectionOrderList(config: SpecConfig): string {
  return config.SECTIONS.map((s: SectionDef, i: number) => {
    const aliases = s.aliases?.length
      ? ` (also: ${s.aliases.map((a: string) => `"${a}"`).join(', ')})`
      : '';
    return `${i + 1}. **${s.canonical}**${aliases}`;
  }).join('\n');
}

/** Component sub-token property list. */
export function componentSubTokenList(config: SpecConfig): string {
  return config.COMPONENT_SUB_TOKENS
    .map((t: ComponentSubTokenDef) => `- ${t.name}: \\<${t.type}\\>`)
    .join('\n');
}

/** Recommended token names grouped by category. */
export function recommendedTokens(config: SpecConfig): string {
  return Object.entries(config.RECOMMENDED_TOKENS)
    .map(([cat, tokens]) => {
      const label = cat.charAt(0).toUpperCase() + cat.slice(1);
      return `**${label}:** ${(tokens as readonly string[]).map((t: string) => `\`${t}\``).join(', ')}`;
    })
    .join('\n\n');
}
