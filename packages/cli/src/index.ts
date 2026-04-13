#!/usr/bin/env node
import { defineCommand, runMain } from 'citty';
import lintCommand from './commands/lint.js';
import diffCommand from './commands/diff.js';
import exportCommand from './commands/export.js';
import specCommand from './commands/spec.js';

const main = defineCommand({
  meta: {
    name: 'design.md',
    version: '0.1.0',
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
