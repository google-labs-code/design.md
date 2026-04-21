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
import type { DesignSystemState, ResolvedColor, ResolvedDimension, ResolvedTypography } from '../model/spec.js';

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

    return { success: true, data: file as Record<string, unknown> };
  }

  private mapColors(state: DesignSystemState): DtcgGroup | null {
    if (state.colors.size === 0) return null;
    const group: DtcgGroup = { $type: 'color' };
    for (const [name, color] of state.colors) {
      group[name] = {
        $value: this.colorToValue(color),
      } as DtcgToken;
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
