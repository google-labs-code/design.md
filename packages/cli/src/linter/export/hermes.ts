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

import type { ComponentDef, DesignSystemState } from '../model/spec.js';

export interface HermesExportOptions {
  includeHermesMetadata?: boolean;
  includePlatformComponents?: boolean;
}

export interface HermesExportPayload {
  metadata?: Record<string, unknown>;
  platformComponents?: Record<string, Record<string, unknown>>;
}

export function buildHermesExportPayload(
  state: DesignSystemState,
  options?: HermesExportOptions,
): HermesExportPayload | undefined {
  if (!hasHermesSemantics(state)) {
    return undefined;
  }

  const metadata = options?.includeHermesMetadata ? buildHermesMetadata(state) : undefined;
  const platformComponents = options?.includePlatformComponents
    ? serializeMergedPlatformComponents(state.mergedPlatformComponents)
    : undefined;

  if (!metadata && !platformComponents) {
    return undefined;
  }

  return {
    ...(metadata ? { metadata } : {}),
    ...(platformComponents ? { platformComponents } : {}),
  };
}

function hasHermesSemantics(state: DesignSystemState): boolean {
  if (state.profile === 'hermes') return true;
  if (state.declaredProfile?.toLowerCase().startsWith('hermes')) return true;
  if (state.agent || state.accessibility || state.platformOverrides) return true;
  return Boolean(state.mergedPlatformComponents && state.mergedPlatformComponents.size > 0);
}

function buildHermesMetadata(state: DesignSystemState): Record<string, unknown> | undefined {
  const metadata: Record<string, unknown> = {
    profile: state.profile,
  };

  if (state.declaredProfile) metadata.declaredProfile = state.declaredProfile;
  if (state.agent) metadata.agent = state.agent;
  if (state.accessibility) metadata.accessibility = state.accessibility;
  if (state.platformOverrides) metadata.platformOverrides = state.platformOverrides;

  return Object.keys(metadata).length > 0 ? metadata : undefined;
}

function serializeMergedPlatformComponents(
  mergedPlatformComponents: Map<string, Map<string, ComponentDef>> | undefined,
): Record<string, Record<string, unknown>> | undefined {
  if (!mergedPlatformComponents || mergedPlatformComponents.size === 0) {
    return undefined;
  }

  const platforms: Record<string, Record<string, unknown>> = {};
  for (const [platform, components] of mergedPlatformComponents.entries()) {
    const serializedComponents: Record<string, unknown> = {};
    for (const [componentName, componentDef] of components.entries()) {
      serializedComponents[componentName] = serializeComponentDef(componentDef);
    }

    if (Object.keys(serializedComponents).length > 0) {
      platforms[platform] = serializedComponents;
    }
  }

  return Object.keys(platforms).length > 0 ? platforms : undefined;
}

function serializeComponentDef(component: ComponentDef): Record<string, unknown> {
  return {
    properties: Object.fromEntries(component.properties),
    extensionProperties: Object.fromEntries(component.extensionProperties),
    unresolvedRefs: component.unresolvedRefs,
  };
}
