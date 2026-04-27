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
    name: 'fix',
    description: 'Apply auto-fixes to a DESIGN.md file (currently: section order).',
  },
  args: {
    file: {
      type: 'positional',
      description: 'Path to DESIGN.md (use "-" for stdin; output goes to stdout)',
      required: true,
    },
    write: {
      type: 'boolean',
      description: 'Write the fixed content back to the input file in place.',
    },
    format: {
      type: 'string',
      description: 'Output format for the report: json or text',
      default: 'json',
    },
  },
  async run({ args }) {
    const content = await readInput(args.file);
    const report = lint(content);

    const result = fixSectionOrder({
      content,
      sections: report.documentSections,
    });

    if (!result.success) {
      console.error(formatOutput({ error: result.error }, args));
      process.exitCode = 1;
      return;
    }

    if (args.write) {
      if (args.file === '-') {
        console.error(formatOutput(
          { error: 'Cannot use --write with stdin input.' },
          args,
        ));
        process.exitCode = 2;
        return;
      }
      writeFileSync(args.file, result.fixedContent, 'utf-8');
      console.log(formatOutput({
        path: args.file,
        changed: result.details && !arraysEqual(result.details.beforeOrder, result.details.afterOrder),
        details: result.details,
      }, args));
      return;
    }

    process.stdout.write(result.fixedContent);
  },
});

function arraysEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
