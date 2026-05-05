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

export interface ParsedColorResult {
  hex: string;
  r: number;
  g: number;
  b: number;
  a?: number;
  luminance: number;
}

const CSS_NAMED_COLORS: Record<string, string> = {
  aliceblue: '#f0f8ff', antiquewhite: '#faebd7', aqua: '#00ffff', aquamarine: '#7fffd4', azure: '#f0ffff',
  beige: '#f5f5dc', bisque: '#ffe4c4', black: '#000000', blanchedalmond: '#ffebcd', blue: '#0000ff',
  blueviolet: '#8a2be2', brown: '#a52a2a', burlywood: '#deb887', cadetblue: '#5f9ea0', chartreuse: '#7fff00',
  chocolate: '#d2691e', coral: '#ff7f50', cornflowerblue: '#6495ed', cornsilk: '#fff8dc', crimson: '#dc143c',
  cyan: '#00ffff', darkblue: '#00008b', darkcyan: '#008b8b', darkgoldenrod: '#b8860b', darkgray: '#a9a9a9',
  darkgrey: '#a9a9a9', darkgreen: '#006400', darkkhaki: '#bdb76b', darkmagenta: '#8b008b', darkolivegreen: '#556b2f',
  darkorange: '#ff8c00', darkorchid: '#9932cc', darkred: '#8b0000', darksalmon: '#e9967a', darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b', darkslategrey: '#2f4f4f', darkslategray: '#2f4f4f', darkturquoise: '#00ced1',
  darkviolet: '#9400d3', deeppink: '#ff1493', deepskyblue: '#00bfff', dimgray: '#696969', dimgrey: '#696969',
  dodgerblue: '#1e90ff', firebrick: '#b22222', floralwhite: '#fffaf0', forestgreen: '#228b22', fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc', ghostwhite: '#f8f8ff', gold: '#ffd700', goldenrod: '#daa520', gray: '#808080',
  grey: '#808080', green: '#008000', greenyellow: '#adff2f', honeydew: '#f0fff0', hotpink: '#ff69b4',
  indianred: '#cd5c5c', indigo: '#4b0082', ivory: '#fffff0', khaki: '#f0e68c', lavender: '#e6e6fa',
  lavenderblush: '#fff0f5', lawngreen: '#7cfc00', lemonchiffon: '#fffacd', lightblue: '#add8e6', lightcoral: '#f08080',
  lightcyan: '#e0ffff', lightgoldenrodyellow: '#fafad2', lightgray: '#d3d3d3', lightgrey: '#d3d3d3', lightgreen: '#90ee90',
  lightpink: '#ffb6c1', lightsalmon: '#ffa07a', lightseagreen: '#20b2aa', lightskyblue: '#87cefa', lightslate: '#778899',
  lightslategray: '#778899', lightslategrey: '#778899', lightsteelblue: '#b0c4de', lightyellow: '#ffffe0', lime: '#00ff00',
  limegreen: '#32cd32', linen: '#faf0e6', magenta: '#ff00ff', maroon: '#800000',
  mediumaquamarine: '#66cdaa', mediumblue: '#0000cd', mediumorchid: '#ba55d3', mediumpurple: '#9370db', mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee', mediumspringgreen: '#00fa9a', mediumturquoise: '#48d1cc', mediumvioletred: '#c71585', midnightblue: '#191970',
  mintcream: '#f5fffa', mistyrose: '#ffe4e1', moccasin: '#ffe4b5', navajowhite: '#ffdead', navy: '#000080',
  oldlace: '#fdf5e6', olive: '#808000', olivedrab: '#6b8e23', orange: '#ffa500', orangered: '#ff4500',
  orchid: '#da70d6', palegoldenrod: '#eee8aa', palegreen: '#98fb98', paleturquoise: '#afeeee', palevioletred: '#db7093',
  papayawhip: '#ffefd5', peachpuff: '#ffdab9', peru: '#cd853f', pink: '#ffc0cb', plum: '#dda0dd',
  powderblue: '#b0e0e6', purple: '#800080', rebeccapurple: '#663399', red: '#ff0000', rosybrown: '#bc8f8f',
  royalblue: '#4169e1', saddlebrown: '#8b4513', salmon: '#fa8072', sandybrown: '#f4a460', seagreen: '#2e8b57',
  seashell: '#fff5ee', sienna: '#a0522d', silver: '#c0c0c0', skyblue: '#87ceeb', slateblue: '#6a5acd',
  slategray: '#708090', slategrey: '#708090', snow: '#fffafa', springgreen: '#00ff7f', steelblue: '#4682b4',
  tan: '#d2b48c', teal: '#008080', thistle: '#d8bfd8', tomato: '#ff6347', turquoise: '#40e0d0',
  violet: '#ee82ee', wheat: '#f5deb3', white: '#ffffff', whitesmoke: '#f5f5f5', yellow: '#ffff00',
  yellowgreen: '#9acd32', transparent: '#00000000',
};

