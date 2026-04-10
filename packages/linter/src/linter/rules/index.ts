import type { LintRule } from './types.js';
import { brokenRef } from './broken-ref.js';
import { missingPrimary } from './missing-primary.js';
import { contrastCheck } from './contrast-ratio.js';
import { orphanedTokens } from './orphaned-tokens.js';
import { tokenSummary } from './token-summary.js';
import { missingSections } from './missing-sections.js';

/** The default set of lint rules, executed in order. */
export const DEFAULT_RULES: LintRule[] = [
  brokenRef,
  missingPrimary,
  contrastCheck,
  orphanedTokens,
  tokenSummary,
  missingSections,
];

// Re-export individual rules for selective composition
export { brokenRef } from './broken-ref.js';
export { missingPrimary } from './missing-primary.js';
export { contrastCheck } from './contrast-ratio.js';
export { orphanedTokens } from './orphaned-tokens.js';
export { tokenSummary } from './token-summary.js';
export { missingSections } from './missing-sections.js';
export type { LintRule } from './types.js';
