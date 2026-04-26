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

import type { DtcgEmitterSpec, DtcgEmitterResult, DtcgTokenFile, DtcgToken, DtcgGroup, DtcgColorValue, DtcgDimensionValue, DtcgTypographyValue, DesignMdStatesExtension } from './spec.js';
import type { ComponentDef, DesignSystemState, ResolvedColor, ResolvedDimension, ResolvedShadow, ResolvedTypography, ResolvedDuration, ResolvedEasing, ResolvedValue } from '../model/spec.js';
import { parseCubicBezier } from '../model/spec.js';

const DTCG_SCHEMA_URL = 'https://www.designtokens.org/schemas/2025.10/format.json';
const DESIGN_MD_EXTENSION_KEY = 'design.md';

/**
 * Pure function mapping DesignSystemState → DTCG tokens.json (W3C Design Tokens Format Module 2025.10).
 * No side effects.
 */
export class DtcgEmitterHandler implements DtcgEmitterSpec {
  execute(state: DesignSystemState): DtcgEmitterResult {
    const file: DtcgTokenFile = {
      $schema: DTCG_SCHEMA_URL,
    };

    if (state.name || state.description) {
      file.$description = state.description || state.name;
    }

    const colorGroup = this.mapColors(state);
    if (colorGroup) file['color'] = colorGroup;

    const spacingGroup = this.mapDimensionGroup(state.spacing);
    if (spacingGroup) file['spacing'] = spacingGroup;

    const roundedGroup = this.mapDimensionGroup(state.rounded);
    if (roundedGroup) file['rounded'] = roundedGroup;

    const typographyGroup = this.mapTypography(state);
    if (typographyGroup) file['typography'] = typographyGroup;

    const elevationGroup = this.mapElevation(state);
    if (elevationGroup) file['elevation'] = elevationGroup;

    const motionGroup = this.mapMotion(state);
    if (motionGroup) file['motion'] = motionGroup;

    const iconographyGroup = this.mapIconography(state);
    if (iconographyGroup) file['iconography'] = iconographyGroup;

    const componentGroup = this.mapComponents(state);
    if (componentGroup) file['component'] = componentGroup;

    return { success: true, data: file as Record<string, unknown> };
  }

  /**
   * Motion → DTCG `duration` + `cubicBezier` token types. Reduced-motion
   * is encoded under the vendor extension as a pair of references back to
   * the named duration / easing tokens.
   */
  private mapMotion(state: DesignSystemState): DtcgGroup | null {
    const { duration, easing, reducedMotion } = state.motion;
    if (duration.size === 0 && easing.size === 0 && !reducedMotion) return null;
    const group: DtcgGroup = {};

    if (duration.size > 0) {
      const durGroup: DtcgGroup = { $type: 'duration' };
      for (const [name, dur] of duration) {
        durGroup[name] = {
          $value: this.durationToValue(dur),
        } as DtcgToken;
      }
      group['duration'] = durGroup;
    }

    if (easing.size > 0) {
      const easeGroup: DtcgGroup = { $type: 'cubicBezier' };
      for (const [name, ease] of easing) {
        easeGroup[name] = this.easingToToken(ease);
      }
      group['easing'] = easeGroup;
    }

    if (reducedMotion) {
      group['$extensions'] = {
        'design.md': {
          reducedMotion: {
            duration: `{motion.duration.${reducedMotion.duration}}`,
            easing: `{motion.easing.${reducedMotion.easing}}`,
          },
        },
      };
    }

    return group;
  }

  private durationToValue(dur: ResolvedDuration): DtcgDimensionValue {
    return { value: dur.value, unit: dur.unit };
  }

  /**
   * Emit cubic-bezier easings as DTCG `cubicBezier` ($value is a 4-tuple);
   * keyword and step easings fall back to a string $value with an extension
   * so consumers can detect the kind without re-parsing.
   */
  private easingToToken(ease: ResolvedEasing): DtcgToken {
    const points = ease.controlPoints ?? parseCubicBezier(ease.raw) ?? null;
    if (points) {
      return {
        $type: 'cubicBezier',
        $value: points,
      } as DtcgToken;
    }
    return {
      $type: 'cubicBezier',
      $value: ease.raw,
      $extensions: { 'design.md': { kind: 'keyword' } },
    } as DtcgToken;
  }

