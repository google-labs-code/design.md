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
import { tripleSeparation, tripleSeparationRule } from './triple-separation.js';
import { buildState } from './test-helpers.js';

describe('tripleSeparation', () => {
  it('flags components with border + shadow + backgroundColor', () => {
    const state = buildState({
      colors: { surface: '#ffffff' },
      elevation: { raised: '0 4px 8px rgba(0,0,0,0.1)' },
      components: {
        card: {
          backgroundColor: '{colors.surface}',
          border: '1px solid #000000',
          shadow: '{elevation.raised}',
        },
      },
    });
    const findings = tripleSeparation(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('Pick one strategy');
  });

  it('does not flag border + shadow without backgroundColor', () => {
    const state = buildState({
      elevation: { raised: '0 4px 8px rgba(0,0,0,0.1)' },
      components: {
        card: {
          border: '1px solid #000000',
          shadow: '{elevation.raised}',
        },
      },
    });
    expect(tripleSeparation(state).length).toBe(0);
  });

  it('does not flag border + backgroundColor without shadow (input pattern)', () => {
    const state = buildState({
      colors: { surface: '#ffffff' },
      components: {
        input: {
          backgroundColor: '{colors.surface}',
          border: '1px solid #000000',
        },
      },
    });
    expect(tripleSeparation(state).length).toBe(0);
  });

  it('treats elevation as equivalent to shadow', () => {
    const state = buildState({
      colors: { surface: '#ffffff' },
      elevation: { raised: '0 4px 8px rgba(0,0,0,0.1)' },
      components: {
        card: {
          backgroundColor: '{colors.surface}',
          borderWidth: '1px',
          elevation: 'raised',
        },
      },
    });
    expect(tripleSeparation(state).length).toBe(1);
  });

  it('has a valid descriptor', () => {
    expect(tripleSeparationRule.name).toBe('triple-separation');
    expect(tripleSeparationRule.severity).toBe('warning');
  });
});
