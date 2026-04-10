import { describe, it, expect } from 'bun:test';
import { TailwindEmitterHandler } from './handler.js';
import { ModelHandler } from '../model/handler.js';
import type { ParsedDesignSystem } from '../parser/spec.js';

const emitter = new TailwindEmitterHandler();
const modelHandler = new ModelHandler();

function buildState(overrides: Partial<ParsedDesignSystem> = {}) {
  const parsed: ParsedDesignSystem = { sourceMap: new Map(), ...overrides };
  const result = modelHandler.execute(parsed);
  const hasErrors = result.diagnostics.some(d => d.severity === 'error');
  if (hasErrors) {
    throw new Error(`Model build failed: ${result.diagnostics.map(d => d.message).join(', ')}`);
  }
  return result.designSystem;
}

describe('TailwindEmitterHandler', () => {
  // ── Cycle 22: Colors map to theme.extend.colors ─────────────────
  describe('colors mapping', () => {
    it('maps resolved colors to theme.extend.colors', () => {
      const state = buildState({
        colors: { primary: '#647D66', secondary: '#ff0000' },
      });
      const config = emitter.execute(state);
      expect(config.theme.extend.colors?.['primary']).toBe('#647d66');
      expect(config.theme.extend.colors?.['secondary']).toBe('#ff0000');
    });
  });

  // ── Cycle 23: Typography maps to fontFamily + fontSize ──────────
  describe('typography mapping', () => {
    it('maps typography scales to fontFamily and fontSize', () => {
      const state = buildState({
        typography: {
          'headline-lg': {
            fontFamily: 'Google Sans Display',
            fontSize: '42px',
            fontWeight: 500,
            lineHeight: '50px',
            letterSpacing: '1.2px',
          },
          'body-lg': {
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
          },
        },
      });
      const config = emitter.execute(state);

      // fontFamily
      expect(config.theme.extend.fontFamily?.['headline-lg']).toContain('Google Sans Display');
      expect(config.theme.extend.fontFamily?.['body-lg']).toContain('Roboto');

      // fontSize with metadata tuple
      const hlFontSize = config.theme.extend.fontSize?.['headline-lg'];
      expect(hlFontSize).toBeDefined();
      expect(hlFontSize?.[0]).toBe('42px');
      expect(hlFontSize?.[1]?.['lineHeight']).toBe('50px');
      expect(hlFontSize?.[1]?.['letterSpacing']).toBe('1.2px');
    });
  });

  // ── Cycle 24: Rounded + spacing map correctly ───────────────────
  describe('dimensions mapping', () => {
    it('maps rounded to borderRadius and spacing to spacing', () => {
      const state = buildState({
        rounded: { regular: '4px', lg: '8px', full: '9999px' },
        spacing: { 'gutter-s': '8px', 'gutter-l': '16px' },
      });
      const config = emitter.execute(state);

      expect(config.theme.extend.borderRadius?.['regular']).toBe('4px');
      expect(config.theme.extend.borderRadius?.['lg']).toBe('8px');
      expect(config.theme.extend.borderRadius?.['full']).toBe('9999px');

      expect(config.theme.extend.spacing?.['gutter-s']).toBe('8px');
      expect(config.theme.extend.spacing?.['gutter-l']).toBe('16px');
    });
  });

  // ── Empty state produces empty config ─────────────────────────────
  describe('empty state', () => {
    it('produces a valid config with empty extend sections', () => {
      const state = buildState({});
      const config = emitter.execute(state);
      expect(config.theme.extend).toBeDefined();
    });
  });
});
