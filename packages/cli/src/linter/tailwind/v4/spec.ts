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
import type { DesignSystemState } from '../../model/spec.js';

// ── TAILWIND v4 THEME DATA SCHEMA ────────────────────────────────────
// Category-keyed record of CSS-variable name → value strings.
// The serializer flattens this into an `@theme { ... }` block.
export const TailwindV4ThemeDataSchema = z.object({
  colors: z.record(z.string()).optional(),
  fontFamily: z.record(z.string()).optional(),
  fontSize: z.record(z.string()).optional(),
  lineHeight: z.record(z.string()).optional(),
  letterSpacing: z.record(z.string()).optional(),
  fontWeight: z.record(z.string()).optional(),
  borderRadius: z.record(z.string()).optional(),
  spacing: z.record(z.string()).optional(),
});

export type TailwindV4ThemeData = z.infer<typeof TailwindV4ThemeDataSchema>;

export const TailwindV4EmitterResultSchema = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    data: z.object({
      theme: TailwindV4ThemeDataSchema,
    }),
  }),
  z.object({
    success: z.literal(false),
    error: z.object({
      code: z.string(),
      message: z.string(),
    }),
  }),
]);

export type TailwindV4EmitterResult = z.infer<typeof TailwindV4EmitterResultSchema>;

// ── INTERFACE ──────────────────────────────────────────────────────
export interface TailwindV4EmitterSpec {
  execute(state: DesignSystemState): TailwindV4EmitterResult;
}
