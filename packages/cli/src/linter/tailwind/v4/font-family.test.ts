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
import { TailwindV4EmitterHandler } from './handler.js';
import { ModelHandler } from '../../model/handler.js';

const emitter = new TailwindV4EmitterHandler();
const modelHandler = new ModelHandler();

function fontFamilyOf(fontFamily: string): string | undefined {
  const { designSystem } = modelHandler.execute({
    sourceMap: new Map(),
    typography: { body: { fontFamily, fontSize: '16px' } },
  });
  const result = emitter.execute(designSystem);
  if (!result.success) throw new Error('Expected success');
  return result.data.theme.fontFamily?.['body'];
}

// A CSS string is always a single family name (CSS Fonts 4 §2.1), so a
// fallback stack must be emitted as a comma-separated list of names, and
// generic families must stay unquoted keywords.
describe('TailwindV4EmitterHandler font-family lists', () => {
  it('quotes a single family name', () => {
    expect(fontFamilyOf('Inter')).toBe('"Inter"');
    expect(fontFamilyOf('Plus Jakarta Sans')).toBe('"Plus Jakarta Sans"');
  });

  it('emits a fallback stack as separate family names', () => {
    expect(fontFamilyOf('Inter, sans-serif')).toBe('"Inter", sans-serif');
    expect(fontFamilyOf('Inter,Helvetica Neue,Arial,sans-serif'))
      .toBe('"Inter", "Helvetica Neue", "Arial", sans-serif');
  });

  it('leaves generic family keywords unquoted', () => {
    expect(fontFamilyOf('monospace')).toBe('monospace');
    expect(fontFamilyOf('system-ui')).toBe('system-ui');
    expect(fontFamilyOf('ui-sans-serif, system-ui')).toBe('ui-sans-serif, system-ui');
    expect(fontFamilyOf('Georgia, Serif')).toBe('"Georgia", serif');
  });

  it('does not double-quote names that are already quoted', () => {
    expect(fontFamilyOf('"Public Sans", Arial, sans-serif')).toBe('"Public Sans", "Arial", sans-serif');
    expect(fontFamilyOf("'Fira Code', monospace")).toBe('"Fira Code", monospace');
  });

  it('keeps a comma inside a quoted family name', () => {
    expect(fontFamilyOf('"Foo, Bar", serif')).toBe('"Foo, Bar", serif');
  });

  it('still escapes quotes, backslashes and line terminators inside a name', () => {
    expect(fontFamilyOf('Fancy "Font"')).toBe('"Fancy \\"Font\\""');
    expect(fontFamilyOf('Evil\nFamily, serif')).toBe('"Evil\\a Family", serif');
  });
});
