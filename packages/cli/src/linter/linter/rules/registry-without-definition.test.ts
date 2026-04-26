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
import {
  registryWithoutDefinition,
  registryWithoutDefinitionRule,
} from './registry-without-definition.js';
import { buildState } from './test-helpers.js';

describe('registryWithoutDefinition', () => {
  it('is a no-op when no registry is declared', () => {
    const state = buildState({
      components: { 'button-primary': { backgroundColor: '#000' } },
    });
    expect(registryWithoutDefinition(state)).toEqual([]);
  });

  it('flags registry entries without a matching definition', () => {
    const state = buildState({
      componentRegistry: [
        { name: 'button-primary', kind: 'button' },
        { name: 'button-tertiary', kind: 'button' },
      ],
      components: { 'button-primary': { backgroundColor: '#000' } },
    });
    const findings = registryWithoutDefinition(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('components.registry.button-tertiary');
  });

  it('passes when every registry entry has a definition', () => {
    const state = buildState({
      componentRegistry: [{ name: 'card', kind: 'container' }],
      components: { card: { backgroundColor: '#000' } },
    });
    expect(registryWithoutDefinition(state)).toEqual([]);
  });

  it('descriptor is a warning', () => {
    expect(registryWithoutDefinitionRule.severity).toBe('warning');
  });
});
