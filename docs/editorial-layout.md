# Editorial layout and design principles

This is the binding editorial guidance for this site, extending the warm-paper, native-sans, square-grid visual system in [DESIGN.md](../DESIGN.md). It records both the owner-approved direction and the implemented baseline; these are deliberately distinct. It does not replace global design tokens or the homepage grid specification.

## Approved direction — 2026-09-25

The owner approved these principles following the five-studio reference study and the Schiffman desktop/mobile layout proposal. This approval establishes design guidance, not a claim that the proposal is already implemented or published. Existing CSS and components describe what currently ships; the principles below govern subsequent editorial changes. Preserve existing behaviour and accessibility while applying them.

### Work first, quiet interface

- Let the work supply the colour, texture, and visual energy. Keep the surrounding interface restrained, with the existing FARBER logo, font family, neutral palette, and square geometry.
- Create character through scale, placement, rhythm, and editing. Do not add heavy outlines, decorative cards, shadows, or effects to manufacture interest. Keep necessary focus indicators visible.
- For project cases, show meaningful project imagery in the first viewport alongside a concise title and introduction. Avoid a full-screen preamble that postpones the work.
- For articles, prioritise a readable title, introduction, and continuous text. Do not add a hero image or portfolio choreography without a content reason.

### Composition and rhythm

- Alternate full-width media, paired or unequal-width groups, and short text pauses when the material benefits from them. Avoid both a monotonous slideshow and arbitrary variation for its own sake.
- Group by meaning: a mark and its variations; patterns and their logic; applications at different scales. Let each group demonstrate a specific idea.
- Use tighter gaps within a group and more space between chapters. Empty space should clarify relationships, not merely inflate page length.
- Use asymmetry deliberately: for example, a short heading on the left and explanatory copy on the right, or one large image beside a smaller image and its explanation.
- A case should communicate context, design logic, and applications, not just list deliverables. Keep length proportional to the available evidence; do not invent chapters or repeat images to imitate a large studio's case.

### Text placement, alignment, and roles

Positioning a text block on the left, centre, or right of the page is independent of aligning the text inside it. Body paragraphs remain left aligned, even inside a right-hand column, with a comfortable reading measure of approximately 60–68 characters where space permits.

Use three available editorial roles, not three compulsory decorations:

- **Medium regular grotesk:** explanations, context, and continuous reading.
- **Large dense grotesk:** a short central idea or emphatic statement; not an entire explanation.
- **Large italic in the existing family, Extra Light 200:** an occasional authorial remark, reflection, or genuine quotation. The owner explicitly requested `font-weight: 200` site-wide for this role, preserving existing sizes, spacing, line-height, tracking, colour, alignment and purpose. Do not invent attribution or a testimonial, change ordinary body weight, or use opacity to imitate a thin face.

Centred or right-aligned text is reserved for short accents. Not every page needs all three roles or all three alignments. Do not alternate alignment mechanically. Keep headings, statements, and body copy visibly distinct without introducing new font dependencies.

### Prepare media for the screen

- Treat a presentation as source material, not a ready-made web page. Remove slide framing and unnecessary internal margins when preparing the web export.
- Show the core mark at a legible scale. Break a dense overview of logos, colours, patterns, and services into selected, independently readable media where needed.
- Preserve important artwork and objects. Crop deliberately when composition benefits, not simply to force unrelated images into identical boxes. Inspect every crop on mobile; keep natural proportions when a crop would lose meaning.
- Do not carry prototype-specific zoom or crop coordinates into the content-authoring workflow. Prefer clean source exports and a small number of understandable layout variants.
- Use real supplied assets and concise adjacent captions. Label mockups as visualisations; do not present them as proof of a production launch.
- Retain responsive images, appropriate loading priority, and lazy loading below the opening media. A larger visual presence does not require unnecessarily heavy files.

### Mobile is a simpler composition

- Editorial media groups and text columns collapse into a single logical reading sequence. This does not alter the homepage's separately specified 1–2-column mobile grid.
- Preserve DOM order; do not use desktop positioning that scrambles the narrative when stacked.
- Remove desktop offsets, reduce excess spacing, and default statements as well as paragraphs to left alignment. Keep useful type hierarchy and legible captions.
- Do not squeeze two detailed images into narrow side-by-side slots, preserve presentation-sized blank margins, or introduce horizontal scrolling.

### Simple implementation remains a requirement

- Reuse Astro, MDX, native CSS Grid, and existing components. Add only small, explicit layout variants justified by actual content; no generic layout engine, page builder, CMS, or new animation framework.
- Full-width media, paired groups, unequal columns, and text placement are ordinary layout work, not reasons to introduce client-side infrastructure.
- Native disclosure can hold genuinely long background information; do not hide the current short copy merely to reproduce a reference interaction.
- Authored video is content, distinct from interface animation. When motion is requested, a native video element with suitable poster and controls can show a prepared clip without scroll choreography or an animation library.
- Scroll-synchronised sequences, custom smooth scrolling, interactive 3D, custom cursors, elaborate galleries, and page transitions remain outside the MVP unless explicitly requested.

### Schiffman reference sequence, not a mandatory template

The approved example moves from application to construction and back to application:

