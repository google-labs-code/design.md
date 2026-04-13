import { describe, it, expect } from 'bun:test';
import { missingPrimary } from './missing-primary.js';
import { buildState } from './test-helpers.js';

describe('missingPrimary', () => {
  it('emits warning when colors exist but no primary', () => {
    const state = buildState({ colors: { accent: '#ff0000' } });
    const findings = missingPrimary(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toMatch(/primary/);
  });

  it('returns empty when primary IS defined', () => {
    const state = buildState({ colors: { primary: '#ff0000' } });
    expect(missingPrimary(state)).toEqual([]);
  });

  it('returns empty when no colors defined', () => {
    const state = buildState({});
    expect(missingPrimary(state)).toEqual([]);
  });
});
