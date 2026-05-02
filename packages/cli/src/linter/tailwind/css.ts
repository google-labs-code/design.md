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

import type {
  TailwindEmitterResult,
  TailwindThemeExtend,
  TailwindThemes,
} from './spec.js';

/**
 * Render a Tailwind v4 stylesheet in the shadcn/ui `globals.css` shape:
 *
 *   @import "tailwindcss";
 *
 *   @custom-variant dark (&:is(.dark *));
 *
 *   :root { --primary: ...; --primary-foreground: ...; --rounded-md: ...; }
 *   .dark { --primary: ...; ... }
 *   @theme inline {
 *     --color-primary: var(--primary);
 *     --radius-md: var(--rounded-md);
 *     ...
 *   }
 *
 * Color and radius tokens flow through a `:root` → `@theme inline` indirection
 * so that per-theme overrides (`.dark`, `.high-contrast`) can swap underlying
 * values at runtime without rebuilding the Tailwind theme. Other non-color
 * tokens (typography, spacing, shadow, breakpoint, motion) emit directly
 * inside `@theme` since they typically don't theme-switch.
 */
export function renderTailwindThemeCss(result: TailwindEmitterResult): string {
  if (!result.success) {
    throw new Error(`Cannot render CSS from failed emitter result: ${result.error.message}`);
  }
  const { theme, themes } = result.data;
  const colors = theme.extend.colors;
  const borderRadius = theme.extend.borderRadius;

  const out: string[] = [];

  out.push('@import "tailwindcss";', '', '@custom-variant dark (&:is(.dark *));', '');

  if (colors || borderRadius) {
    out.push(':root {');
    if (colors) emitColorVars(out, colors);
    if (borderRadius) emitRadiusVars(out, borderRadius);
    out.push('}');
  }

  if (themes) {
    for (const [name, view] of Object.entries(themes)) {
      out.push('', `.${name} {`);
      emitColorVars(out, view.colors);
      out.push('}');
    }
  }

  out.push('', '@theme inline {');
  if (colors) emitColorAliases(out, colors);
  if (borderRadius) emitRadiusAliases(out, borderRadius);
  emitNonColorTokens(out, theme.extend);
  if (theme.container?.padding) {
    const padding = theme.container.padding;
    const dflt = typeof padding === 'string' ? padding : padding.DEFAULT;
    if (dflt) out.push(`  --container-padding: ${dflt};`);
  }
  out.push('}');

  return out.join('\n') + '\n';
}

function emitColorVars(
  lines: string[],
  colors: Record<string, string | Record<string, string>>,
): void {
  for (const [name, value] of Object.entries(colors)) {
    if (typeof value === 'string') {
      lines.push(`  --${name}: ${value};`);
    } else {
      for (const [step, color] of Object.entries(value)) {
        const key = step === 'DEFAULT' ? `--${name}` : `--${name}-${step}`;
        lines.push(`  ${key}: ${color};`);
      }
    }
  }
}

function emitColorAliases(
  lines: string[],
  colors: Record<string, string | Record<string, string>>,
): void {
  for (const [name, value] of Object.entries(colors)) {
    if (typeof value === 'string') {
      lines.push(`  --color-${name}: var(--${name});`);
    } else {
      for (const step of Object.keys(value)) {
        if (step === 'DEFAULT') {
          lines.push(`  --color-${name}: var(--${name});`);
        } else {
          lines.push(`  --color-${name}-${step}: var(--${name}-${step});`);
        }
      }
    }
  }
}

function emitRadiusVars(lines: string[], borderRadius: Record<string, string>): void {
  for (const [name, value] of Object.entries(borderRadius)) {
    const key = name === 'DEFAULT' ? '--rounded' : `--rounded-${name}`;
    lines.push(`  ${key}: ${value};`);
  }
}

function emitRadiusAliases(lines: string[], borderRadius: Record<string, string>): void {
  for (const name of Object.keys(borderRadius)) {
    if (name === 'DEFAULT') {
      lines.push(`  --radius: var(--rounded);`);
    } else {
      lines.push(`  --radius-${name}: var(--rounded-${name});`);
    }
  }
}

function emitNonColorTokens(lines: string[], extend: TailwindThemeExtend): void {
  if (extend.fontFamily) {
    for (const [name, stack] of Object.entries(extend.fontFamily)) {
      lines.push(`  --font-${name}: ${stack.join(', ')};`);
    }
  }
  if (extend.fontSize) {
    for (const [name, [size, meta]] of Object.entries(extend.fontSize)) {
      lines.push(`  --text-${name}: ${size};`);
      if (meta.lineHeight) lines.push(`  --text-${name}--line-height: ${meta.lineHeight};`);
      if (meta.letterSpacing) lines.push(`  --text-${name}--letter-spacing: ${meta.letterSpacing};`);
      if (meta.fontWeight) lines.push(`  --text-${name}--font-weight: ${meta.fontWeight};`);
    }
  }
  if (extend.spacing) {
    for (const [name, value] of Object.entries(extend.spacing)) {
      lines.push(`  --spacing-${name}: ${value};`);
    }
  }
  if (extend.boxShadow) {
    for (const [name, value] of Object.entries(extend.boxShadow)) {
      lines.push(`  --shadow-${name}: ${value};`);
    }
  }
  if (extend.transitionDuration) {
    for (const [name, value] of Object.entries(extend.transitionDuration)) {
      lines.push(`  --duration-${name}: ${value};`);
    }
  }
  if (extend.transitionTimingFunction) {
    for (const [name, value] of Object.entries(extend.transitionTimingFunction)) {
      lines.push(`  --ease-${name}: ${value};`);
    }
  }
  if (extend.screens) {
    for (const [name, value] of Object.entries(extend.screens)) {
      lines.push(`  --breakpoint-${name}: ${value};`);
    }
  }
  if (extend.maxWidth) {
    for (const [name, value] of Object.entries(extend.maxWidth)) {
      lines.push(`  --container-${name}: ${value};`);
    }
  }
}
