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

import type { DesignSystemState, TemplateDef } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * A template is "marketing-scoped" if it carries the public-page vocabulary
 * (`hero` or `cta` or `sections`). Identity-level chrome on a marketing-scoped
 * template means something different from chrome on an app-scoped template,
 * even when the region name is the same.
 */
function isMarketingScoped(tpl: TemplateDef): boolean {
  for (const r of tpl.regions) {
    if (r === 'hero' || r === 'cta' || r === 'sections') return true;
  }
  return false;
}

/**
 * Region names whose semantics differ between marketing pages (where they
 * mean global identity / global nav) and app surfaces (where they're
 * contextual to the current page). Reusing one of these across both scopes
 * is the signal that authors should pick distinct names — typically `header`
 * (marketing) vs `topbar` (app).
 */
const SCOPE_AMBIGUOUS_REGIONS = new Set(['header', 'footer', 'sidebar']);

/**
 * Template-region purity — flags a region name that appears in BOTH a
 * marketing-scoped template (identity-level chrome, with `hero`/`cta`/
 * `sections`) AND a non-marketing-scoped template (app-shell, settings,
 * detail, ...). The two scopes carry different expectations: a marketing
 * `header` is global identity; an app-level `header` is contextual to the
 * current page. Pick distinct names so the linter — and the AI generating
 * UI — don't have to guess which kind of chrome is meant.
 *
 * The recommended fix is to keep `header` for marketing and use `topbar`
 * for app-scope chrome. (Symmetric for `footer` / `statusbar` and
 * `sidebar` / `sidebar-nav`.)
 */
export function templateRegionPurity(state: DesignSystemState): RuleFinding[] {
  const templates = state.templates;
  if (!templates || templates.size < 2) return [];

  // Bucket templates by scope.
  const marketing: Array<{ name: string; regions: Set<string> }> = [];
  const other: Array<{ name: string; regions: Set<string> }> = [];
  for (const [name, tpl] of templates) {
    const entry = { name, regions: new Set(tpl.regions) };
    if (isMarketingScoped(tpl)) marketing.push(entry);
    else other.push(entry);
  }
  if (marketing.length === 0 || other.length === 0) return [];

  const findings: RuleFinding[] = [];
  for (const region of SCOPE_AMBIGUOUS_REGIONS) {
    const marketingHits = marketing.filter(m => m.regions.has(region)).map(m => m.name);
    const otherHits = other.filter(o => o.regions.has(region)).map(o => o.name);
    if (marketingHits.length > 0 && otherHits.length > 0) {
      findings.push({
        path: 'templates',
        message: `Region '${region}' appears in marketing-scoped templates (${marketingHits.join(', ')}) and app-scoped templates (${otherHits.join(', ')}). The two scopes carry different semantics; pick distinct names (e.g., 'header' for marketing, 'topbar' for app).`,
      });
    }
  }
  return findings;
}

export const templateRegionPurityRule: RuleDescriptor = {
  name: 'template-region-purity',
  severity: 'warning',
  description: 'Template region purity — flags region names reused across marketing and app-scoped templates.',
  run: templateRegionPurity,
};
