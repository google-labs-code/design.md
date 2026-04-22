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

import type { DesignSystemState } from '../model/spec.js';
import type { Finding } from '../linter/spec.js';

export interface ShowSummary {
  errors: number;
  warnings: number;
  infos: number;
}

export interface ShowInput {
  designSystem: DesignSystemState;
  findings: Finding[];
  summary: ShowSummary;
  sourcePath: string;
}

export interface ShowColorToken {
  name: string;
  hex: string;
  rgb: string;
  luminance: string;
  shades: string[];
}

export interface ShowTypographyToken {
  name: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
  fontFeature: string;
  fontVariation: string;
  sample: string;
}

export interface ShowDimensionToken {
  name: string;
  value: string;
  approxPx: number;
}

export interface ShowComponentToken {
  name: string;
  properties: Array<{ name: string; value: string }>;
}

export interface ShowCounts {
  colors: number;
  typography: number;
  spacing: number;
  rounded: number;
  components: number;
}

export interface ShowModel {
  title: string;
  sourceFile: string;
  generatedAtIso: string;
  summary: ShowSummary;
  diagnostics: Finding[];
  counts: ShowCounts;
  colors: ShowColorToken[];
  typography: ShowTypographyToken[];
  spacing: ShowDimensionToken[];
  rounded: ShowDimensionToken[];
  components: ShowComponentToken[];
}

export interface ShowResultData {
  model: ShowModel;
  html: string;
}

export type ShowResult =
  | {
      success: true;
      data: ShowResultData;
    }
  | {
      success: false;
      error: {
        code: string;
        message: string;
      };
    };

export interface ShowSpec {
  execute(input: ShowInput): ShowResult;
}
