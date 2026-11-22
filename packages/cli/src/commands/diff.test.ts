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
import { join } from 'node:path';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { lint } from '../linter/index.js';
import { diffMaps } from '../utils.js';
import type { ComponentDef } from '../linter/model/spec.js';
import diffCommand from './diff.js';

async function runDiff(before: string, after: string): Promise<{ output: any; code: number | undefined }> {
  const dir = mkdtempSync(join(tmpdir(), 'designmd-diff-'));
  const beforePath = join(dir, 'before.md');
  const afterPath = join(dir, 'after.md');
  writeFileSync(beforePath, before);
  writeFileSync(afterPath, after);

  const logged: string[] = [];
  const originalLog = console.log;
  const originalExitCode = process.exitCode;
  console.log = (...args: unknown[]) => {
    logged.push(args.map(String).join(' '));
  };
  try {
    await diffCommand.run!({
      args: { before: beforePath, after: afterPath, format: 'json' },
    } as any);
  } finally {
    console.log = originalLog;
  }

  const code: number | undefined = typeof process.exitCode === 'number' ? process.exitCode : undefined;
  process.exitCode = originalExitCode;
  rmSync(dir, { recursive: true, force: true });
  return { output: JSON.parse(logged.join('\n')), code };
}

function serializeComponents(components: Map<string, ComponentDef>): Map<string, Record<string, unknown>> {
  const result = new Map<string, Record<string, unknown>>();
  for (const [name, comp] of components) {
    result.set(name, Object.fromEntries(comp.properties));
  }
  return result;
}

const BASE = `---
name: Base
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    padding: 12px
---
`;

describe('diff: components', () => {
  it('reports no component changes when files are identical', () => {
    const before = lint(BASE);
    const after = lint(BASE);
    const result = diffMaps(
      serializeComponents(before.designSystem.components),
      serializeComponents(after.designSystem.components),
    );
    expect(result.added).toEqual([]);
    expect(result.removed).toEqual([]);
    expect(result.modified).toEqual([]);
  });

  it('detects an added component', () => {
    const afterContent = BASE.replace(
      'padding: 12px',
      'padding: 12px\n  button-secondary:\n    backgroundColor: "{colors.secondary}"\n    textColor: "#ffffff"',
    );
    const before = lint(BASE);
    const after = lint(afterContent);
    const result = diffMaps(
      serializeComponents(before.designSystem.components),
      serializeComponents(after.designSystem.components),
    );
    expect(result.added).toContain('button-secondary');
    expect(result.removed).toEqual([]);
  });

  it('detects a removed component', () => {
    const afterContent = `---
name: After
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
---
`;
    const before = lint(BASE);
    const after = lint(afterContent);
    const result = diffMaps(
      serializeComponents(before.designSystem.components),
      serializeComponents(after.designSystem.components),
    );
    expect(result.removed).toContain('button-primary');
    expect(result.added).toEqual([]);
  });

  it('detects a modified component property', () => {
    const afterContent = BASE.replace('padding: 12px', 'padding: 16px');
    const before = lint(BASE);
    const after = lint(afterContent);
    const result = diffMaps(
      serializeComponents(before.designSystem.components),
      serializeComponents(after.designSystem.components),
    );
    expect(result.modified).toContain('button-primary');
    expect(result.added).toEqual([]);
    expect(result.removed).toEqual([]);
  });
});

const MOTION_BASE = `---
name: Motion
colors:
  primary: "#1A1C1E"
motion:
  state-change:
    duration: 100ms
    timingFunction: ease-out
---
`;

describe('diff: motion tokens', () => {
  it('reports a modified motion token', async () => {
    const after = MOTION_BASE.replace('duration: 100ms', 'duration: 400ms');
    const { output } = await runDiff(MOTION_BASE, after);
    expect(output.tokens.motion.modified).toEqual(['state-change']);
    expect(output.tokens.motion.added).toEqual([]);
    expect(output.tokens.motion.removed).toEqual([]);
  });

  it('reports added and removed motion tokens', async () => {
    const after = `---
name: Motion
colors:
  primary: "#1A1C1E"
motion:
  surface-enter:
    duration: 250ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
---
`;
    const { output, code } = await runDiff(MOTION_BASE, after);
    expect(output.tokens.motion.added).toEqual(['surface-enter']);
    expect(output.tokens.motion.removed).toEqual(['state-change']);
    expect(code).toBe(0);
  });

  it('reports no motion changes when the motion tokens are identical', async () => {
    const { output, code } = await runDiff(MOTION_BASE, MOTION_BASE);
    expect(output.tokens.motion).toEqual({ added: [], removed: [], modified: [] });
    expect(code).toBe(0);
  });
});
