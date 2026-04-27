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
import { offGridDimension, offGridDimensionRule } from './off-grid-dimension.js';
import { buildState } from './test-helpers.js';

describe('offGridDimension', () => {
  it('flags a width that is not a multiple of the grid gutter and not a spacing token', () => {
    const state = buildState({
      spacing: { md: '16px' },
      grid: { columns: 12, gutter: '16px' },
      components: { card: { width: '13px' } },
    });
    const findings = offGridDimension(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('components.card.width');
  });

  it('passes a width that is a multiple of the grid gutter', () => {
    const state = buildState({
      spacing: { md: '16px' },
      grid: { columns: 12, gutter: '16px' },
      components: { card: { width: '64px' } }, // 4 * 16
    });
    expect(offGridDimension(state)).toEqual([]);
  });

  it('passes a value that matches a declared spacing token', () => {
    const state = buildState({
      spacing: { lg: '24px' },
      grid: { columns: 12, gutter: '16px' },
      components: { card: { padding: '24px' } },
    });
    expect(offGridDimension(state)).toEqual([]);
  });

  it('skips properties that are not gridded (e.g. typography)', () => {
    const state = buildState({
      spacing: { md: '16px' },
      grid: { columns: 12, gutter: '16px' },
      components: { card: { rounded: '13px' } }, // rounded is not in GRIDDED_PROPS
    });
    expect(offGridDimension(state)).toEqual([]);
  });

  it('no-ops when neither grid nor spacing is declared', () => {
    const state = buildState({
      components: { card: { width: '13px' } },
    });
    expect(offGridDimension(state)).toEqual([]);
  });

  it('has a valid descriptor', () => {
    expect(offGridDimensionRule.name).toBe('off-grid-dimension');
    expect(offGridDimensionRule.severity).toBe('warning');
  });
});
