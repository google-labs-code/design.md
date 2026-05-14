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

import { describe, expect, test } from 'bun:test';
import { HtmlPreviewEmitterHandler } from './handler.js';
import type { DesignSystemState, ResolvedColor, ResolvedDimension, ResolvedTypography } from '../model/spec.js';

function makeColor(hex: string, luminance = 0): ResolvedColor {
  return { type: 'color', hex, r: 0, g: 0, b: 0, luminance };
}

function makeDim(value: number, unit: string): ResolvedDimension {
  return { type: 'dimension', value, unit };
}

function emptyState(overrides?: Partial<DesignSystemState>): DesignSystemState {
  return {
    colors: new Map(),
    typography: new Map(),
    rounded: new Map(),
    spacing: new Map(),
    components: new Map(),
    symbolTable: new Map(),
    ...overrides,
  };
}

describe('HtmlPreviewEmitterHandler', () => {
  test('renders a complete static HTML preview', () => {
    const body: ResolvedTypography = {
      type: 'typography',
      fontFamily: 'Public Sans',
      fontSize: makeDim(16, 'px'),
      fontWeight: 400,
      lineHeight: makeDim(24, 'px'),
    };

    const result = new HtmlPreviewEmitterHandler().execute(emptyState({
      name: 'Heritage',
      description: 'Editorial design system',
      colors: new Map([
        ['primary', makeColor('#1a1c1e')],
        ['neutral', makeColor('#f7f5f2', 0.9)],
      ]),
      typography: new Map([['body-md', body]]),
      rounded: new Map([['sm', makeDim(4, 'px')]]),
      spacing: new Map([['md', makeDim(16, 'px')]]),
    }));

    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.data).toContain('<!doctype html>');
    expect(result.data).toContain('<title>Heritage Preview</title>');
    expect(result.data).toContain('Editorial design system');
    expect(result.data).toContain('body-md');
    expect(result.data).toContain('#1a1c1e');
  });

  test('escapes token names and descriptions before rendering HTML', () => {
    const result = new HtmlPreviewEmitterHandler().execute(emptyState({
      name: '<script>alert(1)</script>',
      description: 'Use "quoted" text',
      colors: new Map([['primary<script>', makeColor('#000000')]]),
    }));

    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.data).not.toContain('<script>alert(1)</script>');
    expect(result.data).toContain('&lt;script&gt;alert(1)&lt;/script&gt;');
    expect(result.data).toContain('Use &quot;quoted&quot; text');
    expect(result.data).toContain('primary&lt;script&gt;');
  });
});
