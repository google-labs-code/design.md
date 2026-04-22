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
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import exportCommand from './export.js';

describe('export command', () => {
  let logSpy: any;
  let tmpDir: string;

  beforeEach(() => {
    logSpy = spyOn(console, 'log').mockImplementation(() => {});
    tmpDir = mkdtempSync(join(tmpdir(), 'design-export-test-'));
    process.exitCode = 0;
  });

  afterEach(() => {
    logSpy.mockRestore();
    rmSync(tmpDir, { recursive: true, force: true });
    process.exitCode = 0;
  });

  it('keeps Hermes extras out of default export and only includes them when requested', async () => {
    const filePath = join(tmpDir, 'hermes.md');
    writeFileSync(filePath, `---
profile: hermes-v1
agent:
  mode: strict
  fallbackOrder: [components]
accessibility:
  contrast:
    bodyText: AA
  focus:
    minRingWidth: 2px
  motion:
    respectReducedMotion: true
colors:
  tertiary: "#2563eb"
  on-tertiary: "#ffffff"
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    minHeight: 40px
platformOverrides:
  mobile:
    components:
      button-primary:
        minHeight: 44px
        focusRingWidth: 3px
---
`);

    await exportCommand.run!({
      args: { file: filePath, format: 'tailwind' },
    } as any);

    const defaultOutput = JSON.parse(logSpy.mock.calls[0][0]);
    expect(defaultOutput._hermes).toBeUndefined();
    expect(defaultOutput.theme.extend.colors.tertiary).toBe('#2563eb');

    logSpy.mockClear();

    await exportCommand.run!({
      args: {
        file: filePath,
        format: 'tailwind',
        includeHermesMetadata: true,
        includePlatformComponents: true,
      },
    } as any);

    const hermesOutput = JSON.parse(logSpy.mock.calls[0][0]);
    expect(hermesOutput._hermes.metadata.profile).toBe('hermes');
    expect(hermesOutput._hermes.metadata.agent.mode).toBe('strict');
    expect(hermesOutput._hermes.platformComponents.mobile['button-primary'].extensionProperties.minHeight).toBe('44px');
    expect(hermesOutput._hermes.platformComponents.mobile['button-primary'].extensionProperties.focusRingWidth).toBe('3px');
  });

  it('does not emit Hermes extensions for upstream documents even when flags are set', async () => {
    const filePath = join(tmpDir, 'upstream.md');
    writeFileSync(filePath, `---
colors:
  primary: "#2563eb"
---
`);

    await exportCommand.run!({
      args: {
        file: filePath,
        format: 'tailwind',
        includeHermesMetadata: true,
        includePlatformComponents: true,
      },
    } as any);

    const output = JSON.parse(logSpy.mock.calls[0][0]);
    expect(output._hermes).toBeUndefined();
    expect(output.theme.extend.colors.primary).toBe('#2563eb');
  });
});
