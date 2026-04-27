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
import { ModelHandler } from './handler.js';
import type { ParsedDesignSystem } from '../parser/spec.js';

function build(overrides: Partial<ParsedDesignSystem>) {
  const parsed: ParsedDesignSystem = { sourceMap: new Map(), ...overrides };
  return new ModelHandler().execute(parsed);
}

describe('ModelHandler — layout (breakpoints, grid, layoutRules, templates, pages)', () => {
  it('parses a full breakpoint block and stores resolved dimensions', () => {
    const result = build({
      breakpoints: {
        philosophy: 'mobile-first',
        values: { sm: '640px', md: '768px', lg: '1024px' },
      },
    });
    expect(result.designSystem.breakpoints?.philosophy).toBe('mobile-first');
    const md = result.designSystem.breakpoints?.values.get('md');
    expect(md?.value).toBe(768);
    expect(md?.unit).toBe('px');
  });

  it('flags an unknown breakpoint philosophy', () => {
    const result = build({
      breakpoints: { philosophy: 'tablet-first', values: {} },
    });
    expect(result.findings.some(f => f.path === 'breakpoints.philosophy')).toBe(true);
  });

  it('resolves grid.gutter through a spacing token reference', () => {
    const result = build({
      spacing: { md: '16px' },
      grid: { columns: 12, gutter: '{spacing.md}', maxWidth: '1280px' },
    });
    expect(result.designSystem.grid?.gutter?.value).toBe(16);
    expect(result.designSystem.grid?.maxWidth?.value).toBe(1280);
    expect(result.designSystem.grid?.columns).toBe(12);
  });

  it('flags non-positive integer columns', () => {
    const result = build({
      grid: { columns: -3 },
    });
    expect(result.findings.some(f => f.path === 'grid.columns')).toBe(true);
  });

  it('parses layoutRules with token references', () => {
    const result = build({
      spacing: { lg: '24px' },
      layoutRules: { contentMaxWidth: '720px', stackSpacing: '{spacing.lg}', formFieldWidth: '480px' },
    });
    expect(result.designSystem.layoutRules?.contentMaxWidth?.value).toBe(720);
    expect(result.designSystem.layoutRules?.stackSpacing?.value).toBe(24);
    expect(result.designSystem.layoutRules?.formFieldWidth?.value).toBe(480);
  });

  it('validates that requiredRegions ⊆ regions', () => {
    const result = build({
      templates: {
        marketing: { regions: ['header', 'hero'], requiredRegions: ['header', 'footer'] },
      },
    });
    expect(result.findings.some(f =>
      f.path === 'templates.marketing.requiredRegions' && f.message.includes('footer')
    )).toBe(true);
  });

  it('preserves template extras', () => {
    const result = build({
      templates: {
        'app-shell': {
          regions: ['topbar', 'sidebar', 'main'],
          requiredRegions: ['main'],
          sidebarWidth: '280px',
          container: 'centered',
        },
      },
    });
    const tpl = result.designSystem.templates?.get('app-shell');
    expect(tpl?.sidebarWidth?.value).toBe(280);
    expect(tpl?.container).toBe('centered');
  });

  it('parses pages and rejects entries without a template', () => {
    const result = build({
      pages: {
        '/': { template: 'marketing' },
      },
    });
    expect(result.designSystem.pages?.get('/')?.template).toBe('marketing');
  });
});
