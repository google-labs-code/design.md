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
import { ModelHandler } from '../../model/handler.js';
import { mixedPairForeground } from './mixed-pair-foreground.js';
import type { ParsedDesignSystem } from '../../parser/spec.js';

const model = new ModelHandler();

function build(input: Partial<ParsedDesignSystem>) {
  return model.execute({ sourceMap: new Map(), ...input }).designSystem;
}

describe('mixed-pair-foreground rule', () => {
  it('passes when a component pairs container with its matching on-container', () => {
    const state = build({
      colors: {
        'surface-info': { type: 'pair', container: '#E0F2FE', onContainer: '#0C4A6E' },
      },
      components: {
        callout: {
          backgroundColor: '{colors.surface-info}',
          textColor: '{colors.on-surface-info}',
        },
      },
    });
    expect(mixedPairForeground(state)).toEqual([]);
  });

  it('warns when a component uses the container with an unrelated foreground', () => {
    const state = build({
      colors: {
        'surface-info': { type: 'pair', container: '#E0F2FE', onContainer: '#0C4A6E' },
        ink: '#1A1C1E',
      },
      components: {
        callout: {
          backgroundColor: '{colors.surface-info}',
          textColor: '{colors.ink}',
        },
      },
    });
    const findings = mixedPairForeground(state);
    expect(findings.length).toBe(1);
    expect(findings[0]?.path).toBe('components.callout.textColor');
    expect(findings[0]?.message).toContain("'callout'");
    expect(findings[0]?.message).toContain('on-container');
  });

  it('ignores components whose backgroundColor is not a pair container', () => {
    const state = build({
      colors: { neutral: '#F7F5F2', ink: '#1A1C1E' },
      components: {
        body: {
          backgroundColor: '{colors.neutral}',
          textColor: '{colors.ink}',
        },
      },
    });
    expect(mixedPairForeground(state)).toEqual([]);
  });
});
