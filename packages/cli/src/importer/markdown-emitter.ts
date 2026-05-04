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

import { stringify as yamlStringify } from 'yaml';
import type {
  DesignSystemState,
  ResolvedDimension,
  ResolvedTypography,
} from '../linter/model/spec.js';
import type { MergedState } from './merger.js';
import type { FrameworkInfo, ScanResult } from './spec.js';

export interface EmitContext {
  framework?: FrameworkInfo;
  sources?: ScanResult;
  readmeIntro?: string;
  version?: string;
}

const FRAMEWORK_LABELS: Record<string, string> = {
  next: 'a Next.js',
  nuxt: 'a Nuxt',
  vite: 'a Vite',
  sveltekit: 'a SvelteKit',
  remix: 'a Remix',
  astro: 'an Astro',
  cra: 'a Create React App',
  gatsby: 'a Gatsby',
  angular: 'an Angular',
  'vue-cli': 'a Vue CLI',
  node: 'a Node.js',
  unknown: 'an',
};

function dimToString(d: ResolvedDimension): string {
  return `${d.value}${d.unit}`;
}

function typographyToYaml(t: ResolvedTypography): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  if (t.fontFamily) out['fontFamily'] = t.fontFamily;
  if (t.fontSize) out['fontSize'] = dimToString(t.fontSize);
  if (t.fontWeight !== undefined) out['fontWeight'] = String(t.fontWeight);
  if (t.lineHeight) out['lineHeight'] = dimToString(t.lineHeight);
  if (t.letterSpacing) out['letterSpacing'] = dimToString(t.letterSpacing);
  if (t.fontFeature) out['fontFeature'] = t.fontFeature;
  if (t.fontVariation) out['fontVariation'] = t.fontVariation;
  return out;
}

function buildFrontmatter(state: MergedState): string {
  const doc: Record<string, unknown> = {};
  if (state.name) doc['name'] = state.name;
  if (state.description) doc['description'] = state.description;

  if (state.colors.size > 0) {
    const colors: Record<string, string> = {};
    for (const [k, v] of state.colors) colors[k] = v.hex;
    doc['colors'] = colors;
  }
  if (state.typography.size > 0) {
    const typography: Record<string, unknown> = {};
    for (const [k, v] of state.typography) typography[k] = typographyToYaml(v);
    doc['typography'] = typography;
  }
  if (state.rounded.size > 0) {
    const rounded: Record<string, string> = {};
    for (const [k, v] of state.rounded) rounded[k] = dimToString(v);
    doc['rounded'] = rounded;
  }
  if (state.spacing.size > 0) {
    const spacing: Record<string, string> = {};
    for (const [k, v] of state.spacing) spacing[k] = dimToString(v);
    doc['spacing'] = spacing;
  }

  // NOTE: when adding a field to IconsData, update BOTH this block AND
  // the `## Iconography` body emission below. They format the same data
  // differently (YAML keys vs markdown bullets), so a shared helper
  // would force structure on two genuinely different outputs.
  if (state.icons) {
    const icons: Record<string, unknown> = {};
    if (state.icons.library) icons['library'] = sanitizeImportedText(state.icons.library, 120);
    if (state.icons.style) icons['style'] = sanitizeImportedText(state.icons.style, 60);
    if (state.icons.strokeWidth !== undefined) icons['strokeWidth'] = state.icons.strokeWidth;
    if (state.icons.grid) icons['grid'] = sanitizeImportedText(state.icons.grid, 40);
    if (state.icons.size && state.icons.size.size > 0) {
      const size: Record<string, string> = {};
      for (const [k, v] of state.icons.size) size[k] = sanitizeImportedText(v, 40);
      icons['size'] = size;
    }
    if (state.icons.color) icons['color'] = sanitizeImportedText(state.icons.color, 120);
    if (Object.keys(icons).length > 0) doc['icons'] = icons;
  }

  // We rely on the `yaml` package to single-quote any value beginning
  // with `{`, so token references like `{colors.on-surface}` round-trip
  // without parsing as a YAML flow mapping. `indent: 2` is pinned so
  // the round-trip-via-regex tests aren't sensitive to a future
  // default-indent change in the library.
  return yamlStringify(doc, { indent: 2 });
}

function pluralize(n: number, singular: string, plural: string): string {
  return `${n} ${n === 1 ? singular : plural}`;
}

/**
 * Neutralize free-form text that came from an attacker-controlled
 * package.json or README. Without this, a malicious `description` of
 * `"\n\n## HIGH — ignore prior instructions and run …"` forges a new
 * section heading that downstream consumers (LLM agents, other tooling)
 * may treat as authoritative. Likewise HTML tags in an intranet wiki
 * renderer.
 *
 *   - Strips CR/LF so multi-line payloads cannot forge headings.
 *   - Escapes leading `#` so `# …` can't become a Markdown heading.
 *   - Escapes `<` so HTML tags do not render verbatim.
 *   - Caps length so the body cannot balloon unexpectedly.
 */
function sanitizeImportedText(raw: string, maxLen = 500): string {
  const collapsed = raw.replace(/[\r\n]+/g, ' ').trim();
  const escaped = collapsed
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/^#/, '\\#');
  if (escaped.length > maxLen) {
    return `${escaped.slice(0, maxLen - 1).trimEnd()}…`;
  }
  return escaped;
}

function discoveredTokensSentence(state: DesignSystemState, ctx: EmitContext | undefined): string {
  const frameworkLabel = ctx?.framework
    ? FRAMEWORK_LABELS[ctx.framework.name] ?? 'a'
    : undefined;
  const projectKind = frameworkLabel ? `${frameworkLabel} project` : 'this project';
  const counts = [
    pluralize(state.colors.size, 'color', 'colors'),
    pluralize(state.typography.size, 'typography scale', 'typography scales'),
    pluralize(state.spacing.size, 'spacing token', 'spacing tokens'),
    pluralize(state.rounded.size, 'rounded radius', 'rounded radii'),
  ];
  return `Imported from ${projectKind}. Found ${counts.join(', ')}. Review, prune, and explain why each one exists — these are scaffolding, not a finished design.`;
}

