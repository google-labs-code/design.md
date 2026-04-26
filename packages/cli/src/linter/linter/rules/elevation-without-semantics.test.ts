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
import { elevationWithoutSemantics, elevationWithoutSemanticsRule } from './elevation-without-semantics.js';
import { buildState } from './test-helpers.js';

describe('elevationWithoutSemantics', () => {
  it('flags a literal shadow when elevation tokens exist', () => {
    const state = buildState({
      elevation: { raised: '0 4px 8px rgba(0,0,0,0.08)' },
      components: {
        card: { shadow: '0 2px 4px rgba(0,0,0,0.1)' },
      },
    });
    const findings = elevationWithoutSemantics(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('literal shadow');
  });

  it('does not flag a referenced elevation token', () => {
    const state = buildState({
      elevation: { raised: '0 4px 8px rgba(0,0,0,0.08)' },
      components: {
        card: { shadow: '{elevation.raised}' },
      },
    });
    expect(elevationWithoutSemantics(state).length).toBe(0);
  });

  it('does not flag when no elevation tokens are defined', () => {
    const state = buildState({
      components: {
        card: { shadow: '0 4px 8px rgba(0,0,0,0.08)' },
      },
    });
    expect(elevationWithoutSemantics(state).length).toBe(0);
  });

  it('has a valid descriptor', () => {
    expect(elevationWithoutSemanticsRule.name).toBe('elevation-without-semantics');
    expect(elevationWithoutSemanticsRule.severity).toBe('info');
  });
});
