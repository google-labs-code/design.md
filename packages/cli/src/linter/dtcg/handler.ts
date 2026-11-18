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

import type { DtcgEmitterSpec, DtcgEmitterResult, DtcgEmitterWarning, DtcgTokenFile, DtcgToken, DtcgGroup, DtcgColorValue, DtcgDimensionValue, DtcgTypographyValue } from './spec.js';
import type { DesignSystemState, ResolvedColor, ResolvedDimension, ResolvedTypography } from '../model/spec.js';

const DTCG_SCHEMA_URL = 'https://www.designtokens.org/schemas/2025.10/format.json';

/** DESIGN.md has no required letterSpacing field; DTCG typography requires one. */
const DEFAULT_LETTER_SPACING: Readonly<DtcgDimensionValue> = Object.freeze({ value: 0, unit: 'px' });

/** Root font size assumed when converting between px and rem. */
const ROOT_FONT_SIZE_PX = 16;

const UNSAFE_OBJECT_KEYS: ReadonlySet<string> = new Set([
  '__proto__',
  'constructor',
  'prototype',
]);

interface DtcgEmitError {
  code: string;
  message: string;
}

/**
 * Pure function mapping DesignSystemState → DTCG tokens.json (W3C Design Tokens Format Module 2025.10).
 * No side effects.
 */
export class DtcgEmitterHandler implements DtcgEmitterSpec {
  execute(state: DesignSystemState): DtcgEmitterResult {
    const warnings: DtcgEmitterWarning[] = [];
    const file: DtcgTokenFile = {
      $schema: DTCG_SCHEMA_URL,
    };

    if (state.name || state.description) {
      file.$description = state.description || state.name;
    }

    const colorResult = this.mapColors(state);
    if (colorResult.error) return { success: false, error: colorResult.error };
    if (colorResult.group) file['color'] = colorResult.group;

    const spacingResult = this.mapDimensionGroup('spacing', state.spacing);
    if (spacingResult.error) return { success: false, error: spacingResult.error };
    if (spacingResult.group) file['spacing'] = spacingResult.group;

    const roundedResult = this.mapDimensionGroup('rounded', state.rounded);
    if (roundedResult.error) return { success: false, error: roundedResult.error };
    if (roundedResult.group) file['rounded'] = roundedResult.group;

    const typographyResult = this.mapTypography(state, warnings);
    if (typographyResult.error) return { success: false, error: typographyResult.error };
    if (typographyResult.group) file['typography'] = typographyResult.group;

    return {
      success: true,
      data: file as Record<string, unknown>,
      ...(warnings.length > 0 ? { warnings } : {}),
    };
  }

