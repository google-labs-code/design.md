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
 * Color parsing for DESIGN.md.
 *
 * Accepts any of:
 *   - Hex: #RGB, #RGBA, #RRGGBB, #RRGGBBAA
 *   - rgb()/rgba()  with comma or modern slash-alpha syntax
 *   - hsl()/hsla()  same
 *   - oklch()       L (0..1 or %), C (0..~0.4), H (0..360, optional `deg`)
 *   - oklab()       L (0..1 or %), a, b
 *   - lab()         L (0..100), a, b — D50 reference
 *   - color(display-p3 R G B [/ A])
 *
 * For every format the parser returns sRGB channels (0..255), an sRGB hex
 * approximation, and WCAG relative luminance computed in sRGB. Wide-gamut
 * inputs are clamped into sRGB after conversion; this is good enough for
 * contrast computation and the hex fallback used by the Tailwind exporter.
 */

import type { ResolvedColor } from './spec.js';

export type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'oklch' | 'oklab' | 'lab' | 'p3';

const HEX_RE = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const FUNC_RE = /^([a-z-]+)\(\s*(.+?)\s*\)$/i;

/**
 * Parse any supported color string into a ResolvedColor.
 * Returns null if the input is not a recognized color (or not a string).
 */
export function parseColorString(raw: unknown): ResolvedColor | null {
  if (typeof raw !== 'string') return null;
  const trimmed = raw.trim();

  if (trimmed.startsWith('#')) {
    return parseHex(trimmed);
  }

  const fn = trimmed.match(FUNC_RE);
  if (!fn) return null;

  const name = fn[1]!.toLowerCase();
  const argsRaw = fn[2]!;
  const { positional, alpha } = splitArgs(argsRaw);

  switch (name) {
    case 'rgb':
    case 'rgba':
      return parseRgbFunc(positional, alpha, trimmed);
    case 'hsl':
    case 'hsla':
      return parseHslFunc(positional, alpha, trimmed);
    case 'oklch':
      return parseOklchFunc(positional, alpha, trimmed);
    case 'oklab':
      return parseOklabFunc(positional, alpha, trimmed);
    case 'lab':
      return parseLabFunc(positional, alpha, trimmed);
    case 'color':
      return parseColorFunc(positional, alpha, trimmed);
    default:
      return null;
  }
}

/** Cheap predicate: true iff parseColorString succeeds. */
export function isParseableColor(raw: unknown): boolean {
  return parseColorString(raw) !== null;
}

// ── Hex ────────────────────────────────────────────────────────────

