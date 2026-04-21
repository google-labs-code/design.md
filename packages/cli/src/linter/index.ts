// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
