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
import { fixSectionOrder } from './handler.js';
import type { FixerInput } from './spec.js';

describe('FixerHandler', () => {
  it('should reorder sections to canonical order', () => {
    const input: FixerInput = {
      content: '',
      sections: [
        { heading: 'Colors', content: '## Colors\ncontent' },
        { heading: 'Overview', content: '## Overview\ncontent' },
      ]
    };

    const result = fixSectionOrder(input);

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.fixedContent).toContain('## Overview\ncontent\n## Colors\ncontent');
    }
  });

  it('should preserve prelude at the top', () => {
    const input: FixerInput = {
      content: '',
      sections: [
        { heading: 'Colors', content: '## Colors\ncontent' },
        { heading: '', content: 'Prelude content' },
        { heading: 'Overview', content: '## Overview\ncontent' },
      ]
    };

    const result = fixSectionOrder(input);

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.fixedContent.startsWith('Prelude content')).toBe(true);
    }
  });

  it('should append unknown sections at the end', () => {
    const input: FixerInput = {
      content: '',
      sections: [
        { heading: 'Unknown', content: '## Unknown\ncontent' },
        { heading: 'Colors', content: '## Colors\ncontent' },
        { heading: 'Overview', content: '## Overview\ncontent' },
      ]
    };

    const result = fixSectionOrder(input);

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.fixedContent.endsWith('## Unknown\ncontent')).toBe(true);
    }
  });

  it('should recognize "Brand & Style" as a known section via alias', () => {
    const input: FixerInput = {
      content: '',
      sections: [
        { heading: 'Colors', content: '## Colors\ncontent' },
        { heading: 'Brand & Style', content: '## Brand & Style\ncontent' },
      ]
    };

    const result = fixSectionOrder(input);

    expect(result.success).toBe(true);
    if (result.success) {
      // Brand & Style (alias for Overview) should come before Colors
      expect(result.fixedContent).toContain('## Brand & Style\ncontent\n## Colors\ncontent');
    }
  });

  it('should recognize "Layout & Spacing" as a known section via alias', () => {
    const input: FixerInput = {
      content: '',
      sections: [
        { heading: 'Layout & Spacing', content: '## Layout & Spacing\ncontent' },
        { heading: 'Colors', content: '## Colors\ncontent' },
      ]
    };

    const result = fixSectionOrder(input);

    expect(result.success).toBe(true);
    if (result.success) {
      // Colors should come before Layout & Spacing
      expect(result.fixedContent).toContain('## Colors\ncontent\n## Layout & Spacing\ncontent');
    }
  });

  it('should handle a full real-world section order with aliases', () => {
    const input: FixerInput = {
      content: '',
      sections: [
        { heading: 'Components', content: '## Components\ncontent' },
        { heading: 'Brand & Style', content: '## Brand & Style\ncontent' },
        { heading: 'Typography', content: '## Typography\ncontent' },
        { heading: 'Colors', content: '## Colors\ncontent' },
        { heading: 'Layout & Spacing', content: '## Layout & Spacing\ncontent' },
        { heading: 'Elevation & Depth', content: '## Elevation & Depth\ncontent' },
        { heading: 'Shapes', content: '## Shapes\ncontent' },
      ]
    };

    const result = fixSectionOrder(input);

    expect(result.success).toBe(true);
    if (result.success) {
      const idx = (heading: string) => result.fixedContent.indexOf(`## ${heading}`);
      expect(idx('Brand & Style')).toBeLessThan(idx('Colors'));
      expect(idx('Colors')).toBeLessThan(idx('Typography'));
      expect(idx('Typography')).toBeLessThan(idx('Layout & Spacing'));
      expect(idx('Layout & Spacing')).toBeLessThan(idx('Elevation & Depth'));
      expect(idx('Elevation & Depth')).toBeLessThan(idx('Shapes'));
      expect(idx('Shapes')).toBeLessThan(idx('Components'));
    }
  });
});
