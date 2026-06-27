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
import { missingOnColorCheck } from './missing-on-color.js';
import { buildState } from './test-helpers.js';

describe('missingOnColorCheck', () => {
  it('info when primary exists without on-primary', () => {
    const state = buildState({
      colors: { primary: '#1a1c1e' },
    });
    const findings = missingOnColorCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('on-primary');
  });

  it('silent when on-primary is defined', () => {
    const state = buildState({
      colors: { primary: '#1a1c1e', 'on-primary': '#ffffff' },
    });
    expect(missingOnColorCheck(state).length).toBe(0);
  });
});
