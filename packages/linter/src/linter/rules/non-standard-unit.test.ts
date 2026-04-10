import { describe, it, expect } from 'bun:test';
import { nonStandardUnit } from './non-standard-unit.js';
import { buildState } from './test-helpers.js';

describe('nonStandardUnit', () => {
  it('emits warning when typography uses em unit', () => {
    const state = buildState({
      colors: { primary: '#000000' },
      typography: {
        headline: { fontFamily: 'Roboto', fontSize: '32px', letterSpacing: '-0.02em' },
      },
    });
    const diagnostics = nonStandardUnit(state);
    expect(diagnostics.length).toBeGreaterThan(0);
    expect(diagnostics[0]!.message).toMatch(/non-standard/);
    expect(diagnostics[0]!.message).toMatch(/em/);
  });

  it('returns empty for standard px/rem units', () => {
    const state = buildState({
      colors: { primary: '#000000' },
      typography: {
        headline: { fontFamily: 'Roboto', fontSize: '32px', letterSpacing: '1.2px' },
      },
    });
    const nonStd = nonStandardUnit(state).filter(d => d.message.includes('non-standard'));
    expect(nonStd.length).toBe(0);
  });
});
