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
import { approvedTermViolation } from './approved-term-violation.js';
import { buildState } from './test-helpers.js';
import type { DocumentSection } from '../../parser/spec.js';

function section(heading: string, body: string[]): DocumentSection {
  const lines = [`## ${heading}`, ...body];
  return {
    heading,
    content: lines.join('\n'),
    startLine: 1,
    endLine: lines.length,
    suppressions: [],
    codeBlockRanges: [],
  };
}

describe('approvedTermViolation', () => {
  it('flags use of canonical name when an approved form is required', () => {
    const state = buildState({
      copy: { approvedTerms: { user: 'customer' } },
      documentSections: [section('Overview', ['Each user gets a profile.'])],
    });
    const findings = approvedTermViolation(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain("'user'");
    expect(findings[0]!.message).toContain("'customer'");
  });

  it('does not flag the approved form', () => {
    const state = buildState({
      copy: { approvedTerms: { user: 'customer' } },
      documentSections: [section('Overview', ['Each customer gets a profile.'])],
    });
    expect(approvedTermViolation(state)).toEqual([]);
  });

  it('flags labels using the canonical name', () => {
    const state = buildState({
      copy: { approvedTerms: { dashboard: 'Home' } },
      components: { 'nav-home': { label: 'Open Dashboard' } },
    });
    const findings = approvedTermViolation(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toContain('nav-home.label');
  });
});
