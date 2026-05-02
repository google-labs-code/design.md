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
  TailwindThemeExtend,
  TailwindThemes,
  TailwindContainer,
} from './spec.js';
import type { ComponentDef, DesignSystemState, RampDef, ResolvedColor, ResolvedDimension, ResolvedValue, ThemeView } from '../model/spec.js';
import { BASE_THEME_NAME } from '../spec-config.js';

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
    const extend: TailwindThemeExtend = {
      colors: this.mapColors(state.colors, state.colorRamps),
      fontFamily: this.mapFontFamilies(state),
      fontSize: this.mapFontSizes(state),
      borderRadius: this.mapDimensions(state.rounded),
      spacing: this.mapDimensions(state.spacing),
      boxShadow: this.mapElevation(state),
      transitionDuration: this.mapDurations(state),
      transitionTimingFunction: this.mapEasings(state),
    };

    const screens = this.mapScreens(state);
    if (screens) extend.screens = screens;
    const maxWidth = this.mapMaxWidth(state);
    if (maxWidth) extend.maxWidth = maxWidth;

    const result: TailwindEmitterResult = {
      success: true,
      data: {
        theme: {
          extend,
        },
      }
    };

    const container = this.mapContainer(state);
    if (container) {
      result.data.theme.container = container;
    }

    if (options?.components && state.components.size > 0) {
      result.data.plugin = this.mapComponents(state);
    }

    const themes = this.mapThemes(state);
    if (themes !== undefined) {
      result.data.themes = themes;
    }

    return result;
  }

  /**
   * Map `breakpoints.values` → Tailwind `theme.extend.screens`. Tailwind
   * expects min-width strings keyed by breakpoint name. Returns undefined
   * when no breakpoints are declared.
   */
  private mapScreens(state: DesignSystemState): Record<string, string> | undefined {
    if (!state.breakpoints || state.breakpoints.values.size === 0) return undefined;
    const out: Record<string, string> = {};
    for (const [key, dim] of state.breakpoints.values) {
      out[key] = `${dim.value}${dim.unit}`;
    }
    return out;
  }

  /**
   * Map `grid.maxWidth` and `layoutRules.contentMaxWidth` → Tailwind
   * `theme.extend.maxWidth`. Emitted as named entries `container` (grid
   * width) and `prose` (readable measure) so authors can use
   * `max-w-container` / `max-w-prose` classes directly.
   */
  private mapMaxWidth(state: DesignSystemState): Record<string, string> | undefined {
    const out: Record<string, string> = {};
    if (state.grid?.maxWidth) {
      out['container'] = `${state.grid.maxWidth.value}${state.grid.maxWidth.unit}`;
    }
    if (state.layoutRules?.contentMaxWidth) {
      const cmw = state.layoutRules.contentMaxWidth;
      out['prose'] = `${cmw.value}${cmw.unit}`;
    }
    return Object.keys(out).length > 0 ? out : undefined;
  }

  /**
   * Map `grid.margin` → Tailwind `theme.container.padding`. The container
   * plugin wraps its children with horizontal padding that increases at
   * higher breakpoints; we emit a DEFAULT plus per-breakpoint overrides.
   */
  private mapContainer(state: DesignSystemState): TailwindContainer | undefined {
    const margin = state.grid?.margin;
    if (!margin || margin.size === 0) return undefined;
    const padding: Record<string, string> = {};
    for (const [key, dim] of margin) {
      const dest = key === 'sm' ? 'DEFAULT' : key;
      padding[dest] = `${dim.value}${dim.unit}`;
    }
    if (!('DEFAULT' in padding)) {
      const first = Object.values(padding)[0];
      if (first) padding['DEFAULT'] = first;
    }
    return { center: true, padding };
  }

  /**
   * Emit per-theme color overrides for every declared theme except the
   * implicit `light` base (whose values already live in `theme.extend.colors`).
   * Returns `undefined` when no additional themes are declared so the field
   * stays omitted in the simple single-theme case.
   */
  private mapThemes(state: DesignSystemState): TailwindThemes | undefined {
    const out: TailwindThemes = {};
    let any = false;
    for (const [themeName, view] of state.themes) {
      if (themeName === BASE_THEME_NAME) continue;
      out[themeName] = {
        colors: this.mapColors(view.colors, view.colorRamps),
        contrastTarget: { ...view.contrastTarget },
      };
      any = true;
    }
    return any ? out : undefined;
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
      if (value.type === 'color') {
        // Preserve oklch / lab / p3 / hsl notation for Tailwind v4; hex for legacy.
        return value.format === 'hex' ? value.hex : value.raw;
      }
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

  private mapColors(
    colors: Map<string, ResolvedColor>,
    colorRamps: Map<string, RampDef>,
  ): Record<string, string | Record<string, string>> {
    const result: Record<string, string | Record<string, string>> = {};

    // Tailwind v4 accepts modern CSS color functions natively. Round-trip the
    // original notation when present and fall back to sRGB hex for legacy hex
    // tokens. This preserves wide-gamut intent for oklch / lab / display-p3.
    const emit = (color: ResolvedColor): string =>
      color.format === 'hex' ? color.hex : color.raw;

    // Ramps emit as nested objects: { DEFAULT: '...', '50': '...', '500': '...', ... }
    // The flat colors map carries every step plus the anchor; group them by ramp.
    for (const [rampName, ramp] of colorRamps) {
      const group: Record<string, string> = { DEFAULT: emit(ramp.anchor) };
      for (const [step, color] of [...ramp.steps].sort(([a], [b]) => a - b)) {
        group[String(step)] = emit(color);
      }
      result[rampName] = group;
    }

    // Flat colors and pair members emit as top-level strings. Skip step entries
    // (already nested under their ramp), the bare anchor (already in group), and
    // dotted standalone-pair members (encoded via hyphen flat aliases below).
    // Pair foregrounds are renamed to `<pair>-foreground` to match the
    // shadcn/ui Tailwind v4 utility convention (`text-primary-foreground`):
    // - declared pairs (pairRole === 'on-container'): use the pair name.
    // - flat M3-style `on-<x>` keys whose sibling `<x>` is also a flat color or
    //   ramp: rename to `<x>-foreground`.
    for (const [name, color] of colors) {
      if (color.rampMember) continue;
      if (color.pairRole && name.includes('.')) continue;
      const emitName = resolveForegroundName(name, color, colors, colorRamps) ?? name;
      result[emitName] = emit(color);
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

/**
 * Map a color key to its shadcn-style `<base>-foreground` emit name when
 * applicable, or null to keep the original name. Two cases produce a rename:
 *
 *   1. The color has `pairRole.role === 'on-container'` (declared `type: pair`)
 *      — use the pair name directly.
 *   2. The key is `on-<base>` and a sibling `<base>` exists as a flat color or
 *      a ramp — common for M3-style files that don't declare pairs explicitly.
 */
function resolveForegroundName(
  name: string,
  color: ResolvedColor,
  colors: Map<string, ResolvedColor>,
  colorRamps: Map<string, RampDef>,
): string | null {
  if (color.pairRole?.role === 'on-container') {
    return `${color.pairRole.pair}-foreground`;
  }
  if (name.startsWith('on-')) {
    const base = name.slice(3);
    const sibling = colors.get(base);
    const siblingIsFlat = sibling && !sibling.rampMember && !sibling.pairRole;
    if (siblingIsFlat || colorRamps.has(base)) {
      return `${base}-foreground`;
    }
  }
  return null;
}
