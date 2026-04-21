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

import { z } from 'zod';
import type { DesignSystemState } from '../model/spec.js';

// ── DTCG Value Types (W3C Design Tokens Format Module 2025.10) ────

export interface DtcgColorValue {
  colorSpace: 'srgb';
  components: [number, number, number];
  hex?: string;
}

export interface DtcgDimensionValue {
  value: number;
  unit: string;
}

export interface DtcgTypographyValue {
  fontFamily?: string;
  fontSize?: DtcgDimensionValue;
  fontWeight?: number;
  letterSpacing?: DtcgDimensionValue;
  lineHeight?: number;
}

// ── DTCG Token & Group Structures ─────────────────────────────────

export interface DtcgToken {
  $type?: string;
  $value: DtcgColorValue | DtcgDimensionValue | DtcgTypographyValue | string | number;
  $description?: string;
}

export interface DtcgGroup {
  $type?: string;
  $description?: string;
  [key: string]: DtcgToken | DtcgGroup | string | undefined;
}

/** The complete tokens.json output file. */
export interface DtcgTokenFile extends DtcgGroup {
  $schema?: string;
}

// ── Result ─────────────────────────────────────────────────────────

export const DtcgEmitterResultSchema = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    data: z.record(z.unknown()),
  }),
  z.object({
    success: z.literal(false),
    error: z.object({
      code: z.string(),
      message: z.string(),
    }),
  }),
]);

export type DtcgEmitterResult = z.infer<typeof DtcgEmitterResultSchema>;

// ── Interface ──────────────────────────────────────────────────────

export interface DtcgEmitterSpec {
  execute(state: DesignSystemState): DtcgEmitterResult;
}
