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
import { composesCycle, composesCycleRule } from './composes-cycle.js';
import { buildState } from './test-helpers.js';

describe('composesCycle', () => {
  it('is a no-op when no registry is declared', () => {
    const state = buildState({
      components: { card: { backgroundColor: '#000' } },
    });
    expect(composesCycle(state)).toEqual([]);
  });

  it('passes for a non-cyclic chain', () => {
    const state = buildState({
      componentRegistry: [
        { name: 'card', kind: 'container' },
        { name: 'card-elevated', kind: 'container', composes: 'card' },
      ],
      components: {
        card: { backgroundColor: '#000' },
        'card-elevated': { shadow: '0 4px 8px rgba(0,0,0,0.1)' },
      },
    });
    expect(composesCycle(state)).toEqual([]);
  });

  it('detects a 2-node cycle', () => {
    const state = buildState({
      componentRegistry: [
        { name: 'a', kind: 'container', composes: 'b' },
        { name: 'b', kind: 'container', composes: 'a' },
      ],
      components: { a: { backgroundColor: '#000' }, b: { backgroundColor: '#fff' } },
    });
    const findings = composesCycle(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('cycle');
  });

  it('detects a 3-node cycle and reports it once', () => {
    const state = buildState({
      componentRegistry: [
        { name: 'a', kind: 'container', composes: 'b' },
        { name: 'b', kind: 'container', composes: 'c' },
        { name: 'c', kind: 'container', composes: 'a' },
      ],
      components: {
        a: { backgroundColor: '#000' },
        b: { backgroundColor: '#fff' },
        c: { backgroundColor: '#aaa' },
      },
    });
    const findings = composesCycle(state);
    // Same cycle, reported once even though every entry can find it.
    expect(findings.length).toBe(1);
  });

  it('descriptor is an error', () => {
    expect(composesCycleRule.severity).toBe('error');
  });
});