/**
 * Parse a CSS color string into its sRGB representation + WCAG relative luminance.
 * Returns null if the color is invalid.
 */
export function parseCssColor(colorStr: string): ParsedColorResult | null {
  const clean = colorStr.trim().toLowerCase();
  if (!clean) return null;

  // 1. Hex Color Pattern
  if (clean.startsWith('#')) {
    if (!/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.test(clean)) {
      return null;
    }
    return parseHex(clean);
  }

  // 2. Named Colors lookup
  if (Object.prototype.hasOwnProperty.call(CSS_NAMED_COLORS, clean)) {
    return parseHex(CSS_NAMED_COLORS[clean]!);
  }

  // 3. Functional notations parse
  const parsedFunc = tokenizeFunc(clean);
  if (!parsedFunc) {
    return null;
  }

  const { name, args } = parsedFunc;

  switch (name) {
    case 'rgb':
    case 'rgba': {
      // Supports rgb(255, 0, 0) and rgb(255 0 0 / 0.5)
      // args could be: [r, g, b] or [r, g, b, a]
      if (args.length !== 3 && args.length !== 4) return null;
      const rRaw = parsePercentOrNumber(args[0]!, 255);
      const gRaw = parsePercentOrNumber(args[1]!, 255);
      const bRaw = parsePercentOrNumber(args[2]!, 255);
      const aVal = args.length === 4 ? parseAlpha(args[3]) : 1;

      if (isNaN(rRaw) || isNaN(gRaw) || isNaN(bRaw) || isNaN(aVal)) return null;

      const r = Math.max(0, Math.min(255, Math.round(rRaw)));
      const g = Math.max(0, Math.min(255, Math.round(gRaw)));
      const b = Math.max(0, Math.min(255, Math.round(bRaw)));
      const a = Math.max(0, Math.min(1, aVal));

      return makeResult(r, g, b, a);
    }
    case 'hsl':
    case 'hsla': {
      // Supports hsl(120, 100%, 50%) and hsl(120deg 100% 50% / 0.5)
      if (args.length !== 3 && args.length !== 4) return null;
      const h = parseHue(args[0]!);
      const s = parsePercentOrNumber(args[1]!, 1);
      const l = parsePercentOrNumber(args[2]!, 1);
      const a = args.length === 4 ? parseAlpha(args[3]) : 1;

      if (isNaN(h) || isNaN(s) || isNaN(l) || isNaN(a)) return null;

      const rgb = hslToRgb(h, s, l);
      return makeResult(rgb.r, rgb.g, rgb.b, a);
    }
    case 'hwb': {
      // Supports hwb(120 0% 0% / 0.5)
      if (args.length !== 3 && args.length !== 4) return null;
      const h = parseHue(args[0]!);
      const w = parsePercentOrNumber(args[1]!, 1);
      const b = parsePercentOrNumber(args[2]!, 1);
      const a = args.length === 4 ? parseAlpha(args[3]) : 1;

      if (isNaN(h) || isNaN(w) || isNaN(b) || isNaN(a)) return null;

      const rgb = hwbToRgb(h, w, b);
      return makeResult(rgb.r, rgb.g, rgb.b, a);
    }
    case 'lab': {
      // lab(l a b / alpha)
      if (args.length !== 3 && args.length !== 4) return null;
      const l = parsePercentOrNumber(args[0]!, 100); // L is typically 0-100
      const aVal = parseFloat(args[1]!);
      const bVal = parseFloat(args[2]!);
      const a = args.length === 4 ? parseAlpha(args[3]) : 1;

      if (isNaN(l) || isNaN(aVal) || isNaN(bVal) || isNaN(a)) return null;

      const rgb = labToRgb(l, aVal, bVal);
      return makeResult(rgb.r, rgb.g, rgb.b, a);
    }
    case 'lch': {
      // lch(l c h / alpha)
      if (args.length !== 3 && args.length !== 4) return null;
      const l = parsePercentOrNumber(args[0]!, 100);
      const c = parseFloat(args[1]!);
      const h = parseHue(args[2]!);
      const a = args.length === 4 ? parseAlpha(args[3]) : 1;

      if (isNaN(l) || isNaN(c) || isNaN(h) || isNaN(a)) return null;

      const rgb = lchToRgb(l, c, h);
      return makeResult(rgb.r, rgb.g, rgb.b, a);
    }
    case 'oklab': {
      // oklab(l a b / alpha) - L is 0-1 or 0%-100%
      if (args.length !== 3 && args.length !== 4) return null;
      const l = parsePercentOrNumber(args[0]!, 1);
      const aVal = parseFloat(args[1]!);
      const bVal = parseFloat(args[2]!);
      const a = args.length === 4 ? parseAlpha(args[3]) : 1;

      if (isNaN(l) || isNaN(aVal) || isNaN(bVal) || isNaN(a)) return null;

      const rgb = oklabToRgb(l, aVal, bVal);
      return makeResult(rgb.r, rgb.g, rgb.b, a);
    }
    case 'oklch': {
      // oklch(l c h / alpha)
      if (args.length !== 3 && args.length !== 4) return null;
      const l = parsePercentOrNumber(args[0]!, 1);
      const c = parseFloat(args[1]!);
      const h = parseHue(args[2]!);
      const a = args.length === 4 ? parseAlpha(args[3]) : 1;

      if (isNaN(l) || isNaN(c) || isNaN(h) || isNaN(a)) return null;

      const rgb = oklchToRgb(l, c, h);
      return makeResult(rgb.r, rgb.g, rgb.b, a);
    }
    case 'color-mix': {
      // color-mix(in srgb, color1 percentage, color2 percentage)
      // Let's split the inner tokens by comma at depth 0
      const subArgs = splitByComma(clean.slice(10, -1));
      if (subArgs.length !== 3) return null;

      // SubArg 0: color space (e.g. "in srgb")
      const spaceTokens = subArgs[0]!.trim().split(/\s+/);
      if (spaceTokens.length !== 2 || spaceTokens[0] !== 'in' || spaceTokens[1] !== 'srgb') {
        return null; // We only support "in srgb" blending standard
      }

      // SubArg 1: "<color1> [weight1]"
      // SubArg 2: "<color2> [weight2]"
      const parsed1 = parseColorWithWeight(subArgs[1]!);
      const parsed2 = parseColorWithWeight(subArgs[2]!);
      if (!parsed1 || !parsed2) return null;

      const c1 = parseCssColor(parsed1.colorStr);
      const c2 = parseCssColor(parsed2.colorStr);
      if (!c1 || !c2) return null;

      // Normalize weights
      let w1 = parsed1.weight;
      let w2 = parsed2.weight;

      if (w1 === null && w2 === null) {
        w1 = 50;
        w2 = 50;
      } else if (w1 !== null && w2 === null) {
        w2 = 100 - w1;
      } else if (w2 !== null && w1 === null) {
        w1 = 100 - w2;
      } else if (w1 !== null && w2 !== null) {
        const sum = w1 + w2;
        if (sum === 0) return null;
        // Scale to sum to 100
        w1 = (w1 / sum) * 100;
        w2 = (w2 / sum) * 100;
      }

      // Convert weight to 0-1 range
      const f1 = w1! / 100;
      const f2 = w2! / 100;

      // Blend components with premultiplied alpha
      const a1 = c1.a !== undefined ? c1.a : 1;
      const a2 = c2.a !== undefined ? c2.a : 1;

      const aMix = a1 * f1 + a2 * f2;
      let r = 0, g = 0, b = 0;

      if (aMix > 0) {
        r = Math.round((c1.r * a1 * f1 + c2.r * a2 * f2) / aMix);
        g = Math.round((c1.g * a1 * f1 + c2.g * a2 * f2) / aMix);
        b = Math.round((c1.b * a1 * f1 + c2.b * a2 * f2) / aMix);
      }

      return makeResult(
        Math.max(0, Math.min(255, r)),
        Math.max(0, Math.min(255, g)),
        Math.max(0, Math.min(255, b)),
        Math.max(0, Math.min(1, aMix))
      );
    }
    default:
      return null;
  }
}

