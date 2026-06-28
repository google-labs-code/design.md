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
import { missingForcedColorsGuidance } from './missing-forced-colors-guidance.js';
import { buildState } from './test-helpers.js';

describe('missingForcedColorsGuidance', () => {
  it('warns when Elevation section lacks forced-colors guidance', () => {
    const state = buildState({
      documentSections: [{ heading: 'Elevation', content: 'Use soft shadows for cards.' }],
    });
    const findings = missingForcedColorsGuidance(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toMatch(/forced-colors/);
  });

  it('passes when Elevation documents high-contrast fallbacks', () => {
    const state = buildState({
      documentSections: [
        {
          heading: 'Elevation',
          content: 'Cards use shadow-sm. In forced-colors mode, add a 1px border fallback.',
        },
      ],
    });
    expect(missingForcedColorsGuidance(state).length).toBe(0);
  });
});
