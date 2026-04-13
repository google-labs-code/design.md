---
name: ink
description: Ink terminal renderer for json-render that turns JSON specs into interactive terminal UIs. Use when working with @json-render/ink, building terminal UIs from JSON, creating terminal component catalogs, or rendering AI-generated specs in the terminal.
---

# @json-render/ink

Ink terminal renderer that converts JSON specs into interactive terminal component trees with standard components, data binding, visibility, actions, and dynamic props.

## Quick Start

```typescript
import { defineCatalog } from "@json-render/core";
import { schema } from "@json-render/ink/schema";
import {
  standardComponentDefinitions,
  standardActionDefinitions,
} from "@json-render/ink/catalog";
import { defineRegistry, Renderer, type Components } from "@json-render/ink";
import { z } from "zod";

// Create catalog with standard + custom components
const catalog = defineCatalog(schema, {
  components: {
    ...standardComponentDefinitions,
    CustomWidget: {
      props: z.object({ title: z.string() }),
      slots: [],
      description: "Custom widget",
    },
  },
  actions: standardActionDefinitions,
});

// Register only custom components (standard ones are built-in)
const { registry } = defineRegistry(catalog, {
  components: {
    CustomWidget: ({ props }) => <Text>{props.title}</Text>,
  } as Components<typeof catalog>,
});

// Render
function App({ spec }) {
  return (
    <JSONUIProvider initialState={{}}>
      <Renderer spec={spec} registry={registry} />
    </JSONUIProvider>
  );
}
```

## Spec Structure (Flat Element Map)

The Ink schema uses a flat element map with a root key:

```json
{
  "root": "main",
  "elements": {
    "main": {
      "type": "Box",
      "props": { "flexDirection": "column", "padding": 1 },
      "children": ["heading", "content"]
    },
    "heading": {
      "type": "Heading",
      "props": { "text": "Dashboard", "level": "h1" },
      "children": []
    },
    "content": {
      "type": "Text",
      "props": { "text": "Hello from the terminal!" },
      "children": []
    }
  }
}
```

## Standard Components

### Layout
- `Box` - Flexbox layout container (like a terminal `<div>`). Use for grouping, spacing, borders, alignment. Default flexDirection is row.
- `Text` - Text output with optional styling (color, bold, italic, etc.)
- `Newline` - Inserts blank lines. Must be inside a Box with flexDirection column.
- `Spacer` - Flexible empty space that expands along the main axis.

### Content
- `Heading` - Section heading (h1: bold+underlined, h2: bold, h3: bold+dimmed, h4: dimmed)
- `Divider` - Horizontal separator with optional centered title
- `Badge` - Colored inline label (variants: default, info, success, warning, error)
- `Spinner` - Animated loading spinner with optional label
- `ProgressBar` - Horizontal progress bar (0-1)
- `Sparkline` - Inline chart using Unicode block characters
- `BarChart` - Horizontal bar chart with labels and values
- `Table` - Tabular data with headers and rows
- `List` - Bulleted or numbered list
- `ListItem` - Structured list row with title, subtitle, leading/trailing text
- `Card` - Bordered container with optional title
- `KeyValue` - Key-value pair display
- `Link` - Clickable URL with optional label
- `StatusLine` - Status message with colored icon (info, success, warning, error)
- `Markdown` - Renders markdown text with terminal styling

### Interactive
- `TextInput` - Text input field (events: submit, change)
- `Select` - Selection menu with arrow key navigation (events: change)
- `MultiSelect` - Multi-selection with space to toggle (events: change, submit)
- `ConfirmInput` - Yes/No confirmation prompt (events: confirm, deny)
- `Tabs` - Tab bar navigation with left/right arrow keys (events: change)

## Visibility Conditions

Use `visible` on elements to show/hide based on state. Syntax: `{ "$state": "/path" }`, `{ "$state": "/path", "eq": value }`, `{ "$state": "/path", "not": true }`, `{ "$and": [cond1, cond2] }` for AND, `{ "$or": [cond1, cond2] }` for OR.

## Dynamic Prop Expressions

Any prop value can be a data-driven expression resolved at render time:

- **`{ "$state": "/state/key" }`** - reads from state model (one-way read)
- **`{ "$bindState": "/path" }`** - two-way binding: use on the natural value prop of form components
- **`{ "$bindItem": "field" }`** - two-way binding to a repeat item field
- **`{ "$cond": <condition>, "$then": <value>, "$else": <value> }`** - conditional value
- **`{ "$template": "Hello, ${/name}!" }`** - interpolates state values into strings

Components do not use a `statePath` prop for two-way binding. Use `{ "$bindState": "/path" }` on the natural value prop instead.

## Event System

Components use `emit` to fire named events. The element's `on` field maps events to action bindings:

