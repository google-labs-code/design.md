# @google/design.md-evals

A small eval harness that asks the question DESIGN.md daily-driving cannot answer:

> When a coding agent is given DESIGN.md as context, do its outputs actually
> honor the design system — and *more* than they would with a different
> context format, or with no context at all?

This package is a **methodology sketch**. It is intentionally small. It runs
end-to-end against deterministic mock agents so the harness shape can be
validated before any model API spend, then provides a clear seam for
plugging in a real model.

---

## What it measures

For each `(design × task × format × agent)` cell the harness:

1. Loads a DESIGN.md fixture from `examples/`.
2. Builds a **context** in one of four formats (the A/B):
   - `designmd` — the full DESIGN.md file (the treatment).
   - `prose` — the markdown body only, frontmatter stripped (control: "is the structured part doing work?").
   - `dtcg` — the same tokens emitted as DTCG `tokens.json` (control: "is *this* format doing the work, vs. any structured tokens?").
   - `none` — empty string (control: "is the agent just doing what it would have done anyway?").
3. Asks an agent to render a task (e.g. "build a marketing hero") given that context.
4. Extracts the colors, font-families, and dimensions from the agent's output.
5. Scores each dimension against the design system tokens:
   - **`colorScore`** — fraction of distinct hex colors in the output that fall within
     a perceptual tolerance of *some* declared `colors.*` token.
   - **`typographyScore`** — fraction of distinct `font-family` declarations that
     match a family declared in `typography.*`.
   - **`spacingScore`** — fraction of `px` / `rem` dimensions in the output that
     snap to the declared `spacing` / `rounded` scale.
   - **`aggregate`** — `0.5·color + 0.25·type + 0.25·space`.

Aggregating across runs gives a single mean score per format. **The DESIGN.md
hypothesis is that `byFormat.designmd.mean.aggregate` ≫ `byFormat.none.mean.aggregate`,
and ≥ `byFormat.dtcg` and `byFormat.prose`.** If it is not, the format is not
earning its keep over the alternatives — which is the only thing daily-driving
cannot tell you.

## What it does not measure (yet)

- **Visual fidelity** — there is no headless-browser screenshot or pixel diff.
  The natural follow-up is rendering each output with Playwright and scoring
  layout/structure with a vision model or a structural diff against a reference.
- **Component correctness** — we do not check that "primary CTA" is actually
  the primary-color one, only that the colors used are *in* the palette. A
  semantic scorer would prompt a separate judge model with the task spec and
  the rendered HTML.
- **Voice / copy** — the linter already has rules for these; a real harness
  would re-run those rules against the agent's output text.
- **Color distance** — we use sRGB Euclidean distance, not CIEDE2000. Fine
  for a sketch; swap in `culori` or similar before publishing numbers.

## How to run

```bash
bun install                                # from repo root
bun run packages/evals/src/index.ts        # writes eval-report.json
bun run packages/evals/src/index.ts --out reports/2026-04-29.json
```

The default run uses two mock agents:

- `mock-token-aware` — extracts hex codes and font families from the context
  string and uses them. **This is the harness self-test:** with this agent,
  `designmd` and `dtcg` should score high, `prose` lower, `none` zero. If
  they do not, the scorer is broken.
- `mock-off-brand` — ignores context, paints in `#ff00ff`/Comic Sans. Should
  score near zero on every format. Sanity check that the scorer actually
  penalizes wrong outputs.

## How to wire in a real agent

Open `src/agents.ts` and replace the body of `claudeAgent.render`:

```ts
import Anthropic from '@anthropic-ai/sdk';
const client = new Anthropic();

export const claudeAgent: Agent = {
  id: 'claude-sonnet-4-6',
  async render(task, context) {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      system: 'You are a UI engineer. Use only the design system in <design_system>. Output only HTML.',
      messages: [
        { role: 'user', content: `<design_system>\n${context}\n</design_system>\n\n${task.prompt}` },
      ],
    });
    return message.content.map((b) => (b.type === 'text' ? b.text : '')).join('');
  },
};
```

Then add it to the `agents` list in `src/index.ts`.

## How to add a task

Append to `TASKS` in `src/tasks.ts`. A good task is one where the right
answer is obvious-on-inspection (you can tell at a glance whether the
output used the brand palette) but where wrong answers are *also* plausible
(the agent has room to drift).

## How to add a fixture

Drop a `DESIGN.md` into `examples/<name>/` and add it to `DEFAULT_DESIGNS`
in `src/index.ts`. Fixtures should span the space of design systems
DESIGN.md is meant to describe — minimal palette, complex ramps,
different typography systems, themed/dark variants.

## Output shape

```json
{
  "startedAt": "...",
  "finishedAt": "...",
  "runs": [{ "designId": "...", "taskId": "...", "format": "designmd", "agentId": "...", "output": "<!doctype html>...", "extracted": {...}, "score": {...} }],
  "byFormat": {
    "designmd": { "count": 18, "mean": { "aggregate": 0.91, "colorScore": 0.95, "typographyScore": 0.87, "spacingScore": 0.85 } },
    "prose":    { "count": 18, "mean": { "aggregate": 0.42, ... } },
    "dtcg":     { "count": 18, "mean": { "aggregate": 0.88, ... } },
    "none":     { "count": 18, "mean": { "aggregate": 0.05, ... } }
  }
}
```

Diff `byFormat` across runs to detect regressions in the format itself
(e.g. a spec change that makes agents *less* likely to honor tokens).
