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
import { animatingLayoutProperty, animatingLayoutPropertyRule } from './animating-layout-property.js';
import { buildState } from './test-helpers.js';

describe('animatingLayoutProperty', () => {
  it('flags a transition that animates width', () => {
    const state = buildState({
      components: {
        card: { transition: 'width 200ms ease-out' },
      },
    });
    const findings = animatingLayoutProperty(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('width');
  });

  it('flags height, padding, margin', () => {
    const state = buildState({
      components: {
        a: { transition: 'height 200ms ease-out' },
        b: { transition: 'padding 200ms ease-out' },
        c: { transition: 'margin 200ms ease-out' },
      },
    });
    expect(animatingLayoutProperty(state).length).toBe(3);
  });

  it('does not flag transform or opacity transitions', () => {
    const state = buildState({
      components: {
        a: { transition: 'transform 200ms ease-out' },
        b: { transition: 'opacity 200ms ease-out' },
      },
    });
    expect(animatingLayoutProperty(state).length).toBe(0);
  });

  it('has a valid descriptor', () => {
    expect(animatingLayoutPropertyRule.name).toBe('animating-layout-property');
    expect(animatingLayoutPropertyRule.severity).toBe('warning');
  });
});
