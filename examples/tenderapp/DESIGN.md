---
name: TenderApp
version: "1.0"
colors:
  # Brand Blue Scale (Untitled UI)
  blue-25: "#F5FAFF"
  blue-50: "#F0F9FF"
  blue-100: "#D1ECFF"
  blue-200: "#B2DDFF"
  blue-300: "#84CAFF"
  blue-400: "#53B1FD"
  blue-500: "#2E90FA"
  blue-600: "#1570EF"
  blue-700: "#175CD3"
  blue-800: "#1849A9"
  blue-900: "#194185"
  blue-950: "#102A56"

  # Neutral Gray Scale (Untitled UI)
  gray-25: "#FCFCFD"
  gray-50: "#F9FAFB"
  gray-100: "#F2F4F7"
  gray-200: "#E4E7EC"
  gray-300: "#D0D5DD"
  gray-400: "#98A2B3"
  gray-500: "#667085"
  gray-600: "#475467"
  gray-700: "#344054"
  gray-800: "#1D2939"
  gray-900: "#101828"
  gray-950: "#0C111D"

  # Accent Colors
  purple-300: "#ECE9FE"
  purple-500: "#492782"
  green: "#36B37E"
  light-green: "#84CC16"

  # Semantic Tokens
  primary: "{colors.blue-600}"
  primary-foreground: "#FAFAFA"
  background: "#FFFFFF"
  foreground: "{colors.gray-900}"
  secondary: "#FFFFFF"
  secondary-foreground: "{colors.gray-700}"
  muted: "#F5F5F5"
  muted-foreground: "{colors.gray-500}"
  accent: "#F5F5F5"
  accent-foreground: "#171717"
  destructive: "#EF4444"
  destructive-foreground: "#FAFAFA"
  card: "rgba(255, 255, 255, 0.6)"
  card-foreground: "#0A0A0A"
  popover: "#FFFFFF"
  popover-foreground: "#0A0A0A"
  border: "rgba(255, 255, 255, 0.6)"
  input: "{colors.gray-200}"
  input-hover: "{colors.gray-400}"
  ring: "{colors.gray-500}"

  # Status/Tag Colors (paired: -50 for background, -700 for text)
  green-50: "#E3FBCC"
  green-700: "#3B7C0F"
  purple-50: "#ECE9FE"
  purple-700: "#492782"
  red-50: "#FFE6D5"
  red-700: "#E62E05"
  yellow-50: "#FEF7C3"
  yellow-700: "#A15C07"
  turquoise-50: "#CCFBEF"
  turquoise-700: "#107569"
  pink-50: "#FCE7F6"
  pink-700: "#E5007D"

  # Chart Palette
  chart-1: "#E8795A"
  chart-2: "#2A9D8F"
  chart-3: "#264653"
  chart-4: "#E9C46A"
  chart-5: "#F4A261"

  # Sidebar
  sidebar-background: "#FFFFFF"
  sidebar-foreground: "{colors.gray-700}"
  sidebar-primary: "#18181B"
  sidebar-primary-foreground: "#FAFAFA"
  sidebar-accent: "rgba(220, 226, 237, 0.6)"
  sidebar-accent-foreground: "{colors.gray-700}"
  sidebar-border: "{colors.gray-200}"

typography:
  h1:
    fontFamily: Inter Variable
    fontSize: 20px
    fontWeight: "700"
    lineHeight: 30px
  h2:
    fontFamily: Inter Variable
    fontSize: 20px
    fontWeight: "700"
    lineHeight: 20px
  h3:
    fontFamily: Inter Variable
    fontSize: 16px
    fontWeight: "700"
    lineHeight: 20px
  h4:
    fontFamily: Inter Variable
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 20px
  h4xl:
    fontFamily: Inter Variable
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 20px
  text:
    fontFamily: Inter Variable
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  sub-text:
    fontFamily: Inter Variable
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 20px
  body:
    fontFamily: Inter Variable
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  body2:
    fontFamily: Inter Variable
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 16px

rounded:
  sm: 4px
  md: 6px
  DEFAULT: 8px
  lg: 8px

spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 40px

