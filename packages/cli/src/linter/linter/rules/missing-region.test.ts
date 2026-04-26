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
import { missingRegion, missingRegionRule } from './missing-region.js';
import type { ParsedDesignSystem } from '../../parser/spec.js';
import { buildState } from './test-helpers.js';

function withRegions(overrides: Partial<ParsedDesignSystem> & {
  pageRegions?: Record<string, string[]>;
}) {
  const { pageRegions, ...rest } = overrides;
  const state = buildState(rest);
  if (pageRegions && state.pages) {
    for (const [pattern, regions] of Object.entries(pageRegions)) {
      const page = state.pages.get(pattern);
      if (page) page.regions = regions;
    }
  }
  return state;
}

describe('missingRegion', () => {
  it('flags a page missing a required region', () => {
    const state = withRegions({
      templates: {
        marketing: { regions: ['header', 'hero', 'footer'], requiredRegions: ['header', 'footer'] },
      },
      pages: { '/': { template: 'marketing' } },
      pageRegions: { '/': ['hero', 'footer'] }, // missing header
    });
    const findings = missingRegion(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('header');
  });

  it('passes when every required region is present', () => {
    const state = withRegions({
      templates: {
        marketing: { regions: ['header', 'hero', 'footer'], requiredRegions: ['header', 'footer'] },
      },
      pages: { '/': { template: 'marketing' } },
      pageRegions: { '/': ['header', 'hero', 'footer'] },
    });
    expect(missingRegion(state)).toEqual([]);
  });

  it('no-ops when the page declares no regions', () => {
    const state = buildState({
      templates: {
        marketing: { regions: ['header', 'footer'], requiredRegions: ['header', 'footer'] },
      },
      pages: { '/': { template: 'marketing' } },
    });
    expect(missingRegion(state)).toEqual([]);
  });

  it('skips pages whose template does not exist (handled by unknown-template)', () => {
    const state = withRegions({
      templates: { marketing: { regions: ['header'], requiredRegions: ['header'] } },
      pages: { '/x': { template: 'phantom' } },
      pageRegions: { '/x': [] },
    });
    expect(missingRegion(state)).toEqual([]);
  });

  it('has a valid descriptor', () => {
    expect(missingRegionRule.name).toBe('missing-region');
    expect(missingRegionRule.severity).toBe('error');
  });
});
