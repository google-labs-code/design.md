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
import { shadowOrphaned } from './shadow-orphaned.js';
import { buildState } from './test-helpers.js';

describe('shadowOrphaned', () => {
  it('emits warning for a shadow not referenced by any component', () => {
    const state = buildState({
      shadows: {
        card: { offsetX: '0px', offsetY: '4px', blur: '8px', color: '#00000033' },
        unused: { offsetX: '0px', offsetY: '2px', blur: '4px', color: '#00000022' },
      },
      components: {
        card: { boxShadow: '{shadows.card}' },
      },
    });
    const findings = shadowOrphaned(state);
    expect(findings.some(f => f.message.includes('unused'))).toBe(true);
    expect(findings.some(f => f.path === 'shadows.card')).toBe(false);
  });

  it('returns empty when no components exist', () => {
    const state = buildState({
      shadows: { card: { offsetX: '0px', offsetY: '4px', blur: '8px', color: '#000000' } },
    });
    expect(shadowOrphaned(state)).toEqual([]);
  });

  it('returns empty when no shadows exist', () => {
    const state = buildState({
      components: { button: { backgroundColor: '#ffffff' } },
    });
    expect(shadowOrphaned(state)).toEqual([]);
  });

  it('does not flag a shadow referenced by a component', () => {
    const state = buildState({
      shadows: { card: { offsetX: '0px', offsetY: '4px', blur: '8px', color: '#000000' } },
      components: { card: { boxShadow: '{shadows.card}' } },
    });
    expect(shadowOrphaned(state)).toEqual([]);
  });
});
