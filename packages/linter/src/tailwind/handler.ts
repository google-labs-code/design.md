import type { TailwindEmitterSpec, TailwindConfig } from './spec.js';
import type { DesignSystemState, ResolvedDimension } from '../model/spec.js';

/**
 * Pure function mapping DesignSystemState → Tailwind theme.extend config.
 * No side effects.
 */
export class TailwindEmitterHandler implements TailwindEmitterSpec {
  execute(state: DesignSystemState): TailwindConfig {
    return {
      theme: {
        extend: {
          colors: this.mapColors(state),
          fontFamily: this.mapFontFamilies(state),
          fontSize: this.mapFontSizes(state),
          borderRadius: this.mapDimensions(state.rounded),
          spacing: this.mapDimensions(state.spacing),
        },
      },
    };
  }

  private mapColors(state: DesignSystemState): Record<string, string> {
    const result: Record<string, string> = {};
    for (const [name, color] of state.colors) {
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
