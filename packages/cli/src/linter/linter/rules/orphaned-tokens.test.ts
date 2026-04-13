import { describe, it, expect } from 'bun:test';
import { orphanedTokens } from './orphaned-tokens.js';
import { buildState } from './test-helpers.js';

describe('orphanedTokens', () => {
  it('emits warning for color not referenced by any component', () => {
    const state = buildState({
      colors: { primary: '#ff0000', unused: '#00ff00' },
      components: {
        button: { backgroundColor: '{colors.primary}' },
      },
    });
    const findings = orphanedTokens(state);
    const orphan = findings.find(d => d.message.includes('unused'));
    expect(orphan).toBeDefined();
  });

  it('returns empty when no components exist', () => {
    const state = buildState({ colors: { primary: '#ff0000' } });
    expect(orphanedTokens(state)).toEqual([]);
  });
});
