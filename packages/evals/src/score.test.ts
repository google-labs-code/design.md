// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License").

import { describe, expect, test } from 'bun:test';

import type { ParsedDesign } from './formats.js';
import {
  COLOR_TOLERANCE,
  DIM_TOLERANCE,
  colorDistance,
  combineScore,
  extract,
  meanScore,
  normalizeHex,
  resolveTokenRef,
  score,
  tokenColors,
} from './score.js';
import { DEFAULT_WEIGHTS, type Score } from './types.js';

function makeDesign(frontmatter: Record<string, any>): ParsedDesign {
  return { raw: '', frontmatter, body: '' };
}

describe('normalizeHex', () => {
  test('expands 3-digit shorthand and lowercases', () => {
    expect(normalizeHex('#FFF')).toBe('#ffffff');
    expect(normalizeHex('#aBc')).toBe('#aabbcc');
  });

  test('expands 4-digit shorthand and drops alpha', () => {
    expect(normalizeHex('#abcd')).toBe('#aabbcc');
  });

  test('truncates 8-digit alpha hex to 6 digits', () => {
    expect(normalizeHex('#11223344')).toBe('#112233');
    expect(normalizeHex('#11223380')).toBe('#112233');
  });

  test('passes 6-digit through, lowercased', () => {
    expect(normalizeHex('#1A1C1E')).toBe('#1a1c1e');
  });

  test('tolerates leading-hash variants', () => {
    expect(normalizeHex('1A1C1E')).toBe('#1a1c1e');
  });
});

describe('colorDistance', () => {
  test('returns 0 for identical colors', () => {
    expect(colorDistance('#000000', '#000000')).toBe(0);
    expect(colorDistance('#FFFFFF', '#ffffff')).toBe(0);
  });

  test('returns 1 for black vs white (maximum distance)', () => {
    expect(colorDistance('#000000', '#ffffff')).toBeCloseTo(1, 6);
  });

  test('is symmetric', () => {
    const a = colorDistance('#112233', '#aabbcc');
    const b = colorDistance('#aabbcc', '#112233');
    expect(a).toBe(b);
  });

  test('shorthand and longhand of the same color are equivalent', () => {
    expect(colorDistance('#fff', '#ffffff')).toBe(0);
    expect(colorDistance('#abc', '#aabbcc')).toBe(0);
  });

  test('returns a value in [0, 1]', () => {
    const samples = [
      colorDistance('#111111', '#222222'),
      colorDistance('#abcdef', '#fedcba'),
      colorDistance('#ff0000', '#00ff00'),
    ];
    for (const v of samples) {
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThanOrEqual(1);
    }
  });

  test('very small differences fall under COLOR_TOLERANCE', () => {
    // #000000 vs #050505 -> sqrt(75)/sqrt(195075) ≈ 0.0196 < 0.05
    expect(colorDistance('#000000', '#050505')).toBeLessThan(COLOR_TOLERANCE);
  });
});

describe('extract', () => {
  test('returns empty buckets for empty input', () => {
    expect(extract('')).toEqual({
      colors: [],
      fontFamilies: [],
      pxDimensions: [],
      remDimensions: [],
    });
  });

  test('normalizes hex colors', () => {
    const html = '<div style="color: #fff; background: #abcdef;">';
    const out = extract(html);
    expect(out.colors).toContain('#ffffff');
    expect(out.colors).toContain('#abcdef');
  });

  test('splits font-family lists on commas', () => {
    const html = '<p style="font-family: Public Sans, Space Grotesk, sans-serif;">';
    const out = extract(html);
    expect(out.fontFamilies).toContain('Public Sans');
    expect(out.fontFamilies).toContain('Space Grotesk');
    expect(out.fontFamilies).toContain('sans-serif');
  });

  test('collects px and rem dimensions separately, deduplicated', () => {
    const html = '<div style="padding: 16px 16px 8px; margin: 1rem 1rem 0.5rem;">';
    const out = extract(html);
    expect([...out.pxDimensions].sort((a, b) => a - b)).toEqual([8, 16]);
    expect([...out.remDimensions].sort((a, b) => a - b)).toEqual([0.5, 1]);
  });

  test('ignores partial / non-css occurrences gracefully', () => {
    const html = '<p>no styles here</p><span style="display:flex;"></span>';
    const out = extract(html);
    expect(out.colors).toEqual([]);
    expect(out.fontFamilies).toEqual([]);
    expect(out.pxDimensions).toEqual([]);
  });
});

