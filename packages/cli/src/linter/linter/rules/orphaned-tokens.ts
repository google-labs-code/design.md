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

import type { DesignSystemState } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * Reduce a Material Design 3 color token name to its family root.
 *
 * Strips MD3 prefixes (`on-`, `inverse-`) and suffixes (`-container*`,
 * `-fixed*`, `-dim`, `-bright`, `-tint`, `-variant`). Tokens that don't match
 * any MD3 pattern collapse to their own name, which means custom tokens like
 * `brand-blue` keep getting flagged when truly unused.
 */
function colorFamily(name: string): string {
  let n = name;
  // Prefixes. `inverse-on-surface` needs both passes of `on-` removal.
  n = n.replace(/^on-/, '');
  n = n.replace(/^inverse-/, '');
  n = n.replace(/^on-/, '');
  // Suffixes. Order matters: `-container-low` must collapse before `-low`
  // becomes a candidate suffix.
  n = n.replace(/-container.*$/, '');
  n = n.replace(/-fixed.*$/, '');
  n = n.replace(/-(dim|bright|tint|variant)$/, '');
  return n;
}

/**
 * Material Design 3 baseline color families. Tokens belonging to these
 * families are part of the MD3 standard contract and are never flagged as
 * orphaned, even if a given component set doesn't reference them. Custom
 * tokens (e.g. `brand-blue`, `accent-magenta`) still get flagged when unused.
 */
const MD3_STANDARD_FAMILIES = new Set([
  'primary',
  'secondary',
  'tertiary',
  'error',
  'surface',
  'background',
  'outline',
]);

/**
 * Orphaned tokens — tokens defined but never referenced by any component or
 * any sibling token in the same MD3 family. References inside per-state
 * overrides (`states.hover`, etc.) count.
 *
 * Ramp-derived steps and pair-derived members are exempt: they are synthesized
 * from a single declaration, so flagging each individually would flood the
 * report. Only the ramp anchor (or the pair name itself) triggers the warning
 * when nothing in the system references the group. Flat MD3-named tokens are
 * likewise exempt when their family root is referenced or is part of the MD3
 * baseline contract.
 */
export function orphanedTokens(state: DesignSystemState): RuleFinding[] {
  if (state.components.size === 0) return [];

  const referencedPaths = new Set<string>();
  const collect = (value: unknown) => {
    if (typeof value === 'object' && value !== null && 'type' in value) {
      for (const [key, symValue] of state.symbolTable) {
        if (symValue === value) {
          referencedPaths.add(key);
        }
      }
    }
  };

  for (const [, comp] of state.components) {
    for (const [, value] of comp.properties) collect(value);
    for (const [, overrides] of comp.states) {
      for (const [, value] of overrides) collect(value);
    }
  }

  // Treat any reference to a ramp step or pair member as a reference to the
  // group as a whole — so the anchor / pair doesn't get falsely flagged.
  const referencedRamps = new Set<string>();
  const referencedPairs = new Set<string>();
  for (const path of referencedPaths) {
    const colorKey = path.startsWith('colors.') ? path.slice('colors.'.length) : null;
    if (!colorKey) continue;
    const resolved = state.colors.get(colorKey);
    if (resolved?.rampMember) referencedRamps.add(resolved.rampMember.ramp);
    if (resolved?.pairRole) referencedPairs.add(resolved.pairRole.pair);
  }

  // A component referencing one MD3 token implies its semantic siblings are
  // part of the same in-use group (e.g. `primary` brings `on-primary`,
  // `primary-container`, `inverse-primary`, etc.). Compute the set of
  // referenced families so siblings don't get flagged as orphaned.
  const referencedFamilies = new Set<string>();
  for (const path of referencedPaths) {
    if (path.startsWith('colors.')) {
      referencedFamilies.add(colorFamily(path.slice('colors.'.length)));
    }
  }

  const findings: RuleFinding[] = [];
  for (const [name, color] of state.colors) {
    // Skip ramp steps and pair members; they're reported via their group, not individually.
    if (color.rampMember && color.rampMember.ramp !== name) continue;
    if (color.pairRole) continue;

    const path = `colors.${name}`;
    if (referencedPaths.has(path)) continue;

    // For a ramp anchor, also check whether any of its steps or derived pairs are referenced.
    if (color.rampMember && referencedRamps.has(color.rampMember.ramp)) continue;
    const ramp = state.colorRamps.get(name);
    if (ramp) {
      const derivedPairUsed = [...ramp.pairs.keys()].some(k => referencedPairs.has(`${name}-${k}`));
      if (derivedPairUsed) continue;
    }

    // Flat MD3-style tokens: exempt paired siblings of a referenced family
    // and the MD3 baseline families themselves.
    const family = colorFamily(name);
    if (referencedFamilies.has(family)) continue;
    if (MD3_STANDARD_FAMILIES.has(family)) continue;

    findings.push({
      path,
      message: `'${name}' is defined but never referenced by any component.`,
    });
  }

  // Motion + iconography: components record their pre-resolution references
  // in `referencedTokens` so we can see motion/iconography refs that get
  // substituted out of the resolved property value. The reduced-motion
  // fallback also counts as a reference to its named duration / easing.
  const referencedMotionDurations = new Set<string>();
  const referencedMotionEasings = new Set<string>();
  const referencedIconSizes = new Set<string>();
  if (state.motion.reducedMotion) {
    referencedMotionDurations.add(state.motion.reducedMotion.duration);
    referencedMotionEasings.add(state.motion.reducedMotion.easing);
  }
  for (const [, comp] of state.components) {
    for (const path of comp.referencedTokens) {
      if (path.startsWith('motion.duration.')) {
        referencedMotionDurations.add(path.slice('motion.duration.'.length));
      } else if (path.startsWith('motion.easing.')) {
        referencedMotionEasings.add(path.slice('motion.easing.'.length));
      } else if (path.startsWith('iconography.sizes.')) {
        referencedIconSizes.add(path.slice('iconography.sizes.'.length));
      }
    }
  }
  for (const name of state.motion.duration.keys()) {
    if (!referencedMotionDurations.has(name)) {
      findings.push({
        path: `motion.duration.${name}`,
        message: `Motion duration '${name}' is defined but never referenced by any component.`,
      });
    }
  }
  for (const name of state.motion.easing.keys()) {
    if (!referencedMotionEasings.has(name)) {
      findings.push({
        path: `motion.easing.${name}`,
        message: `Motion easing '${name}' is defined but never referenced by any component.`,
      });
    }
  }
  if (state.iconography) {
    for (const name of state.iconography.sizes.keys()) {
      if (!referencedIconSizes.has(name) && state.iconography.defaultSize !== name) {
        findings.push({
          path: `iconography.sizes.${name}`,
          message: `Icon size '${name}' is defined but never referenced by any component.`,
        });
      }
    }
  }

  return findings;
}

export const orphanedTokensRule: RuleDescriptor = {
  name: 'orphaned-tokens',
  severity: 'warning',
  description: 'Orphaned tokens — tokens defined but never referenced by any component.',
  run: orphanedTokens,
};
