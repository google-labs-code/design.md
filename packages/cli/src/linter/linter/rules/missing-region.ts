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

/**
 * Missing region — a page declared with template T whose enumerated regions
 * miss a `requiredRegions` entry. Today the rule reads regions from the
 * page's optional `regions:` field in DESIGN.md `pages:`. Source-side
 * scanning (`data-region` extraction via `--src`) plugs in here when issue
 * #6's source scanner is extended to template/region handling.
 *
 * No-op when the page declares no regions (the rule has nothing to validate
 * against without a source scanner).
 */
export function missingRegion(state: DesignSystemState): RuleFinding[] {
  const templates = state.templates;
  const pages = state.pages;
  if (!templates || !pages) return [];

  const findings: RuleFinding[] = [];
  for (const [pattern, page] of pages) {
    const tpl = templates.get(page.template);
    if (!tpl) continue; // unknown-template handles this
    if (!page.regions || page.regions.length === 0) continue;
    const declared = new Set(page.regions);
    for (const required of tpl.requiredRegions) {
      if (!declared.has(required)) {
        findings.push({
          path: `pages.${pattern}.regions`,
          message: `Page '${pattern}' uses template '${page.template}' but is missing required region '${required}'.`,
        });
      }
    }
  }
  return findings;
}

export const missingRegionRule: RuleDescriptor = {
  name: 'missing-region',
  severity: 'error',
  description: 'Missing region — a page is missing a region required by its template.',
  run: missingRegion,
};
