import type { DesignSystemState } from '../../model/spec.js';
import type { Diagnostic } from '../spec.js';

/** A pure lint rule: takes immutable state, returns diagnostics. No side effects. */
export type LintRule = (state: DesignSystemState) => Diagnostic[];
