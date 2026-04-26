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

import type { TailwindEmitterSpec, TailwindEmitterResult } from './spec.js';
import type { DesignSystemState, ResolvedDimension } from '../model/spec.js';

/**
 * Pure function mapping DesignSystemState → Tailwind theme.extend config.
 * No side effects.
 */
export class TailwindEmitterHandler implements TailwindEmitterSpec {
  execute(state: DesignSystemState): TailwindEmitterResult {
    return {
      success: true,
      data: {
        theme: {
          extend: {
            colors: this.mapColors(state),
            fontFamily: this.mapFontFamilies(state),
            fontSize: this.mapFontSizes(state),
            borderRadius: this.mapDimensions(state.rounded),
            spacing: this.mapDimensions(state.spacing),
            boxShadow: this.mapElevation(state),
          },
        },
      }
    };
  }

  private mapElevation(state: DesignSystemState): Record<string, string> {
    const result: Record<string, string> = {};
    for (const [name, shadow] of state.elevation) {
      result[name] = shadow.raw;
    }
    return result;
  }

  private mapColors(state: DesignSystemState): Record<string, string | Record<string, string>> {
    const result: Record<string, string | Record<string, string>> = {};

    // Ramps emit as nested objects: { DEFAULT: '...', '50': '...', '500': '...', ... }
    // The flat colors map carries every step plus the anchor; group them by ramp.
    for (const [rampName, ramp] of state.colorRamps) {
      const group: Record<string, string> = { DEFAULT: ramp.anchor.hex };
      for (const [step, color] of [...ramp.steps].sort(([a], [b]) => a - b)) {
        group[String(step)] = color.hex;
      }
      result[rampName] = group;
    }

    // Flat colors and pair members emit as top-level strings. Skip step entries
    // (already nested under their ramp), the bare anchor (already in group), and
    // dotted standalone-pair members (encoded via hyphen flat aliases below).
    for (const [name, color] of state.colors) {
      if (color.rampMember) continue;
      if (color.pairRole && name.includes('.')) continue;
      result[name] = color.hex;
    }

    return result;
  }

  private mapFontFamilies(state: DesignSystemState): Record<string, string[]> {
    const result: Record<string, string[]> = {};
    for (const [name, typo] of state.typography) {
      if (typo.fontFamily) {
        result[name] = [typo.fontFamily];
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
        result[name] = [this.dimToString(typo.fontSize), meta];
      }
    }
    return result;
  }

  private mapDimensions(dims: Map<string, { value: number; unit: string }>): Record<string, string> {
    const result: Record<string, string> = {};
    for (const [name, dim] of dims) {
      result[name] = this.dimToString(dim);
    }
    return result;
  }

  private dimToString(dim: { value: number; unit: string }): string {
    return `${dim.value}${dim.unit}`;
  }
}
