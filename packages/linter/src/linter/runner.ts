import type { DesignSystemState } from '../model/spec.js';
import type { LintResult, Diagnostic, GradedTokenEdits, TokenEditEntry } from './spec.js';
import type { LintRule } from './rules/types.js';
import { DEFAULT_RULES } from './rules/index.js';

/**
 * Pure functional linter runner.
 * Executes each rule against the state and aggregates diagnostics.
 */
export function runLinter(
  state: DesignSystemState,
  rules: LintRule[] = DEFAULT_RULES,
): LintResult {
  const diagnostics: Diagnostic[] = rules.flatMap(rule => rule(state));
  return {
    diagnostics,
    summary: {
      errors: diagnostics.filter(d => d.severity === 'error').length,
      warnings: diagnostics.filter(d => d.severity === 'warning').length,
      infos: diagnostics.filter(d => d.severity === 'info').length,
    },
  };
}

/**
 * Groups lint diagnostics into a graded edit menu (fixes / improvements / suggestions).
 */
export function preEvaluate(
  state: DesignSystemState,
  rules: LintRule[] = DEFAULT_RULES,
): GradedTokenEdits {
  const { diagnostics } = runLinter(state, rules);
  const fixes: TokenEditEntry[] = [];
  const improvements: TokenEditEntry[] = [];
  const suggestions: TokenEditEntry[] = [];

  for (const d of diagnostics) {
    const entry: TokenEditEntry = { path: d.path ?? '', diagnostics: [d] };
    if (d.severity === 'error') fixes.push(entry);
    else if (d.severity === 'warning') improvements.push(entry);
    else suggestions.push(entry);
  }

  return { fixes, improvements, suggestions };
}
