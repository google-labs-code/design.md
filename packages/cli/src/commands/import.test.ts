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

import { describe, it, expect, spyOn } from 'bun:test';
import importCommand from './import.js';
import * as utils from '../utils.js';

describe('import command', () => {
  it('should transform a DTCG tokens.json file into a DESIGN.md string', async () => {
    const dtcgJson = `{
      "color": {
        "primary": { "$value": "#4285f4", "$type": "color" }
      },
      "spacing": {
        "m": { "$value": "16px", "$type": "dimension" }
      },
      "typography": {
        "body": {
          "$value": {
            "fontFamily": "Roboto",
            "fontSize": "1rem"
          },
          "$type": "typography"
        }
      }
    }`;

    const readInputSpy = spyOn(utils, 'readInput').mockResolvedValue(dtcgJson);
    const consoleLogSpy = spyOn(console, 'log').mockImplementation(() => {});

    await importCommand.run({ args: { file: 'dummy.json' } });

    expect(readInputSpy).toHaveBeenCalledWith('dummy.json');
    expect(consoleLogSpy).toHaveBeenCalled();
    
    const output = consoleLogSpy.mock.calls[0][0];

    expect(output).toContain('name: Imported Design System');
    expect(output).toContain('colors:');
    expect(output).toContain("primary: '#4285f4'");
    expect(output).toContain('spacing:');
    expect(output).toContain('m: 16px');
    expect(output).toContain('typography:');
    expect(output).toContain('body:');
    expect(output).toContain('fontFamily: Roboto');
    expect(output).toContain('fontSize: 1rem');
    expect(output).toContain('## Overview');

    readInputSpy.mockRestore();
    consoleLogSpy.mockRestore();
  });
});
