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
});
