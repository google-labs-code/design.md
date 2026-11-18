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
import { lint } from '../lint.js';
import { DtcgEmitterHandler } from './handler.js';

function colorValues(colors: Record<string, string>): Record<string, Record<string, unknown>> {
  const yaml = Object.entries(colors).map(([k, v]) => `  ${k}: "${v}"`).join('\n');
  const report = lint(`---\nname: Alpha\ncolors:\n${yaml}\n---\n\n## Colors\n`);
  const result = new DtcgEmitterHandler().execute(report.designSystem);
  if (!result.success) throw new Error('Expected success');
  const group = result.data['color'] as Record<string, { $value: Record<string, unknown> }>;
  return Object.fromEntries(Object.keys(colors).map((k) => [k, group[k]!.$value]));
}

// DTCG 2025.10 color values carry transparency in `alpha` (0–1, default 1);
// `hex` is an optional fallback that "must be 6 digits to avoid conflicts
// with the alpha value".
describe('DtcgEmitterHandler color alpha', () => {
  it('emits alpha for translucent colors and keeps hex to 6 digits', () => {
    const v = colorValues({
      scrim: '#00000080',
      glass: 'rgba(255, 255, 255, 0.2)',
      veil: 'oklch(0.7 0.1 200 / 40%)',
      clear: 'transparent',
    });
    expect(v['scrim']).toEqual({ colorSpace: 'srgb', components: [0, 0, 0], alpha: 0.502, hex: '#000000' });
    expect(v['glass']).toEqual({ colorSpace: 'srgb', components: [1, 1, 1], alpha: 0.2, hex: '#ffffff' });
    expect(v['veil']!['alpha']).toBe(0.4);
    expect(v['veil']!['hex']).toBe('#40b1b7');
    expect(v['clear']).toEqual({ colorSpace: 'srgb', components: [0, 0, 0], alpha: 0, hex: '#000000' });
  });

  it('omits alpha for opaque colors (DTCG default is 1)', () => {
    const v = colorValues({ primary: '#1A1C1E', solid: '#000000ff', named: 'red' });
    expect(v['primary']).toEqual({ colorSpace: 'srgb', components: [0.102, 0.11, 0.118], hex: '#1a1c1e' });
    expect(v['solid']).toEqual({ colorSpace: 'srgb', components: [0, 0, 0], hex: '#000000' });
    expect(v['named']).toEqual({ colorSpace: 'srgb', components: [1, 0, 0], hex: '#ff0000' });
  });
});
