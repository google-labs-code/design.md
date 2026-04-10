import type { DesignSystemState, Diagnostic } from '../model/spec.js';
export type { Diagnostic, Severity } from '../model/spec.js';



// ── LINT RESULT ────────────────────────────────────────────────────
export interface LintResult {
  diagnostics: Diagnostic[];
  summary: {
    errors: number;
    warnings: number;
    infos: number;
  };
}

// ── GRADED TOKEN EDITS ─────────────────────────────────────────────
export interface GradedTokenEdits {
  /** Edits that fix errors (highest priority) */
  fixes: TokenEditEntry[];
  /** Edits that resolve warnings */
  improvements: TokenEditEntry[];
  /** Edits that are purely additive / informational */
  suggestions: TokenEditEntry[];
}

export interface TokenEditEntry {
  path: string;
  currentValue?: string;
  suggestedValue?: string;
  diagnostics: Diagnostic[];
}

// ── INTERFACE ──────────────────────────────────────────────────────
export interface LinterSpec {
  lint(state: DesignSystemState): LintResult;
  preEvaluate(state: DesignSystemState): GradedTokenEdits;
}
