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
import {
  proseTokenMismatch,
  proseTokenMismatchRule,
  normalizeHex,
} from './prose-token-mismatch.js';
import { buildState } from './test-helpers.js';
import type {
  DocumentSection,
  LineRange,
  SuppressionDirective,
} from '../../parser/spec.js';

/**
 * Build a single-section fixture with a body of prose lines starting at line 1.
 * The first line is the heading; the remaining lines are body content.
 */
function section(
  heading: string,
  body: string[],
  opts: {
    suppressions?: SuppressionDirective[];
    codeBlockRanges?: LineRange[];
    startLine?: number;
  } = {},
): DocumentSection {
  const startLine = opts.startLine ?? 1;
  const lines = [`## ${heading}`, ...body];
  return {
    heading,
    content: lines.join('\n'),
    startLine,
    endLine: startLine + lines.length - 1,
    suppressions: opts.suppressions ?? [],
    codeBlockRanges: opts.codeBlockRanges ?? [],
  };
}

describe('proseTokenMismatch', () => {
  it('returns no findings when prose hex matches a token value', () => {
    const state = buildState({
      colors: { primary: '#1a1c1e' },
      documentSections: [
        section('Colors', ['Primary (#1A1C1E) is the ink.']),
      ],
    });
    expect(proseTokenMismatch(state)).toEqual([]);
  });

  it('flags an orphan hex that matches no token', () => {
    const state = buildState({
      colors: { primary: '#1a1c1e' },
      documentSections: [
        section('Colors', ['Accent (#B8422E) for highlights.']),
      ],
    });
    const findings = proseTokenMismatch(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('#B8422E');
    expect(findings[0]!.message).toContain('does not match any defined token');
  });

  it('flags an anchored mismatch when the named token has a different value', () => {
    const state = buildState({
      colors: { tertiary: '#040000' },
      documentSections: [
        section('Colors', ['The `tertiary` token is #B8422E.']),
      ],
    });
    const findings = proseTokenMismatch(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('tertiary');
    expect(findings[0]!.message).toContain('#B8422E');
    expect(findings[0]!.message).toContain('#040000');
  });

  it('treats shorthand and full hex as equivalent', () => {
    const state = buildState({
      colors: { surface: '#fff' },
      documentSections: [
        section('Colors', ['Surface (#FFFFFF) is the canvas.']),
      ],
    });
    expect(proseTokenMismatch(state)).toEqual([]);
  });

  it('matches alpha hex against alpha token values', () => {
    const state = buildState({
      colors: { veil: '#1a1c1e80' },
      documentSections: [
        section('Colors', ['Veil (#1A1C1E80) is a dim overlay.']),
      ],
    });
    expect(proseTokenMismatch(state)).toEqual([]);
  });

  it('flags an alpha mismatch as orphan when no opaque-or-alpha token matches', () => {
    const state = buildState({
      colors: { veil: '#1a1c1e' },
      documentSections: [
        section('Colors', ['Veil (#1A1C1E80) is a dim overlay.']),
      ],
    });
    const findings = proseTokenMismatch(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('#1A1C1E80');
  });

  it('skips hex literals inside fenced code blocks', () => {
    const state = buildState({
      colors: { primary: '#1a1c1e' },
      documentSections: [
        section(
          'Colors',
          [
            'Primary (#1A1C1E) is the ink.',
            '```',
            'background: #B8422E;',
            '```',
          ],
          // The '```' opens at body line 2 (absolute line 3) and closes at
          // body line 4 (absolute line 5). The literal sits on line 4.
          { codeBlockRanges: [{ startLine: 3, endLine: 5 }] },
        ),
      ],
    });
    expect(proseTokenMismatch(state)).toEqual([]);
  });

  it('respects a disable-next-line suppression', () => {
    // Heading on absolute line 1, comment on line 2, target prose on line 3.
    const state = buildState({
      colors: { primary: '#1a1c1e' },
      documentSections: [
        section(
          'Colors',
          [
            '<!-- design.md disable-next-line prose-token-mismatch -->',
            'Boston Clay (#B8422E) is from a historical brand.',
          ],
          { suppressions: [{ rule: 'prose-token-mismatch', fromLine: 3, toLine: 3 }] },
        ),
      ],
    });
    expect(proseTokenMismatch(state)).toEqual([]);
  });

  it('respects a region disable/enable suppression', () => {
    const state = buildState({
      colors: { primary: '#1a1c1e' },
      documentSections: [
        section(
          'Colors',
          [
            '<!-- design.md disable prose-token-mismatch -->',
            'External color (#B8422E).',
            'Another (#C84E3A).',
            '<!-- design.md enable prose-token-mismatch -->',
          ],
          { suppressions: [{ rule: 'prose-token-mismatch', fromLine: 2, toLine: 5 }] },
        ),
      ],
    });
    expect(proseTokenMismatch(state)).toEqual([]);
  });

  it('respects a wildcard (`*`) suppression', () => {
    const state = buildState({
      colors: { primary: '#1a1c1e' },
      documentSections: [
        section(
          'Colors',
          ['Vintage (#B8422E) is from the archive.'],
          { suppressions: [{ rule: '*', fromLine: 1, toLine: 99 }] },
        ),
      ],
    });
    expect(proseTokenMismatch(state)).toEqual([]);
  });

  it('ignores hex anchors on markdown section links', () => {
    // The negative lookbehind drops `#section`-style anchors.
    const state = buildState({
      colors: { primary: '#1a1c1e' },
      documentSections: [
        section('Colors', ['See the [colors](#colors) section.']),
      ],
    });
    expect(proseTokenMismatch(state)).toEqual([]);
  });

  it('returns no findings when documentSections is missing', () => {
    const state = buildState({
      colors: { primary: '#1a1c1e' },
    });
    expect(proseTokenMismatch(state)).toEqual([]);
  });

  it('exposes a valid rule descriptor', () => {
    expect(proseTokenMismatchRule.name).toBe('prose-token-mismatch');
    expect(proseTokenMismatchRule.severity).toBe('warning');
    expect(proseTokenMismatchRule.description).toBeTruthy();
    expect(proseTokenMismatchRule.run).toBe(proseTokenMismatch);
  });
});

describe('normalizeHex', () => {
  it('lowercases 6-digit hex', () => {
    expect(normalizeHex('#ABCDEF')).toBe('#abcdef');
  });

  it('expands 3-digit shorthand', () => {
    expect(normalizeHex('#FFF')).toBe('#ffffff');
    expect(normalizeHex('#abc')).toBe('#aabbcc');
  });

  it('expands 4-digit shorthand', () => {
    expect(normalizeHex('#FFF0')).toBe('#ffffff00');
  });

  it('preserves 8-digit alpha hex', () => {
    expect(normalizeHex('#1A1C1E80')).toBe('#1a1c1e80');
  });
});
