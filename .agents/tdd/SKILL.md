---
name: tdd-red-green-refactor
description: >
  Enforces a disciplined Red-Green-Refactor (TDD) workflow in TypeScript/Node.js. 
  Use this whenever creating new features, fixing bugs, or migrating logic to ensure 
  high-quality, verifiable implementations.
---

# Red-Green-Refactor (TDD) Skill: TypeScript Edition

This skill implements a structural framework for AI-assisted programming to ensure every line of code is verifiable, typed, and purposeful.

## The Three-Phase Cycle

### Phase 1: Red (Establish Failure)
You must prove the feature does not exist and that your test is valid.
1. **Write One Test**: Create a single test case (e.g., in Vitest or Jest) for the next small piece of behavior.
2. **Execute & Fail**: Run the test. It must fail. 
3. **Verify**: Ensure the failure is related to the missing logic (e.g., `ReferenceError: add is not defined`) and not a configuration error.

### Phase 2: Green (Minimal Pass)
Make the test pass as quickly and simply as possible.
1. **Minimal Implementation**: Write the simplest code that satisfies the test. Do not build for the future; focus strictly on the current "Red" test.
2. **Run Tests**: Execute the suite. All tests must be Green.
3. **Evidence**: The transition from Red to Green is the "Proof of Work" for the developer.

### Phase 3: Refactor (Clean Up)
Improve the code structure while maintaining the "Green" state.
1. **Clean Up**: Improve naming, remove duplication, and optimize the code written in Phase 2.
2. **Safety Net**: Rerun the tests after every change. If they turn Red, revert the change immediately.

---

## Core Operational Rules

### 1. No "Horizontal Splurging"
You are strictly forbidden from writing a large "splurge" of multiple tests at once. You must follow a strictly incremental loop:
- **Write 1 Test -> See it Fail -> Write 1 Fix -> See it Pass**.
- Repeat this loop for every sub-feature.

### 2. Impose Backpressure
Use automated assertions and strong typing (TypeScript) as backpressure to prevent the AI from "guessing" the solution or "playing in the mud" with low-quality code.

### 3. Verification of Integrity
Never modify an existing test to make a failing implementation pass. If a test must change, it must be because the requirement changed, not because the code is difficult to write.

---

## Example Workflow (TypeScript + Vitest)

**Step 1: Red**
```typescript
// math.test.ts
import { describe, it, expect } from 'vitest';
import { add } from './math';

describe('add', () => {
  it('should sum two numbers', () => {
    expect(add(2, 2)).toBe(4); // Fails: ReferenceError: add is not defined
  });
});
```

**Step 2: Green**
```typescript
// math.ts
export const add = (a: any, b: any) => {
  return 4; // Passes: Minimal code to satisfy the test
};
```

**Step 3: Refactor**
```typescript
// math.ts
/**
 * Sums two numbers with explicit type safety.
 */
export const add = (a: number, b: number): number => {
  return a + b; // Passes: Proper implementation with safety net
};
```
