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
 * Unknown template — a `pages.X.template` references a name that is not in
 * the `templates` registry. Closed-world enforcement: once a template
 * registry exists, every page must use one of its entries.
 *
 * No-op when either `templates` or `pages` is absent.
 */
export function unknownTemplate(state: DesignSystemState): RuleFinding[] {
  const templates = state.templates;
  const pages = state.pages;
  if (!templates || !pages) return [];

  const findings: RuleFinding[] = [];
  const known = templates;
  for (const [pattern, page] of pages) {
    if (!known.has(page.template)) {
      const available = [...known.keys()];
      const recognized = available.length > 0
        ? `Recognized: ${available.join(', ')}.`
        : 'No templates declared.';
      findings.push({
        path: `pages.${pattern}.template`,
        message: `Page '${pattern}' references template '${page.template}', which is not in the templates registry. ${recognized}`,
      });
    }
  }
  return findings;
}

export const unknownTemplateRule: RuleDescriptor = {
  name: 'unknown-template',
  severity: 'error',
  description: 'Unknown template — a page references a template name not in the registry.',
  run: unknownTemplate,
};
