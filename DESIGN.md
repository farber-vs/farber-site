---
name: FARBER Modular Archive
description: A restrained Swiss editorial system that turns archive navigation into modular space.
colors:
  paper: "#f3f1eb"
  ink: "#1b1c19"
  muted-ink: "#68675f"
  map-muted-ink: "#55544d"
  surface: "#e4e0d7"
  surface-strong: "#dad5cb"
  clay-accent: "#9b493d"
  hairline: "rgba(27, 28, 25, 0.12)"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(44px, 8vw, 96px)"
    fontWeight: 520
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(30px, 3.6vw, 54px)"
    fontWeight: 520
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(22px, 2.5vw, 34px)"
    fontWeight: 520
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(18px, 1.4vw, 22px)"
    fontWeight: 400
    lineHeight: 1.48
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.025em"
  editorial-italic:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontWeight: 200
    fontStyle: italic
  identity-label:
    fontFamily: "ui-serif, Georgia, serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.17em"
rounded:
  square: "0px"
spacing:
  grid-gap: "8px"
  page-edge: "12px"
  compact-gap: "4px"
components:
  filter-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 8px"
    height: "44px"
  filter-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
  map-control:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 18px"
    height: "44px"
  map-control-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
  category-chip:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 13px"
    height: "28px"
  archive-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
  practice-node:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
---

# Design System: FARBER Modular Archive

## Overview

**Creative North Star: "The Editorial Field"**

FARBER behaves like an editorial sheet large enough to walk around. Warm stock, disciplined typography, square modules, and fine rules keep the archive quiet and legible; scale and placement supply the character. The system is Swiss, functional, slightly brutal, and visibly assembled rather than polished into a generic portfolio shell.

The base archive presents content as a responsive modular grid. The `/farber/` spatial index extends that language into an architectural field: the same navigation is useful at close range and becomes a map of connected practices when the visitor changes distance. The existing FARBER wordmark is the only graphic signature; the interface around it recedes.

**Key Characteristics:**

- Warm, low-contrast paper and mineral surfaces with near-black typography.
- Square, flat modules separated by gaps and hairline rules.
- System typography with editorial scale shifts and compact uppercase labels.
- Native CSS Grid and simple spatial positioning rather than ornamental UI effects.
- A muted clay accent reserved for selection and interaction feedback.
- Mobile layouts simplify to readable flow without horizontal scrolling.

## Colors

The palette feels like ink and registration marks on warm paper: neutral enough to foreground content, with one restrained clay signal for interaction.

### Primary

- **Muted Clay:** The sole accent for visible focus, hover emphasis, and text selection. Its rarity keeps interaction cues unambiguous.

### Neutral

- **Warm Paper:** The page canvas and reversed text color.
- **Near-Black Ink:** Primary text, active controls, media placeholders, and the dominant structural tone.
- **Archive Gray:** Secondary copy, captions, and quiet status information.
- **Field Gray:** A slightly firmer secondary tone used inside FARBER practice modules where smaller labels need more contrast.
- **Soft Board:** Default card, media-cell, map-node, and hover surface.
- **Compressed Board:** Active filters, utility modules, navigation columns, and control groups.
- **Ink Hairline:** Sticky-header separators, list divisions, and connector-adjacent structure.

### Named Rules

**The One Signal Rule.** Muted Clay is the only interaction accent; do not assign a different color to each category or practice.

**The Paper, Not White Rule.** Use Warm Paper as the environmental canvas so neutral modules read as physical layers without shadows.

## Typography

**Display Font:** Native system sans-serif with platform fallbacks  
**Body Font:** Native system sans-serif with platform fallbacks  
**Identity Label Font:** Native UI serif with Georgia fallback

**Character:** A single pragmatic sans-serif carries almost the entire site, becoming editorial through scale, weight, compression, and spacing rather than through imported type. Serif appears only as a small identity counterpoint beneath the FARBER wordmark.

### Hierarchy

- **Display:** Medium, tightly tracked, compact leading. Use for object-page titles and the largest editorial declarations.
- **Headline:** Medium, tightly tracked, solid leading. Use for section headings inside long-form objects.
- **Title:** Medium and compressed. Use for persistent archive modules and prominent node headings.
- **Body:** Regular with generous leading and a readable measure capped around 68 characters. Use for essays, descriptions, and item links.
- **Large Editorial Italic:** Extra Light (`font-weight: 200`) in the existing native family. This is the owner-approved weight for occasional reflective passages and authorial statements across the site, including `large-italic`, article metaphors and the About statement. Keep each existing role's size, line-height, tracking, colour, spacing and alignment unchanged. This is not a blanket change to inline emphasis. Native font rendering may vary by platform; do not add a new family or simulate thinness with opacity.
- **Label:** Regular, compact, lightly tracked, and uppercase. Use for filters, controls, breadcrumbs, status, and practice metadata.
- **Identity Label:** Regular serif, widely tracked, centered, and uppercase. Reserve for the “Visual systems” line beneath the FARBER wordmark.

### Named Rules

**The Native Voice Rule.** The system earns distinction through typography handling and layout, not through a decorative webfont stack.

**The Labels Stay Small Rule.** Uppercase labels identify structure; they do not compete with titles or content.

## Layout

The archive uses an edge-to-edge modular grid with an 8-pixel rhythm and fluid 12–24-pixel page edge inside a 1600px shell. It progresses from one column on the narrowest screens to two at 480 pixels, four at 768 pixels, six at 1024 pixels, and eight at 1440 pixels. Authored column and row spans matter on wider screens; mobile reduces the composition aggressively and lets modules stack without horizontal scrolling.

Object pages use full-width shells with responsive block padding, display titles capped at 1300 pixels, and long-form copy constrained to about 68 characters. Media groups reuse the same modular logic rather than introducing a separate gallery aesthetic.

