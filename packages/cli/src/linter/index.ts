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
export type { Finding, Severity } from './linter/spec.js';
export type { TailwindEmitterResult, TailwindThemeExtend } from './tailwind/spec.js';
export type { DtcgEmitterResult, DtcgTokenFile } from './dtcg/spec.js';

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
  missingTypography,
} from './linter/rules/index.js';
export { contrastRatio } from './model/handler.js';
export { TailwindEmitterHandler } from './tailwind/handler.js';
export { DtcgEmitterHandler } from './dtcg/handler.js';
export { fixSectionOrder } from './fixer/handler.js';
export type { FixerInput, FixerResult } from './fixer/spec.js';