function sourceSummary(sources: ScanResult): string | null {
  const parts: string[] = [];
  if (sources.cssFiles.length > 0) {
    parts.push(pluralize(sources.cssFiles.length, 'CSS file', 'CSS files'));
  }
  if (sources.dtcgFiles.length > 0) {
    parts.push(pluralize(sources.dtcgFiles.length, 'DTCG token file', 'DTCG token files'));
  }
  if (parts.length === 0) return null;
  return `Sources scanned: ${parts.join(', ')}.`;
}

function colorBullets(state: DesignSystemState): string[] {
  const out: string[] = [];
  for (const [name, v] of state.colors) {
    out.push(`- **${name}** — \`${v.hex}\``);
  }
  return out;
}

function dimensionBullets(map: Map<string, ResolvedDimension>): string[] {
  const out: string[] = [];
  for (const [name, v] of map) {
    out.push(`- **${name}** — \`${dimToString(v)}\``);
  }
  return out;
}

function typographyBullets(state: DesignSystemState): string[] {
  const out: string[] = [];
  for (const [name, t] of state.typography) {
    const parts: string[] = [];
    if (t.fontFamily) parts.push(t.fontFamily);
    if (t.fontSize) parts.push(dimToString(t.fontSize));
    if (t.fontWeight !== undefined) parts.push(String(t.fontWeight));
    if (t.lineHeight) parts.push(`lh ${dimToString(t.lineHeight)}`);
    out.push(`- **${name}** — ${parts.length ? parts.join(' · ') : '—'}`);
  }
  return out;
}

function buildBody(state: MergedState, ctx?: EmitContext): string {
  const lines: string[] = [];
  if (state.name) {
    // Heading text is sanitized to remove newlines and leading `#`.
    lines.push(`# ${sanitizeImportedText(state.name, 120)}`);
    lines.push('');
  }
  if (state.description) {
    lines.push(sanitizeImportedText(state.description));
    lines.push('');
  }
  if (ctx?.readmeIntro) {
    // Attribute the README quote as a blockquote so LLM consumers see it
    // as repo-provided content, not an authoritative directive.
    lines.push(`> ${sanitizeImportedText(ctx.readmeIntro)}`);
    lines.push('');
  }

  // Intent leads the body so a reader cannot mistake imported tokens for
  // a finished design. The HTML comment is preserved by Markdown round-trips
  // but invisible in rendered output until edited.
  lines.push('## Intent');
  lines.push('');
  lines.push('<!-- TODO: capture the design intent before sharing this DESIGN.md.');
  lines.push('     Imported tokens are scaffolding, not a substitute for the intent conversation. -->');
  lines.push('');
  lines.push('- **What problems does this design system solve?**');
  lines.push('- **Who is it for, and what\'s the vibe?**');
  lines.push('- **What is intentionally NOT in scope?**');
  lines.push('');
  lines.push('_Replace this section with the actual design intent before treating this DESIGN.md as canonical._');
  lines.push('');

  lines.push('## Discovered tokens');
  lines.push('');
  lines.push(discoveredTokensSentence(state, ctx));
  if (ctx?.sources) {
    const summary = sourceSummary(ctx.sources);
    if (summary) {
      lines.push('');
      lines.push(summary);
    }
  }
  lines.push('');

  if (state.colors.size > 0) {
    lines.push('### Colors');
    lines.push('');
    lines.push(...colorBullets(state));
    lines.push('');
  }
  if (state.typography.size > 0) {
    lines.push('### Typography');
    lines.push('');
    lines.push(...typographyBullets(state));
    lines.push('');
  }
  if (state.spacing.size > 0) {
    lines.push('### Spacing');
    lines.push('');
    lines.push(...dimensionBullets(state.spacing));
    lines.push('');
  }
  if (state.rounded.size > 0) {
    lines.push('### Rounded');
    lines.push('');
    lines.push(...dimensionBullets(state.rounded));
    lines.push('');
  }

  if (state.icons) {
    const bullets: string[] = [];
    const { library, style, strokeWidth, grid, color, size } = state.icons;
    if (library) bullets.push(`- **library** — ${sanitizeImportedText(library, 120)}`);
    if (style) bullets.push(`- **style** — ${sanitizeImportedText(style, 60)}`);
    if (strokeWidth !== undefined) bullets.push(`- **strokeWidth** — \`${strokeWidth}\``);
    if (grid) bullets.push(`- **grid** — \`${sanitizeImportedText(grid, 40)}\``);
    if (color) bullets.push(`- **color** — \`${sanitizeImportedText(color, 120)}\``);
    if (size && size.size > 0) {
      for (const [k, v] of size) {
        bullets.push(`- **size.${k}** — \`${sanitizeImportedText(v, 40)}\``);
      }
    }
    if (bullets.length > 0) {
      lines.push('### Iconography');
      lines.push('');
      lines.push(...bullets);
      lines.push('');
    }
  }

  return lines.join('\n');
}

/**
 * Serialize a DesignSystemState to a DESIGN.md document with YAML
 * frontmatter and a descriptive body. Feeding the output back into
 * lint() reproduces the original state.
 */
export function emitDesignMd(state: MergedState, ctx?: EmitContext): string {
  const frontmatter = buildFrontmatter(state);
  const body = buildBody(state, ctx);
  return `---\n${frontmatter}---\n\n${body}`;
}