// ── Parsing internal utilities ─────────────────────────────────────

function parseHex(hexStr: string): ParsedColorResult {
  let hex = hexStr;
  if (hex.length === 4) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  } else if (hex.length === 5) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}${hex[4]}${hex[4]}`;
  }

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  let a: number | undefined;
  if (hex.length === 9) {
    a = parseInt(hex.slice(7, 9), 16) / 255;
  }

  return makeResult(r, g, b, a);
}

function makeResult(r: number, g: number, b: number, a?: number): ParsedColorResult {
  // Compute hex string
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');
  
  let hex = `#${hexR}${hexG}${hexB}`;
  if (a !== undefined && a < 1) {
    const hexA = Math.round(a * 255).toString(16).padStart(2, '0');
    hex += hexA;
  }

  const luminance = computeLuminance(r, g, b);

  return { hex, r, g, b, a, luminance };
}

function computeLuminance(r: number, g: number, b: number): number {
  const linearize = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

function parseHue(s: string): number {
  const lower = s.trim().toLowerCase();
  let val = 0;
  if (lower.endsWith('deg')) {
    val = parseFloat(lower.slice(0, -3));
  } else if (lower.endsWith('rad')) {
    val = (parseFloat(lower.slice(0, -3)) * 180) / Math.PI;
  } else if (lower.endsWith('grad')) {
    val = (parseFloat(lower.slice(0, -4)) * 360) / 400;
  } else if (lower.endsWith('turn')) {
    val = parseFloat(lower.slice(0, -4)) * 360;
  } else {
    val = parseFloat(lower);
  }
  val = val % 360;
  if (val < 0) val += 360;
  return val;
}

function parsePercentOrNumber(s: string, refMax: number): number {
  const trim = s.trim();
  if (trim.endsWith('%')) {
    return (parseFloat(trim.slice(0, -1)) / 100) * refMax;
  }
  return parseFloat(trim);
}

function parseAlpha(s: string | undefined): number {
  if (s === undefined) return 1;
  const trim = s.trim();
  if (trim.endsWith('%')) {
    return parseFloat(trim.slice(0, -1)) / 100;
  }
  return parseFloat(trim);
}

function tokenizeFunc(str: string): { name: string; args: string[] } | null {
  const match = str.trim().match(/^([a-z-]{3,15})\((.*)\)$/i);
  if (!match) return null;
  const name = match[1]!.toLowerCase();
  const inner = match[2]!.trim();

  let coordStr = inner;
  let alphaStr: string | undefined = undefined;

  // Parenthesis-aware search for the first depth-0 '/' division
  let slantIndex = -1;
  let depth = 0;
  for (let i = 0; i < inner.length; i++) {
    const char = inner[i];
    if (char === '(') depth++;
    else if (char === ')') depth--;
    else if (depth === 0 && char === '/') {
      slantIndex = i;
      break;
    }
  }

  if (slantIndex !== -1) {
    coordStr = inner.slice(0, slantIndex).trim();
    alphaStr = inner.slice(slantIndex + 1).trim();
  }

  // Split coordinate parameters
  const args = splitList(coordStr);
  if (alphaStr !== undefined) {
    args.push(alphaStr);
  }

  return { name, args };
}

/**
 * Split a space/comma separated parameter coordinates list, ignoring nested parens
 */
function splitList(str: string): string[] {
  const results: string[] = [];
  let current = '';
  let depth = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(') {
      depth++;
      current += char;
    } else if (char === ')') {
      depth--;
      current += char;
    } else if (depth === 0 && (char === ',' || /\s/.test(char))) {
      if (current.trim()) {
        results.push(current.trim());
        current = '';
      }
    } else {
      current += char;
    }
  }
  if (current.trim()) {
    results.push(current.trim());
  }
  return results;
}

