import { describe, it, expect } from 'bun:test';
import { isValidColor, isStandardDimension, isParseableDimension, parseDimensionParts, isTokenReference } from './spec.js';

describe('isValidColor', () => {
  const validColors = ['#ff0000', '#FF0000', '#abc', '#ABC', '#647D66', '#000', '#fff'];
  const invalidColors = ['red', 'blue', '#gg0000', '#12345', '647D66', '#1234567', '', '#'];

  it.each(validColors)('accepts valid hex color: %s', (color: string) => {
    expect(isValidColor(color)).toBe(true);
  });

  it.each(invalidColors)('rejects invalid color: %s', (color: string) => {
    expect(isValidColor(color)).toBe(false);
  });
});

describe('isStandardDimension', () => {
  const standard = ['12px', '1.5rem', '0px', '42px', '0.75rem', '100px'];
  const nonStandard = ['42', 'px', 'rem', '12em', '12vh', '', '12 px', '-0.02em'];

  it.each(standard)('accepts standard dimension: %s', (dim: string) => {
    expect(isStandardDimension(dim)).toBe(true);
  });

  it.each(nonStandard)('rejects non-standard dimension: %s', (dim: string) => {
    expect(isStandardDimension(dim)).toBe(false);
  });
});

describe('isParseableDimension', () => {
  const parseable = [
    '12px', '1.5rem', '-0.02em', '100vh', '50%', '0.75rem', '1em', '12vw',
    // CSS Level 4 units now in scope
    '10cqi', '20lvh', '30dvw', '5cqmin',
  ];
  const unparseable = ['42', 'px', 'rem', '', '12 px', 'auto', 'inherit'];

  it.each(parseable)('accepts parseable dimension: %s', (dim: string) => {
    expect(isParseableDimension(dim)).toBe(true);
  });

  it.each(unparseable)('rejects unparseable dimension: %s', (dim: string) => {
    expect(isParseableDimension(dim)).toBe(false);
  });
});

describe('parseDimensionParts', () => {
  it('parses standard dimensions', () => {
    expect(parseDimensionParts('42px')).toEqual({ value: 42, unit: 'px' });
    expect(parseDimensionParts('1.5rem')).toEqual({ value: 1.5, unit: 'rem' });
    expect(parseDimensionParts('-0.02em')).toEqual({ value: -0.02, unit: 'em' });
  });

  it('parses leading-zero-free decimals (.5rem)', () => {
    expect(parseDimensionParts('.5rem')).toEqual({ value: 0.5, unit: 'rem' });
    expect(parseDimensionParts('-.25em')).toEqual({ value: -0.25, unit: 'em' });
  });

  it('returns null for bare numbers without a unit', () => {
    expect(parseDimensionParts('42')).toBeNull();
    expect(parseDimensionParts('')).toBeNull();
  });

  it('returns null for CSS keywords', () => {
    expect(parseDimensionParts('auto')).toBeNull();
    expect(parseDimensionParts('inherit')).toBeNull();
  });
});

describe('isTokenReference', () => {
  it('recognizes curly-brace token references', () => {
    expect(isTokenReference('{colors.primary}')).toBe(true);
    expect(isTokenReference('{typography.headline-lg}')).toBe(true);
    expect(isTokenReference('{colors.primary-60}')).toBe(true);
  });

  it('rejects non-references', () => {
    expect(isTokenReference('#ff0000')).toBe(false);
    expect(isTokenReference('colors.primary')).toBe(false);
    expect(isTokenReference('{}')).toBe(false);
    expect(isTokenReference('{ colors.primary }')).toBe(false);
  });
});