  /**
   * Iconography has no DTCG-native type. Emit the structured config under
   * `$extensions['design.md'].iconography`; sizes are exposed as a sibling
   * `dimension` group so consumers can address `{iconography.sizes.md}`.
   */
  private mapIconography(state: DesignSystemState): DtcgGroup | null {
    if (!state.iconography) return null;
    const ico = state.iconography;
    const group: DtcgGroup = {
      $extensions: {
        'design.md': {
          iconography: {
            library: ico.library,
            defaultSize: ico.defaultSize,
            colorBinding: ico.colorBinding,
            ...(ico.strokeWeight ? { strokeWeight: this.dimToValue(ico.strokeWeight) } : {}),
          },
        },
      },
    };
    if (ico.sizes.size > 0) {
      const sizeGroup: DtcgGroup = { $type: 'dimension' };
      for (const [name, dim] of ico.sizes) {
        sizeGroup[name] = {
          $value: this.dimToValue(dim),
        } as DtcgToken;
      }
      group['sizes'] = sizeGroup;
    }
    return group;
  }

  private mapElevation(state: DesignSystemState): DtcgGroup | null {
    if (state.elevation.size === 0) return null;
    const group: DtcgGroup = { $type: 'shadow' };
    for (const [name, shadow] of state.elevation) {
      group[name] = {
        $value: this.shadowToValue(shadow),
      } as DtcgToken;
    }
    return group;
  }

  /**
   * Emit the raw CSS shadow string. Round-tripping the full DTCG composite
   * shadow grammar (offset / blur / spread / color objects) is intentionally
   * deferred — the raw string preserves all author intent and works with
   * downstream consumers that pass shadows through verbatim.
   */
  private shadowToValue(shadow: ResolvedShadow): string {
    return shadow.raw;
  }

  /**
   * Project the component map into a DTCG group. DTCG has no native component
   * concept, so each component becomes a sub-group whose tokens are its base
   * properties plus a `$extensions['design.md']` block carrying the
   * `interactive` flag and per-state overrides.
   */
  private mapComponents(state: DesignSystemState): DtcgGroup | null {
    if (state.components.size === 0) return null;
    const group: DtcgGroup = {};
    for (const [name, comp] of state.components) {
      group[name] = this.componentToGroup(comp);
    }
    return group;
  }

  private componentToGroup(comp: ComponentDef): DtcgGroup {
    const sub: DtcgGroup = {};
    for (const [propName, value] of comp.properties) {
      const token = this.componentValueToToken(value);
      if (token) sub[propName] = token;
    }
    const extension = this.buildStatesExtension(comp);
    if (extension) {
      sub.$extensions = { [DESIGN_MD_EXTENSION_KEY]: extension };
    }
    return sub;
  }

  private buildStatesExtension(comp: ComponentDef): DesignMdStatesExtension | null {
    if (comp.states.size === 0 && !comp.interactive) return null;
    const states: Record<string, Record<string, string | number>> = {};
    for (const [stateName, overrides] of comp.states) {
      const flat: Record<string, string | number> = {};
      for (const [prop, value] of overrides) {
        flat[prop] = this.flattenForExtension(value);
      }
      states[stateName] = flat;
    }
    const ext: DesignMdStatesExtension = { states };
    if (comp.interactive !== undefined) ext.interactive = comp.interactive;
    return ext;
  }

  private flattenForExtension(value: ResolvedValue): string | number {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return value;
    if (typeof value === 'object' && value !== null && 'type' in value) {
      if (value.type === 'color') return value.hex;
      if (value.type === 'dimension') return `${value.value}${value.unit}`;
      if (value.type === 'shadow') return value.raw;
    }
    return String(value);
  }

  private componentValueToToken(value: ResolvedValue): DtcgToken | null {
    if (typeof value === 'object' && value !== null && 'type' in value) {
      if (value.type === 'color') {
        return { $type: 'color', $value: this.colorToValue(value as ResolvedColor) };
      }
      if (value.type === 'dimension') {
        return { $type: 'dimension', $value: this.dimToValue(value as ResolvedDimension) };
      }
      if (value.type === 'typography') {
        return { $type: 'typography', $value: this.typographyToValue(value as ResolvedTypography) };
      }
      if (value.type === 'shadow') {
        return { $type: 'shadow', $value: (value as ResolvedShadow).raw };
      }
    }
    if (typeof value === 'string' || typeof value === 'number') {
      return { $value: value };
    }
    return null;
  }

