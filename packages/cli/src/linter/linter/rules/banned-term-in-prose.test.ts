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
import { bannedTermInProse } from './banned-term-in-prose.js';
import { buildState } from './test-helpers.js';
import type {
  DocumentSection,
  LineRange,
  SuppressionDirective,
} from '../../parser/spec.js';

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

describe('bannedTermInProse', () => {
  it('returns no findings when copy is absent', () => {
    const state = buildState({
      documentSections: [section('Overview', ['A seamless experience.'])],
    });
    expect(bannedTermInProse(state)).toEqual([]);
  });

  it('flags a banned literal term in prose', () => {
    const state = buildState({
      copy: { bannedTerms: ['seamless'] },
      documentSections: [section('Overview', ['Our seamless workflow.'])],
    });
    const findings = bannedTermInProse(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain("'seamless'");
  });

  it('flags a banned phrase across whole-line', () => {
    const state = buildState({
      copy: { bannedTerms: ['one-stop shop'] },
      documentSections: [section('Overview', ['Your one-stop shop for everything.'])],
    });
    const findings = bannedTermInProse(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('one-stop shop');
  });

  it('respects banned regex (case-insensitive)', () => {
    const state = buildState({
      copy: { bannedRegex: ['(?i)\\bgame[- ]?changer\\b'] },
      documentSections: [section('Overview', ['A real Game-Changer.'])],
    });
    const findings = bannedTermInProse(state);
    expect(findings.length).toBe(1);
  });

  it('respects per-line suppression directives', () => {
    const state = buildState({
      copy: { bannedTerms: ['seamless'] },
      documentSections: [
        section('Overview', ['Our seamless workflow.'], {
          suppressions: [{ rule: 'banned-term-in-prose', fromLine: 1, toLine: 3 }],
        }),
      ],
    });
    expect(bannedTermInProse(state)).toEqual([]);
  });

  it('does not flag matches inside code blocks', () => {
    const state = buildState({
      copy: { bannedTerms: ['seamless'] },
      documentSections: [
        section('Overview', ['Our seamless workflow.'], {
          codeBlockRanges: [{ startLine: 1, endLine: 5 }],
        }),
      ],
    });
    expect(bannedTermInProse(state)).toEqual([]);
  });

  it('does not match partial words by default', () => {
    const state = buildState({
      copy: { bannedTerms: ['user'] },
      documentSections: [section('Overview', ['superuser experiences.'])],
    });
    expect(bannedTermInProse(state)).toEqual([]);
  });

  it('flags banned terms in component label properties', () => {
    const state = buildState({
      copy: { bannedTerms: ['unlock'] },
      components: {
        'cta-primary': { label: 'Unlock the dashboard', backgroundColor: '#000000' },
      },
    });
    const findings = bannedTermInProse(state);
    expect(findings.some(f => f.path?.includes('cta-primary.label'))).toBe(true);
  });
});