components:
  # Buttons — Primary
  button-default:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 16px
  button-default-hover:
    backgroundColor: "rgba(21, 112, 239, 0.9)"

  # Buttons — Outline
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.gray-600}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 16px
  button-outline-hover:
    backgroundColor: "{colors.accent}"

  # Buttons — Ghost
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 16px
  button-ghost-hover:
    backgroundColor: "{colors.accent}"

  # Buttons — Destructive
  button-destructive:
    backgroundColor: "{colors.destructive}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 16px

  # Buttons — Glass Variants
  button-default-glass:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 16px
    # Uses glass-small class: box-shadow + backdrop-blur-sm

  button-dropdown:
    backgroundColor: "rgba(255, 255, 255, 0.6)"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 16px
    # Uses glass-small class

  # Buttons — Selected State
  button-selected:
    backgroundColor: "#EBF2FF"
    textColor: "{colors.blue-800}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 16px

  # Button Sizes
  button-size-sm:
    height: 32px
    padding: 0 12px
  button-size-default:
    height: 36px
    padding: 0 16px
  button-size-lg:
    height: 40px
    padding: 0 32px
  button-size-icon:
    height: 36px
    width: 36px
  button-size-icon-sm:
    height: 32px
    width: 32px

  # Cards
  card-standard:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.lg}"
    # Frosted: bg-white/60, NO solid white backgrounds

  # Inputs
  input-default:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.text}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 12px
  input-default-hover:
    backgroundColor: "{colors.background}"
    # border changes to gray-300
  input-default-focus:
    # border changes to ring color (gray-500)
    # ring-width: 2px

  input-sm:
    height: 32px

  # Glass Effects
  glass-big:
    # shadow: 0px -2px 5.5px 0px rgba(157, 164, 174, 0.15)
    # backdrop-filter: blur(4px)
  glass-small:
    # shadow: 0px 2px 5px 0px rgba(157, 164, 174, 0.1)
    # backdrop-filter: blur(4px)
  glass-header:
    backgroundColor: "rgba(255, 255, 255, 0.6)"
    # shadow: 4px 4px 5px 0px rgba(157, 164, 174, 0.1)
    # backdrop-filter: blur(4px)

  # Status Badges
  badge-green:
    backgroundColor: "{colors.green-50}"
    textColor: "{colors.green-700}"
    rounded: "{rounded.sm}"
  badge-purple:
    backgroundColor: "{colors.purple-50}"
    textColor: "{colors.purple-700}"
    rounded: "{rounded.sm}"
  badge-red:
    backgroundColor: "{colors.red-50}"
    textColor: "{colors.red-700}"
    rounded: "{rounded.sm}"
  badge-yellow:
    backgroundColor: "{colors.yellow-50}"
    textColor: "{colors.yellow-700}"
    rounded: "{rounded.sm}"
  badge-turquoise:
    backgroundColor: "{colors.turquoise-50}"
    textColor: "{colors.turquoise-700}"
    rounded: "{rounded.sm}"
  badge-pink:
    backgroundColor: "{colors.pink-50}"
    textColor: "{colors.pink-700}"
    rounded: "{rounded.sm}"
---

## Brand & Style

TenderApp is a procurement SaaS platform that transforms complex public tender data into clear, actionable workflows. The design system balances two qualities: **professional precision** (trustworthy enough for government procurement and enterprise buyers) and **modern approachability** (contemporary glass-morphism that prevents the interface from feeling cold or bureaucratic).

The signature aesthetic is **"frosted professional."** A fixed SVG background pattern provides subtle visual texture, while UI surfaces float above it as semi-transparent frosted panels. This creates depth and lightness without the heaviness of traditional enterprise software. The overall impression should be: *"This is a tool built by people who care about design, for people who care about data."*

The UI is **light-theme only** — there is no dark mode. The entire color system, glass effects, and elevation model are built around a white/light canvas. Do not introduce dark mode variants.

## Colors

The color palette is built on the **Untitled UI** system — a professionally curated, WCAG-compliant scale.

**Primary Blue** (`blue-600` / `#1570EF`) is the single brand color. It drives all primary actions (buttons, links, active states, focus rings). The full 12-shade blue scale provides flexibility for hover states, backgrounds, and text, but `blue-600` is the anchor.

**Neutral Grays** provide the text hierarchy and structural elements. `gray-900` for primary text, `gray-700` for secondary text, `gray-500` for muted/placeholder text, `gray-200` for borders, `gray-100` for subtle backgrounds.

**Frosted Whites** are the defining characteristic. Card backgrounds use `rgba(255, 255, 255, 0.6)` — never fully opaque white. Borders also use frosted white. This allows the SVG background pattern to bleed through, creating the signature glass effect.

**Status Colors** come in strict 50/700 pairs: a light tint for the badge background, a saturated dark shade for the text. Six pairs exist: green, purple, red, yellow, turquoise, and pink. Never use status colors outside of badges/tags — they are not accent colors for structural UI elements.

