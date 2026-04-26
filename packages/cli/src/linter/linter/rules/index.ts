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
import { unchangedStateRule } from './unchanged-state.js';
import { missingFocusVisibleRule } from './missing-focus-visible.js';
import { outlineNoneWithoutReplacementRule } from './outline-none-without-replacement.js';
import { hoverOnlyAffordanceRule } from './hover-only-affordance.js';
import { disabledOpacityOnlyRule } from './disabled-opacity-only.js';
import { unknownStateRule } from './unknown-state.js';
import { opacityStackingRule } from './opacity-stacking.js';
import { animatingLayoutPropertyRule } from './animating-layout-property.js';
import { elevationWithoutSemanticsRule } from './elevation-without-semantics.js';
import { tripleSeparationRule } from './triple-separation.js';
import { pairContrastRule } from './pair-contrast.js';
import { mixedPairForegroundRule } from './mixed-pair-foreground.js';
import { rampAnchorNamingRule } from './ramp-anchor-naming.js';
import { proseTokenMismatchRule } from './prose-token-mismatch.js';
import { missingReducedMotionRule } from './missing-reduced-motion.js';
import { overlongDurationRule } from './overlong-duration.js';
import { iconSizeOffScaleRule } from './icon-size-off-scale.js';
import { unboundComponentRule } from './unbound-component.js';
import { missingRequiredPropertyRule } from './missing-required-property.js';
import { registryWithoutDefinitionRule } from './registry-without-definition.js';
import { composesCycleRule } from './composes-cycle.js';
import { namingConventionRule } from './naming-convention.js';

/** The default set of lint rule descriptors, in order. */
export const DEFAULT_RULE_DESCRIPTORS: RuleDescriptor[] = [
  brokenRefRule,
  missingPrimaryRule,
  contrastCheckRule,
  pairContrastRule,
  mixedPairForegroundRule,
  rampAnchorNamingRule,
  orphanedTokensRule,
  tokenSummaryRule,
  missingSectionsRule,
  missingTypographyRule,
  sectionOrderRule,
  opacityStackingRule,
  animatingLayoutPropertyRule,
  elevationWithoutSemanticsRule,
  tripleSeparationRule,
  unchangedStateRule,
  missingFocusVisibleRule,
  outlineNoneWithoutReplacementRule,
  hoverOnlyAffordanceRule,
  disabledOpacityOnlyRule,
  unknownStateRule,
  proseTokenMismatchRule,
  missingReducedMotionRule,
  overlongDurationRule,
  iconSizeOffScaleRule,
  unboundComponentRule,
  missingRequiredPropertyRule,
  registryWithoutDefinitionRule,
  composesCycleRule,
  namingConventionRule,
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
export { unchangedState } from './unchanged-state.js';
export { missingFocusVisible } from './missing-focus-visible.js';
export { outlineNoneWithoutReplacement } from './outline-none-without-replacement.js';
export { hoverOnlyAffordance } from './hover-only-affordance.js';
export { disabledOpacityOnly } from './disabled-opacity-only.js';
export { unknownState } from './unknown-state.js';
export { opacityStacking } from './opacity-stacking.js';
export { animatingLayoutProperty } from './animating-layout-property.js';
export { elevationWithoutSemantics } from './elevation-without-semantics.js';
export { tripleSeparation } from './triple-separation.js';
export { pairContrast } from './pair-contrast.js';
export { mixedPairForeground } from './mixed-pair-foreground.js';
export { rampAnchorNaming } from './ramp-anchor-naming.js';
export { proseTokenMismatch } from './prose-token-mismatch.js';
export { missingReducedMotion } from './missing-reduced-motion.js';
export { overlongDuration } from './overlong-duration.js';
export { iconSizeOffScale } from './icon-size-off-scale.js';
export { unboundComponent } from './unbound-component.js';
export { missingRequiredProperty } from './missing-required-property.js';
export { registryWithoutDefinition } from './registry-without-definition.js';
export { composesCycle } from './composes-cycle.js';
export { namingConvention } from './naming-convention.js';
export type { LintRule } from './types.js';
