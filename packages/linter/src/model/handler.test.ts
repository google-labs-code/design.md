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
      expect(result.success).toBe(true);
      if (result.success) {
        const primary = result.data.symbolTable.get('colors.primary');
        expect(primary).toBeDefined();
        expect(typeof primary === 'object' && primary !== null && 'type' in primary && primary.type === 'color').toBe(true);
        if (typeof primary === 'object' && primary !== null && 'hex' in primary) {
          expect(primary.hex).toBe('#647d66');
        }

        expect(result.data.colors.size).toBe(2);
      }
    });

    it('normalizes #RGB shorthand to #RRGGBB', () => {
      const result = handler.execute(makeParsed({
        colors: { accent: '#abc' },
      }));
      expect(result.success).toBe(true);
      if (result.success) {
        const accent = result.data.colors.get('accent');
        expect(accent?.hex).toBe('#aabbcc');
      }
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
      expect(result.success).toBe(true);
      if (result.success) {
        const btn = result.data.components.get('button-primary');
        expect(btn).toBeDefined();
        const bg = btn?.properties.get('backgroundColor');
        expect(typeof bg === 'object' && bg !== null && 'type' in bg && bg.type === 'color').toBe(true);
      }
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
      expect(result.success).toBe(true);
      if (result.success) {
        const btn = result.data.components.get('button');
        const bg = btn?.properties.get('backgroundColor');
        expect(typeof bg === 'object' && bg !== null && 'type' in bg && bg.type === 'color').toBe(true);
        if (typeof bg === 'object' && bg !== null && 'hex' in bg) {
          expect(bg.hex).toBe('#647d66');
        }
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
      expect(result.success).toBe(true);
      if (result.success) {
        const card = result.data.components.get('card');
        expect(card?.unresolvedRefs.length).toBeGreaterThan(0);
      }
    });
  });

  // ── Cycle N: Non-standard units are parsed, not dropped ────────────
  describe('non-standard dimension units', () => {
    it('preserves em units in typography letterSpacing', () => {
      const result = handler.execute(makeParsed({
        typography: {
          'headline': { fontFamily: 'Roboto', fontSize: '32px', letterSpacing: '-0.02em' },
        },
      }));
      expect(result.success).toBe(true);
      if (result.success) {
        const headline = result.data.typography.get('headline');
        expect(headline?.letterSpacing).toBeDefined();
        expect(headline?.letterSpacing?.value).toBe(-0.02);
        expect(headline?.letterSpacing?.unit).toBe('em');
      }
    });
  });

  // ── Cycle 13: Compute WCAG contrast ratio ─────────────────────────
  describe('WCAG contrast ratio', () => {
    it('computes correct contrast ratio for black on white (21:1)', () => {
      const result = handler.execute(makeParsed({
        colors: { black: '#000000', white: '#ffffff' },
      }));
      expect(result.success).toBe(true);
      if (result.success) {
        const black = result.data.colors.get('black');
        const white = result.data.colors.get('white');
        expect(black).toBeDefined();
        expect(white).toBeDefined();

        const ratio = contrastRatio(black!, white!);
        expect(ratio).toBeCloseTo(21, 0);
      }
    });

    it('computes correct contrast for identical colors (1:1)', () => {
      const result = handler.execute(makeParsed({
        colors: { red1: '#ff0000', red2: '#ff0000' },
      }));
      expect(result.success).toBe(true);
      if (result.success) {
        const ratio = contrastRatio(result.data.colors.get('red1')!, result.data.colors.get('red2')!);
        expect(ratio).toBeCloseTo(1, 1);
      }
    });
  });
});
