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

function yamlObject(entries: Record<string, unknown>, indent = 4): string[] {
  const lines: string[] = [];
  for (const [k, v] of Object.entries(entries)) {
    if (v !== null && typeof v === 'object') {
      lines.push(`${' '.repeat(indent)}${k}:`);
      lines.push(...yamlObject(v as Record<string, unknown>, indent + 2));
    } else {
      const val = typeof v === 'string' && v.startsWith('{') ? `"${v}"` : v;
      lines.push(`${' '.repeat(indent)}${k}: ${val}`);
    }
  }
  return lines;
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
    ...yamlObject(typoProps as Record<string, unknown>),
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
    lines.push(...yamlObject(props as Record<string, unknown>));
  }
  return yamlBlock(lines);
}

/** Components YAML example. */
export function componentsExample(config: SpecConfig): string {
  const lines = ['components:'];
  for (const [name, props] of Object.entries(config.EXAMPLES.components)) {
    lines.push(`  ${name}:`);
    lines.push(...yamlObject(props as Record<string, unknown>));
  }
  return yamlBlock(lines);
}

/** Motion YAML example (durations, easings, reduced-motion fallback). */
export function motionExample(config: SpecConfig): string {
  const motion = config.EXAMPLES.motion;
  if (!motion) return yamlBlock(['motion: {}']);
  const lines = ['motion:', '  duration:'];
  for (const [name, value] of Object.entries(motion.duration)) {
    lines.push(`    ${name}: ${value}`);
  }
  lines.push('  easing:');
  for (const [name, value] of Object.entries(motion.easing)) {
    lines.push(`    ${name}: "${value}"`);
  }
  if (motion.reducedMotion) {
    lines.push('  reducedMotion:');
    lines.push(`    duration: ${motion.reducedMotion.duration}`);
    lines.push(`    easing: ${motion.reducedMotion.easing}`);
  }
  return yamlBlock(lines);
}

/** Iconography YAML example (library, size scale, color binding). */
export function iconographyExample(config: SpecConfig): string {
  const ico = config.EXAMPLES.iconography;
  if (!ico) return yamlBlock(['iconography: {}']);
  const lines = ['iconography:', '  library:'];
  lines.push(`    name: ${ico.library.name}`);
  if (ico.library.version) lines.push(`    version: "${ico.library.version}"`);
  lines.push(`    style: ${ico.library.style}`);
  if (ico.strokeWeight) lines.push(`  strokeWeight: ${ico.strokeWeight}`);
  lines.push('  sizes:');
  for (const [name, value] of Object.entries(ico.sizes)) {
    lines.push(`    ${name}: ${value}`);
  }
  lines.push(`  defaultSize: ${ico.defaultSize}`);
  lines.push(`  colorBinding: ${ico.colorBinding}`);
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
