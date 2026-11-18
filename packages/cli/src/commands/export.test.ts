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

import { describe, it, expect, beforeEach, afterEach, spyOn } from 'bun:test';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import exportCommand from './export.js';

const FIXTURE_PATH = fileURLToPath(new URL('../linter/fixtures/DESIGN-test.md', import.meta.url));

const GROUPED_DESIGN_MD = `---
name: Adaptive Design System
colors:
  primary: "#647D66"
  light:
    surface: "#FAFDF7"
typography:
  sm:
    headline-lg:
      fontFamily: Public Sans
      fontSize: 32px
      fontWeight: 600
      lineHeight: 1.25
rounded:
  control:
    pill: 9999px
spacing:
  sm:
    gutter: 16px
---

## Overview

Grouped token export fixture.
`;

describe('export command', () => {
  let logSpy: any;
  let errorSpy: any;

  beforeEach(() => {
    process.exitCode = 0;
    logSpy = spyOn(console, 'log').mockImplementation(() => {});
    errorSpy = spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
    errorSpy.mockRestore();
    process.exitCode = 0;
  });

  it('outputs css-vars custom properties with an optional prefix', async () => {
    await exportCommand.run!({
      args: {
        file: FIXTURE_PATH,
        format: 'css-vars',
        prefix: 'ds',
      },
    } as any);

    expect(errorSpy.mock.calls.length).toBe(0);
    expect(logSpy.mock.calls.length).toBe(1);
    const output = logSpy.mock.calls[0][0];

    expect(output).toStartWith(':root {\n');
    expect(output).toContain('  --ds-color-primary: #006b5a;');
    expect(output).toContain('  --ds-spacing-unit: 8px;');
    expect(output).toContain('  --ds-rounded-sm: 0.25rem;');
    expect(output).toEndWith('}\n');
    expect(process.exitCode).toBe(0);
  });

  it('errors with exit code 1 for invalid export formats', async () => {
    await exportCommand.run!({
      args: {
        file: FIXTURE_PATH,
        format: 'not-a-format',
      },
    } as any);

    expect(logSpy.mock.calls.length).toBe(0);
    expect(errorSpy.mock.calls.length).toBe(1);
    const error = JSON.parse(errorSpy.mock.calls[0][0]);
    expect(error.message).toContain('Invalid format "not-a-format"');
    expect(process.exitCode).toBe(1);
  });

  it('emits exactly one trailing newline for css-tailwind output', async () => {
    const writeSpy = spyOn(process.stdout, 'write').mockImplementation(() => true);
    let output = '';

    try {
      await exportCommand.run!({
        args: {
          file: FIXTURE_PATH,
          format: 'css-tailwind',
        },
      } as any);
      expect(writeSpy.mock.calls.length).toBe(1);
      output = String(writeSpy.mock.calls[0][0]);
    } finally {
      writeSpy.mockRestore();
    }

    expect(output).toEndWith('\n');
    expect(output).not.toEndWith('\n\n');
  });

  describe('grouped tokens across export formats', () => {
    let tempDir: string;
    let groupedPath: string;

    beforeEach(() => {
      tempDir = mkdtempSync(join(tmpdir(), 'designmd-export-grouped-'));
      groupedPath = join(tempDir, 'DESIGN.md');
      writeFileSync(groupedPath, GROUPED_DESIGN_MD, 'utf8');
    });

    afterEach(() => {
      rmSync(tempDir, { recursive: true, force: true });
    });

    it('exports grouped tokens as nested DTCG groups (--format dtcg)', async () => {
      await exportCommand.run!({
        args: { file: groupedPath, format: 'dtcg' },
      } as any);

      expect(process.exitCode).toBe(0);
      expect(errorSpy.mock.calls.length).toBe(0);
      const parsed = JSON.parse(String(logSpy.mock.calls[0][0]));

      expect(parsed.color['light.surface']).toBeUndefined();
      expect(parsed.color.light.surface.$value.hex).toBe('#fafdf7');
      expect(parsed.typography.sm['headline-lg'].$type).toBe('typography');
      expect(parsed.typography.sm['headline-lg'].$value.fontSize).toEqual({ value: 32, unit: 'px' });
      expect(parsed.rounded.control.pill.$value).toEqual({ value: 9999, unit: 'px' });
      expect(parsed.spacing.sm.gutter.$value).toEqual({ value: 16, unit: 'px' });
    });

    it('exports grouped tokens to Tailwind v3 config (--format json-tailwind)', async () => {
      await exportCommand.run!({
        args: { file: groupedPath, format: 'json-tailwind' },
      } as any);

      expect(process.exitCode).toBe(0);
      expect(errorSpy.mock.calls.length).toBe(0);
      const parsed = JSON.parse(String(logSpy.mock.calls[0][0]));
      const extend = parsed.theme.extend;

      expect(extend.colors['light.surface']).toBeUndefined();
      expect(extend.colors.light).toEqual({ surface: '#fafdf7' });
      expect(extend.fontFamily['sm-headline-lg']).toEqual(['Public Sans']);
      expect(extend.fontSize['sm-headline-lg'][0]).toBe('32px');
      expect(extend.borderRadius['control-pill']).toBe('9999px');
      expect(extend.spacing['sm-gutter']).toBe('16px');
    });

    it('exports grouped tokens to Tailwind v4 @theme (--format css-tailwind)', async () => {
      const writeSpy = spyOn(process.stdout, 'write').mockImplementation(() => true);
      let output = '';
      try {
        await exportCommand.run!({
          args: { file: groupedPath, format: 'css-tailwind' },
        } as any);
        output = String(writeSpy.mock.calls[0][0]);
      } finally {
        writeSpy.mockRestore();
      }

      expect(process.exitCode).toBe(0);
      expect(errorSpy.mock.calls.length).toBe(0);
      expect(output).toContain('  --color-light-surface: #fafdf7;');
      expect(output).toContain('  --font-sm-headline-lg: "Public Sans";');
      expect(output).toContain('  --text-sm-headline-lg: 32px;');
      expect(output).toContain('  --radius-control-pill: 9999px;');
      expect(output).toContain('  --spacing-sm-gutter: 16px;');
    });

    it('exports grouped tokens to CSS custom properties (--format css-vars)', async () => {
      await exportCommand.run!({
        args: { file: groupedPath, format: 'css-vars' },
      } as any);

      expect(process.exitCode).toBe(0);
      expect(errorSpy.mock.calls.length).toBe(0);
      const output = String(logSpy.mock.calls[0][0]);
      expect(output).toContain('  --color-light-surface: #fafdf7;');
      expect(output).toContain('  --spacing-sm-gutter: 16px;');
      expect(output).toContain('  --rounded-control-pill: 9999px;');
    });
  });
});
