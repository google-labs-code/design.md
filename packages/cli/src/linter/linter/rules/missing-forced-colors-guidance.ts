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

import type { DesignSystemState } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

const FORCED_COLORS_GUIDANCE =
  /forced-colors|high[- ]contrast|border fallback|outline fallback|@media\s*\(\s*forced-colors/i;

/**
 * Missing forced-colors guidance — notes when an Elevation section exists
 * but does not document non-shadow fallbacks for high-contrast mode.
 */
export function missingForcedColorsGuidance(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  const sections = state.documentSections;
  if (!sections || sections.length === 0) return findings;

  const elevationSection = sections.find(s => /^elevation$/i.test(s.heading.trim()));
  if (!elevationSection) return findings;

  if (!FORCED_COLORS_GUIDANCE.test(elevationSection.content)) {
    findings.push({
      path: 'elevation',
      message:
        "Elevation section does not document forced-colors or high-contrast fallbacks. Add border/outline guidance for @media (forced-colors: active) when depth relies on shadows.",
    });
  }

  return findings;
}

export const missingForcedColorsGuidanceRule: RuleDescriptor = {
  name: 'missing-forced-colors-guidance',
  severity: 'info',
  description: 'Missing forced-colors guidance — notes when Elevation prose lacks high-contrast fallbacks.',
  run: missingForcedColorsGuidance,
};
