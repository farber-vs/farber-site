# Editorial content extension

This documents the Projects/Articles route and its immediate archive entry points. It is a narrow extension of the existing warm-paper, native-sans, square-grid design in `DESIGN.md`, not a replacement global design system. The original design file and its sidecar remain unchanged. Implementation in `src/styles/global.css` and the named components is the source of truth.

## Current surface

The item template is `src/pages/[category]/[slug].astro`. Its reading sequence is the existing compact masthead, title, short deck, authored content, and a closing navigation row. The closing links return to the current archive category or open Contacts. The Schiffman case begins with project imagery in the first viewport; the essay begins with source context and text.

About and Contacts use the existing static-page template. About reuses `TextBlock`; Contacts presents only the authorized email link. These pages remain homepage modules rather than content categories. The separate `/farber/` map is outside this layout extension.

## Text and language

Ordinary essay and case paragraphs stay left aligned, with a maximum reading measure of 68 characters. Object and static-page shells are capped at 1600 pixels. Project/article titles have a compact 32-pixel lower margin and decks are capped at 42 characters; the article title has its own 22-character cap.

`TextBlock` separates short editorial emphasis from continuous reading:

- `align`: `left` (default), `center`, or `right`.
- `variant`: `body` (default), `display`, or `large-italic`.
- `display` uses heavier native sans-serif type; `large-italic` uses the same native family in italic. Neither adds a font dependency.

Use centered italic or right-aligned heavy blocks for short accents, not whole essays. The article has a smaller display accent than the case to contain its longer closing question. About also uses a short right-aligned body block. Alignment does not change DOM reading order, and no motion is added.

The essay's frontmatter sets `language: ru`, which reaches the document's `lang` attribute. Its supplied English text sits in a native `<details lang="en">` disclosure labelled “Read in English”, with a keyboard-focusable `<summary>`. English closing navigation is explicitly marked `lang="en"`. Other current pages use the English default. Preserve the original essay and supplied translation; source metadata is not the site's publication date.

## Images and grouped media

`Figure` takes an imported local image, required meaningful `alt`, optional `caption`, and optional `priority`. It uses Astro's image output, responsive widths, and natural image height. The first case image sets `priority`; subsequent images load lazily. Captions identify the work without treating mockups as evidence of production deployment: packaging, vehicle livery, and signage are labelled visualisations.

The existing `MediaGrid` defaults to its modular layout. For uncropped case imagery, use `layout="natural"` with two `MediaCell cols={2}` children, each containing a `Figure`. At 768 pixels and above, these form a pair on the four-column media grid. Below that breakpoint, they stack in source order. Natural layout uses automatic row heights and preserves image proportions; do not force these images into cropped, equal-height cells. Single figures remain full width within the page shell.

## Archive labels and keyboard focus

Content-card title strips remain visible below 768 pixels, including narrow windows with a fine pointer. They also remain visible on devices without reliable hover. Only at 768 pixels and above with both hover and a fine pointer do titles hide at rest; hovering or keyboard-focusing the link reveals them. Labels wrap within the card rather than relying on the accessible link name alone.

All homepage links, including About and Contacts, have an enclosed two-colour keyboard indicator: the existing two-pixel outline becomes ink with a negative four-pixel offset, and a non-interactive overlay adds a two-pixel paper border at the inside edge. This stays visible within the cards' clipped bounds and against both light and dark imagery. It is a scoped focus treatment, not a new category colour or decorative shadow. Other editorial links retain the clay outline; the translation summary and closing links have explicit focus styles.

## Authoring and evidence boundaries

Place each entry at `src/content/items/{category}/{latin-slug}/index.mdx`, with its assets alongside it. The category must exist in `src/config/categories.ts`. Current categories are `projects` and `articles`; slugs use lowercase Latin letters, digits, and hyphens.

Required frontmatter is `title`, `date`, `cover`, `cols`, and `rows`. `description` and `language` are optional; language defaults to `en`. Homepage spans accept 1–8 columns and 1–4 rows and simplify on mobile. `date` is the entry's site-publication/sort date, not an inferred project year. Do not add an unconfirmed project year, collaborators, client results, or performance metrics. Existing demonstration entries are preserved in `docs/examples/items/` and are not rendered by the content collection.

Keep private source locations, workspace links, and internal working material out of public content and documentation. Describe only supported public-facing facts and use the already authorized contact channel.

## Verified baseline

The finish review in `.impeccable/review/finish-review.md` is PASS. Its supporting `verification.json` records 35 route/width checks from 320 to 1920 pixels, plus filtering, persistent modules, mobile titles, keyboard focus, native translation, and map checks. The focused confirmation covers title containment at 320, 390, and 640 pixels and the enclosed focus ring on all four homepage cards. Screenshots accompany that review. These checks establish the implemented responsive baseline; they do not claim a separate screen-reader audit or independently establish source provenance.
