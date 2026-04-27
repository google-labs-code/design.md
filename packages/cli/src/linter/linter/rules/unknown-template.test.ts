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
import { unknownTemplate, unknownTemplateRule } from './unknown-template.js';
import { buildState } from './test-helpers.js';

describe('unknownTemplate', () => {
  it('flags a page referencing a template not in the registry', () => {
    const state = buildState({
      templates: {
        marketing: { regions: ['header', 'hero', 'footer'], requiredRegions: ['header', 'footer'] },
      },
      pages: {
        '/': { template: 'marketing' },
        '/dashboard': { template: 'admin-shell' },
      },
    });
    const findings = unknownTemplate(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('pages./dashboard.template');
    expect(findings[0]!.message).toContain('admin-shell');
  });

  it('passes when every page references a known template', () => {
    const state = buildState({
      templates: {
        marketing: { regions: ['header', 'footer'], requiredRegions: [] },
        'app-shell': { regions: ['topbar', 'main'], requiredRegions: [] },
      },
      pages: {
        '/': { template: 'marketing' },
        '/app': { template: 'app-shell' },
      },
    });
    expect(unknownTemplate(state)).toEqual([]);
  });

  it('no-ops when templates or pages are absent', () => {
    expect(unknownTemplate(buildState({ pages: { '/': { template: 'x' } } }))).toEqual([]);
    expect(unknownTemplate(buildState({}))).toEqual([]);
  });

  it('has a valid descriptor', () => {
    expect(unknownTemplateRule.name).toBe('unknown-template');
    expect(unknownTemplateRule.severity).toBe('error');
  });
});
