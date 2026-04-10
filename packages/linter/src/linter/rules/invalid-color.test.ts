import { describe, it, expect } from 'bun:test';
import { invalidColor } from './invalid-color.js';
import { buildState } from './test-helpers.js';

describe('invalidColor', () => {
  it('emits error for non-hex color values', () => {
    const state = buildState({ colors: { accent: 'red' } });
    const diagnostics = invalidColor(state);
    expect(diagnostics.length).toBe(1);
    expect(diagnostics[0]!.severity).toBe('error');
    expect(diagnostics[0]!.message).toMatch(/red/);
    expect(diagnostics[0]!.message).toMatch(/hex/);
  });

  it('returns empty for valid hex colors', () => {
    const state = buildState({ colors: { primary: '#647D66' } });
    expect(invalidColor(state)).toEqual([]);
  });

  it('skips token references (handled by broken-ref rule)', () => {
    const state = buildState({ colors: { alias: '{colors.primary}' as string } });
    expect(invalidColor(state)).toEqual([]);
  });
});
