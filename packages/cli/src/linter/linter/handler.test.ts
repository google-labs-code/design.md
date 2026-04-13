import { describe, it, expect } from 'bun:test';
import { LinterHandler } from './handler.js';
import { ModelHandler } from '../model/handler.js';
import type { ParsedDesignSystem } from '../parser/spec.js';
import type { DesignSystemState } from '../model/spec.js';
import type { Finding } from './spec.js';

const linter = new LinterHandler();
const modelHandler = new ModelHandler();

/** Helper: parse → build model → return state */
function buildState(overrides: Partial<ParsedDesignSystem> = {}): DesignSystemState {
  const parsed: ParsedDesignSystem = { sourceMap: new Map(), ...overrides };
  const result = modelHandler.execute(parsed);
  const hasErrors = result.findings.some(d => d.severity === 'error');
  if (hasErrors) {
    throw new Error(`Model build failed: ${result.findings.map(d => d.message).join(', ')}`);
  }
  return result.designSystem;
}

describe('LinterHandler', () => {


  // ── Cycle 15: E3 — Broken reference emits error ──────────────────
  describe('E3: broken token reference', () => {
    it('emits error when a component references a non-existent token', () => {
      const state = buildState({
        colors: { primary: '#ff0000' },
        components: {
          'button': {
            backgroundColor: '{colors.nonexistent}',
          },
        },
      });
      const result = linter.lint(state);
      const errors = result.findings.filter((d: Finding) => d.severity === 'error');
      expect(errors.some((d: Finding) => d.message.includes('does not resolve'))).toBe(true);
    });
  });

  // ── Cycle 16: E4 — Circular reference emits error ────────────────
  describe('E4: circular reference', () => {
    it('emits error when circular references are detected', () => {
      const state = buildState({
        colors: {
          'a': '{colors.b}' as string,
          'b': '{colors.a}' as string,
        },
        components: {
          'card': {
            backgroundColor: '{colors.a}',
          },
        },
      });
      const result = linter.lint(state);
      const errors = result.findings.filter((d: Finding) => d.severity === 'error');
      expect(errors.some((d: Finding) => d.message.toLowerCase().includes('unresolved') || d.message.toLowerCase().includes('resolve'))).toBe(true);
    });
  });

  // ── Cycle 17: W1 — Missing primary emits warning ─────────────────
  describe('W1: missing primary color', () => {
    it('emits warning when no primary color is defined', () => {
      const state = buildState({
        colors: { accent: '#ff0000' },
      });
      const result = linter.lint(state);
      const warnings = result.findings.filter((d: Finding) => d.severity === 'warning');
      expect(warnings.some((d: Finding) => d.message.includes('primary'))).toBe(true);
    });

    it('does NOT emit warning when primary color IS defined', () => {
      const state = buildState({
        colors: { primary: '#ff0000' },
      });
      const result = linter.lint(state);
      const warnings = result.findings.filter((d: Finding) => d.severity === 'warning' && d.message.includes('primary'));
      expect(warnings.length).toBe(0);
    });
  });

  // ── Cycle 18: W2 — Low contrast ratio emits warning ──────────────
  describe('W2: WCAG contrast failure', () => {
    it('emits warning for low contrast backgroundColor/textColor pair', () => {
      const state = buildState({
        colors: {
          'yellow': '#ffff00',
          'white': '#ffffff',
        },
        components: {
          'button-bad': {
            backgroundColor: '{colors.yellow}',
            textColor: '{colors.white}',
          },
        },
      });
      const result = linter.lint(state);
      const warnings = result.findings.filter((d: Finding) => d.severity === 'warning');
      expect(warnings.some((d: Finding) => d.message.includes('contrast'))).toBe(true);
    });

    it('does NOT emit warning for high contrast pair', () => {
      const state = buildState({
        colors: {
          'black': '#000000',
          'white': '#ffffff',
        },
        components: {
          'button-good': {
            backgroundColor: '{colors.black}',
            textColor: '{colors.white}',
          },
        },
      });
      const result = linter.lint(state);
      const contrastWarnings = result.findings.filter(
        (d: Finding) => d.severity === 'warning' && d.message.includes('contrast')
      );
      expect(contrastWarnings.length).toBe(0);
    });
  });



  // ── Cycle 19: I1 — Token count summary emits info ────────────────
  describe('I1: token count summary', () => {
    it('emits an info diagnostic summarizing the token counts', () => {
      const state = buildState({
        colors: { primary: '#ff0000', secondary: '#00ff00' },
        typography: {
          'headline-lg': { fontFamily: 'Roboto', fontSize: '42px', fontWeight: 500 },
        },
        rounded: { regular: '4px' },
        spacing: { 'gutter-s': '8px' },
      });
      const result = linter.lint(state);
      const infos = result.findings.filter((d: Finding) => d.severity === 'info');
      expect(infos.some((d: Finding) => d.message.includes('2 color') && d.message.includes('1 typography'))).toBe(true);
    });
  });

  // ── Cycle 20: Clean document produces zero errors ─────────────────
  describe('clean document', () => {
    it('produces zero errors for a valid design system', () => {
      const state = buildState({
        colors: { primary: '#647D66', secondary: '#ff0000' },
        typography: {
          'headline-lg': { fontFamily: 'Roboto', fontSize: '42px', fontWeight: 500, lineHeight: '50px', letterSpacing: '1.2px' },
        },
        rounded: { regular: '4px', lg: '8px' },
        spacing: { 'gutter-s': '8px', 'gutter-l': '16px' },
        components: {
          'button-primary': {
            backgroundColor: '{colors.primary}',
            textColor: '#ffffff',
          },
        },
      });
      const result = linter.lint(state);
      const errors = result.findings.filter((d: Finding) => d.severity === 'error');
      expect(errors.length).toBe(0);
    });
  });

  // ── Cycle 21: preEvaluate graded menu ─────────────────────────────
  describe('preEvaluate graded menu', () => {
    it('groups findings into fixes, improvements, and suggestions', () => {
      const state = buildState({
        colors: {
          primary: '#647D66',
          secondary: '#ffff00',
          white: '#ffffff',
        },
        components: {
          'button-bad': {
            backgroundColor: '{colors.secondary}',
            textColor: '{colors.white}',
          },
          'button-broken': {
            backgroundColor: '{colors.nonexistent}',
            textColor: '{colors.white}',
          }
        },
      });
      const graded = linter.preEvaluate(state);
      expect(graded.fixes.length).toBeGreaterThan(0);
      expect(graded.improvements.length).toBeGreaterThan(0);
      expect(graded.suggestions.length).toBeGreaterThan(0);
    });
  });

  // ── Summary counts ───────────────────────────────────────────────
  describe('summary counts', () => {
    it('correctly counts errors, warnings, and infos', () => {
      const state = buildState({
        colors: { primary: '#ff0000' },
        components: {
          'card': { backgroundColor: '{colors.nonexistent}' }
        }
      });
      const result = linter.lint(state);
      expect(result.summary.errors).toBe(result.findings.filter((d: Finding) => d.severity === 'error').length);
      expect(result.summary.warnings).toBe(result.findings.filter((d: Finding) => d.severity === 'warning').length);
      expect(result.summary.infos).toBe(result.findings.filter((d: Finding) => d.severity === 'info').length);
    });
  });
});
