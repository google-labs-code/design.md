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

describe('formatOutput', () => {
  describe('--format markdown', () => {
    it('renders a lint report instead of [object Object]', () => {
      const lintOutput = {
        findings: [
          { severity: 'warning', path: 'colors.surface', message: "'surface' is defined but never referenced." },
          { severity: 'info', message: 'Design system defines 10 colors.' },
        ],
        summary: { errors: 0, warnings: 1, infos: 1 },
      };

      const result = formatOutput(lintOutput, { format: 'markdown' });
      expect(result).not.toContain('[object Object]');
      expect(result).toContain('# Lint Report');
      expect(result).toContain('**0 errors**');
      expect(result).toContain('**1 warnings**');
      expect(result).toContain('**1 infos**');
      expect(result).toContain("'surface' is defined but never referenced.");
      expect(result).toContain('`colors.surface`');
    });

    it('renders findings without a path', () => {
      const lintOutput = {
        findings: [
          { severity: 'info', message: 'Token count summary.' },
        ],
        summary: { errors: 0, warnings: 0, infos: 1 },
      };

      const result = formatOutput(lintOutput, { format: 'markdown' });
      expect(result).toContain('- **info**: Token count summary.');
    });

    it('renders an empty findings section when there are none', () => {
      const lintOutput = {
        findings: [],
        summary: { errors: 0, warnings: 0, infos: 0 },
      };

      const result = formatOutput(lintOutput, { format: 'markdown' });
      expect(result).toContain('# Lint Report');
      expect(result).not.toContain('## Findings');
    });

    it('handles the --format md alias', () => {
      const lintOutput = {
        findings: [],
        summary: { errors: 0, warnings: 0, infos: 0 },
      };

      const result = formatOutput(lintOutput, { format: 'md' });
      expect(result).toContain('# Lint Report');
    });

    it('preserves legacy fixer shape with string summary', () => {
      const fixerOutput = {
        summary: 'Fixed 3 issues',
        details: 'Some details here',
      };

      const result = formatOutput(fixerOutput, { format: 'markdown' });
      expect(result).toContain('# Fixed 3 issues');
      expect(result).toContain('## Details');
    });
  });

  describe('default format (JSON)', () => {
    it('returns valid JSON', () => {
      const data = { findings: [], summary: { errors: 0, warnings: 0, infos: 0 } };
      const result = formatOutput(data, {});
      expect(JSON.parse(result)).toEqual(data);
    });
  });
});
