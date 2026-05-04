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

  it('does not flag MD3 paired tokens when the family is referenced (issue #46)', () => {
    // When a component references `primary`, the rest of the MD3 primary
    // family (`on-primary`, `primary-container`, `on-primary-container`,
    // `primary-fixed`, `primary-fixed-dim`, `on-primary-fixed`,
    // `on-primary-fixed-variant`, `inverse-primary`) is part of the same
    // semantic group and should not be flagged as orphaned.
    const state = buildState({
      colors: {
        primary: '#1A1C1E',
        'on-primary': '#ffffff',
        'primary-container': '#e2e2e2',
        'on-primary-container': '#636565',
        'primary-fixed': '#e2e2e2',
        'primary-fixed-dim': '#c6c6c7',
        'on-primary-fixed': '#1a1c1c',
        'on-primary-fixed-variant': '#454747',
        'inverse-primary': '#5d5f5f',
      },
      components: {
        button: { backgroundColor: '{colors.primary}' },
      },
    });
    const findings = orphanedTokens(state);
    expect(findings).toEqual([]);
  });

  it('does not flag MD3 surface family when one surface token is referenced', () => {
    const state = buildState({
      colors: {
        surface: '#0b1326',
        'surface-dim': '#0b1326',
        'surface-bright': '#31394d',
        'surface-container': '#171f33',
        'surface-container-lowest': '#060e20',
        'surface-container-low': '#131b2e',
        'surface-container-high': '#222a3d',
        'surface-container-highest': '#2d3449',
        'on-surface': '#dae2fd',
        'on-surface-variant': '#c4c7c8',
        'inverse-surface': '#dae2fd',
        'inverse-on-surface': '#283044',
        'surface-tint': '#c6c6c7',
        'surface-variant': '#2d3449',
      },
      components: {
        card: { backgroundColor: '{colors.surface-container}' },
      },
    });
    const findings = orphanedTokens(state);
    expect(findings).toEqual([]);
  });

  it('still flags genuinely-orphaned custom tokens outside any referenced family', () => {
    // `brand-blue` is not part of the MD3 primary family, so referencing
    // `primary` does not save it.
    const state = buildState({
      colors: {
        primary: '#1A1C1E',
        'on-primary': '#ffffff',
        'brand-blue': '#0000ff',
      },
      components: {
        button: { backgroundColor: '{colors.primary}' },
      },
    });
    const findings = orphanedTokens(state);
    const orphan = findings.find(d => d.path === 'colors.brand-blue');
    expect(orphan).toBeDefined();
    // And confirms `on-primary` does not get flagged just because it's not
    // directly referenced.
    expect(findings.find(d => d.path === 'colors.on-primary')).toBeUndefined();
  });

  it('does not flag MD3 baseline families even when no component references them', () => {
    // The MD3 baseline colors (primary, secondary, tertiary, error, surface,
    // background, outline) are part of the standard contract. A design system
    // that ships them should not get warned for components that happen to
    // not exercise the full palette in their canonical examples.
    const state = buildState({
      colors: {
        primary: '#1A1C1E',
        secondary: '#6C7278',
        tertiary: '#B8422E',
        error: '#B3261E',
        'on-error': '#ffffff',
        'error-container': '#F9DEDC',
        background: '#fffbfe',
        'on-background': '#1c1b1f',
        outline: '#79747e',
        'outline-variant': '#cac4d0',
      },
      components: {
        button: { backgroundColor: '{colors.primary}' },
      },
    });
    const findings = orphanedTokens(state);
    expect(findings).toEqual([]);
  });
});