```tsx
CustomButton: ({ props, emit }) => (
  <Box>
    <Text>{props.label}</Text>
    {/* emit("press") triggers the action bound in the spec's on.press */}
  </Box>
),
```

```json
{
  "type": "CustomButton",
  "props": { "label": "Submit" },
  "on": { "press": { "action": "submit" } },
  "children": []
}
```

## Built-in Actions

`setState`, `pushState`, and `removeState` are built-in and handled automatically:

```json
{ "action": "setState", "params": { "statePath": "/activeTab", "value": "home" } }
{ "action": "pushState", "params": { "statePath": "/items", "value": { "text": "New" } } }
{ "action": "removeState", "params": { "statePath": "/items", "index": 0 } }
```

## Repeat (Dynamic Lists)

Use the `repeat` field on a container element to render items from a state array:

```json
{
  "type": "Box",
  "props": { "flexDirection": "column" },
  "repeat": { "statePath": "/items", "key": "id" },
  "children": ["item-row"]
}
```

Inside repeated children, use `{ "$item": "field" }` to read from the current item and `{ "$index": true }` for the current index.

## Streaming

Use `useUIStream` to progressively render specs from JSONL patch streams:

```tsx
import { useUIStream } from "@json-render/ink";

const { spec, send, isStreaming } = useUIStream({ api: "/api/generate" });
```

## Server-Side Prompt Generation

Use the `./server` export to generate AI system prompts from your catalog:

```typescript
import { catalog } from "./catalog";

const systemPrompt = catalog.prompt({ system: "You are a terminal assistant." });
```

## Providers

| Provider | Purpose |
|----------|---------|
| `StateProvider` | Share state across components (JSON Pointer paths). Accepts optional `store` prop for controlled mode. |
| `ActionProvider` | Handle actions dispatched via the event system |
| `VisibilityProvider` | Enable conditional rendering based on state |
| `ValidationProvider` | Form field validation |
| `FocusProvider` | Manage focus across interactive components |
| `JSONUIProvider` | Combined provider for all contexts |

### External Store (Controlled Mode)

Pass a `StateStore` to `StateProvider` (or `JSONUIProvider`) to use external state management:

```tsx
import { createStateStore, type StateStore } from "@json-render/ink";

const store = createStateStore({ count: 0 });

<StateProvider store={store}>{children}</StateProvider>

store.set("/count", 1); // React re-renders automatically
```

When `store` is provided, `initialState` and `onStateChange` are ignored.

## createRenderer (Higher-Level API)

```tsx
import { createRenderer } from "@json-render/ink";
import { standardComponents } from "@json-render/ink";
import { catalog } from "./catalog";

const InkRenderer = createRenderer(catalog, {
  ...standardComponents,
  // custom component overrides here
});

// InkRenderer includes all providers (state, visibility, actions, focus)
render(
  <InkRenderer spec={spec} state={{ activeTab: "overview" }} />
);
```

## Key Exports

| Export | Purpose |
|--------|---------|
| `defineRegistry` | Create a type-safe component registry from a catalog |
| `Renderer` | Render a spec using a registry |
| `createRenderer` | Higher-level: creates a component with built-in providers |
| `JSONUIProvider` | Combined provider for all contexts |
| `schema` | Ink flat element map schema (includes built-in state actions) |
| `standardComponentDefinitions` | Catalog definitions for all standard components |
| `standardActionDefinitions` | Catalog definitions for standard actions |
| `standardComponents` | Pre-built component implementations |
| `useStateStore` | Access state context |
| `useStateValue` | Get single value from state |
| `useBoundProp` | Two-way binding for `$bindState`/`$bindItem` expressions |
| `useActions` | Access actions context |
| `useAction` | Get a single action dispatch function |
| `useOptionalValidation` | Non-throwing variant of useValidation |
| `useUIStream` | Stream specs from an API endpoint |
| `createStateStore` | Create a framework-agnostic in-memory `StateStore` |
| `StateStore` | Interface for plugging in external state management |
| `Components` | Typed component map (catalog-aware) |
| `Actions` | Typed action map (catalog-aware) |
| `ComponentContext` | Typed component context (catalog-aware) |
| `flatToTree` | Convert flat element map to tree structure |

## Terminal UI Design Guidelines

- Use Box for layout (flexDirection, padding, gap). Default flexDirection is row.
- Terminal width is ~80-120 columns. Prefer vertical layouts (flexDirection: column) for main structure.
- Use borderStyle on Box for visual grouping (single, double, round, bold).
- Use named terminal colors: red, green, yellow, blue, magenta, cyan, white, gray.
- Use Heading for section titles, Divider to separate sections, Badge for status, KeyValue for labeled data, Card for bordered groups.
- Use Tabs for multi-view UIs with visible conditions on child content.
- Use Sparkline for inline trends and BarChart for comparing values.
