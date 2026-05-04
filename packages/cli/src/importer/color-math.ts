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

import type { ResolvedColor } from '../linter/model/spec.js';
import { isValidColor } from '../linter/model/spec.js';

function expandShortHex(clean: string): string {
  return clean.length === 3 || clean.length === 4
    ? clean.split('').map((c) => c + c).join('')
    : clean;
}

function srgbChannelToLinear(v: number): number {
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

/**
 * Convert a hex color to ResolvedColor (RGB normalized 0-1 + WCAG relative
 * luminance). Returns null for non-hex input.
 */
export function hexToResolvedColor(raw: string): ResolvedColor | null {
  if (!isValidColor(raw)) return null;
  const clean = raw.startsWith('#') ? raw.slice(1) : raw;
  const expand = expandShortHex(clean);
  const r = parseInt(expand.slice(0, 2), 16) / 255;
  const g = parseInt(expand.slice(2, 4), 16) / 255;
  const b = parseInt(expand.slice(4, 6), 16) / 255;
  const luminance =
    0.2126 * srgbChannelToLinear(r) +
    0.7152 * srgbChannelToLinear(g) +
    0.0722 * srgbChannelToLinear(b);
  const out: ResolvedColor = { type: 'color', hex: raw, r, g, b, luminance };
  if (expand.length === 8) {
    out.a = parseInt(expand.slice(6, 8), 16) / 255;
  }
  return out;
}
