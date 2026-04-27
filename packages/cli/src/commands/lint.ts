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

import { writeFileSync } from 'node:fs';
import { defineCommand } from 'citty';
import { lint, fixSectionOrder } from '../linter/index.js';
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
    fix: {
      type: 'boolean',
      description: 'Apply auto-fixes (currently: section order) and write the result back to the input file.',
    },
  },
  async run({ args }) {
    const content = await readInput(args.file);
    let workingContent = content;
    let fixedDetails: { beforeOrder: string[]; afterOrder: string[] } | undefined;

    if (args.fix) {
      if (args.file === '-') {
        console.error(formatOutput(
          { error: 'Cannot use --fix with stdin input. Pipe to `design.md fix -` instead.' },
          args,
        ));
        process.exitCode = 2;
        return;
      }
      const initial = lint(content);
      const fixResult = fixSectionOrder({
        content,
        sections: initial.documentSections,
      });
      if (fixResult.success) {
        workingContent = fixResult.fixedContent;
        fixedDetails = fixResult.details;
        if (workingContent !== content) {
          writeFileSync(args.file, workingContent, 'utf-8');
        }
      }
    }

    const report = lint(workingContent);

    const output: Record<string, unknown> = {
      findings: report.findings,
      summary: report.summary,
    };
    if (fixedDetails) {
      output['fixed'] = fixedDetails;
    }

    console.log(formatOutput(output, args));
    process.exitCode = report.summary.errors > 0 ? 1 : 0;
  },
});
