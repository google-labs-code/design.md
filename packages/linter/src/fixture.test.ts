import { describe, it, expect } from 'bun:test';
import { lint } from './index.js';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('Fixture Test', () => {
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
    
    // fontWeight: '700' (string) is not parsed — spec requires number
    expect(displayLg?.fontWeight).toBeUndefined();
    // letterSpacing: -0.02em is parsed (model is generous) but flagged by linter
    expect(displayLg?.letterSpacing).toBeDefined();
    expect(displayLg?.letterSpacing?.value).toBe(-0.02);
    expect(displayLg?.letterSpacing?.unit).toBe('em');
    
    // Check lint results — should have error for em units from modeler
    const unitErrors = result.diagnostics.filter(
      (d: { severity: string; message: string }) => d.severity === 'error' && d.message.includes('invalid unit')
    );
    expect(unitErrors.length).toBeGreaterThan(0);
    
    // We expect at least the summary info
    expect(result.summary.infos).toBeGreaterThan(0);
  });
});