describe('tokenColors', () => {
  test('returns normalized hex values from colors block', () => {
    const colors = tokenColors({ colors: { primary: '#1A1C1E', accent: '#FFF' } });
    expect(colors).toEqual(['#1a1c1e', '#ffffff']);
  });

  test('skips non-string and non-hex values', () => {
    const colors = tokenColors({
      colors: {
        primary: '#1A1C1E',
        bad: 'rebeccapurple',
        nested: { ramp: '#aabbcc' },
      },
    });
    expect(colors).toEqual(['#1a1c1e']);
  });

  test('returns empty array when no colors block is present', () => {
    expect(tokenColors({})).toEqual([]);
  });
});

describe('score', () => {
  const design = makeDesign({
    colors: { primary: '#1A1C1E', accent: '#B8422E' },
    typography: { h1: { fontFamily: 'Public Sans' }, body: { fontFamily: 'Inter, sans-serif' } },
    spacing: { sm: '8px', md: '16px' },
    rounded: { md: '8px' },
  });

  test('color subscore: 1.0 when every extracted color is on-palette', () => {
    const out = score(
      { colors: ['#1a1c1e', '#b8422e'], fontFamilies: [], pxDimensions: [], remDimensions: [] },
      design,
    );
    expect(out.colorScore).toBe(1);
  });

  test('color subscore: 0.5 when half are off-palette', () => {
    const out = score(
      { colors: ['#1a1c1e', '#ff00ff'], fontFamilies: [], pxDimensions: [], remDimensions: [] },
      design,
    );
    expect(out.colorScore).toBe(0.5);
  });

  test('color subscore: 0 when there are no extracted colors', () => {
    const out = score(
      { colors: [], fontFamilies: [], pxDimensions: [], remDimensions: [] },
      design,
    );
    expect(out.colorScore).toBe(0);
  });

  test('color subscore: 0 when design has no palette', () => {
    const out = score(
      { colors: ['#1a1c1e'], fontFamilies: [], pxDimensions: [], remDimensions: [] },
      makeDesign({}),
    );
    expect(out.colorScore).toBe(0);
  });

  test('typography subscore: matches against the font-family set', () => {
    const out = score(
      { colors: [], fontFamilies: ['Public Sans', 'Comic Sans MS'], pxDimensions: [], remDimensions: [] },
      design,
    );
    expect(out.typographyScore).toBe(0.5);
  });

  test('typography subscore: includes families with comma fallbacks', () => {
    const out = score(
      { colors: [], fontFamilies: ['Inter'], pxDimensions: [], remDimensions: [] },
      design,
    );
    expect(out.typographyScore).toBe(1);
  });

  test('spacing subscore: matches px and rem against their respective scales', () => {
    const out = score(
      { colors: [], fontFamilies: [], pxDimensions: [8, 16], remDimensions: [] },
      design,
    );
    expect(out.spacingScore).toBe(1);
  });

  test('spacing subscore: 0 when no dimensions extracted', () => {
    const out = score(
      { colors: [], fontFamilies: [], pxDimensions: [], remDimensions: [] },
      design,
    );
    expect(out.spacingScore).toBe(0);
  });

  test('spacing subscore: uses DIM_TOLERANCE for near-matches', () => {
    const out = score(
      { colors: [], fontFamilies: [], pxDimensions: [8 + DIM_TOLERANCE], remDimensions: [] },
      design,
    );
    expect(out.spacingScore).toBe(1);
  });
});

