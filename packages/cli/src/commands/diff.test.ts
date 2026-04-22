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
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import diffCommand from './diff.js';

describe('diff command', () => {
  let logSpy: any;
  let tmpDir: string;

  beforeEach(() => {
    logSpy = spyOn(console, 'log').mockImplementation(() => {});
    tmpDir = mkdtempSync(join(tmpdir(), 'design-diff-test-'));
  });

  afterEach(() => {
    logSpy.mockRestore();
    rmSync(tmpDir, { recursive: true, force: true });
  });

  it('reports Hermes metadata and merged platform component diffs', async () => {
    const beforePath = join(tmpDir, 'before.md');
    const afterPath = join(tmpDir, 'after.md');

    writeFileSync(beforePath, `---
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
    states:
      hover:
        backgroundColor: "#1d4ed8"
platformOverrides:
  mobile:
    components:
      button-primary:
        minHeight: 44px
---
`);

    writeFileSync(afterPath, `---
profile: hermes-v1
agent:
  mode: relaxed
  fallbackOrder: [components, colors]
accessibility:
  contrast:
    bodyText: AAA
  focus:
    minRingWidth: 3px
  motion:
    respectReducedMotion: true
colors:
  tertiary: "#2563eb"
  on-tertiary: "#ffffff"
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    states:
      hover:
        backgroundColor: "#123456"
platformOverrides:
  mobile:
    components:
      button-primary:
        minHeight: 48px
---
`);

    await diffCommand.run!({
      args: { before: beforePath, after: afterPath, format: 'json' },
    } as any);

    const output = JSON.parse(logSpy.mock.calls[0][0]);
    expect(output.hermes).toBeDefined();
    expect(output.hermes.agent.changed).toBe(true);
    expect(output.hermes.accessibility.changed).toBe(true);
    expect(output.hermes.platformOverrides.changed).toBe(true);
    expect(output.hermes.mergedPlatformComponents.changed).toBe(true);
    expect(output.hermes.componentStates.changed).toBe(true);
    expect(output.hermes.componentStates.modified).toContain('button-primary.hover');
  });
});
