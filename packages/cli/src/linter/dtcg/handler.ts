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

import type { DtcgEmitterSpec, DtcgEmitterResult, DtcgTokenFile, DtcgToken, DtcgGroup, DtcgColorValue, DtcgDimensionValue, DtcgTypographyValue } from './spec.js';
import type { DesignSystemState, ResolvedColor, ResolvedDimension, ResolvedShadow, ResolvedTypography } from '../model/spec.js';

const DTCG_SCHEMA_URL = 'https://www.designtokens.org/schemas/2025.10/format.json';

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

    return { success: true, data: file as Record<string, unknown> };
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
