// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { describe, it, expect } from 'bun:test';
import { TailwindV4EmitterHandler } from './handler.js';
import { serializeToCss } from './serialize.js';
import { ModelHandler } from '../../model/handler.js';
import type { ParsedDesignSystem } from '../../parser/spec.js';

const emitter = new TailwindV4EmitterHandler();
const modelHandler = new ModelHandler();

function buildState(overrides: Partial<ParsedDesignSystem> = {}) {
  const parsed: ParsedDesignSystem = { sourceMap: new Map(), ...overrides };
  const result = modelHandler.execute(parsed);
  const hasErrors = result.findings.some(d => d.severity === 'error');
  if (hasErrors) {
    throw new Error(`Model build failed: ${result.findings.map(d => d.message).join(', ')}`);
  }
  return result.designSystem;
}

describe('TailwindV4EmitterHandler', () => {
  describe('colors mapping', () => {
    it('maps resolved colors to theme.colors keyed by token name', () => {
      const state = buildState({
        colors: { primary: '#647D66', secondary: '#ff0000' },
      });
      const result = emitter.execute(state);
      if (!result.success) throw new Error('Expected success');
      expect(result.data.theme.colors?.['primary']).toBe('#647d66');
      expect(result.data.theme.colors?.['secondary']).toBe('#ff0000');
    });
  });

  describe('typography mapping', () => {
    it('splits typography into four separate categories', () => {
      const state = buildState({
        typography: {
          'headline-lg': {
            fontFamily: 'Google Sans Display',
            fontSize: '42px',
            fontWeight: 500,
            lineHeight: '50px',
            letterSpacing: '1.2px',
          },
        },
      });
      const result = emitter.execute(state);
      if (!result.success) throw new Error('Expected success');
      const theme = result.data.theme;

      expect(theme.fontFamily?.['headline-lg']).toBe('"Google Sans Display"');
      expect(theme.fontSize?.['headline-lg']).toBe('42px');
      expect(theme.lineHeight?.['headline-lg']).toBe('50px');
      expect(theme.letterSpacing?.['headline-lg']).toBe('1.2px');
      expect(theme.fontWeight?.['headline-lg']).toBe('500');
    });

    it('only populates categories for fields present on the token', () => {
      const state = buildState({
        typography: {
          'body-lg': {
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
          },
        },
      });
      const result = emitter.execute(state);
      if (!result.success) throw new Error('Expected success');
      const theme = result.data.theme;

      expect(theme.fontFamily?.['body-lg']).toBe('"Roboto"');
      expect(theme.fontSize?.['body-lg']).toBe('14px');
      expect(theme.lineHeight?.['body-lg']).toBe('20px');
      expect(theme.fontWeight?.['body-lg']).toBe('400');
      expect(theme.letterSpacing?.['body-lg']).toBeUndefined();
    });

    it('escapes embedded quotes and backslashes in font-family values', () => {
      const state = buildState({
        typography: {
          fancy: { fontFamily: 'Fancy "Font"', fontSize: '16px' },
        },
      });
      const result = emitter.execute(state);
      if (!result.success) throw new Error('Expected success');
      expect(result.data.theme.fontFamily?.['fancy']).toBe('"Fancy \\"Font\\""');
    });

    it('escapes line terminators in font-family values', () => {
      const state = buildState({
        typography: {
          multi: { fontFamily: 'Evil\nFamily', fontSize: '16px' },
        },
      });
      const result = emitter.execute(state);
      if (!result.success) throw new Error('Expected success');
      const value = result.data.theme.fontFamily?.['multi'];
      // A raw newline must not survive into the emitted CSS string.
      expect(value).not.toContain('\n');
      expect(value).toBe('"Evil\\a Family"');
    });
  });

  describe('dimensions mapping', () => {
    it('maps rounded to borderRadius and spacing to spacing', () => {
      const state = buildState({
        rounded: { regular: '4px', lg: '8px', full: '9999px' },
        spacing: { 'gutter-s': '8px', 'gutter-l': '16px' },
      });
      const result = emitter.execute(state);
      if (!result.success) throw new Error('Expected success');
      const theme = result.data.theme;

      expect(theme.borderRadius?.['regular']).toBe('4px');
      expect(theme.borderRadius?.['lg']).toBe('8px');
      expect(theme.borderRadius?.['full']).toBe('9999px');
      expect(theme.spacing?.['gutter-s']).toBe('8px');
      expect(theme.spacing?.['gutter-l']).toBe('16px');
    });
  });

  describe('empty state', () => {
    it('returns success with an empty theme object', () => {
      const state = buildState({});
      const result = emitter.execute(state);
      if (!result.success) throw new Error('Expected success');
      expect(result.data.theme).toBeDefined();
    });
  });

  describe('grouped tokens', () => {
    it('collapses dot-separated group paths to hyphenated @theme custom properties', () => {
      const state = buildState({
        colors: {
          primary: '#647D66',
          light: { surface: '#FAFDF7', 'on-surface': '#1A1C19' },
        },
        typography: {
          sm: {
            'headline-lg': {
              fontFamily: 'Public Sans',
              fontSize: '32px',
              fontWeight: 600,
              lineHeight: '40px',
            },
          },
        },
        rounded: { control: { pill: '9999px' } },
        spacing: { sm: { gutter: '16px' } },
      });

      const result = emitter.execute(state);
      if (!result.success) throw new Error(`Expected success, got ${result.error.message}`);
      const theme = result.data.theme;

      expect(theme.colors?.['light-surface']).toBe('#fafdf7');
      expect(theme.colors?.['light-on-surface']).toBe('#1a1c19');
      expect(theme.fontFamily?.['sm-headline-lg']).toBe('"Public Sans"');
      expect(theme.fontSize?.['sm-headline-lg']).toBe('32px');
      expect(theme.lineHeight?.['sm-headline-lg']).toBe('40px');
      expect(theme.fontWeight?.['sm-headline-lg']).toBe('600');
      expect(theme.borderRadius?.['control-pill']).toBe('9999px');
      expect(theme.spacing?.['sm-gutter']).toBe('16px');

      const css = serializeToCss(theme);
      expect(css).toContain('  --color-light-surface: #fafdf7;');
      expect(css).toContain('  --font-sm-headline-lg: "Public Sans";');
      expect(css).toContain('  --text-sm-headline-lg: 32px;');
      expect(css).toContain('  --radius-control-pill: 9999px;');
      expect(css).toContain('  --spacing-sm-gutter: 16px;');
    });
  });

  describe('invalid token names', () => {
    it('fails when a dotted token name contains an empty segment', () => {
      const state = buildState({
        colors: { primary: '#000000' },
      });
      state.colors.set('primary..surface', {
        type: 'color', hex: '#ffffff', r: 255, g: 255, b: 255, luminance: 1,
      });
      const result = emitter.execute(state);
      expect(result.success).toBe(false);
      if (result.success) return;
      expect(result.error.code).toBe('INVALID_TOKEN_NAME');
      expect(result.error.message).toContain('primary..surface');
    });

    it('fails when two programmatic keys flatten to the same CSS identifier', () => {
      const state = buildState({});
      state.colors.set('primary-light', {
        type: 'color', hex: '#111111', r: 17, g: 17, b: 17, luminance: 0,
      });
      state.colors.set('primary.light', {
        type: 'color', hex: '#222222', r: 34, g: 34, b: 34, luminance: 0,
      });
      const result = emitter.execute(state);
      expect(result.success).toBe(false);
      if (result.success) return;
      expect(result.error.code).toBe('TOKEN_NAME_COLLISION');
    });

    it('allows Tailwind-style dimension token names that start with a digit', () => {
      const state = buildState({});
      state.spacing.set('2xs', { type: 'dimension', value: 2, unit: 'px' });
      state.rounded.set('4xl', { type: 'dimension', value: 32, unit: 'px' });
      const result = emitter.execute(state);
      expect(result.success).toBe(true);
      if (!result.success) return;
      expect(result.data.theme.spacing?.['2xs']).toBe('2px');
      expect(result.data.theme.borderRadius?.['4xl']).toBe('32px');
    });

    it('fails when a token name contains a space', () => {
      const state = buildState({});
      state.rounded.set('has space', { type: 'dimension', value: 4, unit: 'px' });
      const result = emitter.execute(state);
      expect(result.success).toBe(false);
    });
  });
});
