import { describe, it, expect } from 'bun:test';
import { brokenRef } from './broken-ref.js';
import { buildState } from './test-helpers.js';

describe('brokenRef', () => {
  it('emits error for unresolved token reference', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      components: { button: { backgroundColor: '{colors.nonexistent}' } },
    });
    const diagnostics = brokenRef(state);
    expect(diagnostics.some(d => d.message.includes('does not resolve'))).toBe(true);
  });

  it('returns empty when all references resolve', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      components: { button: { backgroundColor: '{colors.primary}' } },
    });
    const errors = brokenRef(state).filter(d => d.message.includes('does not resolve'));
    expect(errors.length).toBe(0);
  });
});