function parseHex(raw: string): ResolvedColor | null {
  if (!HEX_RE.test(raw)) return null;
  let hex = raw;
  if (hex.length === 4) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  } else if (hex.length === 5) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}${hex[4]}${hex[4]}`;
  }
  hex = hex.toLowerCase();
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const a = hex.length === 9 ? parseInt(hex.slice(7, 9), 16) / 255 : undefined;
  return makeColor(r, g, b, a, 'hex', raw);
}

// ── Argument tokenizer ─────────────────────────────────────────────

interface SplitArgs {
  positional: string[];
  alpha: string | undefined;
}

/**
 * Tokenize a CSS color function argument list. Accepts comma-separated
 * (legacy) or whitespace-separated (modern) syntax, with optional `/ alpha`.
 */
function splitArgs(input: string): SplitArgs {
  let alpha: string | undefined;
  let positional = input;
  const slashIdx = input.lastIndexOf('/');
  if (slashIdx !== -1) {
    alpha = input.slice(slashIdx + 1).trim();
    positional = input.slice(0, slashIdx).trim();
  }
  // Split on commas first, fall back to whitespace.
  const parts = positional.includes(',')
    ? positional.split(',').map(s => s.trim()).filter(Boolean)
    : positional.split(/\s+/).filter(Boolean);
  return { positional: parts, alpha };
}

// ── Numeric parsers ────────────────────────────────────────────────

function parseNumber(raw: string): number | null {
  const m = raw.match(/^-?\d*\.?\d+$/);
  if (!m) return null;
  const v = parseFloat(raw);
  return Number.isFinite(v) ? v : null;
}

/** Parse a number or percentage. `scale` is the value `100%` maps to. */
function parseNumberOrPct(raw: string, scale: number): number | null {
  if (raw.endsWith('%')) {
    const n = parseNumber(raw.slice(0, -1));
    return n === null ? null : (n / 100) * scale;
  }
  return parseNumber(raw);
}

/** Parse a CSS angle (deg only — the format we accept here). */
function parseAngle(raw: string): number | null {
  const stripped = raw.endsWith('deg') ? raw.slice(0, -3) : raw;
  return parseNumber(stripped);
}

function parseAlpha(raw: string | undefined): number | undefined {
  if (raw === undefined) return undefined;
  const v = parseNumberOrPct(raw, 1);
  if (v === null) return undefined;
  return clamp(v, 0, 1);
}

// ── rgb()/rgba() ───────────────────────────────────────────────────

function parseRgbFunc(args: string[], alphaRaw: string | undefined, raw: string): ResolvedColor | null {
  // CSS allows rgba(r,g,b,a) — alpha may sit in positional[3].
  let positional = args;
  let alphaArg = alphaRaw;
  if (positional.length === 4 && alphaArg === undefined) {
    alphaArg = positional[3];
    positional = positional.slice(0, 3);
  }
  if (positional.length !== 3) return null;
  const r = parseNumberOrPct(positional[0]!, 255);
  const g = parseNumberOrPct(positional[1]!, 255);
  const b = parseNumberOrPct(positional[2]!, 255);
  if (r === null || g === null || b === null) return null;
  const a = parseAlpha(alphaArg);
  return makeColor(round255(r), round255(g), round255(b), a, 'rgb', raw);
}

// ── hsl()/hsla() ───────────────────────────────────────────────────

function parseHslFunc(args: string[], alphaRaw: string | undefined, raw: string): ResolvedColor | null {
  let positional = args;
  let alphaArg = alphaRaw;
  if (positional.length === 4 && alphaArg === undefined) {
    alphaArg = positional[3];
    positional = positional.slice(0, 3);
  }
  if (positional.length !== 3) return null;
  const h = parseAngle(positional[0]!);
  const s = parseNumberOrPct(positional[1]!, 1);
  const l = parseNumberOrPct(positional[2]!, 1);
  if (h === null || s === null || l === null) return null;
  const [r, g, b] = hslToRgb(h, clamp(s, 0, 1), clamp(l, 0, 1));
  const a = parseAlpha(alphaArg);
  return makeColor(round255(r * 255), round255(g * 255), round255(b * 255), a, 'hsl', raw);
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  // h is in degrees; reduce into [0, 360)
  const hh = ((h % 360) + 360) % 360;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = hh / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let r1 = 0, g1 = 0, b1 = 0;
  if (hp < 1) { r1 = c; g1 = x; }
  else if (hp < 2) { r1 = x; g1 = c; }
  else if (hp < 3) { g1 = c; b1 = x; }
  else if (hp < 4) { g1 = x; b1 = c; }
  else if (hp < 5) { r1 = x; b1 = c; }
  else { r1 = c; b1 = x; }
  const m = l - c / 2;
  return [r1 + m, g1 + m, b1 + m];
}

// ── oklch() / oklab() ──────────────────────────────────────────────

function parseOklchFunc(args: string[], alphaRaw: string | undefined, raw: string): ResolvedColor | null {
  if (args.length !== 3) return null;
  const L = parseNumberOrPct(args[0]!, 1);
  const C = parseNumberOrPct(args[1]!, 0.4); // CSS: 100% = 0.4
  const H = parseAngle(args[2]!);
  if (L === null || C === null || H === null) return null;
  const a = C * Math.cos((H * Math.PI) / 180);
  const b = C * Math.sin((H * Math.PI) / 180);
  return oklabToResolved(L, a, b, parseAlpha(alphaRaw), 'oklch', raw);
}

function parseOklabFunc(args: string[], alphaRaw: string | undefined, raw: string): ResolvedColor | null {
  if (args.length !== 3) return null;
  const L = parseNumberOrPct(args[0]!, 1);
  const a = parseNumberOrPct(args[1]!, 0.4); // CSS: 100% = 0.4
  const b = parseNumberOrPct(args[2]!, 0.4);
  if (L === null || a === null || b === null) return null;
  return oklabToResolved(L, a, b, parseAlpha(alphaRaw), 'oklab', raw);
}

function oklabToResolved(L: number, a: number, b: number, alpha: number | undefined, format: ColorFormat, raw: string): ResolvedColor {
  const [rLin, gLin, bLin] = oklabToLinearSrgb(L, a, b);
  const [r, g, bn] = linearSrgbToSrgb(rLin, gLin, bLin);
  return makeColor(round255(r * 255), round255(g * 255), round255(bn * 255), alpha, format, raw);
}

// Björn Ottosson, "A perceptual color space for image processing".
function oklabToLinearSrgb(L: number, a: number, b: number): [number, number, number] {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;
  return [
    +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
  ];
}

// ── lab() ──────────────────────────────────────────────────────────

function parseLabFunc(args: string[], alphaRaw: string | undefined, raw: string): ResolvedColor | null {
  if (args.length !== 3) return null;
  const L = parseNumberOrPct(args[0]!, 100);
  const a = parseNumberOrPct(args[1]!, 125); // CSS: 100% = 125
  const b = parseNumberOrPct(args[2]!, 125);
  if (L === null || a === null || b === null) return null;
  const [X50, Y50, Z50] = labToXyzD50(L, a, b);
  const [X65, Y65, Z65] = bradfordD50ToD65(X50, Y50, Z50);
  const [rLin, gLin, bLin] = xyzD65ToLinearSrgb(X65, Y65, Z65);
  const [r, g, bn] = linearSrgbToSrgb(rLin, gLin, bLin);
  return makeColor(round255(r * 255), round255(g * 255), round255(bn * 255), parseAlpha(alphaRaw), 'lab', raw);
}

function labToXyzD50(L: number, a: number, b: number): [number, number, number] {
  const fy = (L + 16) / 116;
  const fx = fy + a / 500;
  const fz = fy - b / 200;
  const delta = 6 / 29;
  const f = (t: number) => (t > delta ? t ** 3 : 3 * delta * delta * (t - 4 / 29));
  // D50 reference white
  const Xn = 0.96422;
  const Yn = 1.0;
  const Zn = 0.82521;
  return [Xn * f(fx), Yn * f(fy), Zn * f(fz)];
}

function bradfordD50ToD65(X: number, Y: number, Z: number): [number, number, number] {
  return [
    0.9555766 * X - 0.0230393 * Y + 0.0631636 * Z,
    -0.0282895 * X + 1.0099416 * Y + 0.0210077 * Z,
    0.0122982 * X - 0.0204830 * Y + 1.3299098 * Z,
  ];
}

function xyzD65ToLinearSrgb(X: number, Y: number, Z: number): [number, number, number] {
  return [
    3.2404542 * X - 1.5371385 * Y - 0.4985314 * Z,
    -0.9692660 * X + 1.8760108 * Y + 0.0415560 * Z,
    0.0556434 * X - 0.2040259 * Y + 1.0572252 * Z,
  ];
}

// ── color(display-p3 ...) ──────────────────────────────────────────

function parseColorFunc(args: string[], alphaRaw: string | undefined, raw: string): ResolvedColor | null {
  if (args.length < 4) return null;
  const space = args[0]!.toLowerCase();
  const channels = args.slice(1);
  if (space !== 'display-p3') return null;
  if (channels.length !== 3) return null;
  const r = parseNumberOrPct(channels[0]!, 1);
  const g = parseNumberOrPct(channels[1]!, 1);
  const b = parseNumberOrPct(channels[2]!, 1);
  if (r === null || g === null || b === null) return null;
  // Channels are non-linear P3. P3 uses the sRGB transfer function.
  const rLinP3 = srgbEotf(r);
  const gLinP3 = srgbEotf(g);
  const bLinP3 = srgbEotf(b);
  const [rLin, gLin, bLin] = linearP3ToLinearSrgb(rLinP3, gLinP3, bLinP3);
  const [rs, gs, bs] = linearSrgbToSrgb(rLin, gLin, bLin);
  return makeColor(round255(rs * 255), round255(gs * 255), round255(bs * 255), parseAlpha(alphaRaw), 'p3', raw);
}

function linearP3ToLinearSrgb(r: number, g: number, b: number): [number, number, number] {
  return [
    1.224941 * r + -0.224941 * g + 0.0 * b,
    -0.042056 * r + 1.042056 * g + 0.0 * b,
    -0.019638 * r + -0.078636 * g + 1.098274 * b,
  ];
}

// ── sRGB transfer functions and luminance ──────────────────────────

function srgbEotf(c: number): number {
  // sRGB → linear
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function srgbOetf(c: number): number {
  // linear → sRGB
  return c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
}

function linearSrgbToSrgb(r: number, g: number, b: number): [number, number, number] {
  return [
    clamp(srgbOetf(clamp(r, 0, 1)), 0, 1),
    clamp(srgbOetf(clamp(g, 0, 1)), 0, 1),
    clamp(srgbOetf(clamp(b, 0, 1)), 0, 1),
  ];
}

function relativeLuminance(r: number, g: number, b: number): number {
  // r,g,b in 0..255
  const rL = srgbEotf(r / 255);
  const gL = srgbEotf(g / 255);
  const bL = srgbEotf(b / 255);
  return 0.2126 * rL + 0.7152 * gL + 0.0722 * bL;
}

// ── ResolvedColor construction ─────────────────────────────────────

function makeColor(r: number, g: number, b: number, a: number | undefined, format: ColorFormat, raw: string): ResolvedColor {
  const hex = toHex(r, g, b, a);
  const luminance = relativeLuminance(r, g, b);
  return { type: 'color', hex, r, g, b, a, luminance, format, raw };
}

function toHex(r: number, g: number, b: number, a: number | undefined): string {
  const h = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
  const base = `#${h(r)}${h(g)}${h(b)}`;
  if (a === undefined) return base;
  const alphaByte = Math.max(0, Math.min(255, Math.round(a * 255)));
  return `${base}${alphaByte.toString(16).padStart(2, '0')}`;
}

// ── Numeric helpers ────────────────────────────────────────────────

function clamp(n: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, n));
}

function round255(n: number): number {
  return Math.max(0, Math.min(255, Math.round(n)));
}
