---
name: design-md-show
description: Automatically triggers the visual preview after creating or updating a DESIGN.md file using the 'show' command.
---

# Design System Visualization Rule

Whenever you create, modify, or update the `DESIGN.md` file or its contents in this project, you must strictly follow these steps:

1. Update the YAML design tokens or Markdown rationale in `DESIGN.md` based on the specific vibe or requirement requested.
2. Automatically execute the visualization command in the terminal to open the generated design-board preview:
   ```bash
   npx @google/design.md show DESIGN.md
   ```
   *(If you are developing locally inside the design.md repository itself, use: `bun run packages/cli/src/index.ts show DESIGN.md`)*
3. Confirm that the visual preview (an HTML file) has been successfully generated and opened.
4. Briefly summarize the changes made to the design tokens and inform the user that the preview is ready to view.

This visual feedback loop bridges the gap between structured machine-readable code (YAML/JSON) and human-readable interfaces, reducing hallucinations and making it much easier to iterate on design choices.
