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

import type { TailwindEmitterSpec, TailwindEmitterResult, TailwindColorGroup, TailwindColorValue } from './spec.js';
import type { DesignSystemState } from '../model/spec.js';

const UNSAFE_OBJECT_KEYS: ReadonlySet<string> = new Set([
  '__proto__',
  'constructor',
  'prototype',
]);

/**
 * Pure function mapping DesignSystemState → Tailwind theme.extend config.
 * No side effects.
 */
export class TailwindEmitterHandler implements TailwindEmitterSpec {
  execute(state: DesignSystemState): TailwindEmitterResult {
    const colorsResult = this.mapColors(state);
    if (colorsResult.error) {
      return { success: false, error: colorsResult.error };
    }

    const motionExtend = this.mapMotion(state);
    return {
      success: true,
      data: {
        theme: {
          extend: {
            colors: colorsResult.colors,
            fontFamily: this.mapFontFamilies(state),
            fontSize: this.mapFontSizes(state),
            borderRadius: this.mapDimensions(state.rounded),
            spacing: this.mapDimensions(state.spacing),
            ...motionExtend,
          },
        },
      }
    };
  }

  private mapMotion(state: DesignSystemState): {
    transitionDuration?: Record<string, string>;
    transitionDelay?: Record<string, string>;
    transitionTimingFunction?: Record<string, string>;
  } {
    if (!state.motion || state.motion.size === 0) return {};
    const transitionDuration: Record<string, string> = {};
    const transitionDelay: Record<string, string> = {};
    const transitionTimingFunction: Record<string, string> = {};

    for (const [name, entry] of state.motion) {
      const flatName = toFlatTailwindKey(name);
      if (entry.duration) transitionDuration[flatName] = entry.duration;
      if (entry.delay) transitionDelay[flatName] = entry.delay;
      if (entry.timingFunction) transitionTimingFunction[flatName] = entry.timingFunction;
    }

    const result: {
      transitionDuration?: Record<string, string>;
      transitionDelay?: Record<string, string>;
      transitionTimingFunction?: Record<string, string>;
    } = {};
    if (Object.keys(transitionDuration).length > 0) result.transitionDuration = transitionDuration;
    if (Object.keys(transitionDelay).length > 0) result.transitionDelay = transitionDelay;
    if (Object.keys(transitionTimingFunction).length > 0) result.transitionTimingFunction = transitionTimingFunction;
    return result;
  }

  private mapColors(state: DesignSystemState): {
    colors: Record<string, TailwindColorValue>;
    error?: { code: string; message: string };
  } {
    const colors: Record<string, TailwindColorValue> = {};
    for (const [name, color] of state.colors) {
      const segments = name.split('.');
      for (const segment of segments) {
        if (segment.length === 0 || UNSAFE_OBJECT_KEYS.has(segment)) {
          return {
            colors: {},
            error: {
              code: 'INVALID_TOKEN_NAME',
              message: `Color token '${name}' contains an invalid key segment '${segment}'.`,
            },
          };
        }
      }

      let current: TailwindColorGroup = colors;
      for (let i = 0; i < segments.length - 1; i++) {
        const segment = segments[i]!;
        if (!Object.hasOwn(current, segment)) {
          const child: TailwindColorGroup = {};
          current[segment] = child;
          current = child;
          continue;
        }
        const existing = current[segment];
        if (typeof existing === 'string') {
          const promoted: TailwindColorGroup = { DEFAULT: existing };
          current[segment] = promoted;
          current = promoted;
        } else {
          current = existing!;
        }
      }

      const leafKey = segments[segments.length - 1]!;
      if (Object.hasOwn(current, leafKey) && typeof current[leafKey] === 'object') {
        (current[leafKey] as TailwindColorGroup)['DEFAULT'] = color.hex;
      } else {
        current[leafKey] = color.hex;
      }
    }
    return { colors };
  }

  private mapFontFamilies(state: DesignSystemState): Record<string, string[]> {
    const result: Record<string, string[]> = {};
    for (const [name, typo] of state.typography) {
      if (typo.fontFamily) {
        result[toFlatTailwindKey(name)] = [typo.fontFamily];
      }
    }
    return result;
  }

  private mapFontSizes(state: DesignSystemState): Record<string, [string, Record<string, string>]> {
    const result: Record<string, [string, Record<string, string>]> = {};
    for (const [name, typo] of state.typography) {
      if (typo.fontSize) {
        const meta: Record<string, string> = {};
        if (typo.lineHeight) meta['lineHeight'] = this.dimToString(typo.lineHeight);
        if (typo.letterSpacing) meta['letterSpacing'] = this.dimToString(typo.letterSpacing);
        if (typo.fontWeight !== undefined) meta['fontWeight'] = String(typo.fontWeight);
        result[toFlatTailwindKey(name)] = [this.dimToString(typo.fontSize), meta];
      }
    }
    return result;
  }

  private mapDimensions(dims: Map<string, { value: number; unit: string }>): Record<string, string> {
    const result: Record<string, string> = {};
    for (const [name, dim] of dims) {
      result[toFlatTailwindKey(name)] = this.dimToString(dim);
    }
    return result;
  }

  private dimToString(dim: { value: number; unit: string }): string {
    return `${dim.value}${dim.unit}`;
  }
}

/**
 * Tailwind v3 only flattens nested objects on `colors` (`flattenColorPalette`).
 * Non-color scales (`spacing`, `borderRadius`, `fontSize`, `fontFamily`, `transition*`)
 * require flat hyphenated keys so grouped tokens emit matching utilities (`p-sm-gutter`, `text-sm-headline-lg`).
 */
function toFlatTailwindKey(name: string): string {
  return name.replaceAll('.', '-');
}
