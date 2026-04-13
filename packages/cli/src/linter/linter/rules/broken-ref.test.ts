import { describe, it, expect } from 'bun:test';
import { brokenRef, brokenRefRule } from './broken-ref.js';
import { buildState } from './test-helpers.js';

describe('brokenRef', () => {
  it('emits error for unresolved token reference', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      components: { button: { backgroundColor: '{colors.nonexistent}' } },
    });
    const findings = brokenRef(state);
    expect(findings.some(d => d.message.includes('does not resolve'))).toBe(true);
  });

  it('returns empty when all references resolve', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      components: { button: { backgroundColor: '{colors.primary}' } },
    });
    const errors = brokenRef(state).filter(d => d.message.includes('does not resolve'));
    expect(errors.length).toBe(0);
  });

  it('emits warning (not error) for unknown component sub-tokens', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      components: { button: { borderColor: '#ff0000' } },
    });
    const findings = brokenRef(state);
    const subTokenDiag = findings.find(d => d.message.includes('not a recognized'));
    expect(subTokenDiag).toBeDefined();
    expect(subTokenDiag!.severity).toBe('warning');
  });

  it('has a valid rule descriptor', () => {
    expect(brokenRefRule.name).toBe('broken-ref');
    expect(brokenRefRule.severity).toBe('error');
    expect(brokenRefRule.description).toBeTruthy();
    expect(brokenRefRule.run).toBe(brokenRef);
  });
});
