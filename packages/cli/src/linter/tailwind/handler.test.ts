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
import tailwindcss from 'tailwindcss';
import { TailwindEmitterHandler } from './handler.js';
import type { TailwindColorGroup } from './spec.js';
import { ModelHandler } from '../model/handler.js';
import type { ParsedDesignSystem } from '../parser/spec.js';

const emitter = new TailwindEmitterHandler();
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

describe('TailwindEmitterHandler', () => {
  // ── Cycle 22: Colors map to theme.extend.colors ─────────────────
  describe('colors mapping', () => {
    it('maps resolved colors to theme.extend.colors', () => {
      const state = buildState({
        colors: { primary: '#647D66', secondary: '#ff0000' },
      });
      const result = emitter.execute(state);
      if (!result.success) throw new Error('Expected success');
      const config = result.data;
      expect(config.theme.extend.colors?.['primary']).toBe('#647d66');
      expect(config.theme.extend.colors?.['secondary']).toBe('#ff0000');
    });
  });

  // ── Cycle 23: Typography maps to fontFamily + fontSize ──────────
  describe('typography mapping', () => {
    it('maps typography scales to fontFamily and fontSize', () => {
      const state = buildState({
        typography: {
          'headline-lg': {
            fontFamily: 'Google Sans Display',
            fontSize: '42px',
            fontWeight: 500,
            lineHeight: '50px',
            letterSpacing: '1.2px',
          },
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
      const config = result.data;

      // fontFamily
      expect(config.theme.extend.fontFamily?.['headline-lg']).toContain('Google Sans Display');
      expect(config.theme.extend.fontFamily?.['body-lg']).toContain('Roboto');

      // fontSize with metadata tuple
      const hlFontSize = config.theme.extend.fontSize?.['headline-lg'];
      expect(hlFontSize).toBeDefined();
      expect(hlFontSize?.[0]).toBe('42px');
      expect(hlFontSize?.[1]?.['lineHeight']).toBe('50px');
      expect(hlFontSize?.[1]?.['letterSpacing']).toBe('1.2px');
    });
  });

  // ── Cycle 24: Rounded + spacing map correctly ───────────────────
  describe('dimensions mapping', () => {
    it('maps rounded to borderRadius and spacing to spacing', () => {
      const state = buildState({
        rounded: { regular: '4px', lg: '8px', full: '9999px' },
        spacing: { 'gutter-s': '8px', 'gutter-l': '16px' },
      });
      const result = emitter.execute(state);
      if (!result.success) throw new Error('Expected success');
      const config = result.data;

      expect(config.theme.extend.borderRadius?.['regular']).toBe('4px');
      expect(config.theme.extend.borderRadius?.['lg']).toBe('8px');
      expect(config.theme.extend.borderRadius?.['full']).toBe('9999px');

      expect(config.theme.extend.spacing?.['gutter-s']).toBe('8px');
      expect(config.theme.extend.spacing?.['gutter-l']).toBe('16px');
    });
  });

  describe('motion mapping', () => {
    it('maps motion tokens to transitionDuration, transitionDelay, and transitionTimingFunction', () => {
      const state = buildState({
        motion: {
          'state-change': {
            duration: '100ms',
            delay: '0ms',
            timingFunction: 'ease-out',
          },
          'surface-enter': {
            duration: '250ms',
            delay: '0ms',
            timingFunction: 'cubic-bezier(0.2, 0, 0, 1)',
          },
        },
      });
      const result = emitter.execute(state);
      if (!result.success) throw new Error('Expected success');
      const config = result.data;

      expect(config.theme.extend.transitionDuration?.['state-change']).toBe('100ms');
      expect(config.theme.extend.transitionDuration?.['surface-enter']).toBe('250ms');
      expect(config.theme.extend.transitionDelay?.['state-change']).toBe('0ms');
      expect(config.theme.extend.transitionTimingFunction?.['state-change']).toBe('ease-out');
      expect(config.theme.extend.transitionTimingFunction?.['surface-enter']).toBe('cubic-bezier(0.2, 0, 0, 1)');
    });
  });

  // ── Empty state produces empty config ─────────────────────────────
  describe('empty state', () => {
    it('produces a valid config with empty extend sections', () => {
      const state = buildState({});
      const result = emitter.execute(state);
      if (!result.success) throw new Error('Expected success');
      const config = result.data;
      expect(config.theme.extend).toBeDefined();
    });
  });

  describe('grouped tokens', () => {
    it('nests grouped colors and hyphenates grouped typography, spacing, and rounded scales', () => {
      const state = buildState({
        colors: {
          primary: '#647D66',
          light: { surface: '#FAFDF7', 'on-surface': '#1A1C19' },
          brand: { primary: { base: '#4A6350' } },
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
      if (!result.success) throw new Error('Expected success');
      const extend = result.data.theme.extend;

      expect(extend.colors?.['primary']).toBe('#647d66');
      expect(extend.colors?.['light.surface']).toBeUndefined();
      expect(extend.colors?.['light']).toEqual({
        surface: '#fafdf7',
        'on-surface': '#1a1c19',
      });
      expect(extend.colors?.['brand']).toEqual({
        primary: { base: '#4a6350' },
      });

      expect(extend.fontFamily?.['sm.headline-lg']).toBeUndefined();
      expect(extend.fontFamily?.['sm-headline-lg']).toEqual(['Public Sans']);
      expect(extend.fontSize?.['sm-headline-lg']).toEqual([
        '32px',
        { lineHeight: '40px', fontWeight: '600' },
      ]);
      expect(extend.borderRadius?.['control-pill']).toBe('9999px');
      expect(extend.spacing?.['sm-gutter']).toBe('16px');
    });

    it('promotes leaf colors to DEFAULT when another color uses the same prefix as a group', () => {
      const state = buildState({});
      state.colors.set('brand', { type: 'color', hex: '#111111', r: 17, g: 17, b: 17, luminance: 0 });
      state.colors.set('brand.light', { type: 'color', hex: '#222222', r: 34, g: 34, b: 34, luminance: 0 });

      const result = emitter.execute(state);
      if (!result.success) throw new Error('Expected success');
      const brand = result.data.theme.extend.colors?.['brand'] as TailwindColorGroup;
      expect(brand).toEqual({
        DEFAULT: '#111111',
        light: '#222222',
      });
    });

    it('compiles grouped tokens into unescaped Tailwind v3 utility classes', async () => {
      const state = buildState({
        colors: { light: { surface: '#FAFDF7' } },
        typography: {
          sm: {
            'headline-lg': {
              fontFamily: 'Public Sans',
              fontSize: '32px',
              lineHeight: '40px',
            },
          },
        },
        rounded: { control: { pill: '9999px' } },
        spacing: { sm: { gutter: '16px' } },
      });

      const result = emitter.execute(state);
      if (!result.success) throw new Error('Expected success');

      const postcssModule = await import(import.meta.resolve('postcss', import.meta.resolve('tailwindcss')));
      const postcss = postcssModule.default;
      const compiled = await postcss([
        tailwindcss({
          content: [{ raw: 'bg-light-surface p-sm-gutter rounded-control-pill text-sm-headline-lg font-sm-headline-lg' }],
          theme: result.data.theme,
        }),
      ]).process('@tailwind utilities;', { from: undefined });

      expect(compiled.css).toContain('.bg-light-surface');
      expect(compiled.css).toContain('.p-sm-gutter');
      expect(compiled.css).toContain('.rounded-control-pill');
      expect(compiled.css).toContain('.text-sm-headline-lg');
      expect(compiled.css).toContain('.font-sm-headline-lg');
    });
  });
});
