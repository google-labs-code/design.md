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

import { afterEach, beforeEach, describe, expect, it, spyOn } from 'bun:test';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import showCommand from './show.js';

const VALID_DESIGN = `---
name: Token Board Demo
colors:
  primary: "#0d631b"
  secondary: "#5d4037"
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 56px
    fontWeight: 600
    lineHeight: 64px
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

Demo content.
`;

describe('show command', () => {
  let logSpy: any;
  let errorSpy: any;
  let tempRoot: string;

  beforeEach(() => {
    logSpy = spyOn(console, 'log').mockImplementation(() => {});
    errorSpy = spyOn(console, 'error').mockImplementation(() => {});
    tempRoot = mkdtempSync(join(tmpdir(), 'design-md-show-test-'));
    process.exitCode = undefined;
  });

  afterEach(() => {
    logSpy.mockRestore();
    errorSpy.mockRestore();
    rmSync(tempRoot, { recursive: true, force: true });
    process.exitCode = undefined;
  });

  it('generates an HTML preview in a temp file when open is false', async () => {
    const inputPath = join(tempRoot, 'DESIGN.md');
    writeFileSync(inputPath, VALID_DESIGN, 'utf-8');

    await showCommand.run!({
      args: {
        file: inputPath,
        open: 'false',
        format: 'json',
      },
    } as any);

    expect(logSpy.mock.calls.length).toBe(1);
    const output = JSON.parse(logSpy.mock.calls[0][0]);

    expect(output.opened).toBe(false);
    expect(output.filePath).toBeDefined();
    expect(existsSync(output.filePath)).toBe(true);

    const html = readFileSync(output.filePath, 'utf-8');
    expect(html).toContain('<!doctype html>');
    expect(html).toContain('Token Board Demo');
    expect(html).toContain('color-card');
  });

  it('writes to a custom output path when --output is provided', async () => {
    const inputPath = join(tempRoot, 'DESIGN.md');
    const outputPath = join(tempRoot, 'preview', 'design-preview.html');
    writeFileSync(inputPath, VALID_DESIGN, 'utf-8');

    await showCommand.run!({
      args: {
        file: inputPath,
        output: outputPath,
        open: 'false',
        format: 'json',
      },
    } as any);

    expect(logSpy.mock.calls.length).toBe(1);
    const output = JSON.parse(logSpy.mock.calls[0][0]);
    expect(output.filePath).toBe(outputPath);
    expect(existsSync(outputPath)).toBe(true);
  });

  it('returns an error for stdin input in v1', async () => {
    await showCommand.run!({
      args: {
        file: '-',
        open: 'false',
      },
    } as any);

    expect(errorSpy.mock.calls.length).toBe(1);
    const errorOutput = JSON.parse(errorSpy.mock.calls[0][0]);
    expect(errorOutput.error).toBe('SHOW_STDIN_UNSUPPORTED');
    expect(process.exitCode).toBe(1);
  });
});
