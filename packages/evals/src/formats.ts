// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License").

import { readFileSync } from 'node:fs';
import { parse as parseYaml } from 'yaml';
import type { Format } from './types.js';

export interface ParsedDesign {
  raw: string;
  frontmatter: Record<string, any>;
  body: string;
}

const FENCE = /^---\s*$/m;

export function loadDesign(path: string): ParsedDesign {
  const raw = readFileSync(path, 'utf8');
  if (!raw.startsWith('---')) {
    return { raw, frontmatter: {}, body: raw };
  }
  const tail = raw.slice(4);
  const close = tail.search(FENCE);
  if (close === -1) {
    return { raw, frontmatter: {}, body: raw };
  }
  const yamlText = tail.slice(0, close);
  const body = tail.slice(close).replace(FENCE, '').trimStart();
  const frontmatter = (parseYaml(yamlText) as Record<string, any>) ?? {};
  return { raw, frontmatter, body };
}

export function formatContext(format: Format, design: ParsedDesign): string {
  switch (format) {
    case 'designmd':
      return design.raw;
    case 'prose':
      return design.body;
    case 'dtcg':
      return JSON.stringify(toDtcg(design.frontmatter), null, 2);
    case 'none':
      return '';
  }
}

function toDtcg(fm: Record<string, any>): Record<string, any> {
  const out: Record<string, any> = {};
  if (fm['colors']) {
    out['color'] = {};
    for (const [k, v] of Object.entries(fm['colors'])) {
      if (typeof v === 'string') out['color'][k] = { $type: 'color', $value: v };
    }
  }
  if (fm['spacing']) {
    out['spacing'] = {};
    for (const [k, v] of Object.entries(fm['spacing'])) {
      out['spacing'][k] = { $type: 'dimension', $value: String(v) };
    }
  }
  if (fm['rounded']) {
    out['rounded'] = {};
    for (const [k, v] of Object.entries(fm['rounded'])) {
      out['rounded'][k] = { $type: 'dimension', $value: String(v) };
    }
  }
  if (fm['typography']) {
    out['typography'] = {};
    for (const [k, v] of Object.entries(fm['typography'])) {
      out['typography'][k] = { $type: 'typography', $value: v };
    }
  }
  return out;
}
