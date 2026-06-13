// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0

import { describe, expect, it } from 'bun:test';

import { ModelHandler } from '../model/handler.js';
import type { ParsedDesignSystem } from '../parser/spec.js';
import { renderTailwindThemeCss } from './css.js';
import { TailwindEmitterHandler } from './handler.js';
import type { TailwindEmitterResult } from './spec.js';

const emitter = new TailwindEmitterHandler();
const modelHandler = new ModelHandler();

function buildResult(overrides: Partial<ParsedDesignSystem> = {}): TailwindEmitterResult {
  const parsed: ParsedDesignSystem = { sourceMap: new Map(), ...overrides };
  const model = modelHandler.execute(parsed);
  const hasErrors = model.findings.some((d) => d.severity === 'error');
  if (hasErrors) {
    throw new Error(`Model failed: ${model.findings.map((d) => d.message).join(', ')}`);
  }
  return emitter.execute(model.designSystem);
}

describe('renderTailwindThemeCss — preamble', () => {
  it('emits the tailwindcss import and dark custom-variant up top', () => {
    const css = renderTailwindThemeCss(buildResult({ colors: { primary: '#000000' } }));
    expect(css.startsWith('@import "tailwindcss";')).toBe(true);
    expect(css).toContain('@custom-variant dark (&:is(.dark *));');
  });

  it('always emits an @theme inline block', () => {
    const css = renderTailwindThemeCss(buildResult({ colors: { primary: '#000000' } }));
    expect(css).toContain('@theme inline {');
    expect(css.trimEnd().endsWith('}')).toBe(true);
  });

  it('terminates output with a newline', () => {
    const css = renderTailwindThemeCss(buildResult({ colors: { primary: '#000' } }));
    expect(css.endsWith('\n')).toBe(true);
  });
});

describe('renderTailwindThemeCss — colors', () => {
  it('lifts flat colors into :root as `--<name>` and aliases under `--color-<name>`', () => {
    const css = renderTailwindThemeCss(
      buildResult({ colors: { primary: '#1A1C1E', accent: '#B8422E' } }),
    );
    expect(css).toContain('  --primary: #1a1c1e;');
    expect(css).toContain('  --accent: #b8422e;');
    expect(css).toContain('  --color-primary: var(--primary);');
    expect(css).toContain('  --color-accent: var(--accent);');
  });

  it('emits a :root block even when no color values are defined (empty containers still truthy)', () => {
    const css = renderTailwindThemeCss(buildResult({}));
    expect(css).toContain(':root {');
    // No `--<name>:` declarations should appear in the empty :root.
    const rootBlock = /:root\s*\{([^}]*)\}/.exec(css)?.[1] ?? '';
    expect(rootBlock.trim()).toBe('');
  });
});

describe('renderTailwindThemeCss — radius', () => {
  it('emits radius under :root and aliases under @theme', () => {
    const css = renderTailwindThemeCss(
      buildResult({ rounded: { sm: '4px', md: '8px' } }),
    );
    expect(css).toContain('  --rounded-sm: 4px;');
    expect(css).toContain('  --rounded-md: 8px;');
    expect(css).toContain('  --radius-sm: var(--rounded-sm);');
    expect(css).toContain('  --radius-md: var(--rounded-md);');
  });
});

describe('renderTailwindThemeCss — non-color tokens', () => {
  it('emits typography fontFamily and fontSize with metadata', () => {
    const css = renderTailwindThemeCss(
      buildResult({
        colors: { primary: '#000' },
        typography: {
          h1: {
            fontFamily: 'Public Sans',
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
          },
        },
      }),
    );
    expect(css).toContain('--font-h1:');
    expect(css).toContain('Public Sans');
    expect(css).toContain('--text-h1: 3rem;');
    expect(css).toContain('--text-h1--line-height: 1.1;');
    expect(css).toContain('--text-h1--letter-spacing: -0.02em;');
    expect(css).toContain('--text-h1--font-weight: 700;');
  });

  it('emits spacing tokens as `--spacing-<name>`', () => {
    const css = renderTailwindThemeCss(
      buildResult({
        colors: { primary: '#000' },
        spacing: { sm: '8px', md: '16px' },
      }),
    );
    expect(css).toContain('--spacing-sm: 8px;');
    expect(css).toContain('--spacing-md: 16px;');
  });
});

describe('renderTailwindThemeCss — themes', () => {
  it('emits per-theme blocks alongside :root for non-base themes', () => {
    const css = renderTailwindThemeCss(
      buildResult({
        colors: { primary: '#1A1C1E' },
        themes: {
          dark: { colors: { primary: '#F7F5F2' } },
        },
      }),
    );
    expect(css).toContain(':root {');
    expect(css).toContain('.dark {');
    // The dark block must contain the overridden primary value.
    const darkBlock = /\.dark\s*\{[^}]*\}/m.exec(css)?.[0] ?? '';
    expect(darkBlock).toContain('--primary: #f7f5f2;');
  });

  it('does not emit theme blocks when no themes are declared', () => {
    const css = renderTailwindThemeCss(
      buildResult({ colors: { primary: '#1A1C1E' } }),
    );
    expect(css).not.toMatch(/^\.\w+ \{/m);
  });
});

describe('renderTailwindThemeCss — failure path', () => {
  it('throws a helpful error when given a failed emitter result', () => {
    const failed: TailwindEmitterResult = {
      success: false,
      error: { code: 'TEST', message: 'simulated' },
    };
    expect(() => renderTailwindThemeCss(failed)).toThrow(/simulated/);
  });
});

describe('renderTailwindThemeCss — structural ordering', () => {
  it('places :root before @theme inline', () => {
    const css = renderTailwindThemeCss(
      buildResult({ colors: { primary: '#1A1C1E' } }),
    );
    const rootIdx = css.indexOf(':root {');
    const themeIdx = css.indexOf('@theme inline {');
    expect(rootIdx).toBeGreaterThan(-1);
    expect(themeIdx).toBeGreaterThan(rootIdx);
  });
});
