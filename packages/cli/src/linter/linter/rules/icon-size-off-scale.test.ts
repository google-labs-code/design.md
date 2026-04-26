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
import { iconSizeOffScale, iconSizeOffScaleRule } from './icon-size-off-scale.js';
import { buildState } from './test-helpers.js';

describe('iconSizeOffScale', () => {
  it('flags a literal iconSize that is not on the scale', () => {
    const state = buildState({
      iconography: {
        library: { name: 'lucide', style: 'outlined' },
        sizes: { sm: '16px', md: '20px', lg: '24px' },
        defaultSize: 'md',
      },
      components: {
        toolbar: { iconSize: '18px' },
      },
    });
    const findings = iconSizeOffScale(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('18px');
  });

  it('passes a literal iconSize that matches a scale entry', () => {
    const state = buildState({
      iconography: {
        library: { name: 'lucide', style: 'outlined' },
        sizes: { sm: '16px', md: '20px' },
        defaultSize: 'md',
      },
      components: {
        chip: { iconSize: '20px' },
      },
    });
    expect(iconSizeOffScale(state)).toEqual([]);
  });

  it('passes iconSize: auto without checking the scale', () => {
    const state = buildState({
      iconography: {
        library: { name: 'lucide', style: 'outlined' },
        sizes: { sm: '16px' },
        defaultSize: 'sm',
      },
      components: {
        button: { iconSize: 'auto' },
      },
    });
    expect(iconSizeOffScale(state)).toEqual([]);
  });

  it('skips when iconography is undeclared', () => {
    const state = buildState({
      components: { button: { iconSize: '18px' } },
    });
    expect(iconSizeOffScale(state)).toEqual([]);
  });

  it('has a valid descriptor', () => {
    expect(iconSizeOffScaleRule.name).toBe('icon-size-off-scale');
    expect(iconSizeOffScaleRule.severity).toBe('warning');
  });
});
