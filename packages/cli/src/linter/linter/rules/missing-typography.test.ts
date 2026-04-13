import { describe, it, expect } from 'bun:test';
import { missingTypography } from './missing-typography.js';
import { buildState } from './test-helpers.js';

describe('missingTypography', () => {
  it('emits warning when colors exist but no typography defined', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      // no typography
    });
    const findings = missingTypography(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('typography');
    expect(findings[0]!.message).toMatch(/typography/i);
  });

  it('returns empty when typography IS defined', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      typography: {
        'body-md': {
          fontFamily: 'Inter',
          fontSize: '16px',
        },
      },
    });
    expect(missingTypography(state)).toEqual([]);
  });

  it('returns empty when no colors defined (nothing to compare against)', () => {
    const state = buildState({});
    expect(missingTypography(state)).toEqual([]);
  });
});
