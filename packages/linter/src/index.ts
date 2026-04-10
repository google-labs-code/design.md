// ── Primary API ────────────────────────────────────────────────────
export { lint } from './lint.js';
export type { LintReport, LintOptions } from './lint.js';

// ── Result types ───────────────────────────────────────────────────
export type {
  DesignSystemState,
  ResolvedColor,
  ResolvedDimension,
  ResolvedTypography,
  ResolvedValue,
  ComponentDef,
} from './model/spec.js';
export type { Diagnostic, Severity } from './linter/spec.js';
export type { TailwindConfig } from './tailwind/spec.js';

// ── Advanced linting ───────────────────────────────────────────────
export { runLinter, preEvaluate } from './linter/runner.js';
export { DEFAULT_RULES } from './linter/rules/index.js';
export type { LintRule } from './linter/rules/types.js';
export type { GradedTokenEdits, TokenEditEntry } from './linter/spec.js';
export {
  brokenRef,
  missingPrimary,
  contrastCheck,
  orphanedTokens,
  tokenSummary,
  missingSections,
} from './linter/rules/index.js';
export { contrastRatio } from './model/handler.js';