  private mapColors(state: DesignSystemState): DtcgGroup | null {
    if (state.colors.size === 0) return null;
    const group: DtcgGroup = { $type: 'color' };

    // Ramps emit as nested groups: every step is a token at `<ramp>.<step>`,
    // and a sibling alias `<ramp>` aliases the anchor step (default 500) so
    // unqualified references like `{primary}` keep resolving downstream.
    for (const [rampName, ramp] of state.colorRamps) {
      const rampGroup: DtcgGroup = { $type: 'color' };
      const extension: Record<string, unknown> = { type: 'ramp' };
      if (ramp.humanName) extension['humanName'] = ramp.humanName;
      if (ramp.description) extension['description'] = ramp.description;
      rampGroup['$extensions'] = { 'design.md': extension };

      for (const [step, color] of [...ramp.steps].sort(([a], [b]) => a - b)) {
        rampGroup[String(step)] = {
          $value: this.colorToValue(color),
        } as DtcgToken;
      }
      // Anchor alias under the ramp's name. Use a DTCG `$value` reference so
      // round-trip consumers preserve the link between the two tokens.
      rampGroup['anchor'] = {
        $value: `{color.${rampName}.500}`,
      } as DtcgToken;
      group[rampName] = rampGroup;
    }

    // Standalone pairs emit as nested groups with both members + a vendor
    // extension that records the pair role. Inline-ramp pairs are flattened
    // (their members already live in state.colors as hyphenated aliases).
    for (const [pairName, pair] of state.colorPairs) {
      if (pair.derivedFromRamp) continue;
      const pairGroup: DtcgGroup = {
        $type: 'color',
        $extensions: { 'design.md': { type: 'pair', minContrast: pair.minContrast } },
      };
      pairGroup['container'] = {
        $value: this.colorToValue(pair.container),
        $extensions: { 'design.md': { pair: pairName, role: 'container' } },
      } as DtcgToken;
      pairGroup['onContainer'] = {
        $value: this.colorToValue(pair.onContainer),
        $extensions: { 'design.md': { pair: pairName, role: 'on-container' } },
      } as DtcgToken;
      group[pairName] = pairGroup;
    }

    // Flat colors (and inline-ramp-pair flat aliases) emit as top-level tokens.
    // Skip:
    // - ramp steps (already nested under their ramp)
    // - dotted standalone-pair members (already nested under their pair group)
    // - flat aliases of standalone pairs (would overwrite the pair group)
    for (const [name, color] of state.colors) {
      if (color.rampMember) continue;
      if (color.pairRole && !pair_isFlatAlias(name)) continue;
      if (color.pairRole) {
        const owningPair = state.colorPairs.get(color.pairRole.pair);
        if (owningPair && !owningPair.derivedFromRamp) continue;
      }
      const token: DtcgToken = {
        $value: this.colorToValue(color),
      };
      if (color.pairRole) {
        token.$extensions = { 'design.md': { pair: color.pairRole.pair, role: color.pairRole.role } };
      }
      group[name] = token;
    }

    return group;
  }

  private colorToValue(color: ResolvedColor): DtcgColorValue {
    return {
      colorSpace: 'srgb',
      components: [
        this.round(color.r / 255),
        this.round(color.g / 255),
        this.round(color.b / 255),
      ],
      hex: color.hex.toLowerCase(),
    };
  }

  private mapDimensionGroup(dims: Map<string, ResolvedDimension>): DtcgGroup | null {
    if (dims.size === 0) return null;
    const group: DtcgGroup = { $type: 'dimension' };
    for (const [name, dim] of dims) {
      group[name] = {
        $value: this.dimToValue(dim),
      } as DtcgToken;
    }
    return group;
  }

  private dimToValue(dim: ResolvedDimension): DtcgDimensionValue {
    return { value: dim.value, unit: dim.unit };
  }

  private mapTypography(state: DesignSystemState): DtcgGroup | null {
    if (state.typography.size === 0) return null;
    const group: DtcgGroup = {};
    for (const [name, typo] of state.typography) {
      group[name] = {
        $type: 'typography',
        $value: this.typographyToValue(typo),
      } as DtcgToken;
    }
    return group;
  }

  private typographyToValue(typo: ResolvedTypography): DtcgTypographyValue {
    const value: DtcgTypographyValue = {};
    if (typo.fontFamily) value.fontFamily = typo.fontFamily;
    if (typo.fontSize) value.fontSize = this.dimToValue(typo.fontSize);
    if (typo.fontWeight !== undefined) value.fontWeight = typo.fontWeight;
    if (typo.letterSpacing) value.letterSpacing = this.dimToValue(typo.letterSpacing);
    if (typo.lineHeight) {
      // DTCG lineHeight is a unitless multiplier of fontSize.
      // Our model stores it as a ResolvedDimension. Convert if possible.
      // If unit is a relative unit, just use the numeric value as a multiplier.
      value.lineHeight = typo.lineHeight.value;
    }
    return value;
  }

  /** Round to 3 decimal places for clean output. */
  private round(n: number): number {
    return Math.round(n * 1000) / 1000;
  }
}

/**
 * Whether a color map key is a flat pair-member alias (e.g., `primary-container`,
 * `on-primary-container`, `surface-info`, `on-surface-info`) rather than a
 * dotted member like `surface-info.container`. Flat aliases are emitted as
 * top-level DTCG tokens; dotted members already live inside their pair group.
 */
function pair_isFlatAlias(name: string): boolean {
  return !name.includes('.');
}
