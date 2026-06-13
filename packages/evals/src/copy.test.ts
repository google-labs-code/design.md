// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License").

import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { lint } from '@google/design.md/linter';
import type { DesignSystemState } from '@google/design.md/linter';

import { buildVirtualState, scoreCopy } from './copy.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..', '..', '..');
const FIXTURE_PATH = join(REPO_ROOT, 'examples/paws-and-paths/DESIGN.md');

// Lint the bundled fixture once to obtain a realistic DesignSystemState that
// carries voice/copy/themes/etc. The copy rules read those fields directly;
// `buildVirtualState` swaps in synthesized components and sections.
const FIXTURE_STATE: DesignSystemState = lint(readFileSync(FIXTURE_PATH, 'utf8')).designSystem;

describe('buildVirtualState', () => {
  test('synthesizes a button component for each <button>', () => {
    const html = '<button>Save</button><button>Cancel</button>';
    const { state, labelCount } = buildVirtualState(html, FIXTURE_STATE);
    expect(labelCount).toBe(2);
    expect(state.components.has('button-1')).toBe(true);
    expect(state.components.has('button-2')).toBe(true);
    expect(state.componentRegistry?.get('button-1')?.kind).toBe('button');
  });

  test('synthesizes section-heading components for h1/h2/h3', () => {
    const html = '<h1>Top</h1><h2>Sub</h2><h3>Detail</h3>';
    const { state, labelCount } = buildVirtualState(html, FIXTURE_STATE);
    expect(labelCount).toBe(3);
    expect(state.componentRegistry?.get('heading-1')?.kind).toBe('section-heading');
  });

  test('synthesizes navigation components for nav > a only', () => {
    const html = '<nav><a>Home</a><a>About</a></nav><a>Footer link</a>';
    const { state, labelCount } = buildVirtualState(html, FIXTURE_STATE);
    expect(labelCount).toBe(2);
    expect(state.componentRegistry?.get('nav-link-1')?.kind).toBe('navigation');
    expect(state.components.has('nav-link-3')).toBe(false);
  });

  test('skips elements with whitespace-only text', () => {
    const html = '<button>   </button><h1></h1><button>Real</button>';
    const { labelCount, state } = buildVirtualState(html, FIXTURE_STATE);
    // Only the labelled button counts.
    expect(labelCount).toBe(3); // labelCount counts iterations, but unlabeled aren't registered
    expect(state.components.has('button-1')).toBe(false);
    expect(state.components.has('button-2')).toBe(true);
  });

  test('produces exactly one synthesized document section', () => {
    const html = '<p>Hello world</p>';
    const { state } = buildVirtualState(html, FIXTURE_STATE);
    expect(state.documentSections.length).toBe(1);
    expect(state.documentSections[0]!.heading).toBe('rendered');
    expect(state.documentSections[0]!.content).toContain('Hello world');
  });

  test('strips <html>, <body>, and doctype before parsing', () => {
    const html = '<!doctype html><html><body><h1>Welcome</h1></body></html>';
    const { state, labelCount } = buildVirtualState(html, FIXTURE_STATE);
    expect(labelCount).toBe(1);
    expect(state.components.has('heading-1')).toBe(true);
  });

  test('reuses the cached state\'s voice/copy/themes (type-shape parity)', () => {
    const html = '<button>Hi</button>';
    const { state } = buildVirtualState(html, FIXTURE_STATE);
    // copy block is fixture-defined; rules consume it directly.
    expect(state.copy).toBe(FIXTURE_STATE.copy);
    expect(state.voice).toBe(FIXTURE_STATE.voice);
  });
});

describe('scoreCopy', () => {
  test('returns score 1.0 and no findings when nothing is synthesized', () => {
    const out = scoreCopy('<div></div>', FIXTURE_STATE);
    expect(out.score).toBe(1);
    expect(out.findings).toEqual([]);
  });

  test('returns score 1.0 for compliant copy (sentence-case button under word limit)', () => {
    const html = '<button>Save changes</button>';
    const out = scoreCopy(html, FIXTURE_STATE);
    expect(out.score).toBe(1);
    expect(out.findings).toEqual([]);
  });

  test('button-exceeds-word-limit fires when label is longer than fixture limit (3)', () => {
    // Fixture buttonLabelMaxWords = 3.
    const html = '<button>Save all my urgent changes</button>';
    const out = scoreCopy(html, FIXTURE_STATE);
    expect(out.score).toBeLessThan(1);
    expect(out.findings.some((f) => f.rule === 'button-exceeds-word-limit')).toBe(true);
  });

  test('banned-term-in-prose fires when body text contains a banned term', () => {
    // Fixture banned: "seamless".
    const html = '<p>Our app provides a seamless experience.</p>';
    const out = scoreCopy(html, FIXTURE_STATE);
    expect(out.findings.some((f) => f.rule === 'banned-term-in-prose')).toBe(true);
  });

  test('score floor is 0 (many findings cannot drive it negative)', () => {
    // Many violations against a single synthesized label.
    const html = '<button>seamless seamless seamless seamless seamless</button>';
    const out = scoreCopy(html, FIXTURE_STATE);
    expect(out.score).toBeGreaterThanOrEqual(0);
    expect(out.score).toBeLessThanOrEqual(1);
  });

  test('findings include severity and rule metadata', () => {
    const html = '<button>Save all my urgent changes</button>';
    const out = scoreCopy(html, FIXTURE_STATE);
    const f = out.findings.find((x) => x.rule === 'button-exceeds-word-limit');
    expect(f).toBeDefined();
    expect(['error', 'warning', 'info']).toContain(f!.severity);
    expect(typeof f!.message).toBe('string');
  });
});
