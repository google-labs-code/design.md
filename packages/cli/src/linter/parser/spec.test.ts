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

import { describe, it, expect } from 'bun:test';
import { ParserHandler } from './handler.js';
import { ParserInputSchema, SCHEMA_KEYS } from './spec.js';

describe('ParserInputSchema', () => {
  it('rejects empty content', () => {
    const result = ParserInputSchema.safeParse({ content: '' });
    expect(result.success).toBe(false);
  });

  it('accepts non-empty content', () => {
    const result = ParserInputSchema.safeParse({ content: '---\nname: test\n---' });
    expect(result.success).toBe(true);
  });

  it('rejects missing content field', () => {
    const result = ParserInputSchema.safeParse({});
    expect(result.success).toBe(false);
  });
});

describe('SCHEMA_KEYS', () => {
  it('includes omitted as a known top-level key', () => {
    expect(SCHEMA_KEYS).toContain('omitted');
  });
});

describe('omitted frontmatter parsing', () => {
  const handler = new ParserHandler();

  it('extracts omitted string arrays', () => {
    const result = handler.execute({
      content: `---
omitted:
  - spacing
  - rounded
colors:
  primary: "#ff0000"
---`,
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.omitted).toEqual(['spacing', 'rounded']);
    }
  });

  it('ignores non-array omitted values', () => {
    const result = handler.execute({
      content: `---
omitted: typography
colors:
  primary: "#ff0000"
---`,
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.omitted).toBeUndefined();
    }
  });

  it('filters non-string omitted entries', () => {
    const result = handler.execute({
      content: `---
omitted:
  - spacing
  - 42
  - true
  - rounded
---`,
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.omitted).toEqual(['spacing', 'rounded']);
    }
  });
});
