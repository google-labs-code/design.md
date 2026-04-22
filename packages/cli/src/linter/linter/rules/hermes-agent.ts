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

export function hermesAgentContract(state: DesignSystemState): RuleFinding[] {
  if (state.profile !== 'hermes') return [];

  const findings: RuleFinding[] = [];
  const agent = state.agent;
  if (!agent || typeof agent !== 'object' || Array.isArray(agent)) {
    return [{
      path: 'agent',
      message: 'Hermes profile requires an agent block describing inference guardrails.',
    }];
  }

  if (typeof agent['mode'] !== 'string' || agent['mode'].trim().length === 0) {
    findings.push({
      path: 'agent.mode',
      message: 'Hermes profile requires agent.mode to be a non-empty string.',
    });
  }

  if (!Array.isArray(agent['fallbackOrder']) || agent['fallbackOrder'].length === 0) {
    findings.push({
      path: 'agent.fallbackOrder',
      message: 'Hermes profile requires agent.fallbackOrder to be a non-empty array.',
    });
  }

  for (const key of ['canInfer', 'mustNotInfer'] as const) {
    const value = agent[key];
    if (value !== undefined && !Array.isArray(value)) {
      findings.push({
        path: `agent.${key}`,
        message: `agent.${key} must be an array when provided.`,
      });
    }
  }

  return findings;
}

export const hermesAgentContractRule: RuleDescriptor = {
  name: 'hermes-agent-contract',
  severity: 'warning',
  description: 'Hermes profile requires explicit agent inference guardrails.',
  run: hermesAgentContract,
};
