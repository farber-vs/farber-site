# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary user is the owner of a personal visual archive, who publishes and connects projects, notes, images, digests, and ongoing practices. Visitors explore the archive through spatial and editorial navigation rather than a conventional portfolio index.

## Product Purpose

The site presents a large, manually maintained body of work as a modular archive. A second, experimental FARBER surface makes the archive legible as a connected field of workshops and practices.

## Positioning

Navigation is treated as a visual system: content modules remain useful links at close range and become a map of related practices when the view is pulled back.

## Operating Context

Content is authored as files in the repository and published as a static site. The FARBER map is a side project inside the same Astro codebase and may later connect more directly to the main archive.

## Capabilities and Constraints

- Astro, MDX, and native CSS/JavaScript remain the implementation stack.
- The existing archive homepage remains unchanged.
- The historical `web5.0/01main` prototype remains unchanged and serves only as evidence of the FARBER navigation idea.
- FARBER is a separate route whose central menu adapts to configured categories and content.
- Zooming out reveals connected modules without a graph database, canvas framework, or custom layout engine.
- The first version must remain static, responsive, keyboard accessible, and manually editable.

## Brand Commitments

The FARBER name and supplied FARBER logo are preserved. The new surface inherits the restrained, Swiss, editorial visual language of the current site rather than the styling of the historical prototype.

## Evidence on Hand

- Current site implementation in `src/`.
- Product specification in `docs/site-spec.json`.
- FARBER logo in `public/logo-farber.svg`.
- Historical concept prototype at `_WEB_good/web5.0/01main/` outside this project.

## Product Principles

- Simple implementation, strong concept.
- Real content drives the interface.
- Spatial complexity must degrade to clear navigation.
- Native browser capabilities precede infrastructure.
- Side experiments remain separable until their value is proven.

