import { describe, it, expect, beforeEach, afterEach, spyOn } from 'bun:test';
import specCommand from './spec.js';

describe('spec command', () => {
  let logSpy: any;

  beforeEach(() => {
    logSpy = spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it('outputs spec markdown by default', async () => {
    await specCommand.run!({
      args: {},
    } as any);

    expect(logSpy.mock.calls.length).toBe(1);
    const output = logSpy.mock.calls[0][0];
    expect(output).toContain('# DESIGN.md Format');
  });

  it('outputs spec and rules table when --rules is passed', async () => {
    await specCommand.run!({
      args: {
        rules: true,
      },
    } as any);

    expect(logSpy.mock.calls.length).toBe(1);
    const output = logSpy.mock.calls[0][0];
    expect(output).toContain('# DESIGN.md Format');
    expect(output).toContain('| Rule | Severity | What it checks |');
  });

  it('outputs only rules table when --rules-only is passed', async () => {
    await specCommand.run!({
      args: {
        rulesOnly: true,
      },
    } as any);

    expect(logSpy.mock.calls.length).toBe(1);
    const output = logSpy.mock.calls[0][0];
    expect(output).not.toContain('# DESIGN.md Format');
    expect(output).toContain('| Rule | Severity | What it checks |');
  });

  it('outputs JSON when --format json is passed', async () => {
    await specCommand.run!({
      args: {
        format: 'json',
      },
    } as any);

    expect(logSpy.mock.calls.length).toBe(1);
    const outputStr = logSpy.mock.calls[0][0];
    const output = JSON.parse(outputStr);
    expect(output.spec).toBeDefined();
    expect(output.spec).toContain('# DESIGN.md Format');
  });

  it('outputs JSON with rules when --format json and --rules are passed', async () => {
    await specCommand.run!({
      args: {
        format: 'json',
        rules: true,
      },
    } as any);

    expect(logSpy.mock.calls.length).toBe(1);
    const outputStr = logSpy.mock.calls[0][0];
    const output = JSON.parse(outputStr);
    expect(output.spec).toBeDefined();
    expect(output.rules).toBeDefined();
    expect(output.rules.length).toBe(8);
  });
});
