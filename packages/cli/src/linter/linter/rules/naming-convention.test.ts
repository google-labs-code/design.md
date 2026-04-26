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
import { namingConvention, namingConventionRule } from './naming-convention.js';
import { buildState } from './test-helpers.js';

describe('namingConvention', () => {
  it('is a no-op when no registry is declared', () => {
    const state = buildState({});
    expect(namingConvention(state)).toEqual([]);
  });

  it('accepts bare nouns', () => {
    const state = buildState({
      componentRegistry: [{ name: 'card', kind: 'container' }],
    });
    expect(namingConvention(state)).toEqual([]);
  });

  it('accepts noun-modifier with permitted modifiers', () => {
    const state = buildState({
      componentRegistry: [
        { name: 'button-primary', kind: 'button' },
        { name: 'card-elevated', kind: 'container' },
        { name: 'button-ghost', kind: 'button' },
      ],
    });
    expect(namingConvention(state)).toEqual([]);
  });

  it('flags non-vocabulary modifiers', () => {
    const state = buildState({
      componentRegistry: [{ name: 'button-fancy', kind: 'button' }],
    });
    const findings = namingConvention(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('fancy');
  });

  it('flags modifier-noun ordering with a fix suggestion', () => {
    const state = buildState({
      componentRegistry: [{ name: 'primary-button', kind: 'button' }],
    });
    const findings = namingConvention(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('button-primary');
  });

  it('descriptor is a warning', () => {
    expect(namingConventionRule.severity).toBe('warning');
  });
});
