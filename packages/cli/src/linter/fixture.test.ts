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
import { lint } from './index.js';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('Fixture Test', () => {
  it('processes STATES.md with nested component states', () => {
    const path = join(import.meta.dir, 'fixtures', 'STATES.md');
    const content = readFileSync(path, 'utf-8');

    const result = lint(content);

    const btn = result.designSystem.components.get('button-primary');
    expect(btn).toBeDefined();
    expect(btn?.interactive).toBe(true);
    expect(btn?.states.size).toBe(4);

    // base ⊕ hover override
    const hover = btn?.resolvedStates.get('hover');
    expect(hover).toBeDefined();
    const hoverBg = hover?.get('backgroundColor');
    expect(typeof hoverBg === 'object' && hoverBg !== null && 'hex' in hoverBg && hoverBg.hex).toBe('#3d3f42');
    // base padding survives in merged hover state
    expect(hover?.has('padding')).toBe(true);

    // No errors expected — all states defined, focus-visible present, etc.
    const errors = result.findings.filter(f => f.severity === 'error');
    expect(errors).toEqual([]);
  });

  it('processes DESIGN-test.md', () => {
    // Use import.meta.dir to get the current directory in Bun ESM
    const path = join(import.meta.dir, 'fixtures', 'DESIGN-test.md');
    const content = readFileSync(path, 'utf-8');
    
    const result = lint(content);
    
    // Basic state assertions
    expect(result.designSystem.name).toBe('Pacific Mint Dental');
    expect(result.designSystem.colors.size).toBeGreaterThan(0);
    expect(result.designSystem.typography.size).toBeGreaterThan(0);
    
    // Check a specific color
    const surface = result.designSystem.colors.get('surface');
    expect(surface).toBeDefined();
    expect(surface?.hex).toBe('#f9f9ff');
    
    // Check a typography scale
    const displayLg = result.designSystem.typography.get('display-lg');
    expect(displayLg).toBeDefined();
    expect(displayLg?.fontFamily).toBe('Manrope');
    expect(displayLg?.fontSize?.value).toBe(48);
    expect(displayLg?.fontSize?.unit).toBe('px');
    
    // fontWeight: '700' (string) is now parsed as number
    expect(displayLg?.fontWeight).toBe(700);
    // letterSpacing: -0.02em is parsed (model is generous) but flagged by linter
    expect(displayLg?.letterSpacing).toBeDefined();
    expect(displayLg?.letterSpacing?.value).toBe(-0.02);
    expect(displayLg?.letterSpacing?.unit).toBe('em');
    
    // Check lint results — should have no errors for em units now
    const unitErrors = result.findings.filter(
      (d: { severity: string; message: string }) => d.severity === 'error' && d.message.includes('invalid unit')
    );
    expect(unitErrors.length).toBe(0);
    
    // We expect at least the summary info
    expect(result.summary.infos).toBeGreaterThan(0);
  });

  it('processes REGISTRY.md with closed-world rules engaged', () => {
    const path = join(import.meta.dir, 'fixtures', 'REGISTRY.md');
    const content = readFileSync(path, 'utf-8');

    const result = lint(content);

    // Registry shape parses end-to-end and the resolved state carries it.
    const registry = result.designSystem.componentRegistry;
    expect(registry).toBeDefined();
    expect(registry!.size).toBe(5);

    // Kind-derived interactivity.
    expect(registry!.get('button-primary')!.interactive).toBe(true);
    expect(registry!.get('card')!.interactive).toBe(false);

    // composes pre-merge — card-elevated inherits backgroundColor from card.
    const cardElevated = result.designSystem.components.get('card-elevated')!;
    const bg = cardElevated.properties.get('backgroundColor');
    expect(typeof bg === 'object' && bg !== null && 'type' in bg && bg.type === 'color').toBe(true);

    // No unbound-component or missing-required-property errors.
    const unboundErrors = result.findings.filter(d => d.message.includes('not in the component registry'));
    expect(unboundErrors).toEqual([]);
    const missingRequired = result.findings.filter(d => d.message.includes('requires '));
    expect(missingRequired).toEqual([]);
  });

  it('processes RAMPS_AND_PAIRS.md end-to-end with no errors', () => {
    const path = join(import.meta.dir, 'fixtures', 'RAMPS_AND_PAIRS.md');
    const content = readFileSync(path, 'utf-8');

    const result = lint(content);

    // The fixture is intentionally clean: no errors, no pair-contrast or
    // mixed-pair-foreground warnings, and no missing humanName warnings.
    const errors = result.findings.filter(d => d.severity === 'error');
    expect(errors).toEqual([]);
    expect(result.findings.some(d => d.message.includes('Pair'))).toBe(false);
    expect(result.findings.some(d => d.message.includes("missing a 'humanName'"))).toBe(false);

    // Ramp expansion populated steps and the inline-pair flat aliases.
    const ds = result.designSystem;
    expect(ds.colorRamps.get('primary')?.humanName).toBe('Ocean');
    expect(ds.colors.get('primary.500')?.hex).toBe('#3b82f6');
    expect(ds.colors.get('primary-container')).toBeDefined();
    expect(ds.colors.get('on-primary-container')).toBeDefined();

    // Standalone pair created both dotted members and hyphen aliases.
    expect(ds.colorPairs.get('surface-info')).toBeDefined();
    expect(ds.colors.get('surface-info')?.hex).toBe('#e0f2fe');
    expect(ds.colors.get('on-surface-info')?.hex).toBe('#0c4a6e');

    // Tailwind output groups the ramp under a nested object.
    if (!result.tailwindConfig.success) throw new Error('Tailwind emit failed');
    const colors = result.tailwindConfig.data.theme.extend.colors!;
    const primary = colors['primary'] as Record<string, string>;
    expect(primary['DEFAULT']).toBe('#3b82f6');
    expect(primary['500']).toBe('#3b82f6');
    expect(colors['surface-info']).toBe('#e0f2fe');
    expect(colors['primary-container']).toBeDefined();
  });

  it('processes MOTION_AND_ICONS.md end-to-end', () => {
    const path = join(import.meta.dir, 'fixtures', 'MOTION_AND_ICONS.md');
    const content = readFileSync(path, 'utf-8');
    const result = lint(content);

    // No errors expected — motion + iconography parse cleanly and every
    // declared token is referenced by at least one component.
    const errors = result.findings.filter(d => d.severity === 'error');
    expect(errors).toEqual([]);
    expect(result.findings.some(d => d.path?.startsWith('motion.'))).toBe(false);
    expect(result.findings.some(d => d.path?.startsWith('iconography.'))).toBe(false);

    // Motion model is populated.
    const ds = result.designSystem;
    expect(ds.motion.duration.get('fast')?.value).toBe(150);
    expect(ds.motion.duration.get('fast')?.unit).toBe('ms');
    const std = ds.motion.easing.get('standard');
    expect(std?.controlPoints).toEqual([0.4, 0, 0.2, 1]);
    expect(ds.motion.reducedMotion?.duration).toBe('instant');

    // Iconography model is populated.
    expect(ds.iconography?.library.name).toBe('lucide');
    expect(ds.iconography?.library.style).toBe('outlined');
    expect(ds.iconography?.sizes.get('md')?.value).toBe(20);
    expect(ds.iconography?.strokeWeight?.value).toBe(1.5);

    // Tailwind exporter surfaces motion as transitionDuration / timingFunction.
    if (!result.tailwindConfig.success) throw new Error('Tailwind emit failed');
    const ext = result.tailwindConfig.data.theme.extend;
    expect(ext.transitionDuration?.['fast']).toBe('150ms');
    expect(ext.transitionTimingFunction?.['standard']).toBe('cubic-bezier(0.4, 0, 0.2, 1)');

    // Component transitions resolve embedded motion refs to literal values.
    const button = ds.components.get('button-primary')!;
    expect(button.properties.get('transition')).toBe('opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)');
  });
});