describe('combineScore', () => {
  test('drops absent subscores from numerator and denominator', () => {
    const tokensOnly = combineScore({ colorScore: 1, typographyScore: 1, spacingScore: 1 });
    // (0.30 + 0.10 + 0.10) / (0.30 + 0.10 + 0.10) = 1
    expect(tokensOnly).toBe(1);
  });

  test('zero in one layer pulls the aggregate down proportionally', () => {
    const result = combineScore({ colorScore: 0, typographyScore: 1, spacingScore: 1 });
    // (0*0.30 + 1*0.10 + 1*0.10) / 0.50 = 0.20 / 0.50 = 0.4
    expect(result).toBeCloseTo(0.4, 6);
  });

  test('returns 0 when nothing scored', () => {
    expect(combineScore({})).toBe(0);
  });

  test('honors custom weights', () => {
    const result = combineScore(
      { colorScore: 1, typographyScore: 0 },
      { ...DEFAULT_WEIGHTS, color: 1, typography: 1 },
    );
    expect(result).toBe(0.5);
  });

  test('includes every optional layer when present', () => {
    const all: Score = {
      colorScore: 1,
      typographyScore: 1,
      spacingScore: 1,
      copyScore: 1,
      semanticScore: 1,
      structuralScore: 1,
      visionScore: 1,
      aggregate: 0,
    };
    expect(combineScore(all)).toBeCloseTo(1, 6);
  });
});

describe('resolveTokenRef', () => {
  const fm = {
    colors: { primary: '#1A1C1E' },
    typography: { h1: { fontFamily: 'Public Sans', fontSize: '3rem' } },
  };

  test('resolves a simple token path', () => {
    expect(resolveTokenRef('{colors.primary}', fm)).toBe('#1A1C1E');
  });

  test('resolves a nested object reference', () => {
    expect(resolveTokenRef('{typography.h1}', fm)).toEqual({
      fontFamily: 'Public Sans',
      fontSize: '3rem',
    });
  });

  test('resolves nested-property paths', () => {
    expect(resolveTokenRef('{typography.h1.fontSize}', fm)).toBe('3rem');
  });

  test('returns undefined when a path step is missing', () => {
    expect(resolveTokenRef('{colors.missing}', fm)).toBeUndefined();
    expect(resolveTokenRef('{nope.nada}', fm)).toBeUndefined();
  });

  test('returns undefined for non-reference strings', () => {
    expect(resolveTokenRef('#abcdef', fm)).toBeUndefined();
    expect(resolveTokenRef('plain', fm)).toBeUndefined();
  });

  test('trims surrounding whitespace', () => {
    expect(resolveTokenRef('  {colors.primary}  ', fm)).toBe('#1A1C1E');
  });
});

describe('meanScore', () => {
  test('returns the zero-valued empty score for an empty list', () => {
    expect(meanScore([])).toEqual({
      colorScore: 0,
      typographyScore: 0,
      spacingScore: 0,
      aggregate: 0,
    });
  });

  test('averages the required subscores', () => {
    const a: Score = { colorScore: 1, typographyScore: 1, spacingScore: 1, aggregate: 1 };
    const b: Score = { colorScore: 0, typographyScore: 0, spacingScore: 0, aggregate: 0 };
    const mean = meanScore([a, b]);
    expect(mean.colorScore).toBe(0.5);
    expect(mean.typographyScore).toBe(0.5);
    expect(mean.spacingScore).toBe(0.5);
    expect(mean.aggregate).toBe(0.5);
  });

  test('only averages optional subscores over the runs that produced them', () => {
    const a: Score = { colorScore: 1, typographyScore: 1, spacingScore: 1, copyScore: 1, aggregate: 1 };
    const b: Score = { colorScore: 1, typographyScore: 1, spacingScore: 1, aggregate: 1 };
    const mean = meanScore([a, b]);
    expect(mean.copyScore).toBe(1);
  });

  test('leaves optional subscores undefined when no run produced them', () => {
    const a: Score = { colorScore: 1, typographyScore: 1, spacingScore: 1, aggregate: 1 };
    const mean = meanScore([a]);
    expect(mean.copyScore).toBeUndefined();
    expect(mean.semanticScore).toBeUndefined();
    expect(mean.structuralScore).toBeUndefined();
    expect(mean.visionScore).toBeUndefined();
  });
});
