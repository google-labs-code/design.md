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
 * Render a Tailwind v4 `@theme` CSS stylesheet from a successful emitter
 * result. Tailwind v4 deprecates `tailwind.config.js`; theme tokens now live
 * in CSS as `--color-*`, `--font-*`, `--text-*`, `--radius-*`, `--spacing-*`,
 * `--shadow-*`, `--breakpoint-*`, `--container-*`, `--ease-*`, `--duration-*`
 * custom properties under `@theme { ... }`.
 *
 * Per-theme overrides emit as `.<theme>` selectors that override the same
 * variables (consumers toggle by setting `class="dark"` on `<html>` or the
 * appropriate ancestor).
 */
export function renderTailwindThemeCss(result: TailwindEmitterResult): string {
  if (!result.success) {
    throw new Error(`Cannot render CSS from failed emitter result: ${result.error.message}`);
  }
  const { theme, themes } = result.data;
  const lines: string[] = ['@theme {'];

  emitExtend(lines, theme.extend);

  // theme.container.padding maps to --container-padding-* on the DEFAULT key
  // and to per-breakpoint variables. We expose just the DEFAULT here; authors
  // who need responsive padding can layer their own utilities.
  if (theme.container?.padding) {
    const padding = theme.container.padding;
    if (typeof padding === 'string') {
      lines.push(`  --container-padding: ${padding};`);
    } else if (padding.DEFAULT) {
      lines.push(`  --container-padding: ${padding.DEFAULT};`);
    }
  }

  lines.push('}');

  if (themes) {
    for (const [name, view] of Object.entries(themes)) {
      lines.push('', `.${name} {`);
      emitColors(lines, view.colors);
      lines.push('}');
    }
  }

  return lines.join('\n') + '\n';
}

function emitExtend(lines: string[], extend: TailwindThemeExtend): void {
  if (extend.colors) emitColors(lines, extend.colors);
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
  if (extend.borderRadius) {
    for (const [name, value] of Object.entries(extend.borderRadius)) {
      const key = name === 'DEFAULT' ? '--radius' : `--radius-${name}`;
      lines.push(`  ${key}: ${value};`);
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

function emitColors(
  lines: string[],
  colors: Record<string, string | Record<string, string>>,
): void {
  for (const [name, value] of Object.entries(colors)) {
    if (typeof value === 'string') {
      lines.push(`  --color-${name}: ${value};`);
    } else {
      // Ramp: { DEFAULT, 50, 100, ..., 900 }
      for (const [step, color] of Object.entries(value)) {
        const key = step === 'DEFAULT' ? `--color-${name}` : `--color-${name}-${step}`;
        lines.push(`  ${key}: ${color};`);
      }
    }
  }
}
