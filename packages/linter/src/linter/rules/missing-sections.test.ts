import { describe, it, expect } from 'bun:test';
import { missingSections } from './missing-sections.js';
import { buildState } from './test-helpers.js';

describe('missingSections', () => {
  it('emits info when spacing is missing but colors exist', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      rounded: { regular: '4px' },
      // no spacing
    });
    const diagnostics = missingSections(state);
    const spacingNote = diagnostics.find(d => d.path === 'spacing');
    expect(spacingNote).toBeDefined();
    expect(spacingNote!.severity).toBe('info');
    expect(spacingNote!.message).toMatch(/spacing/);
  });

  it('returns empty when all sections present', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      rounded: { regular: '4px' },
      spacing: { unit: '8px' },
    });
    expect(missingSections(state)).toEqual([]);
  });

  it('returns empty when no colors exist (nothing to compare against)', () => {
    const state = buildState({});
    expect(missingSections(state)).toEqual([]);
  });
});