**Chart Colors** are a 5-color palette (coral, teal, dark blue, gold, orange) designed for data visualization only.

**Destructive Red** (`#EF4444`) is reserved for delete actions, error states, and validation messages.

## Typography

**Inter Variable** is the sole typeface, loaded from `@fontsource-variable/inter`. No secondary display font, no monospace for UI elements (only for code blocks in prose content).

The type scale is deliberately compact — font sizes range from 12px to 20px — because the UI is data-dense. Procurement professionals scan tables, filter panels, and detail views simultaneously; large type would waste critical viewport space.

**Typography hierarchy (use the React components, never raw HTML):**

| Component | Element | Size | Weight | Line Height | Use For |
|-----------|---------|------|--------|-------------|---------|
| `H1` | `<h1>` | 20px | Bold | 30px | Page titles |
| `H2` | `<h2>` | 20px | Bold | 20px | Section headings |
| `H3` | `<h3>` | 16px | Bold | 20px | Card titles, subheadings |
| `H4` | `<h4>` | 12px | Medium | 20px | Small labels, overlines |
| `H4XL` | `<h5>` | 14px | Medium | 20px | Medium labels |
| `Text` | `<p>` | 14px | Regular | 20px | Primary body text |
| `SubText` | `<p>` | 12px | Regular | 20px | Secondary/supporting text |
| `Body` | `<p>` | 14px | Regular | 20px | Paragraph body text |
| `Body2` | `<p>` | 12px | Regular | 16px | Compact body text |

**Rules:**
- Always import from `@/shared/ui/typography` — never use raw `<h1>`, `<p>`, `<span>` elements.
- Do not override font sizes or weights via className unless there is a specific, documented reason.
- All user-facing text must go through the `t()` / `<T>` translation system.

## Layout & Spacing

The layout uses a **4px base grid**. All spacing, padding, and margins should be multiples of 4px.

**Application structure:**
- **Sidebar** on the left (collapsible navigation)
- **Main content area** fills remaining width
- **App header** height is configurable via `--app-header-height` CSS variable
- Body uses `display: flex; flex-direction: column` at the root

**Common spacing patterns:**
- `gap-2` (8px): Between tightly grouped elements (icon + label, badge groups)
- `gap-3` (12px): Between form fields, list items
- `gap-4` (16px): Standard card internal padding, section gaps
- `gap-6` (24px): Between sections, card external margins
- `p-4` (16px): Standard card padding
- `p-6` (24px): Page-level content padding
- `p-10` (40px): Large card padding (hero content)

**Responsive breakpoints** (Tailwind defaults):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Glass & Frosted Effects

Glass-morphism is TenderApp's signature visual treatment. Three tiers exist, each with specific use cases:

### Glass Tiers

**`glass-small`** — The most common. Used for buttons, cards, dropdowns, and any element that needs subtle depth.
```css
box-shadow: 0px 2px 5px 0px rgba(157, 164, 174, 0.1);
backdrop-filter: blur(4px);  /* Tailwind: backdrop-blur-sm */
```

**`glass-big`** — Used for sidebar panels and large structural containers.
```css
box-shadow: 0px -2px 5.5px 0px rgba(157, 164, 174, 0.15);
backdrop-filter: blur(4px);
```

**`glass-header`** — Used for the top navigation bar. Includes a semi-transparent white background.
```css
background-color: rgba(255, 255, 255, 0.6);  /* Tailwind: bg-white/60 */
box-shadow: 4px 4px 5px 0px rgba(157, 164, 174, 0.1);
backdrop-filter: blur(4px);
```

### Glass Rules

- Card backgrounds must be `bg-white/60` (or `bg-card`) — **never** solid `bg-white`.
- Borders on glass surfaces use `border-white/60` (or `border-border`) — **never** solid borders.
- The body has a fixed SVG background (`bg.svg`) that must remain visible through glass surfaces.
- Use the predefined `glass-small`, `glass-big`, and `glass-header` utility classes — do not create ad-hoc backdrop-blur + shadow combinations.
- A `glass-pulse` animation exists for loading/highlight states — it oscillates background opacity and blur.

## Elevation & Depth

Depth is achieved through **opacity layering and blur**, not traditional shadow hierarchies.

