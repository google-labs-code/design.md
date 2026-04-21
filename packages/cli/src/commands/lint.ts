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

import { defineCommand } from 'citty';
import { lint } from '../linter/index.js';
import { readInput, formatOutput } from '../utils.js';

export default defineCommand({
  meta: {
    name: 'lint',
    description: 'Validate a DESIGN.md file for structural correctness.',
  },
  args: {
    file: {
      type: 'positional',
      description: 'Path to DESIGN.md (use "-" for stdin)',
      required: true,
    },
    format: {
      type: 'string',
      description: 'Output format: json or text',
      default: 'json',
    },
  },
  async run({ args }) {
    const content = await readInput(args.file);
    const report = lint(content);

    const output = {
      findings: report.findings,
      summary: report.summary,
    };

    console.log(formatOutput(output, args));
    process.exitCode = report.summary.errors > 0 ? 1 : 0;
  },
});
