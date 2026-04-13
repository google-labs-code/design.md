import { describe, it, expect } from 'bun:test';
import { tokenSummary } from './token-summary.js';
import { buildState } from './test-helpers.js';

describe('tokenSummary', () => {
  it('emits info diagnostic with token counts', () => {
    const state = buildState({
      colors: { primary: '#ff0000', secondary: '#00ff00' },
      typography: { 'headline-lg': { fontFamily: 'Roboto', fontSize: '42px', fontWeight: 500 } },
      rounded: { regular: '4px' },
      spacing: { 'gutter-s': '8px' },
    });
    const findings = tokenSummary(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toMatch(/2 colors/);
    expect(findings[0]!.message).toMatch(/1 typography/);
  });

  it('returns empty for completely empty state', () => {
    const state = buildState({});
    expect(tokenSummary(state)).toEqual([]);
  });
});