function splitByComma(str: string): string[] {
  const results: string[] = [];
  let current = '';
  let depth = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(') {
      depth++;
      current += char;
    } else if (char === ')') {
      depth--;
      current += char;
    } else if (depth === 0 && char === ',') {
      results.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  if (current.trim()) {
    results.push(current.trim());
  }
  return results;
}

function parseColorWithWeight(subArg: string): { colorStr: string; weight: number | null } | null {
  // This parses strings like "red 20%" or "20% red" or "rgb(255, 0, 0)"
  const parts = splitList(subArg.trim());
  if (parts.length === 0 || parts.length > 2) return null;

  if (parts.length === 1) {
    return { colorStr: parts[0]!, weight: null };
  }

  // Identify which item is the percentage
  const p0 = parts[0]!;
  const p1 = parts[1]!;

  const isP0Weight = p0.endsWith('%') || (!isNaN(Number(p0)) && p0 !== '');
  const isP1Weight = p1.endsWith('%') || (!isNaN(Number(p1)) && p1 !== '');

  if (isP0Weight && !isP1Weight) {
    const w = p0.endsWith('%') ? parseFloat(p0.slice(0, -1)) : parseFloat(p0) * 100;
    return { colorStr: p1, weight: w };
  } else if (isP1Weight && !isP0Weight) {
    const w = p1.endsWith('%') ? parseFloat(p1.slice(0, -1)) : parseFloat(p1) * 100;
    return { colorStr: p0, weight: w };
  }

  return null;
}

// ── Chromatic conversions logic module ────────────────────────────

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r_ = 0, g_ = 0, b_ = 0;
  if (h < 60) {
    r_ = c; g_ = x; b_ = 0;
  } else if (h < 120) {
    r_ = x; g_ = c; b_ = 0;
  } else if (h < 180) {
    r_ = 0; g_ = c; b_ = x;
  } else if (h < 240) {
    r_ = 0; g_ = x; b_ = c;
  } else if (h < 300) {
    r_ = x; g_ = 0; b_ = c;
  } else {
    r_ = c; g_ = 0; b_ = x;
  }

  return {
    r: Math.max(0, Math.min(255, Math.round((r_ + m) * 255))),
    g: Math.max(0, Math.min(255, Math.round((g_ + m) * 255))),
    b: Math.max(0, Math.min(255, Math.round((b_ + m) * 255))),
  };
}

