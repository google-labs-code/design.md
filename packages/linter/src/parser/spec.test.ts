import { describe, it, expect } from 'bun:test';
import { ParserInputSchema } from './spec.js';

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
