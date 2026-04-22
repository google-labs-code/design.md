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

import { describe, expect, it } from 'bun:test';
import { lint } from '../index.js';
import { ShowHandler } from './handler.js';

describe('ShowHandler', () => {
  it('renders a deterministic token-board HTML preview', () => {
    const report = lint(`---
name: Garden Ledger
colors:
  primary: "#0d631b"
  tertiary: "#b2ad7d"
typography:
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 40px
spacing:
  md: 16px
rounded:
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
---

## Overview

Example.
`);

    const handler = new ShowHandler();
    const result = handler.execute({
      designSystem: report.designSystem,
      findings: report.findings,
      summary: report.summary,
      sourcePath: '/tmp/DESIGN.md',
    });

    expect(result.success).toBe(true);
    if (!result.success) return;

    expect(result.data.model.counts.colors).toBe(2);
    expect(result.data.model.counts.typography).toBe(1);
    expect(result.data.html).toContain('Garden Ledger');
    expect(result.data.html).toContain('color-card');
    expect(result.data.html).toContain('type-header');
  });

  it('keeps rendering when lint returns recoverable warnings', () => {
    const report = lint('# No frontmatter');

    const handler = new ShowHandler();
    const result = handler.execute({
      designSystem: report.designSystem,
      findings: report.findings,
      summary: report.summary,
      sourcePath: '/tmp/DESIGN.md',
    });

    expect(report.summary.warnings).toBeGreaterThan(0);
    expect(result.success).toBe(true);
    if (!result.success) return;

    expect(result.data.model.counts.colors).toBe(0);
    expect(result.data.html).toContain('Diagnostics: 0 errors');
  });
});
