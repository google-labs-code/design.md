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

import type { LintRule, RuleDescriptor } from './types.js';
import type { DesignSystemState } from '../../model/spec.js';
import type { Finding } from '../spec.js';
import { brokenRefRule } from './broken-ref.js';
import { missingPrimaryRule } from './missing-primary.js';
import { contrastCheckRule } from './contrast-ratio.js';
import { orphanedTokensRule } from './orphaned-tokens.js';
import { tokenSummaryRule } from './token-summary.js';
import { missingSectionsRule } from './missing-sections.js';
import { sectionOrderRule } from './section-order.js';
import { missingTypographyRule } from './missing-typography.js';

/** The default set of lint rule descriptors, in order. */
export const DEFAULT_RULE_DESCRIPTORS: RuleDescriptor[] = [
  brokenRefRule,
  missingPrimaryRule,
  contrastCheckRule,
  orphanedTokensRule,
  tokenSummaryRule,
  missingSectionsRule,
  missingTypographyRule,
  sectionOrderRule,
];

/** Converts a RuleDescriptor into a LintRule by injecting severity into findings. */
function toLintRule(descriptor: RuleDescriptor): LintRule {
  return (state: DesignSystemState): Finding[] =>
    descriptor.run(state).map(finding => ({
      severity: finding.severity ?? descriptor.severity,
      path: finding.path,
      message: finding.message,
    }));
}

/** The default set of lint rules, executed in order. */
export const DEFAULT_RULES: LintRule[] = DEFAULT_RULE_DESCRIPTORS.map(toLintRule);

// Re-export individual rules for selective composition
export { brokenRef } from './broken-ref.js';
export { missingPrimary } from './missing-primary.js';
export { contrastCheck } from './contrast-ratio.js';
export { orphanedTokens } from './orphaned-tokens.js';
export { tokenSummary } from './token-summary.js';
export { missingSections } from './missing-sections.js';
export { missingTypography } from './missing-typography.js';
export { sectionOrder } from './section-order.js';
export type { LintRule } from './types.js';
