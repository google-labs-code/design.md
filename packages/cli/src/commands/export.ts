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
import { lint, TailwindEmitterHandler, TailwindV4EmitterHandler, serializeTailwindV4 } from '../linter/index.js';
import { DtcgEmitterHandler } from '../linter/dtcg/handler.js';
import { readInput } from '../utils.js';

const FORMATS = ['css-tailwind', 'json-tailwind', 'tailwind', 'dtcg'] as const;
type ExportFormat = typeof FORMATS[number];

export default defineCommand({
  meta: {
    name: 'export',
    description: 'Export DESIGN.md tokens to other formats. `css-tailwind` emits Tailwind v4 CSS @theme; `json-tailwind` emits Tailwind v3 theme.extend JSON; `tailwind` is an alias for `json-tailwind`; `dtcg` emits W3C Design Tokens.',
  },
  args: {
    file: {
      type: 'positional',
      description: 'Path to DESIGN.md (use "-" for stdin)',
      required: true,
    },
    format: {
      type: 'string',
      description: `Output format: ${FORMATS.join(', ')}`,
      required: true,
    },
  },
  async run({ args }) {
    const format = args.format as string;

    // Validate --format against closed enum
    if (!FORMATS.includes(format as ExportFormat)) {
      console.error(JSON.stringify({
        error: `Invalid format "${format}". Valid formats: ${FORMATS.join(', ')}`,
      }));
      process.exitCode = 1;
      return;
    }

    const content = await readInput(args.file);
    const report = lint(content);

    if (format === 'css-tailwind') {
      const handler = new TailwindV4EmitterHandler();
      const result = handler.execute(report.designSystem);

      if (!result.success) {
        console.error(JSON.stringify({ error: result.error.message }));
        process.exitCode = 1;
        return;
      }

      console.log(serializeTailwindV4(result.data.theme));
    } else if (format === 'json-tailwind' || format === 'tailwind') {
      const handler = new TailwindEmitterHandler();
      const result = handler.execute(report.designSystem);

      if (!result.success) {
        console.error(JSON.stringify({ error: result.error.message }));
        process.exitCode = 1;
        return;
      }

      console.log(JSON.stringify(result.data, null, 2));
    } else if (format === 'dtcg') {
      const handler = new DtcgEmitterHandler();
      const result = handler.execute(report.designSystem);

      if (!result.success) {
        console.error(JSON.stringify({ error: result.error.message }));
        process.exitCode = 1;
        return;
      }

      console.log(JSON.stringify(result.data, null, 2));
    }

    process.exitCode = report.summary.errors > 0 ? 1 : 0;
  },
});
