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
import { lint } from '../../lint.js';

describe('Hermes contract rules', () => {
  it('warns when hermes agent/accessibility contracts are missing', () => {
    const content = `---
profile: hermes-v1
colors:
  tertiary: "#2563eb"
  on-tertiary: "#ffffff"
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
---`;

    const result = lint(content);
    const messages = result.findings.map(f => f.path);
    expect(messages).toContain('agent');
    expect(messages).toContain('accessibility');
  });

  it('warns on malformed platform overrides and malformed state payloads', () => {
    const content = `---
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
      hover: 12px
platformOverrides:
  web:
    components: 12px
---`;

    const result = lint(content);
    const messages = result.findings.map(f => f.path);
    expect(messages).toContain('components.button-primary.states.hover');
    expect(messages).toContain('platformOverrides.web.components');
  });

  it('accepts a well-formed hermes extension contract', () => {
    const content = `---
profile: hermes-v1
agent:
  mode: strict
  canInfer: [missing-hover-state]
  mustNotInfer: [brand-colors]
  fallbackOrder: [components, typography, colors]
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
  web:
    components:
      button-primary:
        minHeight: 40px
---`;

    const result = lint(content);
    const contractWarnings = result.findings.filter(f =>
      f.path?.startsWith('agent') ||
      f.path?.startsWith('accessibility') ||
      f.path?.startsWith('platformOverrides') ||
      f.path?.includes('.states')
    );
    expect(contractWarnings).toHaveLength(0);
  });
});
