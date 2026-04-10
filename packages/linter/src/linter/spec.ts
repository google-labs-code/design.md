import { z } from 'zod';
import type { DesignSystemState, ResolvedValue } from '../model/spec.js';

// ── SEVERITY ───────────────────────────────────────────────────────
export const SeveritySchema = z.enum(['error', 'warning', 'info']);
export type Severity = z.infer<typeof SeveritySchema>;

// ── DIAGNOSTIC ─────────────────────────────────────────────────────
export interface Diagnostic {
  severity: Severity;
  /** Token path, e.g. "colors.primary", "components.button-primary.textColor" */
  path?: string;
  message: string;
}

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
