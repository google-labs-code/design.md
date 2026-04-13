---
name: agent-dx-cli-scale
description: A scoring scale for evaluating how well a CLI is designed for AI agents, based on the "Rewrite Your CLI for AI Agents" principles.
---

# Agent DX CLI Scale

Use this skill to **evaluate any CLI** against the principles of agent-first design. Score each axis from 0–3, then sum for a total between 0–21.

> Human DX optimizes for discoverability and forgiveness.
> Agent DX optimizes for predictability and defense-in-depth.
> — [You Need to Rewrite Your CLI for AI Agents](/posts/rewrite-your-cli-for-ai-agents)

---

## Scoring Axes

### 1. Machine-Readable Output

Can an agent parse the CLI's output without heuristics?

| Score | Criteria                                                                                              |
| ----- | ----------------------------------------------------------------------------------------------------- |
| 0     | Human-only output (tables, color codes, prose). No structured format available.                       |
| 1     | `--output json` or equivalent exists but is incomplete or inconsistent across commands.               |
| 2     | Consistent JSON output across all commands. Errors also return structured JSON.                       |
| 3     | NDJSON streaming for paginated results. Structured output is the default in non-TTY (piped) contexts. |

### 2. Raw Payload Input

Can an agent send the full API payload without translation through bespoke flags?

| Score | Criteria                                                                                                                              |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | Only bespoke flags. No way to pass structured input.                                                                                  |
| 1     | Accepts `--json` or stdin JSON for some commands, but most require flags.                                                             |
| 2     | All mutating commands accept a raw JSON payload that maps directly to the underlying API schema.                                      |
| 3     | Raw payload is first-class alongside convenience flags. The agent can use the API schema as documentation with zero translation loss. |

### 3. Schema Introspection

Can an agent discover what the CLI accepts at runtime without pre-stuffed documentation?

| Score | Criteria                                                                                                                                                |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | Only `--help` text. No machine-readable schema.                                                                                                         |
| 1     | `--help --json` or a `describe` command for some surfaces, but incomplete.                                                                              |
| 2     | Full schema introspection for all commands — params, types, required fields — as JSON.                                                                  |
| 3     | Live, runtime-resolved schemas (e.g., from a discovery document) that always reflect the current API version. Includes scopes, enums, and nested types. |

### 4. Context Window Discipline

Does the CLI help agents control response size to protect their context window?

| Score | Criteria                                                                                                                                                    |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | Returns full API responses with no way to limit fields or paginate.                                                                                         |
| 1     | Supports `--fields` or field masks on some commands.                                                                                                        |
| 2     | Field masks on all read commands. Pagination with `--page-all` or equivalent.                                                                               |
| 3     | Streaming pagination (NDJSON per page). Explicit guidance in context/skill files on field mask usage. The CLI actively protects the agent from token waste. |

### 5. Input Hardening

Does the CLI defend against the specific ways agents fail (hallucinations, not typos)?

| Score | Criteria                                                                                                                                                                                |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | No input validation beyond basic type checks.                                                                                                                                           |
| 1     | Validates some inputs, but does not cover agent-specific hallucination patterns (path traversals, embedded query params, double encoding).                                              |
| 2     | Rejects control characters, path traversals (`../`), percent-encoded segments (`%2e`), and embedded query params (`?`, `#`) in resource IDs.                                            |
| 3     | Comprehensive hardening: all of the above, plus output path sandboxing to CWD, HTTP-layer percent-encoding, and an explicit security posture — _"The agent is not a trusted operator."_ |

### 6. Safety Rails

Can agents validate before acting, and are responses sanitized against prompt injection?

| Score | Criteria                                                                                                                                                        |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | No dry-run mode. No response sanitization.                                                                                                                      |
| 1     | `--dry-run` exists for some mutating commands.                                                                                                                  |
| 2     | `--dry-run` for all mutating commands. Agent can validate requests without side effects.                                                                        |
| 3     | Dry-run plus response sanitization (e.g., via Model Armor) to defend against prompt injection embedded in API data. The full request→response loop is defended. |

### 7. Agent Knowledge Packaging

Does the CLI ship knowledge in formats agents can consume at conversation start?

| Score | Criteria                                                                                                                                                                                     |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | Only `--help` and a docs site. No agent-specific context files.                                                                                                                              |
| 1     | A `CONTEXT.md` or `AGENTS.md` with basic usage guidance.                                                                                                                                     |
| 2     | Structured skill files (YAML frontmatter + Markdown) covering per-command or per-API-surface workflows and invariants.                                                                       |
| 3     | Comprehensive skill library encoding agent-specific guardrails (_"always use --dry-run"_, _"always use --fields"_). Skills are versioned, discoverable, and follow a standard like OpenClaw. |

---

## Interpreting the Total

| Range | Rating             | Description                                                                                                                     |
| ----- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 0–5   | **Human-only**     | Built for humans. Agents will struggle with parsing, hallucinate inputs, and lack safety rails.                                 |
| 6–10  | **Agent-tolerant** | Agents can use it, but they'll waste tokens, make avoidable errors, and require heavy prompt engineering to compensate.         |
| 11–15 | **Agent-ready**    | Solid agent support. Structured I/O, input validation, and some introspection. A few gaps remain.                               |
| 16–21 | **Agent-first**    | Purpose-built for agents. Full schema introspection, comprehensive input hardening, safety rails, and packaged agent knowledge. |

---

## Bonus: Multi-Surface Readiness

Not scored, but note whether the CLI exposes multiple agent surfaces from the same binary:

- [ ] **MCP (stdio JSON-RPC)** — typed tool invocation, no shell escaping
- [ ] **Extension / plugin install** — agent treats the CLI as a native capability
- [ ] **Headless auth** — env vars for tokens/credentials, no browser redirect required
