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
});
