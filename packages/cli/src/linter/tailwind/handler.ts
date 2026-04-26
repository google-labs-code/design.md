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

import type {
  TailwindEmitterSpec,
  TailwindEmitterResult,
  TailwindEmitterOptions,
  TailwindComponentRule,
} from './spec.js';
import type { ComponentDef, DesignSystemState, ResolvedDimension, ResolvedValue } from '../model/spec.js';

const STATE_TO_VARIANT: Record<string, string> = {
  hover: '&:hover',
  'focus-visible': '&:focus-visible',
  active: '&:active',
  pressed: '&[aria-pressed="true"]',
  disabled: '&:disabled, &[aria-disabled="true"]',
  loading: '&[aria-busy="true"]',
};

const PROPERTY_TO_CSS: Record<string, string | string[]> = {
  backgroundColor: 'background-color',
  textColor: 'color',
  rounded: 'border-radius',
  padding: 'padding',
  height: 'height',
  width: 'width',
  size: ['width', 'height'],
  outline: 'outline',
  boxShadow: 'box-shadow',
  border: 'border',
  cursor: 'cursor',
  opacity: 'opacity',
};

/**
 * Pure function mapping DesignSystemState → Tailwind theme.extend config.
 * No side effects.
 *
 * With `options.components: true`, additionally emits a `plugin` object whose
 * shape is what `tailwindcss/plugin`'s `addComponents()` expects: each
 * component becomes a `.<name>` class with its base styles plus per-state
 * nested rules under `&:hover`, `&:focus-visible`, etc.
 */
export class TailwindEmitterHandler implements TailwindEmitterSpec {
  execute(state: DesignSystemState, options?: TailwindEmitterOptions): TailwindEmitterResult {
    const result: TailwindEmitterResult = {
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
            transitionDuration: this.mapDurations(state),
            transitionTimingFunction: this.mapEasings(state),
          },
        },
      }
    };

    if (options?.components && state.components.size > 0) {
      result.data.plugin = this.mapComponents(state);
    }

    return result;
  }

  private mapComponents(state: DesignSystemState): Record<string, TailwindComponentRule> {
    const components: Record<string, TailwindComponentRule> = {};
    for (const [name, comp] of state.components) {
      components[`.${name}`] = this.componentRule(comp);
    }
    return components;
  }

  private componentRule(comp: ComponentDef): TailwindComponentRule {
    const rule: TailwindComponentRule = {};
    for (const [prop, value] of comp.properties) {
      this.assignProperty(rule, prop, value);
    }
    for (const [stateName, overrides] of comp.states) {
      const variant = STATE_TO_VARIANT[stateName] ?? `&[data-state="${stateName}"]`;
      const nested: TailwindComponentRule = {};
      for (const [prop, value] of overrides) {
        this.assignProperty(nested, prop, value);
      }
      rule[variant] = nested;
    }
    return rule;
  }

  private assignProperty(target: TailwindComponentRule, prop: string, value: ResolvedValue): void {
    const cssNames = PROPERTY_TO_CSS[prop];
    const stringValue = this.toCssValue(value);
    if (cssNames === undefined) {
      target[prop] = stringValue;
      return;
    }
    if (Array.isArray(cssNames)) {
      for (const css of cssNames) target[css] = stringValue;
    } else {
      target[cssNames] = stringValue;
    }
  }

  private toCssValue(value: ResolvedValue): string {
    if (typeof value === 'string') return value;
    if (typeof value === 'object' && value !== null && 'type' in value) {
      if (value.type === 'color') return value.hex;
      if (value.type === 'dimension') return `${value.value}${value.unit}`;
    }
    return String(value);
  }

  private mapDurations(state: DesignSystemState): Record<string, string> {
    const result: Record<string, string> = {};
    for (const [name, dur] of state.motion.duration) {
      result[name] = `${dur.value}${dur.unit}`;
    }
    return result;
  }

  private mapEasings(state: DesignSystemState): Record<string, string> {
    const result: Record<string, string> = {};
    for (const [name, easing] of state.motion.easing) {
      result[name] = easing.raw;
    }
    return result;
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
