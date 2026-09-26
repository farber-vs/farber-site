# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The owner manually publishes projects and writing from an independent design and art practice. Visitors browse the work, read individual pieces, learn about the practice, and find the single public email contact.

## Product Purpose

The content MVP has four categories: Projects, Articles, Images and Digest. It includes Schiffman Supplies, the bilingual essay «Граница исчезла но осталась внутри», three owner-supplied photographs and a text-only digest of selected external sources. About and Contacts remain persistent homepage modules.

A separate, experimental FARBER surface makes the configured archive categories legible as a connected field of practices. It is not the main editorial index or a new product platform.

## Positioning

Real work and writing lead the site. The homepage offers visual modules and simple category filters; individual entries use readable editorial pages. The separate FARBER experiment treats navigation as a visual system: a working menu close up and a map of related practices when the view is pulled back.

## Operating Context

Content is authored as MDX files and local assets in the repository and built as a static site. The FARBER map is a side project inside the same Astro codebase, using the same category configuration and content collection. Publication is a deployment step, not an implied state of a local build.

## Capabilities and Constraints

- Astro, MDX, and native CSS/JavaScript remain the implementation stack.
- Preserve the homepage's modular grid and editorial templates while replacing demonstration entries with real content.
- Projects, Articles, Images and Digest are the current category scope. About and Contacts are static pages, not categories, and remain visible when filtering.
- English is the default. The essay exposes EN | RU links to separate static language versions sharing one template; document language follows the selected version.
- Images opens full photographs in a native dialog, with a direct-file fallback; no image object pages. Digest contains short summaries and source links, without third-party imagery.
- Contacts contains only the authorized email address, with no form, social profiles, or additional contact channels.
- Item dates record site publication and sort the archive; they do not establish a historical project year. Omit unconfirmed years, collaborators, and outcome claims. Label proposed applications as visualisations.
- Demonstration entries are retained under `docs/examples/items/`, outside the rendered content collection.
- The historical `web5.0/01main` prototype remains unchanged and serves only as evidence of the FARBER navigation idea.
- FARBER is a separate route whose central menu adapts to configured categories and content.
- Zooming out reveals connected modules without a graph database, canvas framework, or custom layout engine.
- The first version must remain static, responsive, keyboard accessible, and manually editable.
- No CMS, admin panel, accounts, database, generic page builder, or new animation system is in scope.

## Brand Commitments

The FARBER name and supplied FARBER logo are preserved. Warm paper, native sans-serif type, square modules, and restrained Swiss editorial structure remain the established visual world. This content extension does not introduce a new font, palette, or animation. The FARBER map inherits the current site's language rather than the styling of the historical prototype.

## Evidence on Hand

- Current site implementation in `src/`.
- Product specification in `docs/site-spec.json`.
- Current entry content in `src/content/items/` and static copy in `src/content/static/`.
- Route-specific authoring and layout decisions in `docs/editorial-layout.md`.
- FARBER logo in `public/logo-farber.svg`.
- The historical concept prototype, retained separately from this project.

## Product Principles

- Simple implementation, strong concept.
- Real content drives the interface.
- Spatial complexity must degrade to clear navigation.
- Native browser capabilities precede infrastructure.
- Side experiments remain separable until their value is proven.