**The Surface Stack:**
1. **Level 0 (Canvas):** White background with fixed SVG pattern. This is the deepest layer.
2. **Level 1 (Cards/Panels):** `bg-white/60` + `glass-small`. Semi-transparent surfaces that float above the canvas.
3. **Level 2 (Sidebar/Header):** `bg-white/60` + `glass-big` or `glass-header`. Structural containers with slightly stronger shadows.
4. **Level 3 (Overlays/Modals):** `bg-white` (solid) + `shadow-overlay-widget` (`0 4px 15px rgba(0,0,0,0.25), 0 4px 5px rgba(157,164,174,0.1)`). The heaviest shadow in the system, used only for floating panels, popovers, and modals.

**Rules:**
- Do not use Tailwind's `shadow-sm`, `shadow-md`, `shadow-lg` utilities. Use the predefined glass classes instead.
- The only exception is `shadow-xs` used on some button variants for minimal depth.
- Shadows always use gray-tinted rgba values (`rgba(157, 164, 174, ...)`) — never pure black shadows.

## Shapes

The shape language is **precisely rounded** — soft enough to feel modern, tight enough to feel professional.

**Corner Radius Scale:**
| Token | Value | Use For |
|-------|-------|---------|
| `rounded-sm` | 4px | Badges, small chips |
| `rounded-md` | 6px | Buttons, inputs, dropdowns |
| `rounded` / `rounded-lg` | 8px | Cards, panels |
| `rounded-xl` | 12px | Large cards, modals |

**Specific application:**
- **Buttons:** `rounded-md` (6px) — the base class includes this.
- **Inputs:** `rounded-md` (6px) — matches buttons for visual alignment.
- **Cards:** `rounded-lg` to `rounded-xl` depending on prominence.
- **Badges/Tags:** `rounded-sm` (4px) — compact and data-oriented.
- **Scrollbar thumbs:** 4px border-radius for a subtle, refined feel.

**Icons:**
- Lucide React is the icon library. Default size is 16x16 (`h-4 w-4`).
- Always import with the `Icon` postfix: `FolderPlusIcon`, not `FolderPlus`.
- Custom icons live in `@/shared/ui/icons/`.

## Components

TenderApp uses **shadcn/ui** components built on **Radix UI** primitives. Always use existing components before creating new ones.

### Component Library

The component system lives in `tender-frontend/src/shared/ui/`. Key components:

| Component | Source | Notes |
|-----------|--------|-------|
| `Button` | `button.tsx` | 14 variants, 5 sizes, supports `isLoading` and `asChild` |
| `Input` | `input.tsx` | 2 sizes (sm, md), gray-200 border default |
| `Card` | `card.tsx` | Frosted background (`bg-white/60`), includes KanbanCard variant |
| `Select` | `select.tsx` | Radix-based dropdown |
| `Dialog` | `dialog.tsx` | Modal overlay with `shadow-overlay-widget` |
| `Tabs` | `tabs.tsx` | Radix tabs |
| `Tooltip` | `tooltip.tsx` | Radix tooltip |
| `Popover` | `popover.tsx` | Radix popover |
| `Accordion` | `accordion.tsx` | Radix accordion |
| `Checkbox` | `checkbox.tsx` | Radix checkbox |
| `Switch` | `switch.tsx` | Radix toggle switch |
| `Avatar` | `avatar.tsx` | User/entity avatars |
| `Pagination` | `pagination.tsx` | Page navigation |
| `Breadcrumb` | `breadcrumb.tsx` | Navigation breadcrumbs |
| `ScrollArea` | `scroll-area.tsx` | Custom scrollable containers |

### Button Variants

| Variant | Appearance | When to Use |
|---------|------------|-------------|
| `default` | Blue background, white text | Primary actions (Save, Submit, Create) |
| `default-light` | Blue + glass-small | Primary action with subtle depth |
| `default-glass` | Blue + glass-small | Same as default-light |
| `destructive` | Red background, white text | Delete, remove, dangerous actions |
| `outline` | White bg, gray-300 border | Secondary actions (Cancel, Back) |
| `secondary` | White bg + glass-small | Alternative secondary actions |
| `ghost` | Transparent, hover shows accent bg | Tertiary actions, toolbar buttons |
| `ghost-soft` | Gray-700 text, transparent bg | Subtle interactive elements |
| `link` | Blue text, underline on hover | Inline text links |
| `error-link` | Red text, underline on hover | Error-state links |
| `light` | White bg, gray-100 border + glass | Light action buttons |
| `dropdown` | White/60 bg + glass-small | Dropdown trigger buttons |
| `selected` | Blue-50 bg, blue-800 text/border | Active selection state |
| `toggle-outline` | Gray-50 bg, gray-300 border | Toggle between states |

