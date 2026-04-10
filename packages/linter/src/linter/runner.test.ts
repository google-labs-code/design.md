import { describe, it, expect } from 'bun:test';
import { runLinter, preEvaluate } from './runner.js';
import type { LintRule } from './rules/types.js';
import { missingPrimary } from './rules/missing-primary.js';
import { tokenSummary } from './rules/token-summary.js';
import { ModelHandler } from '../model/handler.js';
import type { ParsedDesignSystem } from '../parser/spec.js';
import type { DesignSystemState } from '../model/spec.js';

const modelHandler = new ModelHandler();

function buildState(overrides: Partial<ParsedDesignSystem> = {}): DesignSystemState {
  const parsed: ParsedDesignSystem = { sourceMap: new Map(), ...overrides };
  const result = modelHandler.execute(parsed);
  const hasErrors = result.diagnostics.some(d => d.severity === 'error');
  if (hasErrors) {
    throw new Error(`Model build failed: ${result.diagnostics.map(d => d.message).join(', ')}`);
  }
  return result.designSystem;
}

describe('runLinter', () => {
  it('runs default rules when none specified', () => {
    const state = buildState({ colors: { accent: '#ff0000' } });
    const result = runLinter(state);
    // Should have at least a warning (missing primary) and an info (summary)
    expect(result.summary.warnings).toBeGreaterThan(0);
    expect(result.summary.infos).toBeGreaterThan(0);
  });

  it('runs only the specified subset of rules', () => {
    const state = buildState({ colors: { accent: '#ff0000' } });
    const customRules: LintRule[] = [missingPrimary];
    const result = runLinter(state, customRules);
    // Only the missing primary warning — no summary info
    expect(result.diagnostics.length).toBe(1);
    expect(result.diagnostics[0]!.message).toMatch(/primary/);
    expect(result.summary.warnings).toBe(1);
    expect(result.summary.infos).toBe(0);
  });

  it('returns empty diagnostics for empty rules array', () => {
    const state = buildState({ colors: { accent: '#ff0000' } });
    const result = runLinter(state, []);
    expect(result.diagnostics).toEqual([]);
    expect(result.summary).toEqual({ errors: 0, warnings: 0, infos: 0 });
  });
});

describe('preEvaluate', () => {
  it('groups diagnostics into fixes, improvements, and suggestions', () => {
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
    const graded = preEvaluate(state);
    expect(graded.fixes.length).toBeGreaterThan(0);       // error: broken ref
    expect(graded.improvements.length).toBeGreaterThan(0); // warning: contrast
    expect(graded.suggestions.length).toBeGreaterThan(0);  // info: summary
  });

  it('accepts custom rules', () => {
    const state = buildState({ colors: { accent: '#ff0000' } });
    const graded = preEvaluate(state, [tokenSummary]);
    expect(graded.fixes).toEqual([]);
    expect(graded.improvements).toEqual([]);
    expect(graded.suggestions.length).toBe(1);
  });
});
