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

import { resolve } from 'node:path';
import React from 'react';
import { render } from 'ink';
import { defineCommand } from 'citty';
import { runImport } from '../importer/index.js';
import { ImportProgress } from '../importer/ui.js';
import type { ImportStep } from '../importer/spec.js';
import { sanitizeError } from '../importer/error-sanitize.js';

export default defineCommand({
  meta: {
    name: 'import',
    description:
      'Generate DESIGN.md from a Node.js project by scanning framework configs and design tokens.',
  },
  args: {
    input: {
      type: 'positional',
      description: 'Path to the project root to scan',
      required: true,
    },
    output: {
      type: 'string',
      description:
        'Output path for generated DESIGN.md (default: <input>/DESIGN.md)',
    },
    dryRun: {
      type: 'boolean',
      description: 'Print generated DESIGN.md to stdout without writing',
      default: false,
    },
    format: {
      type: 'string',
      description:
        'Progress output: "pretty" (Ink UI) or "json" (machine-readable events)',
      default: 'pretty',
    },
    verbose: {
      type: 'boolean',
      description:
        'Include path-redacted error messages on failure. Default emits only error codes.',
      default: false,
    },
  },
  async run({ args }) {
    const projectPath = resolve(args.input);
    const outputPath = args.output ? resolve(args.output) : undefined;
    const dryRun = Boolean(args.dryRun);
    const jsonMode = args.format === 'json';

    const steps: ImportStep[] = [];
    let inkApp: ReturnType<typeof render> | null = null;

    const onStep = (step: ImportStep): void => {
      steps.push(step);
      if (jsonMode) {
        process.stdout.write(JSON.stringify(step) + '\n');
        return;
      }
      if (inkApp) {
        inkApp.rerender(
          React.createElement(ImportProgress, { steps: [...steps], done: false, dryRun }),
        );
      }
    };

    if (!jsonMode) {
      inkApp = render(
        React.createElement(ImportProgress, { steps, done: false, dryRun }),
      );
    }

    try {
      const result = await runImport({ projectPath, outputPath, dryRun, onStep });

      if (inkApp) {
        inkApp.rerender(
          React.createElement(ImportProgress, { steps: [...steps], done: true, dryRun }),
        );
        inkApp.unmount();
      }

      if (dryRun) {
        process.stdout.write(result.markdown);
      }

      process.exitCode = result.success ? 0 : 1;
    } catch (err) {
      if (inkApp) inkApp.unmount();
      // Default emits only `{error: {code}}` — no freeform message that
      // could disclose filesystem layout or internal state. With
      // --verbose the message is included but still path-redacted.
      process.stderr.write(
        JSON.stringify({
          error: sanitizeError(err, { includeMessage: Boolean(args.verbose) }),
        }) + '\n',
      );
      process.exitCode = 1;
    }
  },
});
