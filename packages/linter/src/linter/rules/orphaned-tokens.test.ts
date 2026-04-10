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
    const diagnostics = orphanedTokens(state);
    const orphan = diagnostics.find(d => d.message.includes('unused'));
    expect(orphan).toBeDefined();
    expect(orphan!.severity).toBe('warning');
  });

  it('returns empty when no components exist', () => {
    const state = buildState({ colors: { primary: '#ff0000' } });
    expect(orphanedTokens(state)).toEqual([]);
  });
});
