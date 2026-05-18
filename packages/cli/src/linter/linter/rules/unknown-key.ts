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

import type { DesignSystemState } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * Unknown key — warns when a top-level YAML key (in front matter or a fenced
 * yaml block) is not part of the known schema. A misspelled section name
 * (e.g. `colours`) is otherwise silently discarded by the parser, leaving the
 * author with no signal that an entire block of tokens was ignored.
 */
export function unknownKey(state: DesignSystemState): RuleFinding[] {
  return (state.unknownKeys ?? []).map(key => ({
    path: key,
    message: `Unexpected unknown top-level key "${key}"`,
  }));
}

export const unknownKeyRule: RuleDescriptor = {
  name: 'unknown-key',
  severity: 'warning',
  description: 'Unknown key — warns when a top-level YAML key is not part of the known schema.',
  run: unknownKey,
};
