# DESIGN.md Philosophy

DESIGN.md captures how a design looks, feels, and behaves. The prose is where the design lives. Everything else in the document exists to support it.

```
---
name: Technical Handout
---

## Overview

A graduate-level computer science lecture handout in the tradition of an old established university. The audience is graduate students and research engineers reading a printed handout distributed at the beginning of a seminar.

The handout is austere, informationally dense, and proudly unconcerned with first impressions. The audience knows why they are there and the handout's job is to do work, not to seduce.
```

**The quality of a generated design is determined less by the precision of its values than by how clearly the intent is described.**

## Prose, not Tokens, is the focus of the specification

DESIGN.md contains two primary aspects: tokens and prose. The specification is focused on describing this design context to keep designs consistent between generations and to provide an area of creative exploration. The prose is the most vital part of the specification. 

````
## Colors

```yaml
# Tokens
colors:
  paper: '#F4F0E4'
  ink: '#1E1A14'
  vermilion: '#C3402A'
  rule-gray: '#B8B0A2'
```
<!-- Prose -->
A single-ink-plus-accent system.
- **Paper** {colors.paper} is the canvas — warmed xerox stock, never pure white.
- **Ink** {colors.ink} is graphite-warm and carries all typography, all rules, all diagram strokes; never pure black.
- **Vermilion** {colors.vermilion} is the single accent and appears only inside diagrams and chart annotations — never on typography, never on page numerals, never on metadata of any kind.
- **Rule gray** {colors.rule-gray} is reserved for hairline rules inside content (chart baselines, table dividers); never used as page-frame chrome.
````

The token values serve as context and are not rendering instructions. Generally, we do not accept or recommend token requirements in the specification. 

This keeps tokens as context that serves as a reference in the prose and focuses DESIGN.md on documenting the nature of the design and not trying to reinvent the decades long work established by languages and tools that came before us.

This document communicates the narrative and philosophy of DESIGN.md to clarify what problems it solves and how it currently attempts to solve them.

## A specific reference carries more than a list of adjectives

A design that references "A 1970s graduate lecture handout in the tradition of an old and established university" evokes a complete world: the one color of ink, the generous margins, the serif set at a reading size, and the absence of decoration. That single sentence carries more useful information than a dozen metric values. It carries the reasoning behind the values.

"Modern, clean, trustworthy, premium" evokes nothing specific. A model creates something in the center of what those words describe, creating an output that is typically generic. Adjectives describe a region. A specific reference describes a point.

## Negative Constraints: What you leave out defines the character

A clear design reference carries its restrictions automatically. A model knows what a lecture handout is, and it knows what a lecture handout is not. It does not glow or use a gradient. You don't have to list these. Naming the object names them, the same way naming a dog tells the model that dogs don't meow.

The negative constraints arrive for free when the reference is specific enough. An intentional list of "don'ts" is useful. A long rambling list is often a sign the description was too vague to carry them. A strong reference and an intentional list of do's and don'ts working together is the sweet spot.

```
## Do's and Don'ts

- **Don't** add a hero moment to the title page. A real handout title
  page is the first page of content, not a magazine cover.
- **Don't** reach for an italic standfirst beneath a large title.
  That is the Substack register.
- **Don't** add corner ornaments, chapter marks, or abstract glyphs
  in the margins.
- **Don't** color the page numeral or any other piece of metadata.
  Vermilion lives in diagrams only.
- **Don't** use a display-class serif. One family at four modest sizes.
- **Don't** use Bold. Anywhere.
- **Don't** use sans-serif for any role other than monospace metadata.
- **Don't** introduce dark mode, gradients, glows, glass surfaces,
  drop shadows, or rounded corners.
- **Do** treat the handout as a printed object. The screen is the
  substrate; the design is the page.
- **Do** keep vermilion inside diagrams. Its scarcity outside is what
  makes its presence inside meaningful.
- **Do** trust modest size differences. The section title is only
  ~1.9× body, not 5× body.
- **Do** let pages have visible white space. A page that ends
  two-thirds of the way down is correct, not under-filled.
```

## The format grows through its users, not its spec

The spec defines the structural minimum that every DESIGN.md shares: a name, and a small set of categories (colors, typography, spacing, rounded, components) that are universal enough to standardize. Everything beyond that minimum is yours to define. The format accepts any key, any section, any structure your design system needs.

The spec standardizes the categories where consistency helps. It leaves open the categories where flexibility helps more: motion, iconography, elevation, text casing, paragraph measure. One team's motion tokens are CSS animation curves. Another's are audio-domain time constants measured in buffer blocks. The right shape is specific to each system, and the format already lets you define it:

````
## Motion

```yaml
motion:
  feedback: 120ms
  content: 250ms
  easing: 'cubic-bezier(0.2, 0, 0, 1)'
```

Transitions are quick and mechanical. Nothing bounces, nothing overshoots, nothing lingers. State changes should feel like a light switch, not a door closing.

- Interactive feedback (hover, press, toggle): {motion.feedback}, always {motion.easing}.
- Content transitions (page, panel, modal): {motion.content}, same curve.
- Nothing in the UI animates longer than 300ms. If something takes longer, cut it.
- Respect `prefers-reduced-motion`: all durations collapse to 0ms.
````

The linter accepts these values and agents read the prose. No spec change was needed because the tokens themselves are context rather than instruction.
