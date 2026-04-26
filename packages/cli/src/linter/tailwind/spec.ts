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
// Colors can be flat strings (`primary: "#1a1c1e"`) or nested ramp/pair
// objects (`primary: { DEFAULT: "...", "500": "...", ... }`). Tailwind
// natively understands both forms.
export const TailwindThemeExtendSchema = z.object({
  colors: z.record(z.union([z.string(), z.record(z.string())])).optional(),
  fontFamily: z.record(z.array(z.string())).optional(),
  fontSize: z.record(z.tuple([z.string(), z.record(z.string())])).optional(),
  borderRadius: z.record(z.string()).optional(),
  spacing: z.record(z.string()).optional(),
  /** Map of elevation token name → CSS box-shadow string. */
  boxShadow: z.record(z.string()).optional(),
  /** Map of motion duration token name → CSS duration string (e.g., '150ms'). */
  transitionDuration: z.record(z.string()).optional(),
  /** Map of motion easing token name → CSS easing string (keyword or cubic-bezier). */
  transitionTimingFunction: z.record(z.string()).optional(),
});

export type TailwindThemeExtend = z.infer<typeof TailwindThemeExtendSchema>;

/**
 * A Tailwind plugin component definition. Maps a class selector (e.g., `.btn-primary`)
 * to its base styles plus per-state nested rules under `&:hover`, `&:focus-visible`,
 * `&:active`, `&:disabled`. Shape mirrors what Tailwind's `addComponents()` accepts.
 */
export type TailwindComponentRule = {
  [property: string]: string | TailwindComponentRule;
};

export const TailwindEmitterOptionsSchema = z.object({
  /** When true, emit a `plugin` array with component rules including state variants. */
  components: z.boolean().optional(),
});
export type TailwindEmitterOptions = z.infer<typeof TailwindEmitterOptionsSchema>;

export const TailwindEmitterResultSchema = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    data: z.object({
      theme: z.object({
        extend: TailwindThemeExtendSchema
      }),
      plugin: z.record(z.unknown()).optional(),
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
  execute(state: DesignSystemState, options?: TailwindEmitterOptions): TailwindEmitterResult;
}
