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

    it('successfully parses nested color declarations (Issue #102)', () => {
      const result = handler.execute(makeParsed({
        colors: {
          background: {
            light: '#fbfaf1',
            dark: '#11140e'
          }
        }
      }));

      expect(result.findings.filter(f => f.severity === 'error').length).toBe(0);
      expect(result.designSystem.colors.has('background.light')).toBe(true);
      expect(result.designSystem.colors.has('background.dark')).toBe(true);
      expect(result.designSystem.colors.get('background.light')?.hex).toBe('#fbfaf1');
      expect(result.designSystem.symbolTable.has('colors.background.light')).toBe(true);
    });

    it('successfully parses 3-level nested color declarations', () => {
      const result = handler.execute(makeParsed({
        colors: {
          background: {
            light: {
              primary: '#fbfaf1',
              secondary: '#f0f0f0'
            }
          }
        }
      }));

      expect(result.findings.filter(f => f.severity === 'error').length).toBe(0);
      expect(result.designSystem.colors.has('background.light.primary')).toBe(true);
      expect(result.designSystem.colors.has('background.light.secondary')).toBe(true);
      expect(result.designSystem.colors.get('background.light.primary')?.hex).toBe('#fbfaf1');
      expect(result.designSystem.symbolTable.has('colors.background.light.primary')).toBe(true);
    });

    it('successfully parses 4-level nested color declarations', () => {
      const result = handler.execute(makeParsed({
        colors: {
          theme: {
            surface: {
              background: {
                base: '#fbfaf1'
              }
            }
          }
        }
      }));

      expect(result.findings.filter(f => f.severity === 'error').length).toBe(0);
      expect(result.designSystem.colors.has('theme.surface.background.base')).toBe(true);
      expect(result.designSystem.colors.get('theme.surface.background.base')?.hex).toBe('#fbfaf1');
      expect(result.designSystem.symbolTable.has('colors.theme.surface.background.base')).toBe(true);
    });

    it('emits diagnostic for duplicate token path in colors', () => {
      const result = handler.execute(makeParsed({
        colors: {
          'utility-info': {
            '50': '#111111',
          },
          'utility-info.50': '#222222',
        },
      }));
      const errors = result.findings.filter(f => f.severity === 'error');
      expect(errors.length).toBe(1);
      expect(errors[0]!.path).toBe('colors.utility-info.50');
      expect(errors[0]!.message).toBe("Duplicate token path 'colors.utility-info.50' detected.");
    });

    it('emits diagnostic when grouped color token flattens to an existing token name', () => {
      const result = handler.execute(makeParsed({
        colors: {
          'utility-info-50': '#111111',
          'utility-info': {
            '50': '#222222',
          }
        },
      }));
      const errors = result.findings.filter(f => f.severity === 'error');
      expect(errors.length).toBe(1);
      expect(errors[0]!.path).toBe('colors.utility-info.50');
      expect(errors[0]!.message).toBe("Grouped colors token flattens to 'utility-info-50', which is already defined.");
    });

    it('emits diagnostic for duplicate token path in rounded', () => {
      const result = handler.execute(makeParsed({
        rounded: {
          'button': {
            'lg': '8px',
          },
          'button.lg': '12px',
        },
      }));
      const errors = result.findings.filter(f => f.severity === 'error');
      expect(errors.length).toBe(1);
      expect(errors[0]!.path).toBe('rounded.button.lg');
      expect(errors[0]!.message).toBe("Duplicate token path 'rounded.button.lg' detected.");
    });

    it('emits diagnostic when grouped rounded token flattens to an existing token name', () => {
      const result = handler.execute(makeParsed({
        rounded: {
          'button-lg': '8px',
          'button': {
            'lg': '12px',
          }
        },
      }));
      const errors = result.findings.filter(f => f.severity === 'error');
      expect(errors.length).toBe(1);
      expect(errors[0]!.path).toBe('rounded.button.lg');
      expect(errors[0]!.message).toBe("Grouped rounded token flattens to 'button-lg', which is already defined.");
    });

    it('emits diagnostic for duplicate token path in spacing', () => {
      const result = handler.execute(makeParsed({
        spacing: {
          'gutter': {
            's': '8px',
          },
          'gutter.s': '12px',
        },
      }));
      const errors = result.findings.filter(f => f.severity === 'error');
      expect(errors.length).toBe(1);
      expect(errors[0]!.path).toBe('spacing.gutter.s');
      expect(errors[0]!.message).toBe("Duplicate token path 'spacing.gutter.s' detected.");
    });

    it('emits diagnostic when grouped spacing token flattens to an existing token name', () => {
      const result = handler.execute(makeParsed({
        spacing: {
          'gutter-s': '8px',
          'gutter': {
            's': '12px',
          }
        },
      }));
      const errors = result.findings.filter(f => f.severity === 'error');
      expect(errors.length).toBe(1);
      expect(errors[0]!.path).toBe('spacing.gutter.s');
      expect(errors[0]!.message).toBe("Grouped spacing token flattens to 'gutter-s', which is already defined.");
    });

    it('resolves standard CSS named colors and converts them to hex/sRGB', () => {
      const result = handler.execute(makeParsed({
        colors: { c1: 'red', c2: 'transparent', c3: 'aliceblue' },
      }));
      expect(result.findings.length).toBe(0);
      const c1 = result.designSystem.colors.get('c1');
      expect(c1?.hex).toBe('#ff0000');
      expect(c1?.r).toBe(255);
      expect(c1?.g).toBe(0);
      expect(c1?.b).toBe(0);
      
      const c2 = result.designSystem.colors.get('c2');
      expect(c2?.hex).toBe('#00000000');
      expect(c2?.a).toBe(0);
    });

    it('resolves functional rgb/rgba colors', () => {
      // comma separated
      const resComma = handler.execute(makeParsed({
        colors: { rgb1: 'rgb(255, 100, 50)', rgba1: 'rgba(255, 100, 50, 0.5)' },
      }));
      expect(resComma.findings.length).toBe(0);
      expect(resComma.designSystem.colors.get('rgb1')?.hex).toBe('#ff6432');
      expect(resComma.designSystem.colors.get('rgba1')?.a).toBeCloseTo(0.5);

      // space separated and percentages
      const resSpace = handler.execute(makeParsed({
        colors: { rgb2: 'rgb(100% 50% 0%)', rgba2: 'rgb(100% 50% 0% / 40%)' },
      }));
      expect(resSpace.findings.length).toBe(0);
      expect(resSpace.designSystem.colors.get('rgb2')?.r).toBe(255);
      expect(resSpace.designSystem.colors.get('rgb2')?.g).toBe(128);
      expect(resSpace.designSystem.colors.get('rgba2')?.a).toBeCloseTo(0.4);
    });

    it('resolves functional hsl/hsla colors', () => {
      const result = handler.execute(makeParsed({
        colors: { hsl1: 'hsl(120, 100%, 50%)', hsla1: 'hsl(120deg 100% 50% / 0.25)' },
      }));
      expect(result.findings.length).toBe(0);
      const hsl1 = result.designSystem.colors.get('hsl1');
      expect(hsl1?.hex).toBe('#00ff00');
      const hsla1 = result.designSystem.colors.get('hsla1');
      expect(hsla1?.hex).toBe('#00ff0040');
      expect(hsla1?.a).toBeCloseTo(0.25);
    });

    it('resolves functional hwb colors', () => {
      const result = handler.execute(makeParsed({
        colors: { hwb1: 'hwb(120 0% 0%)', hwb2: 'hwb(120 50% 50%)', hwb3: 'hwb(120 20% 40% / 0.5)' },
      }));
      expect(result.findings.length).toBe(0);
      expect(result.designSystem.colors.get('hwb1')?.hex).toBe('#00ff00');
      expect(result.designSystem.colors.get('hwb2')?.hex).toBe('#808080');
      expect(result.designSystem.colors.get('hwb3')?.a).toBeCloseTo(0.5);
    });

    it('resolves lab, lch, oklab, oklch color spaces', () => {
      const result = handler.execute(makeParsed({
        colors: {
          lab1: 'lab(50% 40 -20)',
          lch1: 'lch(50% 44.72 333.43)',
          oklab1: 'oklab(0.6 0.1 -0.1)',
          oklch1: 'oklch(0.6 0.1414 315)'
        },
      }));
      expect(result.findings.length).toBe(0);
      expect(result.designSystem.colors.get('lab1')).toBeDefined();
      expect(result.designSystem.colors.get('lch1')).toBeDefined();
      expect(result.designSystem.colors.get('oklab1')).toBeDefined();
      expect(result.designSystem.colors.get('oklch1')).toBeDefined();
    });

    it('resolves color-mix colors', () => {
      const result = handler.execute(makeParsed({
        colors: { mix1: 'color-mix(in srgb, red 20%, blue 80%)', mix2: 'color-mix(in srgb, red, white 50%)' },
      }));
      expect(result.findings.length).toBe(0);
      const mix1 = result.designSystem.colors.get('mix1');
      expect(mix1?.r).toBe(51);
      expect(mix1?.b).toBe(204);
      
      const mix2 = result.designSystem.colors.get('mix2');
      expect(mix2?.r).toBe(255);
      expect(mix2?.g).toBe(128);
      expect(mix2?.b).toBe(128);
    });

    it('parses grad hue units correctly (100grad === 90deg)', () => {
      const result = handler.execute(makeParsed({
        colors: { grad: 'hsl(100grad 100% 50%)', deg: 'hsl(90deg 100% 50%)' },
      }));
      expect(result.findings.length).toBe(0);
      const grad = result.designSystem.colors.get('grad');
      expect(grad?.hex).toBe('#80ff00');
      expect(grad?.hex).toBe(result.designSystem.colors.get('deg')?.hex);
    });

    it('rejects color-mix with bare-number (non-percentage) weights', () => {
      const result = handler.execute(makeParsed({
        colors: { bad: 'color-mix(in srgb, red 20, blue)' },
      }));
      // CSS color-mix weights are percentages only; a bare number is invalid.
      expect(result.designSystem.colors.has('bad')).toBe(false);
      expect(result.findings.some(f => f.path === 'colors.bad' && f.severity === 'error')).toBe(true);
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

    it('resolves references to nested colors', () => {
      const result = handler.execute(makeParsed({
        colors: {
          background: {
            light: '#fbfaf1',
            dark: '#11140e'
          },
          page: '{colors.background.light}'
        }
      }));

      expect(result.findings.filter(f => f.severity === 'error').length).toBe(0);
      const page = result.designSystem.colors.get('page');
      expect(page?.hex).toBe('#fbfaf1');
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

    it('warns about unrecognized typography sub-properties that are silently dropped', () => {
      const result = handler.execute(makeParsed({
        typography: {
          'headline': { fontFamily: 'Inter', textTransform: 'uppercase' },
        },
      }));
      const warning = result.findings.find(f => f.path === 'typography.headline.textTransform');
      expect(warning).toBeDefined();
      expect(warning?.severity).toBe('warning');
      // The recognized property is still resolved, and known props never warn.
      expect(result.designSystem.typography.get('headline')?.fontFamily).toBe('Inter');
      expect(result.findings.some(f => f.path === 'typography.headline.fontFamily')).toBe(false);
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

  // ── Fix #42: numeric component props crash model builder ──────────
  describe('numeric component property values', () => {
    it('does not crash when fontWeight is a bare number', () => {
      const result = handler.execute(makeParsed({
        colors: { primary: '#000000' },
        components: {
          'button-primary': {
            backgroundColor: '{colors.primary}',
            fontWeight: 600 as unknown as string,
          },
        },
      }));
      expect(result.findings.filter(f => f.severity === 'error')).toHaveLength(0);
      const btn = result.designSystem.components.get('button-primary');
      expect(btn).toBeDefined();
      expect(btn?.properties.get('fontWeight') as unknown).toBe(600);
    });

    it('stores numeric fontWeight value as-is in component properties', () => {
      const result = handler.execute(makeParsed({
        components: {
          'heading': {
            fontWeight: 700 as unknown as string,
          },
        },
      }));
      const heading = result.designSystem.components.get('heading');
      expect(heading?.properties.get('fontWeight') as unknown).toBe(700);
    });

    it('does not crash when borderWidth is a bare number', () => {
      const result = handler.execute(makeParsed({
        components: {
          'card': {
            borderWidth: 1 as unknown as string,
          },
        },
      }));
      expect(result.findings.filter(f => f.severity === 'error')).toHaveLength(0);
      const card = result.designSystem.components.get('card');
      expect(card?.properties.get('borderWidth') as unknown).toBe(1);
    });

    it('handles mixed numeric and string props in same component without crashing', () => {
      const result = handler.execute(makeParsed({
        colors: { primary: '#ff0000' },
        spacing: { md: '16px' },
        components: {
          'button': {
            fontWeight: 600 as unknown as string,
            backgroundColor: '{colors.primary}',
            padding: '{spacing.md}',
            borderRadius: '4px',
          },
        },
      }));
      expect(result.findings.filter(f => f.severity === 'error')).toHaveLength(0);
      const btn = result.designSystem.components.get('button');
      expect(btn?.properties.get('fontWeight') as unknown).toBe(600);
    });
  });

  // ── Fix #75: non-string YAML scalars crash model builder ────────────
  describe('non-string component property values (Issue #75)', () => {
    it('does not crash when a component property is a float (opacity: 0.9)', () => {
      const result = handler.execute(makeParsed({
        colors: { primary: '#FF0000', 'on-primary': '#FFFFFF' },
        components: {
          button: {
            backgroundColor: '{colors.primary}',
            textColor: '{colors.on-primary}',
            opacity: 0.9 as unknown as string,
          },
        },
      }));
      expect(result.findings.filter(f => f.severity === 'error')).toHaveLength(0);
      const btn = result.designSystem.components.get('button');
      expect(btn?.properties.get('opacity') as unknown).toBe(0.9);
    });

    it('does not crash when a component property is a boolean (visible: true)', () => {
      const result = handler.execute(makeParsed({
        components: {
          banner: {
            visible: true as unknown as string,
          },
        },
      }));
      expect(result.findings.filter(f => f.severity === 'error')).toHaveLength(0);
      const banner = result.designSystem.components.get('banner');
      expect(banner?.properties.get('visible') as unknown).toBe(true);
    });

    it('handles mixed number, boolean, and string props without crashing', () => {
      const result = handler.execute(makeParsed({
        colors: { primary: '#ff0000' },
        components: {
          card: {
            backgroundColor: '{colors.primary}',
            borderRadius: '8px',
            fontWeight: 500 as unknown as string,
            opacity: 0.85 as unknown as string,
            visible: true as unknown as string,
            disabled: false as unknown as string,
          },
        },
      }));
      expect(result.findings.filter(f => f.severity === 'error')).toHaveLength(0);
      const card = result.designSystem.components.get('card');
      expect(card?.properties.get('fontWeight') as unknown).toBe(500);
      expect(card?.properties.get('opacity') as unknown).toBe(0.85);
      expect(card?.properties.get('visible') as unknown).toBe(true);
      expect(card?.properties.get('disabled') as unknown).toBe(false);
    });
  });

  describe('token nesting depth limit', () => {
    it('emits error when token nesting depth exceeds 20', () => {
      // 22 levels: Level 1..21 are objects, Level 22 is a leaf.
      // forEachLeaf will be called for Level 22 with depth 21.
      let obj: any = '#ffffff';
      for (let i = 22; i >= 1; i--) {
        obj = { [`level${i}`]: obj };
      }

      const result = handler.execute(makeParsed({
        colors: obj,
      }));
      expect(result.findings.some((f) => f.message.includes('nesting depth'))).toBe(true);
      expect(result.findings.find((f) => f.message.includes('nesting depth'))?.path).toBe('colors');
    });

    it('allows nesting up to depth 20', () => {
      // 21 levels: Level 1..20 are objects, Level 21 is a leaf.
      // forEachLeaf will be called for Level 21 with depth 20.
      let obj: any = '#ffffff';
      for (let i = 21; i >= 1; i--) {
        obj = { [`level${i}`]: obj };
      }

      const result = handler.execute(makeParsed({
        colors: obj,
      }));
      expect(result.findings.some((f) => f.message.includes('nesting depth'))).toBe(false);
      // Construct the expected path: level1.level2...level21
      const path = Array.from({ length: 21 }, (_, i) => `level${i + 1}`).join('.');
      expect(result.designSystem.colors.has(path)).toBe(true);
    });
  });

  describe('color-mix nesting depth limit', () => {
    it('rejects pathologically nested color-mix as an invalid color without collapsing the model', () => {
      let nested = 'red';
      for (let i = 0; i < 50; i++) nested = `color-mix(in srgb, ${nested}, blue)`;
      const result = handler.execute(makeParsed({
        colors: { ok: '#ffffff', deep: nested },
      }));
      // The over-deep color resolves to "invalid" (a precise per-token error),
      // not a thrown RangeError that collapses the whole model build.
      expect(result.designSystem.colors.has('deep')).toBe(false);
      expect(result.findings.some(f => f.path === 'colors.deep' && f.severity === 'error')).toBe(true);
      // Other valid tokens are unaffected.
      expect(result.designSystem.colors.get('ok')?.hex).toBe('#ffffff');
    });
  });
});