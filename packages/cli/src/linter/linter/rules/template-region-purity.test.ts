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

import { describe, it, expect } from 'bun:test';
import { templateRegionPurity, templateRegionPurityRule } from './template-region-purity.js';
import { buildState } from './test-helpers.js';

describe('templateRegionPurity', () => {
  it('flags `header` reused across marketing and app-scoped templates', () => {
    const state = buildState({
      templates: {
        // marketing-scoped (has `hero`)
        marketing: { regions: ['header', 'hero', 'footer'], requiredRegions: [] },
        // app-scoped (no marketing markers); reuses `header`
        'app-shell': { regions: ['header', 'sidebar', 'main'], requiredRegions: [] },
      },
    });
    const findings = templateRegionPurity(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain("'header'");
    expect(findings[0]!.message).toContain('marketing');
    expect(findings[0]!.message).toContain('app-shell');
  });

  it('passes the canonical pattern: header in marketing, topbar in app templates', () => {
    const state = buildState({
      templates: {
        marketing: { regions: ['header', 'hero', 'cta', 'footer'], requiredRegions: [] },
        'app-shell': { regions: ['topbar', 'sidebar', 'main', 'statusbar'], requiredRegions: [] },
        settings: { regions: ['topbar', 'sidebar-nav', 'content'], requiredRegions: [] },
      },
    });
    expect(templateRegionPurity(state)).toEqual([]);
  });

  it('does not flag region reuse within the same scope', () => {
    const state = buildState({
      templates: {
        // both app-scoped
        'app-shell': { regions: ['topbar', 'sidebar', 'main'], requiredRegions: [] },
        settings: { regions: ['topbar', 'sidebar-nav', 'content'], requiredRegions: [] },
      },
    });
    expect(templateRegionPurity(state)).toEqual([]);
  });

  it('no-ops when fewer than two templates are declared', () => {
    const state = buildState({
      templates: {
        marketing: { regions: ['header', 'hero', 'footer'], requiredRegions: [] },
      },
    });
    expect(templateRegionPurity(state)).toEqual([]);
  });

  it('no-ops when only marketing-scoped or only app-scoped templates exist', () => {
    const state = buildState({
      templates: {
        marketing: { regions: ['header', 'hero', 'footer'], requiredRegions: [] },
        'marketing-thin': { regions: ['header', 'sections'], requiredRegions: [] },
      },
    });
    expect(templateRegionPurity(state)).toEqual([]);
  });

  it('has a valid descriptor', () => {
    expect(templateRegionPurityRule.name).toBe('template-region-purity');
    expect(templateRegionPurityRule.severity).toBe('warning');
  });
});
