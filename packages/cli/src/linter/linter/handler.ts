import type {
  LinterSpec,
  LintResult,
  GradedTokenEdits,
} from './spec.js';
import type { DesignSystemState } from '../model/spec.js';
import { runLinter, preEvaluate } from './runner.js';

/**
 * @deprecated Use `runLinter()` and `preEvaluate()` from './runner.js' directly.
 * This class exists only for backward compatibility.
 */
export class LinterHandler implements LinterSpec {
  lint(state: DesignSystemState): LintResult {
    return runLinter(state);
  }

  preEvaluate(state: DesignSystemState): GradedTokenEdits {
    return preEvaluate(state);
  }
}