The FARBER route is a full-viewport spatial canvas. On wider screens, a fixed 1500-by-900-pixel world centers a 640-pixel hub and configured practice nodes; a single eased scale change reveals their relationships. Peripheral nodes are visually offstage and removed from the accessibility tree in close view. At 720 pixels and below, close view becomes a 360-pixel stacked hub, while overview becomes a normal vertical document with full-width nodes and no connectors.

**The Distance Is the Interaction Rule.** Focus and overview are two readings of the same information architecture, not separate pages or decorative zoom states.

**The Mobile Flow Rule.** When the field no longer fits, preserve meaning and reading order by switching to document flow.

## Elevation & Depth

The system is flat by default. It does not use drop shadows, blur, gradients, or floating cards. Depth comes from tonal steps, cropped media, open gaps, and one-pixel rules; on FARBER, apparent depth also comes from changing the scale of a single planar world.

### Shadow Vocabulary

- **Structural Rule:** A zero-blur one-pixel shadow creates sticky-header and inset list separators without suggesting lift.

### Named Rules

**The Flat Field Rule.** A module may change tone or gain a rule, but it does not float above the paper.

## Shapes

Every interface surface is square. Cards, chips, controls, menu rows, and practice nodes use hard corners and rectilinear clipping. Arrows are thin, open, square-capped line drawings; map connectors are straight hairlines. The wordmark supplies the bold geometry, so surrounding controls stay spare.

**The No Soft Containers Rule.** Do not introduce rounded cards, pills, ornamental blobs, or glass panels into the archive or FARBER field.

## Components

Components feel restrained and structural: state changes are carried by tone, ink, and clear focus outlines rather than by movement or decoration.

### Buttons

- **Shape:** Hard-edged rectangles with no border radius.
- **Map Control:** A compact uppercase label with a 44-pixel minimum touch target and 18-pixel horizontal padding.
- **Pressed State:** Near-black fill with Warm Paper text; `aria-pressed` is the source of truth.
- **Hover / Focus:** Unpressed controls may take the soft surface tone on precise pointers. Keyboard focus uses a two-pixel Muted Clay outline with a three-pixel offset.

### Chips

- **Style:** Category chips are square tonal labels, compact and uppercase, with no border.
- **State:** The active archive filter is underlined with aria-current. All filters remain plain regular-weight text on paper; hover uses the clay accent.

### Cards / Containers

- **Corner Style:** Square and clipped.
- **Background:** Soft Board is the default; Compressed Board identifies persistent utility cards and nested headers.
- **Shadow Strategy:** Flat surfaces only, using structural one-pixel inset rules where rows meet.
- **Internal Padding:** Content labels use compact 10-by-12-pixel padding; map nodes use roomier 18-to-20-pixel framing.
- **Content Card State:** Image titles remain visible on touch layouts and reveal on hover or keyboard focus only when hover is reliable.

### Navigation

Archive filters are small regular-weight, mixed-case text links in a wrapping flex row, with an underlined active state. Object and map back-links combine a thin line arrow with a short label and retain 44-pixel targets. Active state is communicated through `aria-current`, not color alone.

### FARBER Hub

The central hub pairs the supplied wordmark and reserved serif identity line with a structured section menu. Wide view uses an asymmetric identity/menu split; narrow view stacks the identity over a two-column menu. Each link ends with the same thin forward arrow and turns to Muted Clay on hover.

### Practice Node

Each practice node is a flat archive excerpt: a stronger neutral header pairs an uppercase role label with a large practice link, followed by up to five real entries divided by hairlines. Nodes are inert and hidden from assistive technology in close view, then restored as a coherent reading sequence in overview.

### Map Connectors

Straight, low-contrast lines connect practice nodes to the center only in spatial overview. They are non-interactive, hidden from assistive technology, and removed entirely when mobile overview becomes a vertical document.

### Motion

The only authored motion is the FARBER world scale change: 900 milliseconds with a fast-settling ease. Reduced-motion preference collapses this to an effectively immediate update. Avoid animating content-card reflow, navigation state, or decorative properties.

## Do's and Don'ts

### Do:

- **Do** preserve the hierarchy of Warm Paper, neutral boards, Near-Black Ink, and a single Muted Clay interaction signal.
- **Do** use square modules, open gaps, and hairline separators to express structure.
- **Do** keep keyboard focus conspicuous with the established two-pixel accent outline and offset.
- **Do** keep offstage FARBER nodes inert and absent from the accessibility tree until overview is active.
- **Do** preserve DOM reading order when a spatial desktop composition collapses into mobile flow.
- **Do** maintain readable body measure and sufficient contrast for compact labels, especially inside the FARBER field.
- **Do** prefer real archive content, native CSS, and manually editable configuration.

### Don't:

- **Don't** add category colors, gradients, glass effects, soft shadows, rounded cards, or ornamental UI chrome.
- **Don't** use scale or spatial position as the only way to discover or understand navigation.
- **Don't** leave visually offstage links focusable in close view.
- **Don't** reproduce the desktop map as a horizontally scrolling mobile canvas.
- **Don't** introduce animation beyond the meaningful change of viewing distance.
- **Don't** let labels, controls, or connector lines overpower the archive content or FARBER wordmark.

## Approved editorial release

The integrated editorial implementation is specified in [docs/editorial-layout.md](docs/editorial-layout.md). Cases use prepared, grouped media; articles use a source rail and a continuous 60ch reading axis with EN | RU at the top. Images are uncaptioned tiles with a native full-image dialog; Digest is text-only source-linked selections. The supplied case GIF is content with Play/Stop and reduced-motion fallback, distinct from interface motion. Local prototype files are not public source or assets.
