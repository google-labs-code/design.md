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
import { unboundComponent, unboundComponentRule } from './unbound-component.js';
import { buildState } from './test-helpers.js';

describe('unboundComponent', () => {
  it('is a no-op when no registry is declared (open-world back-compat)', () => {
    const state = buildState({
      components: { 'button-mystery': { backgroundColor: '#000' } },
    });
    expect(unboundComponent(state)).toEqual([]);
  });

  it('flags definitions outside the registry', () => {
    const state = buildState({
      componentRegistry: [{ name: 'button-primary', kind: 'button' }],
      components: {
        'button-primary': { backgroundColor: '#000' },
        'button-quaternary': { backgroundColor: '#fff' },
      },
    });
    const findings = unboundComponent(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('components.button-quaternary');
    expect(findings[0]!.message).toContain('not in the component registry');
  });

  it('flags prose references outside the registry', () => {
    const state = buildState({
      componentRegistry: [{ name: 'button-primary', kind: 'button' }],
      components: { 'button-primary': { backgroundColor: '#000' } },
      documentSections: [
        {
          heading: 'Components',
          content: 'Use {components.button-primary} for CTAs and {components.widget-floof} for X.',
          startLine: 1,
          endLine: 1,
          suppressions: [],
          codeBlockRanges: [],
        },
      ],
    });
    const findings = unboundComponent(state);
    expect(findings.some(f => f.message.includes('widget-floof'))).toBe(true);
    // button-primary should not be flagged
    expect(findings.some(f => f.message.includes('button-primary'))).toBe(false);
  });

  it('does not flag prose references that are in the registry', () => {
    const state = buildState({
      componentRegistry: [{ name: 'card', kind: 'container' }],
      components: { card: { backgroundColor: '#000' } },
      documentSections: [
        {
          heading: 'Components',
          content: 'Compose {components.card} freely.',
          startLine: 1,
          endLine: 1,
          suppressions: [],
          codeBlockRanges: [],
        },
      ],
    });
    expect(unboundComponent(state)).toEqual([]);
  });

  it('has a valid rule descriptor', () => {
    expect(unboundComponentRule.name).toBe('unbound-component');
    expect(unboundComponentRule.severity).toBe('error');
    expect(unboundComponentRule.description).toBeTruthy();
    expect(unboundComponentRule.run).toBe(unboundComponent);
  });
});
