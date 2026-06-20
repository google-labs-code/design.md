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
import { fileURLToPath } from 'node:url';
import exportCommand from './export.js';

const FIXTURE_PATH = fileURLToPath(new URL('../linter/fixtures/DESIGN-test.md', import.meta.url));

describe('export command', () => {
  let logSpy: any;
  let errorSpy: any;

  beforeEach(() => {
    process.exitCode = undefined;
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
    expect(error.error).toContain('Invalid format "not-a-format"');
    expect(process.exitCode).toBe(1);
  });
});
