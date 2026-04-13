import { describe, it, expect } from 'bun:test';
import type { LintRule, RuleDescriptor } from './types.js';
import { DEFAULT_RULE_DESCRIPTORS } from './index.js';

describe('LintRule type', () => {
  it('accepts a function that takes state and returns findings', () => {
    const rule: LintRule = (_state) => [];
    expect(rule({
      colors: new Map(),
      typography: new Map(),
      rounded: new Map(),
      spacing: new Map(),
      components: new Map(),
      symbolTable: new Map(),
    })).toEqual([]);
  });

  it('accepts a RuleDescriptor object', () => {
    const descriptor: RuleDescriptor = {
      name: 'test-rule',
      severity: 'info',
      description: 'Test description',
      run: (_state: any) => [],
    };
    expect(descriptor.name).toBe('test-rule');
  });

  it('has all rules in DEFAULT_RULE_DESCRIPTORS', () => {
    expect(DEFAULT_RULE_DESCRIPTORS.length).toBe(8);
    DEFAULT_RULE_DESCRIPTORS.forEach((rule: RuleDescriptor) => {
      expect(rule.name).toBeTruthy();
      expect(rule.severity).toBeTruthy();
      expect(rule.description).toBeTruthy();
      expect(rule.run).toBeTruthy();
    });
  });
});
