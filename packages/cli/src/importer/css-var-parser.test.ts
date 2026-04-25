// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { parseCssVariablesFromString } from './css-var-parser.js';

describe('parseCssVariablesFromString', () => {
  it('classifies --color-* as colors', () => {
    const p = parseCssVariablesFromString(':root { --color-primary: #ff0000; --color-bg: #fff; }');
    expect(p.colors?.get('color-primary')?.hex).toBe('#ff0000');
    expect(p.colors?.get('color-bg')?.hex).toBe('#fff');
  });

  it('classifies --space-* as spacing and --radius-* as rounded', () => {
    const p = parseCssVariablesFromString(':root { --space-md: 16px; --radius-lg: 1rem; }');
    expect(p.spacing?.get('space-md')?.value).toBe(16);
    expect(p.rounded?.get('radius-lg')?.value).toBe(1);
    expect(p.rounded?.get('radius-lg')?.unit).toBe('rem');
  });

  it('falls back to name heuristic for bare values', () => {
    const p = parseCssVariablesFromString(':root { --brand: #112233; --gutter: 8px; }');
    expect(p.colors?.get('brand')?.hex).toBe('#112233');
    expect(p.spacing?.get('gutter')?.value).toBe(8);
  });

  it('ignores non-token variables', () => {
    const p = parseCssVariablesFromString(':root { --animation-duration: 200ms; --z-modal: 1000; }');
    // 200ms is a dimension with unit ms → lands in spacing (generic bucket).
    // --z-modal is bare number — not a dimension → ignored.
    expect(p.colors?.size ?? 0).toBe(0);
    expect(p.spacing?.get('z-modal')).toBeUndefined();
  });

  it('handles multiple :root blocks', () => {
    const p = parseCssVariablesFromString(':root { --color-a: #aaa; } :root { --color-b: #bbb; }');
    expect(p.colors?.size).toBe(2);
  });

  it('ignores var() references and keyword values', () => {
    const p = parseCssVariablesFromString(':root { --foo: var(--bar); --auto: auto; }');
    expect((p.colors?.size ?? 0) + (p.spacing?.size ?? 0) + (p.rounded?.size ?? 0)).toBe(0);
  });

  describe('Tailwind v4 @theme blocks', () => {
    it('extracts --color-* tokens and strips the prefix', () => {
      const p = parseCssVariablesFromString(
        '@theme { --color-primary: #112233; --color-dp-border: #2a2d42; }',
      );
      expect(p.colors?.get('primary')?.hex).toBe('#112233');
      expect(p.colors?.get('dp-border')?.hex).toBe('#2a2d42');
    });

    it('extracts --spacing-* tokens and strips the prefix', () => {
      const p = parseCssVariablesFromString('@theme { --spacing-md: 16px; --spacing-bs-1: 2.5px; }');
      expect(p.spacing?.get('md')?.value).toBe(16);
      expect(p.spacing?.get('bs-1')?.value).toBe(2.5);
    });

    it('routes --radius-* to rounded', () => {
      const p = parseCssVariablesFromString('@theme { --radius-sm: 6px; --radius-lg: 1rem; }');
      expect(p.rounded?.get('sm')?.value).toBe(6);
      expect(p.rounded?.get('lg')?.unit).toBe('rem');
    });

    it('captures --font-* families into typography', () => {
      const p = parseCssVariablesFromString(
        "@theme { --font-sans: 'DM Sans', 'Inter', system-ui, sans-serif; --font-mono: 'JetBrains Mono', monospace; }",
      );
      expect(p.typography?.get('sans')?.fontFamily).toBe('DM Sans');
      expect(p.typography?.get('mono')?.fontFamily).toBe('JetBrains Mono');
    });

    it('captures --text-*, --leading-*, --tracking-*, --font-weight-* into typography', () => {
      const p = parseCssVariablesFromString(
        '@theme { --text-base: 16px; --leading-base: 24px; --tracking-tight: -0.02em; --font-weight-bold: 700; }',
      );
      expect(p.typography?.get('base')?.fontSize?.value).toBe(16);
      expect(p.typography?.get('base')?.lineHeight?.value).toBe(24);
      expect(p.typography?.get('tight')?.letterSpacing?.value).toBe(-0.02);
      expect(p.typography?.get('bold')?.fontWeight).toBe(700);
    });

    it('skips --breakpoint-* (not a design-system section)', () => {
      const p = parseCssVariablesFromString(
        '@theme { --breakpoint-sm: 640px; --breakpoint-lg: 1000px; }',
      );
      expect(p.spacing?.size ?? 0).toBe(0);
      expect(p.rounded?.size ?? 0).toBe(0);
    });

    it('parses @theme inline { } the same as @theme { }', () => {
      const p = parseCssVariablesFromString('@theme inline { --color-brand: #f00; }');
      expect(p.colors?.get('brand')?.hex).toBe('#f00');
    });

    it('handles @theme and :root in the same file without duplication', () => {
      const p = parseCssVariablesFromString(`
        @theme {
          --color-primary: #00ff88;
          --spacing-md: 16px;
        }
        :root {
          --topbar-h: 48px;
          --color-primary: #fallback;
        }
      `);
      // :root contributes a name-heuristic bucket with its raw key
      expect(p.spacing?.get('md')?.value).toBe(16);
      expect(p.spacing?.get('topbar-h')?.value).toBe(48);
      // @theme wins on the bare name, :root adds "color-primary" literally if valid
      expect(p.colors?.get('primary')?.hex).toBe('#00ff88');
    });

    it('parses the dexpaprika-style @theme block end-to-end', () => {
      const src = `
        @theme {
          --color-dp-border: #2a2d42;
          --color-dp-body-bg: #050507;
          --spacing-bs-1: 2.5px;
          --spacing-bs-5: 30px;
          --font-sans: 'DM Sans', 'Inter', system-ui, sans-serif;
          --breakpoint-sm: 640px;
        }
      `;
      const p = parseCssVariablesFromString(src);
      expect(p.colors?.get('dp-border')?.hex).toBe('#2a2d42');
      expect(p.colors?.get('dp-body-bg')?.hex).toBe('#050507');
      expect(p.spacing?.get('bs-1')?.value).toBe(2.5);
      expect(p.spacing?.get('bs-5')?.value).toBe(30);
      expect(p.typography?.get('sans')?.fontFamily).toBe('DM Sans');
      // breakpoint-sm is ignored
      expect(p.spacing?.has('sm')).toBe(false);
    });
  });

  describe('icon CSS variable parsing', () => {
    it('captures --icon-size-* in :root as icons.size map', () => {
      const css = `:root {
        --icon-size-sm: 16px;
        --icon-size-md: 24px;
        --icon-size-lg: 32px;
      }`;
      const out = parseCssVariablesFromString(css);
      expect(out.icons?.size?.get('sm')).toBe('16px');
      expect(out.icons?.size?.get('md')).toBe('24px');
      expect(out.icons?.size?.get('lg')).toBe('32px');
    });

    it('captures --icon-stroke-width as number', () => {
      const out = parseCssVariablesFromString(`:root { --icon-stroke-width: 1.5; }`);
      expect(out.icons?.strokeWidth).toBe(1.5);
    });

    it('captures --icon-stroke as alias for strokeWidth', () => {
      const out = parseCssVariablesFromString(`:root { --icon-stroke: 2; }`);
      expect(out.icons?.strokeWidth).toBe(2);
    });

    it('captures --icon-grid as dimension string', () => {
      const out = parseCssVariablesFromString(`:root { --icon-grid: 24px; }`);
      expect(out.icons?.grid).toBe('24px');
    });

    it('captures --icon-color verbatim', () => {
      const out = parseCssVariablesFromString(`:root { --icon-color: var(--color-on-surface); }`);
      expect(out.icons?.color).toBe('var(--color-on-surface)');
    });

    it('captures --icon-library with surrounding quotes stripped', () => {
      const out = parseCssVariablesFromString(`:root { --icon-library: "Lucide"; }`);
      expect(out.icons?.library).toBe('Lucide');
    });

    it('captures --icon-style with surrounding quotes stripped', () => {
      const out = parseCssVariablesFromString(`:root { --icon-style: 'outlined'; }`);
      expect(out.icons?.style).toBe('outlined');
    });

    it('does not route --icon-size-sm into generic spacing map', () => {
      const out = parseCssVariablesFromString(`:root { --icon-size-sm: 16px; }`);
      expect(out.spacing?.size ?? 0).toBe(0);
      expect(out.icons?.size?.get('sm')).toBe('16px');
    });

    it('works in @theme blocks too', () => {
      const css = `@theme {
        --icon-size-md: 20px;
        --icon-stroke-width: 1.25;
      }`;
      const out = parseCssVariablesFromString(css);
      expect(out.icons?.size?.get('md')).toBe('20px');
      expect(out.icons?.strokeWidth).toBe(1.25);
    });

    it('ignores malformed --icon-stroke-width (non-numeric)', () => {
      const out = parseCssVariablesFromString(`:root { --icon-stroke-width: thick; }`);
      expect(out.icons?.strokeWidth).toBeUndefined();
    });

    it('returns no icons field when CSS has no --icon-* vars', () => {
      const out = parseCssVariablesFromString(`:root { --color-primary: #ff0000; }`);
      expect(out.icons).toBeUndefined();
    });

    it('rejects strokeWidth with unit suffix (Number coercion fails)', () => {
      const out = parseCssVariablesFromString(`:root { --icon-stroke-width: 1.5px; }`);
      expect(out.icons?.strokeWidth).toBeUndefined();
    });

    it('ignores --icon-size- (empty bucket suffix)', () => {
      const out = parseCssVariablesFromString(`:root { --icon-size-: 16px; }`);
      expect(out.icons).toBeUndefined();
    });
  });
});
