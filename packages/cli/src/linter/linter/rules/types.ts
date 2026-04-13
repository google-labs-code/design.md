import type { DesignSystemState } from '../../model/spec.js';
import type { Finding, Severity } from '../spec.js';

/** A finding emitted by a rule — severity is injected by the descriptor. */
export interface RuleFinding {
  path?: string;
  message: string;
  /** Optional override of the descriptor's default severity. */
  severity?: Severity;
}

/** A pure lint rule: takes immutable state, returns findings. No side effects. */
export type LintRule = (state: DesignSystemState) => Finding[];

export interface RuleDescriptor {
  name: string;
  severity: Severity;
  description: string;
  run: (state: DesignSystemState) => RuleFinding[];
}
