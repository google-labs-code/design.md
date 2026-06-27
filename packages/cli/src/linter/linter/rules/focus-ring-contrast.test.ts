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
import { focusRingContrastCheck } from './focus-ring-contrast.js';
import { buildState } from './test-helpers.js';

describe('focusRingContrastCheck', () => {
  it('warns when focus ring contrast is below 3:1', () => {
    const state = buildState({
      colors: { bg: '#ffffff', ring: '#cccccc' },
      components: {
        'button-primary': {
          backgroundColor: '{colors.bg}',
          focusRingColor: '{colors.ring}',
        },
      },
    });
    const findings = focusRingContrastCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toMatch(/2\.4\.11/);
  });

  it('passes high-contrast focus ring', () => {
    const state = buildState({
      colors: { bg: '#ffffff', ring: '#000000' },
      components: {
        'button-primary': {
          backgroundColor: '{colors.bg}',
          focusRingColor: '{colors.ring}',
        },
      },
    });
    expect(focusRingContrastCheck(state).length).toBe(0);
  });

  it('warns when focusRingWidth is below 2px', () => {
    const state = buildState({
      components: {
        'button-primary': { focusRingWidth: '1px' },
      },
    });
    const findings = focusRingContrastCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('components.button-primary.focusRingWidth');
  });
});
