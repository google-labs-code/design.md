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
import { reservedNameForm } from './reserved-name-form.js';
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

describe('reservedNameForm', () => {
  it('flags lowercased form of reserved name', () => {
    const state = buildState({
      copy: { reservedNames: ['DesignMD'] },
      documentSections: [section('Overview', ['Welcome to designmd.'])],
    });
    const findings = reservedNameForm(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain("'designmd'");
    expect(findings[0]!.message).toContain("'DesignMD'");
  });

  it('flags hyphenated variant', () => {
    const state = buildState({
      copy: { reservedNames: ['DesignMD'] },
      documentSections: [section('Overview', ['Try design-md today.'])],
    });
    const findings = reservedNameForm(state);
    expect(findings.length).toBe(1);
  });

  it('does not flag the canonical form', () => {
    const state = buildState({
      copy: { reservedNames: ['DesignMD'] },
      documentSections: [section('Overview', ['Try DesignMD today.'])],
    });
    expect(reservedNameForm(state)).toEqual([]);
  });
});
