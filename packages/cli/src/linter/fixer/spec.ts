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

export const FixerInputSchema = z.object({
  content: z.string(),
  sections: z.array(z.object({
    heading: z.string(),
    content: z.string(),
  })),
});

export type FixerInput = z.infer<typeof FixerInputSchema>;

export type FixerResult =
  | { success: true; fixedContent: string; details?: { beforeOrder: string[]; afterOrder: string[] } }
  | { success: false; error: string };
