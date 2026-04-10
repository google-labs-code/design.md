import { describe, it, expect } from 'bun:test';
import type { LintRule } from './types.js';

describe('LintRule type', () => {
  it('accepts a function that takes state and returns diagnostics', () => {
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
});
