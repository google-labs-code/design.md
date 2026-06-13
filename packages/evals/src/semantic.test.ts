// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License").

import { describe, expect, test } from 'bun:test';

import type { ParsedDesign } from './formats.js';
import { scoreSemantic, scoreStructural } from './semantic.js';
import type { SemanticAssertion, Task } from './types.js';

function makeDesign(frontmatter: Record<string, any>): ParsedDesign {
  return { raw: '', frontmatter, body: '' };
}

function makeTask(partial: Partial<Task>): Task {
  return { id: 't', prompt: '', ...partial };
}

const DESIGN = makeDesign({
  colors: { primary: '#1A1C1E', accent: '#B8422E', surface: '#F7F5F2' },
  typography: { h1: { fontFamily: 'Public Sans', fontSize: '3rem' } },
  spacing: { sm: '8px', md: '16px' },
});

describe('scoreSemantic', () => {
  test('returns undefined when the task has no assertions', () => {
    expect(scoreSemantic('<div></div>', DESIGN, makeTask({}))).toBeUndefined();
    expect(
      scoreSemantic('<div></div>', DESIGN, makeTask({ assertions: [] })),
    ).toBeUndefined();
  });

  test('marks an assertion as failed when no element matches the selector', () => {
    const task = makeTask({
      assertions: [{ selector: '.missing', expect: { backgroundColor: '#1A1C1E' } }],
    });
    const out = scoreSemantic('<div></div>', DESIGN, task)!;
    expect(out.score).toBe(0);
    expect(out.results[0]!.passed).toBe(false);
    expect(out.results[0]!.detail).toContain('no element matched');
  });

  test('passes a background-color check against a token reference', () => {
    const html = '<button class="cta" style="background-color: #1A1C1E; color: #ffffff;">Go</button>';
    const task = makeTask({
      assertions: [
        {
          selector: '.cta',
          expect: { backgroundColor: '{colors.primary}', color: '#ffffff' },
        },
      ],
    });
    const out = scoreSemantic(html, DESIGN, task)!;
    expect(out.score).toBe(1);
    expect(out.results[0]!.passed).toBe(true);
  });

  test('passes when inline `background:` shorthand carries the hex', () => {
    const html = '<button class="cta" style="background: #1a1c1e;">Go</button>';
    const task = makeTask({
      assertions: [{ selector: '.cta', expect: { backgroundColor: '#1A1C1E' } }],
    });
    const out = scoreSemantic(html, DESIGN, task)!;
    expect(out.results[0]!.passed).toBe(true);
  });

  test('fails on an off-token background color and reports the mismatch', () => {
    const html = '<button class="cta" style="background-color: #ff00ff;">Go</button>';
    const task = makeTask({
      assertions: [{ selector: '.cta', expect: { backgroundColor: '{colors.primary}' } }],
    });
    const out = scoreSemantic(html, DESIGN, task)!;
    expect(out.results[0]!.passed).toBe(false);
    expect(out.results[0]!.detail).toContain('background');
  });

  test('resolves font-family from a typography token object', () => {
    const html = '<h1 class="title" style="font-family: Public Sans;">Hello</h1>';
    const task = makeTask({
      assertions: [
        { selector: '.title', expect: { fontFamily: '{typography.h1}' } },
      ],
    });
    const out = scoreSemantic(html, DESIGN, task)!;
    expect(out.results[0]!.passed).toBe(true);
  });

  test('font-family check is case-insensitive', () => {
    const html = '<h1 class="title" style="font-family: public sans;">Hello</h1>';
    const task = makeTask({
      assertions: [{ selector: '.title', expect: { fontFamily: 'Public Sans' } }],
    });
    const out = scoreSemantic(html, DESIGN, task)!;
    expect(out.results[0]!.passed).toBe(true);
  });

  test('minFontSize resolves a rem token to px and applies DIM_TOLERANCE', () => {
    // 3rem = 48px; assertion uses {typography.h1.fontSize} which is "3rem".
    const html = '<h1 class="title" style="font-size: 47.6px;">Hi</h1>'; // within 0.5 tolerance
    const task = makeTask({
      assertions: [
        { selector: '.title', expect: { minFontSize: '{typography.h1.fontSize}' } },
      ],
    });
    const out = scoreSemantic(html, DESIGN, task)!;
    expect(out.results[0]!.passed).toBe(true);
  });

  test('minFontSize fails when actual is below tolerance', () => {
    const html = '<h1 class="title" style="font-size: 30px;">Hi</h1>';
    const task = makeTask({
      assertions: [
        { selector: '.title', expect: { minFontSize: '{typography.h1.fontSize}' } },
      ],
    });
    const out = scoreSemantic(html, DESIGN, task)!;
    expect(out.results[0]!.passed).toBe(false);
    expect(out.results[0]!.detail).toContain('font-size');
  });

  test('textPattern matches the trimmed textContent', () => {
    const html = '<button class="cta"> Submit </button>';
    const task = makeTask({
      assertions: [{ selector: '.cta', expect: { textPattern: /^Submit$/ } }],
    });
    const out = scoreSemantic(html, DESIGN, task)!;
    expect(out.results[0]!.passed).toBe(true);
  });

  test('minChildren counts direct element children', () => {
    const html = '<ul class="nav"><li>a</li><li>b</li><li>c</li></ul>';
    const taskPass = makeTask({
      assertions: [{ selector: '.nav', expect: { minChildren: 3 } }],
    });
    const taskFail = makeTask({
      assertions: [{ selector: '.nav', expect: { minChildren: 4 } }],
    });
    expect(scoreSemantic(html, DESIGN, taskPass)!.results[0]!.passed).toBe(true);
    expect(scoreSemantic(html, DESIGN, taskFail)!.results[0]!.passed).toBe(false);
  });

  test('aggregates multiple assertions into a fractional score', () => {
    const html = '<button class="cta" style="background-color: #1A1C1E; color: #ffffff;">Go</button>';
    const assertions: SemanticAssertion[] = [
      { selector: '.cta', expect: { backgroundColor: '{colors.primary}' } },
      { selector: '.cta', expect: { backgroundColor: '#ff00ff' } },
    ];
    const out = scoreSemantic(html, DESIGN, makeTask({ assertions }))!;
    expect(out.score).toBe(0.5);
    expect(out.results.length).toBe(2);
  });

  test('returns undefined-resolved tokens as failures (no silent passes)', () => {
    const html = '<button class="cta" style="background-color: #1A1C1E;">Go</button>';
    const task = makeTask({
      assertions: [{ selector: '.cta', expect: { backgroundColor: '{colors.does-not-exist}' } }],
    });
    const out = scoreSemantic(html, DESIGN, task)!;
    expect(out.results[0]!.passed).toBe(false);
  });

  test('preserves the role field in the result when supplied', () => {
    const html = '<button class="cta">Go</button>';
    const task = makeTask({
      assertions: [
        {
          selector: '.cta',
          role: 'primary-cta',
          expect: { textPattern: /Go/ },
        },
      ],
    });
    const out = scoreSemantic(html, DESIGN, task)!;
    expect(out.results[0]!.role).toBe('primary-cta');
  });
});

describe('scoreStructural', () => {
  test('returns undefined when the task has no expectedElements', () => {
    expect(scoreStructural('<div></div>', makeTask({}))).toBeUndefined();
    expect(scoreStructural('<div></div>', makeTask({ expectedElements: [] }))).toBeUndefined();
  });

  test('returns 1.0 when every selector matches at least one element', () => {
    const html = '<nav></nav><h1></h1><button></button>';
    const out = scoreStructural(html, makeTask({ expectedElements: ['nav', 'h1', 'button'] }));
    expect(out).toBe(1);
  });

  test('returns the fraction of matched selectors', () => {
    const html = '<nav></nav><h1></h1>';
    const out = scoreStructural(html, makeTask({ expectedElements: ['nav', 'h1', 'button', 'footer'] }));
    expect(out).toBe(0.5);
  });

  test('returns 0 when nothing matches', () => {
    const out = scoreStructural('<div></div>', makeTask({ expectedElements: ['nav', 'h1'] }));
    expect(out).toBe(0);
  });
});
