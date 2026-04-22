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

export function hermesPlatformOverrides(state: DesignSystemState): RuleFinding[] {
  if (state.profile !== 'hermes' || state.platformOverrides === undefined) return [];
  if (!state.platformOverrides || typeof state.platformOverrides !== 'object' || Array.isArray(state.platformOverrides)) {
    return [{
      path: 'platformOverrides',
      message: 'platformOverrides must be an object keyed by surface name.',
    }];
  }

  const findings: RuleFinding[] = [];
  for (const [platform, rawOverride] of Object.entries(state.platformOverrides)) {
    if (!rawOverride || typeof rawOverride !== 'object' || Array.isArray(rawOverride)) {
      findings.push({
        path: `platformOverrides.${platform}`,
        message: 'Each platform override must be an object.',
      });
      continue;
    }

    const override = rawOverride as Record<string, unknown>;
    if (override['components'] !== undefined) {
      if (!override['components'] || typeof override['components'] !== 'object' || Array.isArray(override['components'])) {
        findings.push({
          path: `platformOverrides.${platform}.components`,
          message: 'platformOverrides.<platform>.components must be an object when provided.',
        });
      } else {
        for (const componentName of Object.keys(override['components'] as Record<string, unknown>)) {
          if (!state.components.has(componentName)) {
            findings.push({
              path: `platformOverrides.${platform}.components.${componentName}`,
              message: `Platform override references unknown base component '${componentName}'.`,
            });
          }
        }
      }
    }
  }

  return findings;
}

export const hermesPlatformOverridesRule: RuleDescriptor = {
  name: 'hermes-platform-overrides',
  severity: 'warning',
  description: 'Hermes profile validates platform override structure when present.',
  run: hermesPlatformOverrides,
};
