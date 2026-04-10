import { describe, it, expect } from 'bun:test';
import { contrastCheck } from './contrast-ratio.js';
import { buildState } from './test-helpers.js';

describe('contrastCheck', () => {
  it('emits warning for low contrast pair', () => {
    const state = buildState({
      colors: { yellow: '#ffff00', white: '#ffffff' },
      components: {
        'button-bad': { backgroundColor: '{colors.yellow}', textColor: '{colors.white}' },
      },
    });
    const diagnostics = contrastCheck(state);
    expect(diagnostics.length).toBe(1);
    expect(diagnostics[0]!.severity).toBe('warning');
    expect(diagnostics[0]!.message).toMatch(/contrast/);
  });

  it('returns empty for high contrast pair', () => {
    const state = buildState({
      colors: { black: '#000000', white: '#ffffff' },
      components: {
        'button-good': { backgroundColor: '{colors.black}', textColor: '{colors.white}' },
      },
    });
    const contrastWarnings = contrastCheck(state).filter(d => d.message.includes('contrast'));
    expect(contrastWarnings.length).toBe(0);
  });
});