function hwbToRgb(h: number, w: number, b: number): { r: number; g: number; b: number } {
  if (w + b >= 1) {
    const sum = w + b;
    const val = Math.max(0, Math.min(255, Math.round((w / sum) * 255)));
    return { r: val, g: val, b: val };
  }

  const pure = hslToRgb(h, 1, 0.5);
  
  const r = Math.round((pure.r / 255) * (1 - w - b) * 255 + w * 255);
  const g = Math.round((pure.g / 255) * (1 - w - b) * 255 + w * 255);
  const bVal = Math.round((pure.b / 255) * (1 - w - b) * 255 + w * 255);
  
  return {
    r: Math.max(0, Math.min(255, r)),
    g: Math.max(0, Math.min(255, g)),
    b: Math.max(0, Math.min(255, bVal)),
  };
}

function labToRgb(l: number, a: number, b: number): { r: number; g: number; b: number } {
  // Convert Lab to D50 XYZ
  const fy = (l + 16) / 116;
  const fx = a / 500 + fy;
  const fz = fy - b / 200;

  const e = 216 / 24389;
  const k = 24389 / 27;

  const fx3 = fx * fx * fx;
  const fz3 = fz * fz * fz;

  const xr = fx3 > e ? fx3 : (116 * fx - 16) / k;
  const yr = l > k * e ? fy * fy * fy : l / k;
  const zr = fz3 > e ? fz3 : (116 * fz - 16) / k;

  // D50 White point
  const Xn = 0.96422;
  const Yn = 1.0;
  const Zn = 0.82521;

  const x = xr * Xn;
  const y = yr * Yn;
  const z = zr * Zn;

  // Convert D50 XYZ to D65 XYZ via Bradford chromatic adaptation
  const x65 = 0.9555726312052288 * x - 0.02303316850884054 * y + 0.06316100215997244 * z;
  const y65 = -0.02828971739420664 * x + 1.0099416310812543 * y + 0.021007716449297163 * z;
  const z65 = 0.012298224741016325 * x - 0.02048298287477757 * y + 1.3299098463422234 * z;

  // Convert D65 XYZ to Linear sRGB
  const r_lin = 3.2404542 * x65 - 1.5371385 * y65 - 0.4985314 * z65;
  const g_lin = -0.9692660 * x65 + 1.8760108 * y65 + 0.0415560 * z65;
  const b_lin = 0.0556434 * x65 - 0.2040259 * y65 + 1.0572252 * z65;

  // Convert Linear sRGB to sRGB via standard gamma correction
  const gamma = (val: number) => {
    return val <= 0.0031308 ? 12.92 * val : 1.055 * Math.pow(val, 1 / 2.4) - 0.055;
  };

  return {
    r: Math.max(0, Math.min(255, Math.round(gamma(r_lin) * 255))),
    g: Math.max(0, Math.min(255, Math.round(gamma(g_lin) * 255))),
    b: Math.max(0, Math.min(255, Math.round(gamma(b_lin) * 255))),
  };
}

function lchToRgb(l: number, c: number, h: number): { r: number; g: number; b: number } {
  const hRad = (h * Math.PI) / 180;
  const a = c * Math.cos(hRad);
  const b = c * Math.sin(hRad);
  return labToRgb(l, a, b);
}

function oklabToRgb(l: number, a: number, b: number): { r: number; g: number; b: number } {
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.2914855480 * b;

  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;

  const r_lin = +4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const g_lin = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const b_lin = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.7076147010 * s3;

  const gamma = (val: number) => {
    return val <= 0.0031308 ? 12.92 * val : 1.055 * Math.pow(val, 1 / 2.4) - 0.055;
  };

  return {
    r: Math.max(0, Math.min(255, Math.round(gamma(r_lin) * 255))),
    g: Math.max(0, Math.min(255, Math.round(gamma(g_lin) * 255))),
    b: Math.max(0, Math.min(255, Math.round(gamma(b_lin) * 255))),
  };
}

function oklchToRgb(l: number, c: number, h: number): { r: number; g: number; b: number } {
  const hRad = (h * Math.PI) / 180;
  const a = c * Math.cos(hRad);
  const b = c * Math.sin(hRad);
  return oklabToRgb(l, a, b);
}
