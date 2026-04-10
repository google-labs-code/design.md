---
name: typed-service-contracts
description: Architecture standard for building robust, type-safe TypeScript services using the "Spec and Handler" pattern. Use when building CLIs, libraries, or complex business logic.
---

# Typed Service Contracts (Spec & Handler Pattern)

This skill defines a **Vertical Slice Architecture** backed by **Design by Contract (DbC)** principles. It treats application logic as rigorously defined Units of Work where inputs are parsed (not just validated) and errors are treated as values (Result Pattern) rather than exceptions.

## When to use this skill

- **Building CLIs or Libraries:** When you need strict boundaries between user input and system logic.
- **Complex Validation:** When inputs require transformation (parsing) before being useful (e.g., ensuring a string is a valid file path).
- **High-Reliability Requirements:** When you cannot afford unhandled runtime exceptions and need exhaustive error handling.
- **Testing Focus:** When you want to separate data validation tests from business logic tests.

## Architecture Components

### 1. The Spec (`spec.ts`)
The "Contract" or "Port". It defines the *What*. It must contain:
- **Input Schema:** A Zod schema that parses raw input into a valid DTO.
- **Output Schema:** A Zod schema defining the successful data structure.
- **Error Schema:** A discriminated union of specific failure modes (not generic errors).
- **Result Type:** A `DiscriminatedUnion` of `Success | Failure`.
- **Interface:** The capability definition (e.g., `interface ConfigureSpec`).

### 2. The Handler (`handler.ts`)
The "Implementation" or "Adapter". It defines the *How*. It must:
- Implement the Interface defined in the Spec.
- Be an "Impure" class that handles side effects (File System, API calls).
- **NEVER throw** exceptions. It must catch internal errors and map them to the `Result` type.

---

## How to use it

### Step 1: Define the Contract (`spec.ts`)

Follow this template to define the boundaries.

```typescript
import { z } from 'zod';

// 1. VALIDATION HELPERS (Reusable Refinements)
export const SafePathSchema = z.string()
  .min(1)
  .refine(p => !p.includes('..'), "No traversal allowed");

// 2. INPUT (The Command) - "Parse, don't validate"
export const MyTaskInputSchema = z.object({
  path: SafePathSchema,
  force: z.boolean().default(false),
});
export type MyTaskInput = z.infer<typeof MyTaskInputSchema>;

// 3. ERROR CODES (Exhaustive)
export const MyTaskErrorCode = z.enum([
  'FILE_NOT_FOUND',
  'PERMISSION_DENIED', 
  'UNKNOWN_ERROR'
]);

// 4. RESULT (The Monad)
export const MyTaskSuccess = z.object({
  success: z.literal(true),
  data: z.string(), // The output payload
});

export const MyTaskFailure = z.object({
  success: z.literal(false),
  error: z.object({
    code: MyTaskErrorCode,
    message: z.string(),
    suggestion: z.string().optional(),
    recoverable: z.boolean(),
  })
});

export type MyTaskResult = 
  | z.infer<typeof MyTaskSuccess> 
  | z.infer<typeof MyTaskFailure>;

// 5. INTERFACE (The Capability)
export interface MyTaskSpec {
  execute(input: MyTaskInput): Promise<MyTaskResult>;
}

```

### Step 2: Implement the Handler (`handler.ts`)

Follow this template to implement the logic.

```typescript
import { MyTaskSpec, MyTaskInput, MyTaskResult } from './spec.js';
import * as fs from 'fs';

export class MyTaskHandler implements MyTaskSpec {
  async execute(input: MyTaskInput): Promise<MyTaskResult> {
    try {
      // 1. Business Logic
      if (!fs.existsSync(input.path)) {
        // 2. Explicit Error Return (No Throwing)
        return {
          success: false,
          error: {
            code: 'FILE_NOT_FOUND',
            message: `Path does not exist: ${input.path}`,
            recoverable: true
          }
        };
      }

      // 3. Success Return
      return {
        success: true,
        data: 'Operation complete'
      };

    } catch (error) {
      // 4. Safety Net: Catch unknown runtime errors
      return {
        success: false,
        error: {
          code: 'UNKNOWN_ERROR',
          message: error instanceof Error ? error.message : String(error),
          recoverable: false
        }
      };
    }
  }
}

```

### Step 3: Testing Strategy

Do not write monolithic tests. Split them into **Contract Tests** and **Logic Tests**.

#### A. Contract Tests (Schema)

Test the *Bouncer*. Ensure invalid data is rejected before it reaches the handler.

* **Focus:** Edge cases, validation rules, Zod refinements.
* **Style:** Data-driven (Table tests).

```typescript
// spec.test.ts
import { MyTaskInputSchema } from './spec';

const invalidCases = [
  { val: '../etc/passwd', err: 'No traversal allowed' },
  { val: '', err: 'min(1)' },
];

test.each(invalidCases)('validates paths', ({ val, err }) => {
  const result = MyTaskInputSchema.safeParse({ path: val });
  expect(result.success).toBe(false);
});

```

#### B. Logic Tests (Handler)

Test the *Chef*. Mock external dependencies (fs, network) and assert the Result Object.

* **Focus:** Business logic flow, error mapping, success states.
* **Style:** Mocked unit tests or Scenario Runners.

```typescript
// handler.test.ts
import { MyTaskHandler } from './handler';
import { vi } from 'vitest'; // or jest

test('returns FILE_NOT_FOUND if path missing', async () => {
  // MOCK
  vi.mocked(fs.existsSync).mockReturnValue(false);
  
  // EXECUTE
  const handler = new MyTaskHandler();
  const result = await handler.execute({ path: '/fake' });

  // ASSERT (Check the Result Object)
  expect(result.success).toBe(false);
  if (!result.success) {
    expect(result.error.code).toBe('FILE_NOT_FOUND');
  }
});

```