  private mapColors(state: DesignSystemState): { group: DtcgGroup | null; error?: DtcgEmitError } {
    if (state.colors.size === 0) return { group: null };
    const group: DtcgGroup = { $type: 'color' };
    for (const [name, color] of state.colors) {
      const error = insertDtcgToken(group, 'color', name, {
        $value: this.colorToValue(color),
      });
      if (error) return { group: null, error };
    }
    return { group };
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

  private mapDimensionGroup(
    category: 'spacing' | 'rounded',
    dims: Map<string, ResolvedDimension>,
  ): { group: DtcgGroup | null; error?: DtcgEmitError } {
    if (dims.size === 0) return { group: null };
    const group: DtcgGroup = { $type: 'dimension' };
    for (const [name, dim] of dims) {
      const error = insertDtcgToken(group, category, name, {
        $value: this.dimToValue(dim),
      });
      if (error) return { group: null, error };
    }
    return { group };
  }

  private dimToValue(dim: ResolvedDimension): DtcgDimensionValue {
    return { value: dim.value, unit: dim.unit };
  }

  private mapTypography(
    state: DesignSystemState,
    warnings: DtcgEmitterWarning[],
  ): { group: DtcgGroup | null; error?: DtcgEmitError } {
    if (state.typography.size === 0) return { group: null };
    const group: DtcgGroup = {};
    for (const [name, typo] of state.typography) {
      const error = insertDtcgToken(group, 'typography', name, {
        $type: 'typography',
        $value: this.typographyToValue(typo, `typography.${name}`, warnings),
      });
      if (error) return { group: null, error };
    }
    return { group };
  }

  private typographyToValue(
    typo: ResolvedTypography,
    path: string,
    warnings: DtcgEmitterWarning[],
  ): DtcgTypographyValue {
    const value: DtcgTypographyValue = {};
    if (typo.fontFamily) value.fontFamily = typo.fontFamily;
    if (typo.fontSize) value.fontSize = this.dimToValue(typo.fontSize);
    if (typo.fontWeight !== undefined) value.fontWeight = typo.fontWeight;
    value.letterSpacing = typo.letterSpacing
      ? this.dimToValue(typo.letterSpacing)
      : { ...DEFAULT_LETTER_SPACING };
    if (typo.lineHeight) {
      const lineHeight = this.lineHeightToMultiplier(typo.lineHeight, typo.fontSize);
      if (lineHeight !== null) {
        value.lineHeight = lineHeight;
      } else {
        // Never guess: a dimension lineHeight read as a multiplier (e.g. 22px → 22)
        // is silently wrong. Omit it and tell the caller instead.
        const fontSizeDesc = typo.fontSize
          ? `fontSize '${typo.fontSize.value}${typo.fontSize.unit}'`
          : 'no fontSize';
        warnings.push({
          code: 'LINE_HEIGHT_NOT_CONVERTIBLE',
          path: `${path}.lineHeight`,
          message: `lineHeight '${typo.lineHeight.value}${typo.lineHeight.unit}' cannot be converted to a unitless DTCG multiplier with ${fontSizeDesc}; lineHeight was omitted.`,
        });
      }
    }
    return value;
  }

  /**
   * DTCG lineHeight is a unitless multiplier of fontSize. Convert the model's
   * lineHeight dimension, or return null if that cannot be done reliably.
   * px ↔ rem conversions assume a 16px root font size.
   */
  private lineHeightToMultiplier(
    lineHeight: ResolvedDimension,
    fontSize: ResolvedDimension | undefined,
  ): number | null {
    // Unitless and em values are already relative to the element's font size.
    if (lineHeight.unit === '' || lineHeight.unit === 'em') return lineHeight.value;

    const fontSizePx = this.toPx(fontSize);
    const lineHeightPx = this.toPx(lineHeight);
    if (fontSizePx === null || lineHeightPx === null || fontSizePx === 0) return null;
    return this.round(lineHeightPx / fontSizePx);
  }

  /** Absolute size in px for px/rem dimensions; null for anything else. */
  private toPx(dim: ResolvedDimension | undefined): number | null {
    if (!dim) return null;
    if (dim.unit === 'px') return dim.value;
    if (dim.unit === 'rem') return dim.value * ROOT_FONT_SIZE_PX;
    return null;
  }

  /** Round to 3 decimal places for clean output. */
  private round(n: number): number {
    return Math.round(n * 1000) / 1000;
  }
}

function isInvalidDtcgSegment(segment: string): boolean {
  return (
    segment.length === 0 ||
    segment.startsWith('$') ||
    segment.includes('{') ||
    segment.includes('}') ||
    UNSAFE_OBJECT_KEYS.has(segment)
  );
}

function insertDtcgToken(
  root: DtcgGroup,
  category: string,
  name: string,
  token: DtcgToken,
): DtcgEmitError | null {
  const segments = name.split('.');
  for (const segment of segments) {
    if (isInvalidDtcgSegment(segment)) {
      return {
        code: 'INVALID_TOKEN_NAME',
        message: `Token '${category}.${name}' contains an invalid DTCG name segment '${segment}'.`,
      };
    }
  }

  let current = root;
  for (let i = 0; i < segments.length - 1; i++) {
    const segment = segments[i]!;
    if (!Object.hasOwn(current, segment)) {
      const childGroup: DtcgGroup = {};
      current[segment] = childGroup;
      current = childGroup;
      continue;
    }
    const existing = current[segment];
    if (!existing || typeof existing !== 'object' || '$value' in existing) {
      return {
        code: 'TOKEN_GROUP_COLLISION',
        message: `Cannot create DTCG group '${category}.${segments.slice(0, i + 1).join('.')}': a token already exists at that path.`,
      };
    }
    current = existing;
  }

  const leafKey = segments[segments.length - 1]!;
  if (Object.hasOwn(current, leafKey)) {
    return {
      code: 'TOKEN_GROUP_COLLISION',
      message: `Cannot create DTCG token '${category}.${name}': a token or group already exists at that path.`,
    };
  }
  current[leafKey] = token;
  return null;
}
