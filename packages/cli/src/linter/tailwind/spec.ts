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
import type { Config } from 'tailwindcss';
import type { DesignSystemState } from '../model/spec.js';

// ── TAILWIND CONFIG SCHEMA ──────────────────────────────────────────
export const TailwindThemeExtendSchema = z.object({
  colors: z.record(z.string()).optional(),
  fontFamily: z.record(z.array(z.string())).optional(),
  fontSize: z.record(z.tuple([z.string(), z.record(z.string())])).optional(),
  borderRadius: z.record(z.string()).optional(),
  spacing: z.record(z.string()).optional(),
});

export type TailwindThemeExtend = z.infer<typeof TailwindThemeExtendSchema>;



export const TailwindEmitterResultSchema = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    data: z.object({
      theme: z.object({
        extend: TailwindThemeExtendSchema
      })
    })
  }),
  z.object({
    success: z.literal(false),
    error: z.object({
      code: z.string(),
      message: z.string()
    })
  })
]);

export type TailwindEmitterResult = z.infer<typeof TailwindEmitterResultSchema>;

// ── INTERFACE ──────────────────────────────────────────────────────
export interface TailwindEmitterSpec {
  execute(state: DesignSystemState): TailwindEmitterResult;
}
