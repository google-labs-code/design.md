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
import { orphanedTokens } from './orphaned-tokens.js';
import { buildState } from './test-helpers.js';

describe('orphanedTokens', () => {
  it('emits warning for color not referenced by any component', () => {
    const state = buildState({
      colors: { primary: '#ff0000', unused: '#00ff00' },
      components: {
        button: { backgroundColor: '{colors.primary}' },
      },
    });
    const findings = orphanedTokens(state);
    const orphan = findings.find(d => d.message.includes('unused'));
    expect(orphan).toBeDefined();
  });

  it('returns empty when no components exist', () => {
    const state = buildState({ colors: { primary: '#ff0000' } });
    expect(orphanedTokens(state)).toEqual([]);
  });

  it('does not flag individual ramp steps when only the anchor is referenced', () => {
    const state = buildState({
      colors: { primary: { type: 'ramp', anchor: '#3b82f6', humanName: 'Sky' } },
      components: {
        button: { backgroundColor: '{colors.primary}' },
      },
    });
    const findings = orphanedTokens(state);
    // Steps like primary.50, primary.100, ... should not appear.
    expect(findings.some(f => f.path?.includes('primary.'))).toBe(false);
    // Anchor itself is referenced, so not orphaned.
    expect(findings.some(f => f.path === 'colors.primary')).toBe(false);
  });

  it('does not flag pair members when the pair is referenced', () => {
    const state = buildState({
      colors: {
        'surface-info': { type: 'pair', container: '#E0F2FE', onContainer: '#0C4A6E' },
      },
      components: {
        callout: {
          backgroundColor: '{colors.surface-info}',
          textColor: '{colors.on-surface-info}',
        },
      },
    });
    const findings = orphanedTokens(state);
    expect(findings.some(f => f.path?.startsWith('colors.surface-info'))).toBe(false);
  });
});
