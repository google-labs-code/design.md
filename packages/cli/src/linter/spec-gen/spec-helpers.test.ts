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
import { getRulesTable, getSpecContent } from './spec-helpers.js';
import type { RuleDescriptor } from '../linter/rules/types.js';

describe('getRulesTable', () => {
  it('returns a markdown table with rule details', () => {
    const rules: RuleDescriptor[] = [
      {
        name: 'rule-1',
        severity: 'error',
        description: 'Description 1',
        run: (_state: any) => [],
      },
      {
        name: 'rule-2',
        severity: 'warning',
        description: 'Description 2',
        run: (_state: any) => [],
      },
    ];

    const table = getRulesTable(rules);
    expect(table).toContain('| Rule | Severity | What it checks |');
    expect(table).toContain('| rule-1 | error | Description 1 |');
    expect(table).toContain('| rule-2 | warning | Description 2 |');
  });
});

describe('getSpecContent', () => {
  it('returns spec content with expected heading', () => {
    const content = getSpecContent();
    expect(content).toContain('# DESIGN.md Format');
  });

  it('returns consistent content on repeated calls', () => {
    const first = getSpecContent();
    const second = getSpecContent();
    expect(first).toBe(second);
  });

  it('content has substantial length (not a stub)', () => {
    const content = getSpecContent();
    // The spec doc is a real document, at least a few KB
    expect(content.length).toBeGreaterThan(1000);
  });

  it('accepts an explicit specPath override', () => {
    // This tests the explicit-path contract. If someone passes a path,
    // it should use that path exactly — no guessing.
    expect(() => getSpecContent('/nonexistent/fake.md')).toThrow();
  });
});
