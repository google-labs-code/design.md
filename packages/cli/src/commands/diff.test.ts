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
import { lint } from '../linter/index.js';
import { diffMaps } from '../utils.js';
import type { ComponentDef } from '../linter/model/spec.js';

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