1. Compact project introduction: name left, short description right.
2. Large container application without the presentation frame.
3. Brief context in a heading/body split.
4. Enlarged core mark beside its modular family.
5. One short statement connecting the mark to the system.
6. Enlarged patterns and a concise explanation instead of a dense all-in-one board.
7. Packaging, transport, and a scale explanation grouped together.
8. Large signage image, then simple project-return and contact links.

Reuse the principles, not these exact assets, sequence, column ratios, or pixel measurements. The local JPG proposal is illustrative; this document carries the durable guidance without requiring private source files or ignored preview artifacts.

### Reference lineage

These specific cases informed the direction; borrow composition principles, not their branding or technical stacks:

- [Landor — West Loop](https://landor.com/en/our-work/west-loop/): immediate visual impact and closely grouped media at different scales.
- [Wolff Olins — Uber](https://www.wolffolins.com/work/uber): chapters that connect context and design decisions.
- [Design Bridge and Partners — Forest Carbon](https://www.designbridge.com/work/forest-carbon): a clear central idea, varied media scale, and short explanatory pauses.
- [Saffron — Repsol](https://saffron-consultants.com/work/repsol): editorial columns with text placement independent of paragraph alignment.
- [Pentagram — Pfizer](https://www.pentagram.com/work/pfizer): a quiet shell, concise introduction, and media-first presentation.

### Acceptance check for future changes

Inspect desktop and mobile together. Confirm that the first screen communicates the subject; every media group has a purpose; the core mark and details remain legible; crops preserve meaning; body copy reads comfortably; and mobile has no horizontal overflow or broken reading order. Preserve keyboard focus, descriptive alternative text, factual captions, and simple navigation. Treat an approved mockup, a local implementation, and a public deployment as three different states.

## Integrated implementation — 2026-09-26

The owner approved the case, article, About, Contacts, homepage, Images and
Digest, then authorized publication. The layouts are now in `src/`, not just
the local prototypes. This section supersedes the previous implementation
baseline and prototype-only status. Actual publication is a separate verified
GitHub Pages deployment; a successful build alone is not evidence of release.

### Page structure

- A shared masthead uses the FARBER logo at 156px (118px below 900px), regular
  navigation, 44px targets and 12–24px edges within a 1600px shell.
- The home archive retains 8px gaps, row packing and 1/2/4/6/8 columns at
  0/480/768/1024/1440px. Below 768px every module is 1×1; larger desktop
  spans cap to available columns. About/Contacts always lead. Date-descending
  content follows; equal dates use the content path for a stable order.
- Filters are regular text with an underlined active state and aria-current,
  persisted in the query string and browser history. No-JS shows all content.
- `src/pages/[category]/[...slug].astro` shares the editorial shell. Project
  content leads with media and grouped applications. About and Contacts retain
  their approved compositions; Contacts has one email link only.
- Articles use one reading axis, a source rail on desktop and source context
  above the body on mobile. Body measure is 60ch; ordinary copy remains left
  aligned. The metaphor is Extra Light 200 and the closing question is dense
  grotesk. The article title, source and body remain in logical DOM order.
- `index.mdx` is English. Optional sibling `ru.mdx` supplies Russian text,
  title, description and source metadata through the translations collection.
  Both render with one template, native EN | RU links at the top, current
  language indication and correct document lang. The existing base article URL
  is preserved; Russian adds `ru/`. No redirects or language JavaScript.
- Schiffman uses prepared crops as image assets, not SVG viewports or slide
  scale transforms. Media use responsive Astro output. The supplied centred
  GIF has Play/Stop and a static reduced-motion/no-JS fallback.
- Images uses the existing item collection with required fullImage and alt
  for this category. There are no object pages or tile caption overlays.
  A native dialog presents the full uncropped photograph, loading/error states,
  Close/Escape/backdrop dismissal, focus return and scroll restoration.
  The ordinary link is a raw-image fallback without JavaScript.
- Digest is one issue page with short summaries, source links and topic labels.
  Issue 001 is explicitly attributed to archive selections from 4 August 2022.
  The owner chose **no third-party images**: text-only editorial rows and an
  original typographic cover. Do not ship the reference images, including in
  Git history. The three source URLs returned HTTP 200 during release checks.
- The separate FARBER map keeps its existing design. Its category positions
  now include Images and Digest; image links lead to the Images filter rather
  than nonexistent object pages.

### Editing and boundaries

See README for current authoring examples. Keep content in MDX and local
media, with no copied full HTML pages, CMS or additional dependencies.
Required item fields remain title/date/cover/cols/rows; Images adds
fullImage/alt. Publication dates sort entries and do not establish a historical
project or photo date. Do not invent outcomes, clients or credits.

The local `prototypes/` and `.impeccable/` directories are excluded from Git
and the Astro build. They may contain unlicensed visual references and must
not be published. Public documentation and content must not expose private
workspace paths.

### Release verification

The release browser pass covers 48 route/viewport combinations from 320 to
1920px, all four filters plus Show All, history/reload, popup fit in portrait
and landscape, focus restoration, EN/RU, GIF controls/reduced motion, and
no-JS fallbacks. Screenshots are actual browser renders. The content checker
validates base-prefixed page/asset links, category/card counts, languages,
single contact, and absence of third-party Digest images. This is not a
claim of a separate screen-reader audit.
