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
import { formatOutput } from './utils.js';

describe('formatOutput — markdown', () => {
  it('renders lint output as readable markdown (regression: must not contain [object Object])', () => {
    const lintOutput = {
      findings: [
        {
          severity: 'warning',
          path: 'colors.error',
          message: "'error' is defined but never referenced by any component.",
        },
        {
          severity: 'info',
          message: 'Design system defines 47 colors, 6 typography scales.',
        },
      ],
      summary: { errors: 0, warnings: 1, infos: 1 },
    };

    const out = formatOutput(lintOutput, { format: 'markdown' });

    // The bug we're fixing: `# ${obj.summary}` template-literals an object → "[object Object]".
    expect(out).not.toContain('[object Object]');

    // Sensible structure: a heading, the counts, and the finding messages.
    expect(out).toMatch(/^#\s/m);                     // has at least one heading
    expect(out).toContain('errors');                  // counts surface (key or label)
    expect(out).toContain('warnings');
    expect(out).toContain("'error' is defined");      // first finding message
    expect(out).toContain('47 colors');               // info finding message
  });

  it('also accepts --format md as alias for markdown', () => {
    const lintOutput = {
      findings: [],
      summary: { errors: 0, warnings: 0, infos: 0 },
    };
    const out = formatOutput(lintOutput, { format: 'md' });
    expect(out).not.toContain('[object Object]');
    expect(out).toMatch(/^#\s/m);
  });

  it('still defaults to JSON when format is unspecified', () => {
    const data = { findings: [], summary: { errors: 0, warnings: 0, infos: 0 } };
    const out = formatOutput(data, {});
    expect(() => JSON.parse(out)).not.toThrow();
  });
});
