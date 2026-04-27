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

/**
 * OKLCH color math for ramp interpolation.
 *
 * Reference: Björn Ottosson's OKLab specification
 * https://bottosson.github.io/posts/oklab/
 *
 * Pipeline: hex → sRGB → linear sRGB → LMS → OKLab → OKLCH → (interpolate L) →
 *           OKLab → LMS → linear sRGB → sRGB → hex.
 *
 * Steps map to a target lightness via linear interpolation from the anchor's
 * lightness toward L=1.0 (lighter steps) or L=0.0 (darker steps). Anchor is
 * step 500 by default; the anchor's chroma and hue are preserved.
 */

export const DEFAULT_RAMP_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const ANCHOR_STEP = 500;

export interface OkLch {
  L: number;
  C: number;
  /** Hue in degrees, 0..360. */
  h: number;
}

interface Rgb {
  r: number;
  g: number;
  b: number;
}

function srgbToLinear(c: number): number {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function linearToSrgb(c: number): number {
  return c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
}

function clamp01(c: number): number {
  return c < 0 ? 0 : c > 1 ? 1 : c;
}

/** Hex (#RRGGBB or #RGB) → 0..1 sRGB triple. Throws on malformed input. */
function hexToRgb(hex: string): Rgb {
  let h = hex.trim().toLowerCase();
  if (h.startsWith('#')) h = h.slice(1);
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  if (h.length === 4) h = h.slice(0, 3).split('').map(c => c + c).join('');
  if (h.length === 8) h = h.slice(0, 6);
  if (h.length !== 6) throw new Error(`Invalid hex: ${hex}`);
  const n = parseInt(h, 16);
  return {
    r: ((n >> 16) & 0xff) / 255,
    g: ((n >> 8) & 0xff) / 255,
    b: (n & 0xff) / 255,
  };
}

function rgbToHex({ r, g, b }: Rgb): string {
  const to = (c: number) => Math.round(clamp01(c) * 255).toString(16).padStart(2, '0');
  return `#${to(r)}${to(g)}${to(b)}`;
}

/** sRGB (0..1) → OKLCH. */
export function srgbToOklch({ r, g, b }: Rgb): OkLch {
  const lr = srgbToLinear(r);
  const lg = srgbToLinear(g);
  const lb = srgbToLinear(b);

  const l_ = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m_ = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s_ = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);

  const L = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_;
  const bb = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_;

  const C = Math.hypot(a, bb);
  let h = (Math.atan2(bb, a) * 180) / Math.PI;
  if (h < 0) h += 360;

  return { L, C, h };
}

/** OKLCH → sRGB (0..1). May produce out-of-gamut values; caller should clamp. */
export function oklchToSrgb({ L, C, h }: OkLch): Rgb {
  const a = C * Math.cos((h * Math.PI) / 180);
  const b = C * Math.sin((h * Math.PI) / 180);

  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;

  const lc = l_ * l_ * l_;
  const mc = m_ * m_ * m_;
  const sc = s_ * s_ * s_;

  const lr = +4.0767416621 * lc - 3.3077115913 * mc + 0.2309699292 * sc;
  const lg = -1.2684380046 * lc + 2.6097574011 * mc - 0.3413193965 * sc;
  const lb = -0.0041960863 * lc - 0.7034186147 * mc + 1.7076147010 * sc;

  return {
    r: clamp01(linearToSrgb(lr)),
    g: clamp01(linearToSrgb(lg)),
    b: clamp01(linearToSrgb(lb)),
  };
}

/**
 * Compute the target OKLab lightness for a step given the anchor's lightness.
 * Steps below ANCHOR_STEP (500) interpolate toward white (L=1); steps above
 * interpolate toward black (L=0). The anchor itself is preserved at step 500.
 */
function targetLightness(step: number, anchorL: number): number {
  if (step === ANCHOR_STEP) return anchorL;
  if (step < ANCHOR_STEP) {
    const t = (ANCHOR_STEP - step) / ANCHOR_STEP;
    return anchorL + (1 - anchorL) * t;
  }
  const t = (step - ANCHOR_STEP) / (1000 - ANCHOR_STEP);
  return anchorL * (1 - t);
}

/**
 * Generate ramp step colors as hex strings keyed by step number.
 * Preserves the anchor's chroma and hue across all steps; varies L only.
 * The anchor's hex is reused exactly at step 500 to avoid round-trip drift.
 */
export function generateRampSteps(anchorHex: string, steps: readonly number[] = DEFAULT_RAMP_STEPS): Map<number, string> {
  const anchorRgb = hexToRgb(anchorHex);
  const anchorOklch = srgbToOklch(anchorRgb);
  const out = new Map<number, string>();
  for (const step of steps) {
    if (step === ANCHOR_STEP) {
      out.set(step, anchorHex.toLowerCase().startsWith('#') ? anchorHex.toLowerCase() : `#${anchorHex.toLowerCase()}`);
      continue;
    }
    const L = targetLightness(step, anchorOklch.L);
    const rgb = oklchToSrgb({ L, C: anchorOklch.C, h: anchorOklch.h });
    out.set(step, rgbToHex(rgb));
  }
  return out;
}
