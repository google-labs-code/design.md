#!/usr/bin/env node
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

import { defineCommand, runMain } from 'citty';
import { VERSION } from './version.js';
import lintCommand from './commands/lint.js';
import diffCommand from './commands/diff.js';
import exportCommand from './commands/export.js';
import specCommand from './commands/spec.js';

const main = defineCommand({
  meta: {
    name: 'design.md',
    version: VERSION,
    description: 'Agent-first CLI for DESIGN.md — the hands and eyes for design system work.',
  },
  subCommands: {
    lint: lintCommand,
    diff: diffCommand,
    export: exportCommand,
    spec: specCommand,
  },
});

runMain(main);
