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

export const CssVarDeclarationSchema = z.object({
  name: z.string(),
  value: z.string(),
});

export type CssVarDeclaration = z.infer<typeof CssVarDeclarationSchema>;

// ── Result ─────────────────────────────────────────────────────────

export const CssVarsEmitterResultSchema = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    data: z.object({
      declarations: z.array(CssVarDeclarationSchema),
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

export type CssVarsEmitterResult = z.infer<typeof CssVarsEmitterResultSchema>;

// ── Interface ──────────────────────────────────────────────────────

export interface CssVarsEmitterSpec {
  execute(state: DesignSystemState): CssVarsEmitterResult;
}
