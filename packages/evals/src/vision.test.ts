// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License").

import { describe, expect, test } from 'bun:test';

import { parseJudgeResponse } from './vision.js';

describe('parseJudgeResponse', () => {
  test('parses a well-formed JSON judge response', () => {
    const out = parseJudgeResponse('{"score": 0.75, "rationale": "Good fidelity overall."}');
    expect(out.score).toBe(0.75);
    expect(out.rationale).toBe('Good fidelity overall.');
  });

  test('strips ```json fences before parsing', () => {
    const out = parseJudgeResponse('```json\n{"score": 0.4, "rationale": "Mixed."}\n```');
    expect(out.score).toBe(0.4);
    expect(out.rationale).toBe('Mixed.');
  });

  test('strips a bare ``` closing fence', () => {
    const out = parseJudgeResponse('{"score": 0.5, "rationale": "ok"}\n```');
    expect(out.score).toBe(0.5);
  });

  test('clamps scores above 1 to 1', () => {
    const out = parseJudgeResponse('{"score": 1.5, "rationale": "Off-scale."}');
    expect(out.score).toBe(1);
  });

  test('clamps negative scores to 0', () => {
    const out = parseJudgeResponse('{"score": -0.2, "rationale": "Subzero."}');
    expect(out.score).toBe(0);
  });

  test('coerces NaN / non-finite score to 0', () => {
    const out = parseJudgeResponse('{"score": "not-a-number", "rationale": "Junk."}');
    expect(out.score).toBe(0);
  });

  test('coerces a missing rationale to empty string', () => {
    const out = parseJudgeResponse('{"score": 0.8}');
    expect(out.score).toBe(0.8);
    expect(out.rationale).toBe('');
  });

  test('returns score 0 and a diagnostic rationale on unparseable input', () => {
    const out = parseJudgeResponse('not even close to JSON');
    expect(out.score).toBe(0);
    expect(out.rationale).toContain('unparseable judge response');
    expect(out.rationale).toContain('not even close to JSON');
  });

  test('truncates very long unparseable input in the rationale', () => {
    const huge = 'x'.repeat(500);
    const out = parseJudgeResponse(huge);
    expect(out.rationale.length).toBeLessThan(huge.length);
  });

  test('handles JSON with extra surrounding whitespace', () => {
    const out = parseJudgeResponse('   {"score": 0.5, "rationale": "ok"}   ');
    expect(out.score).toBe(0.5);
  });
});
