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

  it('getSpecContent returns spec content', () => {
    const content = getSpecContent();
    expect(content).toContain('# DESIGN.md Format');
  });
});
