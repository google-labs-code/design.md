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
import { proseTokenLeak } from './prose-token-leak.js';
import { buildState } from './test-helpers.js';

describe('proseTokenLeak', () => {
  it('warns when literal colors or dimensions are found in markdown prose', () => {
    const state = buildState({
      documentSections: [
        {
          heading: 'Colors',
          content: 'The background should be #ffffff and padding is 12px.',
        },
      ],
    });
    const findings = proseTokenLeak(state);
    expect(findings.length).toBe(2);
    expect(findings[0]!.message).toContain("Literal hex color '#ffffff'");
    expect(findings[0]!.path).toBe('sections.Colors');
    expect(findings[1]!.message).toContain("Literal dimension '12px'");
    expect(findings[1]!.path).toBe('sections.Colors');
  });

  it('warns when literal functional colors (rgb, rgba, hsl, hsla) are found in markdown prose', () => {
    const state = buildState({
      documentSections: [
        {
          heading: 'Colors',
          content: 'We use rgb(255, 0, 0) and hsl(120, 100%, 50%) for status states.',
        },
      ],
    });
    const findings = proseTokenLeak(state);
    expect(findings.length).toBe(2);
    expect(findings[0]!.message).toContain("Literal functional color 'rgb(255, 0, 0)'");
    expect(findings[1]!.message).toContain("Literal functional color 'hsl(120, 100%, 50%)'");
  });

  it('passes when tokens are referenced using brackets', () => {
    const state = buildState({
      documentSections: [
        {
          heading: 'Colors',
          content: 'The background should be {colors.primary} and padding is {spacing.md}.',
        },
      ],
    });
    expect(proseTokenLeak(state).length).toBe(0);
  });

  it('passes when values are inside fenced code blocks', () => {
    const state = buildState({
      documentSections: [
        {
          heading: 'Colors',
          content: 'Example styling block:\n```yaml\nprimary: "#ffffff"\npadding: 12px\n```\n',
        },
      ],
    });
    expect(proseTokenLeak(state).length).toBe(0);
  });

  it('passes when values are inside inline backticks', () => {
    const state = buildState({
      documentSections: [
        {
          heading: 'Colors',
          content: 'Do not use `#ffffff` or `12px` directly in text.',
        },
      ],
    });
    expect(proseTokenLeak(state).length).toBe(0);
  });

  it('passes when relative anchors and HTML links are used', () => {
    const state = buildState({
      documentSections: [
        {
          heading: 'Overview',
          content: 'Check the [color contrast page](#abc) or click <a href="#cba">here</a>.',
        },
      ],
    });
    expect(proseTokenLeak(state).length).toBe(0);
  });

  it('ignores bare numbers without unit suffixes', () => {
    const state = buildState({
      documentSections: [
        {
          heading: 'Overview',
          content: 'We define 3 typography scales and 4 colors here.',
        },
      ],
    });
    expect(proseTokenLeak(state).length).toBe(0);
  });
});
