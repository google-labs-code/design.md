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
import { lint } from './lint.js';

describe('Hermes platform override merge semantics', () => {
  it('merges platform component overrides onto base components', () => {
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
  tertiary-hover: "#1d4ed8"
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    minHeight: 40px
    states:
      hover:
        backgroundColor: "{colors.tertiary-hover}"
platformOverrides:
  mobile:
    components:
      button-primary:
        minHeight: 44px
        focusRingWidth: 3px
---`;

    const result = lint(content);
    const mobile = result.designSystem.mergedPlatformComponents?.get('mobile');
    expect(mobile).toBeDefined();

    const button = mobile?.get('button-primary');
    expect(button).toBeDefined();
    expect(button?.properties.get('textColor')).toBeDefined();
    expect(button?.extensionProperties.get('minHeight')).toBe('44px');
    expect(button?.extensionProperties.get('focusRingWidth')).toBe('3px');
    const states = button?.extensionProperties.get('states') as Record<string, unknown> | undefined;
    expect(states?.hover).toBeDefined();
  });

  it('does not materialize unknown platform override components into merged output', () => {
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
platformOverrides:
  web:
    components:
      ghost-button:
        minHeight: 40px
---`;

    const result = lint(content);
    const web = result.designSystem.mergedPlatformComponents?.get('web');
    expect(web?.has('ghost-button')).toBe(false);
  });
});
