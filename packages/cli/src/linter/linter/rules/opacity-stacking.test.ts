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
import { opacityStacking, opacityStackingRule } from './opacity-stacking.js';
import { buildState } from './test-helpers.js';

describe('opacityStacking', () => {
  it('flags opacity layered on a translucent backgroundColor', () => {
    const state = buildState({
      colors: { glass: '#ffffff1a' },
      components: {
        card: {
          backgroundColor: '{colors.glass}',
          opacity: '0.5',
        },
      },
    });
    const findings = opacityStacking(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('stacks');
  });

  it('does not flag opacity alone', () => {
    const state = buildState({
      components: {
        card: { opacity: '0.5' },
      },
    });
    expect(opacityStacking(state).length).toBe(0);
  });

  it('does not flag opacity on opaque backgroundColor', () => {
    const state = buildState({
      colors: { solid: '#000000' },
      components: {
        card: {
          backgroundColor: '{colors.solid}',
          opacity: '0.5',
        },
      },
    });
    expect(opacityStacking(state).length).toBe(0);
  });

  it('has a valid descriptor', () => {
    expect(opacityStackingRule.name).toBe('opacity-stacking');
    expect(opacityStackingRule.severity).toBe('warning');
    expect(opacityStackingRule.run).toBe(opacityStacking);
  });
});
