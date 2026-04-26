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

import { describe, it, expect } from 'bun:test';
import { ModelHandler, contrastRatio } from './handler.js';
import type { ParsedDesignSystem } from '../parser/spec.js';

const handler = new ModelHandler();

function makeParsed(overrides: Partial<ParsedDesignSystem> = {}): ParsedDesignSystem {
  return {
    sourceMap: new Map(),
    ...overrides,
  };
}

describe('ModelHandler', () => {
  // ── Cycle 9: Build symbol table from parsed colors ────────────────
  describe('symbol table from colors', () => {
    it('resolves valid hex colors into the symbol table', () => {
      const result = handler.execute(makeParsed({
        colors: { primary: '#647D66', secondary: '#ff0000' },
      }));
      const primary = result.designSystem.symbolTable.get('colors.primary');
      expect(primary).toBeDefined();
      expect(typeof primary === 'object' && primary !== null && 'type' in primary && primary.type === 'color').toBe(true);
      if (typeof primary === 'object' && primary !== null && 'hex' in primary) {
        expect(primary.hex).toBe('#647d66');
      }

      expect(result.designSystem.colors.size).toBe(2);
    });
    it('emits diagnostic for invalid color format', () => {
      const result = handler.execute(makeParsed({
        colors: { primary: 'invalid-color' },
      }));
      expect(result.findings.length).toBe(1);
      expect(result.findings[0]!.path).toBe('colors.primary');
      expect(result.findings[0]!.severity).toBe('error');
    });

    it('normalizes #RGB shorthand to #RRGGBB', () => {
      const result = handler.execute(makeParsed({
        colors: { accent: '#abc' },
      }));
      const accent = result.designSystem.colors.get('accent');
      expect(accent?.hex).toBe('#aabbcc');
    });

    it('normalizes #RGBA shorthand to #RRGGBBAA and extracts alpha', () => {
      const result = handler.execute(makeParsed({
        colors: { transparent: '#abc0' },
      }));
      const transparent = result.designSystem.colors.get('transparent');
      expect(transparent?.hex).toBe('#aabbcc00');
      expect(transparent?.a).toBe(0);
    });

    it('accepts 8-digit hex colors and extracts alpha', () => {
      const result = handler.execute(makeParsed({
        colors: { semitransparent: '#FFFFFFA6' },
      }));
      const semitransparent = result.designSystem.colors.get('semitransparent');
      expect(semitransparent?.hex).toBe('#ffffffa6');
      expect(semitransparent?.a).toBeCloseTo(166 / 255, 5);
    });
  });

  // ── Cycle 10: Resolve single-level token reference ────────────────
  describe('single-level token reference resolution', () => {
    it('resolves a direct {section.token} reference in components', () => {
      const result = handler.execute(makeParsed({
        colors: { primary: '#647D66' },
        components: {
          'button-primary': {
            backgroundColor: '{colors.primary}',
          },
        },
      }));
      const btn = result.designSystem.components.get('button-primary');
      expect(btn).toBeDefined();
      const bg = btn?.properties.get('backgroundColor');
      expect(typeof bg === 'object' && bg !== null && 'type' in bg && bg.type === 'color').toBe(true);
    });
  });

  // ── Cycle 11: Resolve chained token reference ─────────────────────
  describe('chained token reference resolution', () => {
    it('resolves chained refs: {a} → {b} → #value', () => {
      const result = handler.execute(makeParsed({
        colors: {
          'brand': '#647D66',
          'primary': '{colors.brand}' as string,
        },
        components: {
          'button': {
            backgroundColor: '{colors.primary}',
          },
        },
      }));
      const btn = result.designSystem.components.get('button');
      const bg = btn?.properties.get('backgroundColor');
      expect(typeof bg === 'object' && bg !== null && 'type' in bg && bg.type === 'color').toBe(true);
      if (typeof bg === 'object' && bg !== null && 'hex' in bg) {
        expect(bg.hex).toBe('#647d66');
      }
    });
  });

  // ── Cycle 12: Detect circular reference ───────────────────────────
  describe('circular reference detection', () => {
    it('detects circular refs and records them as unresolved', () => {
      const result = handler.execute(makeParsed({
        colors: {
          'a': '{colors.b}' as string,
          'b': '{colors.a}' as string,
        },
        components: {
          'card': {
            backgroundColor: '{colors.a}',
          },
        },
      }));
      const card = result.designSystem.components.get('card');
      expect(card?.unresolvedRefs.length).toBeGreaterThan(0);
    });

    it('detects long circular reference chains', () => {
      const result = handler.execute(makeParsed({
        colors: {
          'a': '{colors.b}',
          'b': '{colors.c}',
          'c': '{colors.d}',
          'd': '{colors.e}',
          'e': '{colors.f}',
          'f': '{colors.g}',
          'g': '{colors.h}',
          'h': '{colors.i}',
          'i': '{colors.j}',
          'j': '{colors.a}',
        },
        components: {
          'card': {
            backgroundColor: '{colors.a}',
          },
        },
      }));
      const card = result.designSystem.components.get('card');
      expect(card?.unresolvedRefs.length).toBeGreaterThan(0);
    });
  });

  // ── Cycle N: Non-standard units are parsed, not dropped ────────────
  describe('non-standard dimension units', () => {
    it('emits diagnostic for non-standard dimension units in typography', () => {
      const result = handler.execute(makeParsed({
        typography: {
          'headline': { fontFamily: 'Roboto', fontSize: '32px', letterSpacing: '-0.02vh' },
        },
      }));
      expect(result.findings.length).toBe(1);
      expect(result.findings[0]!.path).toBe('typography.headline.letterSpacing');
      expect(result.findings[0]!.severity).toBe('error');
    });
  });
  describe('typography validation', () => {
    it('emits diagnostic when fontFamily is a hex color', () => {
      const result = handler.execute(makeParsed({
        typography: {
          'headline': { fontFamily: '#ffffff' },
        },
      }));
      expect(result.findings.length).toBe(1);
      expect(result.findings[0]!.path).toBe('typography.headline.fontFamily');
      expect(result.findings[0]!.severity).toBe('error');
    });

    it('emits diagnostic when fontWeight is not a number or valid number string', () => {
      const result = handler.execute(makeParsed({
        typography: {
          'headline': { fontWeight: 'bold' },
        },
      }));
      expect(result.findings.length).toBe(1);
      expect(result.findings[0]!.path).toBe('typography.headline.fontWeight');
      expect(result.findings[0]!.severity).toBe('error');
    });

    it('accepts string representations of numbers for fontWeight', () => {
      const result = handler.execute(makeParsed({
        typography: {
          'headline': { fontWeight: '700' },
        },
      }));
      expect(result.findings.length).toBe(0);
      const headline = result.designSystem.typography.get('headline');
      expect(headline?.fontWeight).toBe(700);
    });
  });

  describe('rounded validation', () => {
    it('emits diagnostic for non-standard units in rounded', () => {
      const result = handler.execute(makeParsed({
        rounded: { sm: '2vh' },
      }));
      expect(result.findings.length).toBe(1);
      expect(result.findings[0]!.path).toBe('rounded.sm');
      expect(result.findings[0]!.severity).toBe('error');
    });
  });

  // ── Cycle 13: Compute WCAG contrast ratio ─────────────────────────

  describe('WCAG contrast ratio', () => {
    it('computes correct contrast ratio for black on white (21:1)', () => {
      const result = handler.execute(makeParsed({
        colors: { black: '#000000', white: '#ffffff' },
      }));
      const black = result.designSystem.colors.get('black');
      const white = result.designSystem.colors.get('white');
      expect(black).toBeDefined();
      expect(white).toBeDefined();

      const ratio = contrastRatio(black!, white!);
      expect(ratio).toBeCloseTo(21, 0);
    });

    it('computes correct contrast for identical colors (1:1)', () => {
      const result = handler.execute(makeParsed({
        colors: { red1: '#ff0000', red2: '#ff0000' },
      }));
      const ratio = contrastRatio(result.designSystem.colors.get('red1')!, result.designSystem.colors.get('red2')!);
      expect(ratio).toBeCloseTo(1, 1);
    });
  });

  describe('return signature', () => {
    it('returns findings array', () => {
      const result = handler.execute(makeParsed({
        colors: { primary: '#647D66' },
      }));
      expect(result.findings).toBeDefined();
    });
  });

  // ── Fix #25: rounded and spacing token references ─────────────────
  describe('rounded token reference resolution', () => {
    it('resolves a direct token reference in rounded', () => {
      const result = handler.execute(makeParsed({
        rounded: {
          sm: '4px',
          button: '{rounded.sm}' as string,
        },
      }));
      const button = result.designSystem.rounded.get('button');
      expect(button).toBeDefined();
      expect(button?.value).toBe(4);
      expect(button?.unit).toBe('px');
    });

    it('resolves a chained token reference in rounded', () => {
      const result = handler.execute(makeParsed({
        rounded: {
          sm: '4px',
          md: '{rounded.sm}' as string,
          card: '{rounded.md}' as string,
        },
      }));
      const card = result.designSystem.rounded.get('card');
      expect(card).toBeDefined();
      expect(card?.value).toBe(4);
      expect(card?.unit).toBe('px');
    });

    it('resolved rounded reference appears in symbol table', () => {
      const result = handler.execute(makeParsed({
        rounded: {
          sm: '4px',
          button: '{rounded.sm}' as string,
        },
      }));
      const sym = result.designSystem.symbolTable.get('rounded.button');
      expect(sym).toBeDefined();
      expect(typeof sym === 'object' && sym !== null && 'type' in sym && sym.type === 'dimension').toBe(true);
    });
  });

  describe('spacing token reference resolution', () => {
    it('resolves a direct token reference in spacing', () => {
      const result = handler.execute(makeParsed({
        spacing: {
          base: '8px',
          'button-padding': '{spacing.base}' as string,
        },
      }));
      const buttonPadding = result.designSystem.spacing.get('button-padding');
      expect(buttonPadding).toBeDefined();
      expect(buttonPadding?.value).toBe(8);
      expect(buttonPadding?.unit).toBe('px');
    });

    it('resolves a chained token reference in spacing', () => {
      const result = handler.execute(makeParsed({
        spacing: {
          base: '8px',
          md: '{spacing.base}' as string,
          'section-gap': '{spacing.md}' as string,
        },
      }));
      const sectionGap = result.designSystem.spacing.get('section-gap');
      expect(sectionGap).toBeDefined();
      expect(sectionGap?.value).toBe(8);
      expect(sectionGap?.unit).toBe('px');
    });

    it('resolved spacing reference appears in symbol table', () => {
      const result = handler.execute(makeParsed({
        spacing: {
          base: '8px',
          'button-padding': '{spacing.base}' as string,
        },
      }));
      const sym = result.designSystem.symbolTable.get('spacing.button-padding');
      expect(sym).toBeDefined();
      expect(typeof sym === 'object' && sym !== null && 'type' in sym && sym.type === 'dimension').toBe(true);
    });

    it('resolved spacing reference propagates correctly to component resolution', () => {
      const result = handler.execute(makeParsed({
        spacing: {
          base: '8px',
          'button-padding': '{spacing.base}' as string,
        },
        components: {
          'button-primary': {
            padding: '{spacing.button-padding}',
          },
        },
      }));
      const btn = result.designSystem.components.get('button-primary');
      const padding = btn?.properties.get('padding');
      expect(typeof padding === 'object' && padding !== null && 'type' in padding && padding.type === 'dimension').toBe(true);
      if (typeof padding === 'object' && padding !== null && 'value' in padding) {
        expect(padding.value).toBe(8);
      }
    });
  });

  // ── Issue #2: typed component sub-token validation ───────────────
  describe('typed component sub-token validation', () => {
    it('emits error for opacity > 1', () => {
      const result = handler.execute(makeParsed({
        components: { card: { opacity: '2' } },
      }));
      const errs = result.findings.filter(f => f.severity === 'error');
      expect(errs.length).toBe(1);
      expect(errs[0]!.path).toBe('components.card.opacity');
    });

    it('emits error for malformed border shorthand', () => {
      const result = handler.execute(makeParsed({
        components: { card: { border: '1px squiggly #000' } },
      }));
      const errs = result.findings.filter(f => f.severity === 'error');
      expect(errs.length).toBe(1);
      expect(errs[0]!.path).toBe('components.card.border');
    });

    it('emits error for shadow without a color', () => {
      const result = handler.execute(makeParsed({
        components: { card: { shadow: '0 4px 8px' } },
      }));
      const errs = result.findings.filter(f => f.severity === 'error');
      expect(errs.length).toBe(1);
    });

    it('emits error for transition with non-time duration', () => {
      const result = handler.execute(makeParsed({
        components: { card: { transition: 'opacity 200px ease-out' } },
      }));
      const errs = result.findings.filter(f => f.severity === 'error');
      expect(errs.length).toBe(1);
    });

    it('accepts iconSize: auto', () => {
      const result = handler.execute(makeParsed({
        components: { card: { iconSize: 'auto' } },
      }));
      expect(result.findings.filter(f => f.severity === 'error').length).toBe(0);
    });

    it('accepts padding shorthand (12px 16px)', () => {
      const result = handler.execute(makeParsed({
        components: { card: { padding: '12px 16px' } },
      }));
      expect(result.findings.filter(f => f.severity === 'error').length).toBe(0);
    });

    it('skips validation for token references', () => {
      const result = handler.execute(makeParsed({
        colors: { primary: '#ff0000' },
        components: { card: { borderColor: '{colors.primary}' } },
      }));
      expect(result.findings.filter(f => f.severity === 'error').length).toBe(0);
    });
  });

  describe('elevation token group', () => {
    it('parses elevation entries into the state', () => {
      const result = handler.execute(makeParsed({
        elevation: {
          raised: '0 4px 8px rgba(0,0,0,0.08)',
          modal: '0 24px 48px rgba(0,0,0,0.16)',
        },
      }));
      expect(result.designSystem.elevation.size).toBe(2);
      const raised = result.designSystem.elevation.get('raised');
      expect(raised?.type).toBe('shadow');
      expect(raised?.raw).toBe('0 4px 8px rgba(0,0,0,0.08)');
    });

    it('resolves component shadow via {elevation.*} reference', () => {
      const result = handler.execute(makeParsed({
        elevation: { raised: '0 4px 8px rgba(0,0,0,0.08)' },
        components: { card: { shadow: '{elevation.raised}' } },
      }));
      const shadow = result.designSystem.components.get('card')?.properties.get('shadow');
      expect(typeof shadow === 'object' && shadow !== null && 'type' in shadow && shadow.type === 'shadow').toBe(true);
    });

    it('resolves bare elevation: raised against the elevation map', () => {
      const result = handler.execute(makeParsed({
        elevation: { raised: '0 4px 8px rgba(0,0,0,0.08)' },
        components: { card: { elevation: 'raised' } },
      }));
      const elevation = result.designSystem.components.get('card')?.properties.get('elevation');
      expect(typeof elevation === 'object' && elevation !== null && 'type' in elevation && elevation.type === 'shadow').toBe(true);
    });
  });
});