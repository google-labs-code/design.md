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
import { missingRequiredProperty, missingRequiredPropertyRule } from './missing-required-property.js';
import { buildState } from './test-helpers.js';

describe('missingRequiredProperty', () => {
  it('is a no-op when no registry is declared', () => {
    const state = buildState({
      components: { 'button-primary': { backgroundColor: '#000' } },
    });
    expect(missingRequiredProperty(state)).toEqual([]);
  });

  it('flags definitions missing a required property', () => {
    const state = buildState({
      componentRegistry: [
        {
          name: 'button-primary',
          kind: 'button',
          requiredProperties: ['backgroundColor', 'padding'],
        },
      ],
      components: {
        'button-primary': { backgroundColor: '#000' },
      },
    });
    const findings = missingRequiredProperty(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('components.button-primary.padding');
    expect(findings[0]!.message).toContain('requires');
  });

  it('passes when all required properties are set', () => {
    const state = buildState({
      componentRegistry: [
        {
          name: 'button-primary',
          kind: 'button',
          requiredProperties: ['backgroundColor', 'padding'],
        },
      ],
      components: {
        'button-primary': { backgroundColor: '#000', padding: '12px' },
      },
    });
    expect(missingRequiredProperty(state)).toEqual([]);
  });

  it('counts inherited properties via composes', () => {
    const state = buildState({
      componentRegistry: [
        { name: 'card', kind: 'container', requiredProperties: ['backgroundColor'] },
        {
          name: 'card-elevated',
          kind: 'container',
          requiredProperties: ['backgroundColor'],
          composes: 'card',
        },
      ],
      components: {
        card: { backgroundColor: '#000' },
        // intentionally omits backgroundColor; inherits from card.
        'card-elevated': { shadow: '0 4px 8px rgba(0,0,0,0.1)' },
      },
    });
    expect(missingRequiredProperty(state)).toEqual([]);
  });

  it('does not flag entries without a definition (registry-without-definition handles those)', () => {
    const state = buildState({
      componentRegistry: [{ name: 'card', kind: 'container', requiredProperties: ['backgroundColor'] }],
      components: {},
    });
    expect(missingRequiredProperty(state)).toEqual([]);
  });

  it('has a valid rule descriptor', () => {
    expect(missingRequiredPropertyRule.name).toBe('missing-required-property');
    expect(missingRequiredPropertyRule.severity).toBe('error');
    expect(missingRequiredPropertyRule.run).toBe(missingRequiredProperty);
  });
});
