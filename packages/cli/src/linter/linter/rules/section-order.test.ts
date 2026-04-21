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
import { sectionOrder, resolveAlias, SECTION_ALIASES } from './section-order.js';
import type { DesignSystemState } from '../../model/spec.js';

describe('sectionOrder', () => {
  it('should warn when sections are out of order', () => {
    const state = {
      sections: ['Colors', 'Overview'], // Out of order!
    } as unknown as DesignSystemState;

    const findings = sectionOrder(state);

    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('out of order');
  });

  it('should not warn when sections are in order', () => {
    const state = {
      sections: ['Overview', 'Colors'], // In order!
    } as unknown as DesignSystemState;

    const findings = sectionOrder(state);

    expect(findings.length).toBe(0);
  });

  it('should ignore unknown sections', () => {
    const state = {
      sections: ['Overview', 'Unknown', 'Colors'], // Unknown section in between
    } as unknown as DesignSystemState;

    const findings = sectionOrder(state);

    expect(findings.length).toBe(0);
  });

  it('should resolve "Brand & Style" as "Overview"', () => {
    const state = {
      sections: ['Brand & Style', 'Colors', 'Typography'],
    } as unknown as DesignSystemState;

    const findings = sectionOrder(state);

    expect(findings.length).toBe(0);
  });

  it('should resolve "Layout & Spacing" as "Layout"', () => {
    const state = {
      sections: ['Overview', 'Colors', 'Typography', 'Layout & Spacing'],
    } as unknown as DesignSystemState;

    const findings = sectionOrder(state);

    expect(findings.length).toBe(0);
  });

  it('should resolve "Elevation" as "Elevation & Depth"', () => {
    const state = {
      sections: ['Layout', 'Elevation'],
    } as unknown as DesignSystemState;

    const findings = sectionOrder(state);

    expect(findings.length).toBe(0);
  });

  it('should detect out-of-order aliased sections', () => {
    const state = {
      sections: ['Colors', 'Brand & Style'], // Out of order via alias!
    } as unknown as DesignSystemState;

    const findings = sectionOrder(state);

    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('out of order');
  });

  it('should handle mixed aliases and canonical names', () => {
    const state = {
      sections: ['Brand & Style', 'Colors', 'Typography', 'Layout & Spacing', 'Elevation & Depth', 'Shapes', 'Components'],
    } as unknown as DesignSystemState;

    const findings = sectionOrder(state);

    expect(findings.length).toBe(0);
  });
});

describe('resolveAlias', () => {
  it('should resolve known aliases', () => {
    expect(resolveAlias('Brand & Style')).toBe('Overview');
    expect(resolveAlias('Layout & Spacing')).toBe('Layout');
    expect(resolveAlias('Elevation')).toBe('Elevation & Depth');
  });

  it('should pass through canonical names unchanged', () => {
    expect(resolveAlias('Overview')).toBe('Overview');
    expect(resolveAlias('Colors')).toBe('Colors');
    expect(resolveAlias('Elevation & Depth')).toBe('Elevation & Depth');
  });

  it('should pass through unknown names unchanged', () => {
    expect(resolveAlias('Iconography')).toBe('Iconography');
  });
});