### Styling Utilities

- **`cn()`** from `@/shared/lib/utils` — always use for conditional classNames. Never use template literals or string concatenation.
- **`cva()`** from `class-variance-authority` — for component variant definitions.
- **`tailwind-merge`** — integrated into `cn()` for deduplication.

### Form Patterns

- **React Hook Form** + **Valibot** for validation.
- Forms follow the FSD segment pattern: `ui/`, `model/`, `lib/`, `api/`.
- Use existing form components (`Input`, `Select`, `Checkbox`, `Textarea`) — do not create custom form elements.

### Data Display

- **TanStack Table** for all tabular data.
- **TanStack Virtual** for virtualized lists.
- **Lucide icons** for all iconography (16x16 default).

### Rich Text

- **Lexical** editor for rich text editing.
- **`.content-prose`** class for rendered rich text content (uses `@tailwindcss/typography`).

### Notifications

- **Sonner** for toast notifications.

### Animation

- **Motion** (Framer Motion alternative) for complex animations.
- `transition-colors` for hover/focus state changes on interactive elements.
- `animate-spin` for loading spinners.
- Keep animations subtle and fast — this is a productivity tool, not a showcase.

## Do's and Don'ts

### Colors

- **Do** use `bg-white/60` or `bg-card` for card and panel backgrounds.
- **Don't** use solid `bg-white` for cards — it breaks the frosted glass aesthetic.
- **Do** use colors from the design token scale (`blue-600`, `gray-500`, etc.).
- **Don't** use arbitrary hex values (`bg-[#1a73e8]`) — find the closest token.
- **Do** use status color 50/700 pairs for badges (e.g., `bg-green-50 text-green-700`).
- **Don't** use status colors for structural elements, backgrounds, or borders.
- **Do** use `text-gray-900` for primary text, `text-gray-500` for muted text.
- **Don't** use `text-black` — the design system uses `gray-900` as the darkest text.

### Typography

- **Do** use typography components (`H1`, `H2`, `H3`, `H4`, `Text`, `SubText`, `Body`, `Body2`).
- **Don't** use raw HTML elements (`<h1>`, `<p>`, `<span>`) for text.
- **Do** keep font sizes within the 12-20px range defined in the type scale.
- **Don't** introduce new font sizes or weights outside the typography components.
- **Do** wrap all user-facing strings in `t()` or `<T>` for translation.
- **Don't** hardcode user-facing strings without translation keys.

### Glass & Elevation

- **Do** use `glass-small`, `glass-big`, or `glass-header` utility classes.
- **Don't** create custom `backdrop-blur` + `box-shadow` combinations.
- **Do** use `shadow-overlay-widget` for modals and floating panels.
- **Don't** use Tailwind's `shadow-sm`, `shadow-md`, `shadow-lg` for structural depth.
- **Do** keep the SVG background visible through glass surfaces.
- **Don't** stack multiple solid-background elements that hide the canvas.

### Components

- **Do** use existing shadcn/ui components from `@/shared/ui/`.
- **Don't** create new custom components when an existing one can be extended with variants.
- **Do** use button variants (`variant="outline"`, `variant="ghost"`) for different action levels.
- **Don't** override button styling with complex className combinations — use or create a variant instead.
- **Do** use `cn()` for conditional class merging.
- **Don't** use template literals, string concatenation, or inline conditional className logic.
- **Do** import Lucide icons with the `Icon` postfix (`TrashIcon`, `PlusIcon`).
- **Don't** import icons without the postfix or use a different icon library.

### Layout & Spacing

- **Do** use 4px-grid spacing values (`gap-1`, `gap-2`, `gap-3`, `gap-4`, `gap-6`).
- **Don't** use odd spacing values (5px, 7px, 3px) or arbitrary values.
- **Do** follow the sidebar + main content layout structure.
- **Don't** introduce entirely new layout paradigms without updating this design system.

### Theming

- **Do** build for light theme only.
- **Don't** add `.dark` variants, dark mode CSS, or `prefers-color-scheme` media queries.
- **Don't** use `next-themes` dark mode features — the package is present but dark mode is not implemented.

### Code Style

- **Do** use component variants and props for visual differences.
- **Don't** use complex conditional className logic — if you need a visual state, create a variant.
- **Do** make props required if they're always used — only use optional props when there are genuine optional cases.
- **Don't** introduce new dependencies for UI features that existing libraries already handle.
