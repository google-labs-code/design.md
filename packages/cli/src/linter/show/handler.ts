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

import { basename } from 'node:path';
import type {
  ResolvedColor,
  ResolvedDimension,
  ResolvedTypography,
  ResolvedValue,
} from '../model/spec.js';
import { renderShowTemplate } from './template.js';
import type {
  ShowColorToken,
  ShowComponentToken,
  ShowDimensionToken,
  ShowInput,
  ShowModel,
  ShowResult,
  ShowSpec,
  ShowTypographyToken,
} from './spec.js';

const SHADE_STOPS = [-0.75, -0.55, -0.35, -0.15, 0, 0.2, 0.4, 0.6] as const;

/**
 * Converts a lint report into a deterministic token-board preview model and HTML.
 */
export class ShowHandler implements ShowSpec {
  execute(input: ShowInput): ShowResult {
    try {
      const model = this.buildModel(input);
      const html = renderShowTemplate(model);
      return {
        success: true,
        data: {
          model,
          html,
        },
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'SHOW_RENDER_FAILED',
          message: error instanceof Error ? error.message : String(error),
        },
      };
    }
  }

  private buildModel(input: ShowInput): ShowModel {
    const colors = this.mapColors(input.designSystem.colors);
    const typography = this.mapTypography(input.designSystem.typography);
    const spacing = this.mapDimensions(input.designSystem.spacing);
    const rounded = this.mapDimensions(input.designSystem.rounded);
    const components = this.mapComponents(input.designSystem.components);

    return {
      title: input.designSystem.name || 'DESIGN.md Token Board',
      sourceFile: basename(input.sourcePath),
      generatedAtIso: new Date().toISOString(),
      summary: input.summary,
      diagnostics: input.findings,
      counts: {
        colors: colors.length,
        typography: typography.length,
        spacing: spacing.length,
        rounded: rounded.length,
        components: components.length,
      },
      colors,
      typography,
      spacing,
      rounded,
      components,
    };
  }

  private mapColors(colors: Map<string, ResolvedColor>): ShowColorToken[] {
    return Array.from(colors.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([name, color]) => ({
        name,
        hex: color.hex,
        rgb: `${color.r}, ${color.g}, ${color.b}`,
        luminance: color.luminance.toFixed(4),
        shades: this.buildShades(color),
      }));
  }

  private mapTypography(typography: Map<string, ResolvedTypography>): ShowTypographyToken[] {
    return Array.from(typography.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([name, token]) => ({
        name,
        fontFamily: token.fontFamily || 'serif',
        fontSize: this.dimensionToString(token.fontSize),
        fontWeight: token.fontWeight !== undefined ? String(token.fontWeight) : '400',
        lineHeight: this.dimensionToString(token.lineHeight),
        letterSpacing: this.dimensionToString(token.letterSpacing),
        fontFeature: token.fontFeature || 'none',
        fontVariation: token.fontVariation || 'none',
        sample: 'Aa',
      }));
  }

  private mapDimensions(dimensions: Map<string, ResolvedDimension>): ShowDimensionToken[] {
    return Array.from(dimensions.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([name, dimension]) => ({
        name,
        value: this.dimensionToString(dimension),
        approxPx: this.toApproxPx(dimension),
      }));
  }

  private mapComponents(
    components: Map<string, { properties: Map<string, ResolvedValue> }>,
  ): ShowComponentToken[] {
    return Array.from(components.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([name, component]) => ({
        name,
        properties: Array.from(component.properties.entries())
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([propName, value]) => ({
            name: propName,
            value: this.valueToString(value),
          })),
      }));
  }

  private valueToString(value: ResolvedValue): string {
    if (typeof value === 'string') {
      return value;
    }

    if (value.type === 'color') {
      return value.hex;
    }

    if (value.type === 'dimension') {
      return this.dimensionToString(value);
    }

    if (value.type === 'typography') {
      const family = value.fontFamily || 'inherit';
      const size = this.dimensionToString(value.fontSize);
      const lineHeight = this.dimensionToString(value.lineHeight);
      const weight = value.fontWeight !== undefined ? String(value.fontWeight) : '400';
      return `${family} ${size}/${lineHeight} (${weight})`;
    }

    return String(value);
  }

  private dimensionToString(value: ResolvedDimension | undefined): string {
    if (!value) {
      return 'n/a';
    }

    const numeric = Number.isInteger(value.value) ? String(value.value) : String(value.value);
    return `${numeric}${value.unit}`;
  }

  private toApproxPx(value: ResolvedDimension): number {
    if (value.unit === 'px') {
      return value.value;
    }

    if (value.unit === 'rem' || value.unit === 'em') {
      return value.value * 16;
    }

    return value.value;
  }

  private buildShades(color: ResolvedColor): string[] {
    return SHADE_STOPS.map((stop) => this.shiftHex(color, stop));
  }

  private shiftHex(color: ResolvedColor, amount: number): string {
    const shift = (channel: number) => {
      if (amount >= 0) {
        return Math.round(channel + (255 - channel) * amount);
      }
      return Math.round(channel * (1 + amount));
    };

    const r = this.channelToHex(shift(color.r));
    const g = this.channelToHex(shift(color.g));
    const b = this.channelToHex(shift(color.b));
    return `#${r}${g}${b}`;
  }

  private channelToHex(channel: number): string {
    const clamped = Math.max(0, Math.min(255, channel));
    return clamped.toString(16).padStart(2, '0');
  }
}
