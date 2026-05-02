// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License").

export type Format = 'designmd' | 'prose' | 'dtcg' | 'none';

export interface Task {
  id: string;
  prompt: string;
}

export interface DesignFixture {
  id: string;
  /** Absolute path to a DESIGN.md file. */
  path: string;
}

export interface Agent {
  id: string;
  /** Render the task. The harness passes the formatted context as `context`. */
  render(task: Task, context: string): Promise<string>;
}

export interface ExtractedOutput {
  colors: string[];
  fontFamilies: string[];
  pxDimensions: number[];
  remDimensions: number[];
}

export interface Score {
  /** Mean perceptual distance between an output color and the nearest token color, normalized to [0,1]. Higher is better. */
  colorScore: number;
  /** Fraction of unique font-families in the output that appear in the design system. */
  typographyScore: number;
  /** Fraction of dimensions in the output that snap to the spacing/rounded scale (within tolerance). */
  spacingScore: number;
  /** Weighted mean. */
  aggregate: number;
}

export interface RunRecord {
  designId: string;
  taskId: string;
  format: Format;
  agentId: string;
  output: string;
  extracted: ExtractedOutput;
  score: Score;
}

export interface Report {
  startedAt: string;
  finishedAt: string;
  runs: RunRecord[];
  /** Aggregate scores grouped by format — the A/B answer. */
  byFormat: Record<Format, { count: number; mean: Score }>;
}
