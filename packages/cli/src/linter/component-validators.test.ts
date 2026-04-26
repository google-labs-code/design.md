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
import {
  validateColor,
  validateDimension,
  validatePaddingShorthand,
  validateOpacity,
  validateIconSize,
  validateBorder,
  validateShadow,
  validateElevation,
  validateTransition,
  COMPONENT_SUB_TOKEN_VALIDATORS,
  TYPED_COMPONENT_SUB_TOKENS,
} from './component-validators.js';

describe('validateColor', () => {
  it('accepts hex colors', () => {
    expect(validateColor('#000').ok).toBe(true);
    expect(validateColor('#abc123').ok).toBe(true);
    expect(validateColor('#ffffff80').ok).toBe(true);
  });
  it('accepts token references', () => {
    expect(validateColor('{colors.primary}').ok).toBe(true);
  });
  it('rejects garbage', () => {
    expect(validateColor('red').ok).toBe(false);
    expect(validateColor('rgb(0,0,0)').ok).toBe(false);
  });
});

describe('validateDimension', () => {
  it('accepts dimensions', () => {
    expect(validateDimension('12px').ok).toBe(true);
    expect(validateDimension('1.5rem').ok).toBe(true);
  });
  it('rejects bare numbers', () => {
    expect(validateDimension('12').ok).toBe(false);
  });
});

describe('validatePaddingShorthand', () => {
  it('accepts 1–4 dimensions', () => {
    expect(validatePaddingShorthand('12px').ok).toBe(true);
    expect(validatePaddingShorthand('12px 16px').ok).toBe(true);
    expect(validatePaddingShorthand('12px 16px 12px').ok).toBe(true);
    expect(validatePaddingShorthand('12px 16px 12px 16px').ok).toBe(true);
  });
  it('rejects 5+ tokens', () => {
    expect(validatePaddingShorthand('1px 2px 3px 4px 5px').ok).toBe(false);
  });
  it('rejects malformed parts', () => {
    expect(validatePaddingShorthand('12px nope').ok).toBe(false);
  });
});

describe('validateOpacity', () => {
  it('accepts 0..1', () => {
    expect(validateOpacity('0').ok).toBe(true);
    expect(validateOpacity('0.5').ok).toBe(true);
    expect(validateOpacity('1').ok).toBe(true);
  });
  it('rejects out-of-range', () => {
    expect(validateOpacity('1.5').ok).toBe(false);
    expect(validateOpacity('-0.1').ok).toBe(false);
    expect(validateOpacity('2').ok).toBe(false);
  });
  it('rejects non-numeric values', () => {
    expect(validateOpacity('half').ok).toBe(false);
    expect(validateOpacity('50%').ok).toBe(false);
  });
});

describe('validateIconSize', () => {
  it('accepts auto', () => {
    expect(validateIconSize('auto').ok).toBe(true);
  });
  it('accepts dimensions', () => {
    expect(validateIconSize('24px').ok).toBe(true);
  });
  it('accepts token references', () => {
    expect(validateIconSize('{typography.body-md}').ok).toBe(true);
  });
  it('rejects garbage', () => {
    expect(validateIconSize('big').ok).toBe(false);
  });
});

describe('validateBorder', () => {
  it('accepts CSS shorthand', () => {
    expect(validateBorder('1px solid #000').ok).toBe(true);
    expect(validateBorder('2px dashed {colors.outline}').ok).toBe(true);
  });
  it('accepts none', () => {
    expect(validateBorder('none').ok).toBe(true);
  });
  it('rejects unknown style', () => {
    expect(validateBorder('1px squiggly #000').ok).toBe(false);
  });
  it('rejects bad width', () => {
    expect(validateBorder('thick solid #000').ok).toBe(false);
  });
  it('rejects bad color', () => {
    expect(validateBorder('1px solid red').ok).toBe(false);
  });
});

describe('validateShadow', () => {
  it('accepts CSS shadow with hex color', () => {
    expect(validateShadow('0 4px 8px #00000020').ok).toBe(true);
  });
  it('accepts CSS shadow with rgba', () => {
    expect(validateShadow('0 4px 8px rgba(0,0,0,0.1)').ok).toBe(true);
  });
  it('accepts inset shadows', () => {
    expect(validateShadow('inset 0 1px 0 rgba(255,255,255,0.2)').ok).toBe(true);
  });
  it('accepts elevation references', () => {
    expect(validateShadow('{elevation.raised}').ok).toBe(true);
  });
  it('accepts none', () => {
    expect(validateShadow('none').ok).toBe(true);
  });
  it('rejects shadows without a color', () => {
    expect(validateShadow('0 4px 8px').ok).toBe(false);
  });
});

describe('validateElevation', () => {
  it('accepts {elevation.*} reference', () => {
    expect(validateElevation('{elevation.raised}').ok).toBe(true);
  });
  it('accepts bare semantic name', () => {
    expect(validateElevation('raised').ok).toBe(true);
  });
  it('rejects whitespace-laden values', () => {
    expect(validateElevation('1px solid #000').ok).toBe(false);
  });
});

describe('validateTransition', () => {
  it('accepts shorthand with duration in ms', () => {
    expect(validateTransition('opacity 200ms ease-out').ok).toBe(true);
  });
  it('accepts shorthand with duration in s', () => {
    expect(validateTransition('transform 0.3s ease-in-out').ok).toBe(true);
  });
  it('rejects missing duration', () => {
    expect(validateTransition('opacity').ok).toBe(false);
  });
  it('rejects non-time duration unit', () => {
    expect(validateTransition('opacity 200px ease-out').ok).toBe(false);
  });
});

describe('COMPONENT_SUB_TOKEN_VALIDATORS map', () => {
  it('covers the core eight original sub-tokens', () => {
    for (const name of ['backgroundColor', 'textColor', 'typography', 'rounded', 'padding', 'size', 'height', 'width']) {
      expect(COMPONENT_SUB_TOKEN_VALIDATORS.has(name)).toBe(true);
    }
  });
  it('covers the new typed sub-tokens', () => {
    for (const name of ['border', 'borderColor', 'borderWidth', 'shadow', 'elevation', 'gap', 'iconSize', 'opacity', 'transition']) {
      expect(COMPONENT_SUB_TOKEN_VALIDATORS.has(name)).toBe(true);
    }
  });
  it('TYPED_COMPONENT_SUB_TOKENS lists every keyed validator', () => {
    expect(TYPED_COMPONENT_SUB_TOKENS.length).toBe(COMPONENT_SUB_TOKEN_VALIDATORS.size);
  });
});
