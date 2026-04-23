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

import React from 'react';
import { Box, Text } from 'ink';
import type { ImportStep, FrameworkName } from './spec.js';

interface ImportProgressProps {
  steps: ImportStep[];
  done: boolean;
  dryRun?: boolean;
}

const FRAMEWORK_LABELS: Record<FrameworkName, string> = {
  next: 'Next.js',
  nuxt: 'Nuxt',
  vite: 'Vite',
  sveltekit: 'SvelteKit',
  remix: 'Remix',
  astro: 'Astro',
  cra: 'Create React App',
  gatsby: 'Gatsby',
  angular: 'Angular',
  'vue-cli': 'Vue CLI',
  node: 'generic Node.js',
  unknown: 'unknown project',
};

function renderStep(step: ImportStep, key: number): React.ReactElement {
  switch (step.kind) {
    case 'detect-start':
      return <Text key={key}>◐ Detecting framework…</Text>;
    case 'detect-done': {
      const label = FRAMEWORK_LABELS[step.framework.name];
      const version = step.framework.version ? ` ${step.framework.version}` : '';
      const evidence =
        step.framework.evidence.length > 0
          ? ` (${step.framework.evidence.join(', ')})`
          : '';
      return (
        <Text key={key} color="green">
          ✓ Detected {label}
          {version}
          <Text color="gray">{evidence}</Text>
        </Text>
      );
    }
    case 'scan-start':
      return <Text key={key}>◐ Scanning project for design sources…</Text>;
    case 'scan-done':
      return (
        <Text key={key} color="green">
          ✓ Found {step.sources.tailwindConfigs.length} tailwind config(s),{' '}
          {step.sources.cssFiles.length} CSS file(s), {step.sources.dtcgFiles.length}{' '}
          DTCG token file(s)
        </Text>
      );
    case 'parse-source':
      return (
        <Text key={key}>
          {'  '}✓ <Text bold>{step.source}</Text>{' '}
          <Text color="gray">{step.path}</Text> — {step.counts.colors} colors,{' '}
          {step.counts.typography} typography, {step.counts.spacing} spacing,{' '}
          {step.counts.rounded} rounded
        </Text>
      );
    case 'parse-skip':
      return (
        <Text key={key} color="yellow">
          {'  '}⚠ skipped {step.source} {step.path} ({step.reason})
        </Text>
      );
    case 'merge-done':
      return (
        <Text key={key} color="cyan">
          ✓ Merged: {step.totals.colors} colors, {step.totals.typography} typography,{' '}
          {step.totals.spacing} spacing, {step.totals.rounded} rounded,{' '}
          {step.totals.components} components
        </Text>
      );
    case 'write-done':
      return (
        <Text key={key} color="green">
          ✓ Wrote {step.outputPath} ({step.bytes} bytes)
        </Text>
      );
    case 'error':
      return (
        <Text key={key} color="red">
          ✗ {step.message}
          {step.path ? ` (${step.path})` : ''}
        </Text>
      );
  }
}

export const ImportProgress: React.FC<ImportProgressProps> = ({ steps, done, dryRun }) => {
  return (
    <Box flexDirection="column">
      {steps.map((step, i) => renderStep(step, i))}
      {done && dryRun ? (
        <Text color="gray">(dry-run — no file written)</Text>
      ) : null}
    </Box>
  );
};
