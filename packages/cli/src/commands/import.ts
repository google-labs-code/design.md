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

import { defineCommand } from 'citty';
import { readInput } from '../utils.js';
import * as yaml from 'js-yaml';
import { parseDimensionParts } from '../linter/model/spec.js';

// A minimal representation of the DTCG structure we care about.
interface DtcgToken {
  $value: any;
  $type: string;
}

interface DtcgGroup {
  [key: string]: DtcgToken | DtcgGroup;
}

interface DtcgFile {
  [key: string]: DtcgGroup;
}

// A minimal representation of the DESIGN.md YAML structure.
interface DesignMdYaml {
  name: string;
  description?: string;
  colors?: Record<string, string>;
  typography?: Record<string, any>;
  spacing?: Record<string, string>;
  rounded?: Record<string, string>;
}

function transformDtcgToDesignMd(dtcg: DtcgFile): DesignMdYaml {
  const designMd: DesignMdYaml = {
    name: 'Imported Design System',
    description: 'Generated from a DTCG tokens.json file.',
  };

  if (dtcg.color) {
    designMd.colors = {};
    for (const [name, token] of Object.entries(dtcg.color)) {
      if (typeof token === 'object' && '$value' in token) {
        // Assuming the value is a hex string or similar primitive
        if (typeof token.$value === 'string') {
          designMd.colors[name] = token.$value;
        } else if (typeof token.$value === 'object' && token.$value !== null && 'hex' in token.$value) {
          designMd.colors[name] = (token.$value as any).hex;
        }
      }
    }
  }

  const processDimensionGroup = (group: DtcgGroup): Record<string, string> => {
    const result: Record<string, string> = {};
    for (const [name, token] of Object.entries(group)) {
      if (typeof token === 'object' && '$value' in token && token.$type === 'dimension') {
        const parts = parseDimensionParts(token.$value);
        if (parts) {
          result[name] = `${parts.value}${parts.unit}`;
        }
      }
    }
    return result;
  };

  if (dtcg.spacing) {
    designMd.spacing = processDimensionGroup(dtcg.spacing);
  }

  if (dtcg.rounded) {
    designMd.rounded = processDimensionGroup(dtcg.rounded);
  }
  
  if (dtcg.typography) {
    designMd.typography = {};
    for (const [name, token] of Object.entries(dtcg.typography)) {
      if (typeof token === 'object' && '$value' in token && token.$type === 'typography') {
        const typoValue = token.$value as any;
        const typo: Record<string, any> = {};
        if(typoValue.fontFamily) typo.fontFamily = typoValue.fontFamily;
        if(typoValue.fontWeight) typo.fontWeight = typoValue.fontWeight;
        if(typoValue.fontSize) {
            const parts = parseDimensionParts(typoValue.fontSize);
            if (parts) typo.fontSize = `${parts.value}${parts.unit}`;
        }
        if(typoValue.letterSpacing) {
            const parts = parseDimensionParts(typoValue.letterSpacing);
            if (parts) typo.letterSpacing = `${parts.value}${parts.unit}`;
        }
        if(typoValue.lineHeight) typo.lineHeight = typoValue.lineHeight; // unitless
        designMd.typography[name] = typo;
      }
    }
  }

  return designMd;
}

export default defineCommand({
  meta: {
    name: 'import',
    description: 'Import a tokens.json file and generate a DESIGN.md.',
  },
  args: {
    file: {
      type: 'positional',
      description: 'Path to tokens.json (use "-" for stdin)',
      required: true,
    },
  },
  async run({ args }) {
    try {
      const content = await readInput(args.file);
      const dtcg = JSON.parse(content) as DtcgFile;
      
      const designMdTokens = transformDtcgToDesignMd(dtcg);
      const yamlFrontmatter = yaml.dump(designMdTokens);

      const markdown = `---
${yamlFrontmatter}---

## Overview

This design system was generated from a Design Tokens Community Group (DTCG) formatted JSON file.

## Colors

The color palette defines the core visual identity.

## Typography

The typographic scale provides hierarchy and readability.
`;

      console.log(markdown);
    } catch (e) {
      const error = e as Error;
      console.error(JSON.stringify({ error: `Failed to import file: ${error.message}` }));
      process.exitCode = 1;
    }
  },
});
