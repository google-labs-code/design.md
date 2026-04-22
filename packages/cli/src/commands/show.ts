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

import { spawn } from 'node:child_process';
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { defineCommand } from 'citty';
import { lint } from '../linter/index.js';
import { ShowHandler } from '../linter/show/handler.js';
import { formatOutput, readInput } from '../utils.js';

export default defineCommand({
  meta: {
    name: 'show',
    description: 'Generate an offline HTML token-board preview from DESIGN.md.',
  },
  args: {
    file: {
      type: 'positional',
      description: 'Path to DESIGN.md (stdin is not supported in show v1)',
      required: true,
    },
    output: {
      type: 'string',
      description: 'Optional output path for the generated HTML file',
    },
    open: {
      type: 'string',
      description: 'Open generated HTML in browser (true/false)',
      default: 'true',
    },
    format: {
      type: 'string',
      description: 'Output format: json or markdown',
      default: 'json',
    },
  },
  async run({ args }) {
    if (args.file === '-') {
      console.error(JSON.stringify({
        error: 'SHOW_STDIN_UNSUPPORTED',
        message: 'The show command currently supports file paths only.',
      }));
      process.exitCode = 1;
      return;
    }

    const shouldOpen = parseOpenArg(args.open);
    const sourcePath = resolve(args.file);
    const content = await readInput(args.file);

    let report;
    try {
      report = lint(content);
    } catch (error) {
      console.error(JSON.stringify({
        error: 'SHOW_PARSE_FAILED',
        message: error instanceof Error ? error.message : String(error),
      }));
      process.exitCode = 1;
      return;
    }

    const handler = new ShowHandler();
    const result = handler.execute({
      designSystem: report.designSystem,
      findings: report.findings,
      summary: report.summary,
      sourcePath,
    });

    if (!result.success) {
      console.error(JSON.stringify({ error: result.error.code, message: result.error.message }));
      process.exitCode = 1;
      return;
    }

    const filePath = await writePreviewFile(result.data.html, args.output);

    let opened = false;
    let openError: string | undefined;

    if (shouldOpen) {
      const openResult = await openInBrowser(filePath);
      opened = openResult.opened;
      openError = openResult.error;
    }

    const output = {
      filePath,
      opened,
      openError,
      summary: report.summary,
      counts: result.data.model.counts,
    };

    console.log(formatOutput(output, args));
    process.exitCode = report.summary.errors > 0 ? 1 : 0;
  },
});

function parseOpenArg(value: unknown): boolean {
  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value !== 'string') {
    return true;
  }

  const normalized = value.trim().toLowerCase();
  if (['false', '0', 'off', 'no'].includes(normalized)) {
    return false;
  }
  if (['true', '1', 'on', 'yes'].includes(normalized)) {
    return true;
  }

  return true;
}

async function writePreviewFile(html: string, outputPath?: string): Promise<string> {
  if (outputPath) {
    const absolute = resolve(outputPath);
    await mkdir(dirname(absolute), { recursive: true });
    await writeFile(absolute, html, 'utf-8');
    return absolute;
  }

  const tempDirectory = await mkdtemp(join(tmpdir(), 'design-md-show-'));
  const tempFile = join(tempDirectory, 'design-preview.html');
  await writeFile(tempFile, html, 'utf-8');
  return tempFile;
}

async function openInBrowser(filePath: string): Promise<{ opened: boolean; error?: string }> {
  const targetPath = resolve(filePath);

  const command = process.platform === 'win32'
    ? { command: 'cmd', args: ['/c', 'start', '', targetPath] }
    : process.platform === 'darwin'
      ? { command: 'open', args: [targetPath] }
      : { command: 'xdg-open', args: [targetPath] };

  return new Promise((resolveOpen) => {
    let settled = false;

    try {
      const child = spawn(command.command, command.args, {
        detached: true,
        stdio: 'ignore',
        windowsHide: true,
      });

      child.once('error', (error) => {
        settled = true;
        resolveOpen({
          opened: false,
          error: error instanceof Error ? error.message : String(error),
        });
      });

      child.unref();
      setImmediate(() => {
        if (!settled) {
          resolveOpen({ opened: true });
        }
      });
    } catch (error) {
      resolveOpen({
        opened: false,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  });
}
