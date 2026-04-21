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

import { describe, it, expect } from 'bun:test';
import type { LintRule, RuleDescriptor } from './types.js';
import { DEFAULT_RULE_DESCRIPTORS } from './index.js';

describe('LintRule type', () => {
  it('accepts a function that takes state and returns findings', () => {
    const rule: LintRule = (_state) => [];
    expect(rule({
      colors: new Map(),
      typography: new Map(),
      rounded: new Map(),
      spacing: new Map(),
      components: new Map(),
      symbolTable: new Map(),
    })).toEqual([]);
  });

  it('accepts a RuleDescriptor object', () => {
    const descriptor: RuleDescriptor = {
      name: 'test-rule',
      severity: 'info',
      description: 'Test description',
      run: (_state: any) => [],
    };
    expect(descriptor.name).toBe('test-rule');
  });

  it('has all rules in DEFAULT_RULE_DESCRIPTORS', () => {
    expect(DEFAULT_RULE_DESCRIPTORS.length).toBe(8);
    DEFAULT_RULE_DESCRIPTORS.forEach((rule: RuleDescriptor) => {
      expect(rule.name).toBeTruthy();
      expect(rule.severity).toBeTruthy();
      expect(rule.description).toBeTruthy();
      expect(rule.run).toBeTruthy();
    });
  });
});
