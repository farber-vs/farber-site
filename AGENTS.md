# Project Instructions

This repository contains a simple personal modular website.

## Core principle

simple implementation / strong concept

The goal is to build a clean, robust first version of the site, not a platform, CMS, framework, or universal website builder.

## General rules

- Prefer the simplest implementation that satisfies the current requirements.
- Do not add architecture for hypothetical future features.
- Do not introduce dependencies unless they clearly reduce complexity.
- Do not introduce a database unless absolutely necessary.
- Do not create a CMS or admin panel.
- Do not create authentication or user accounts.
- Do not build a drag-and-drop editor.
- Do not build a generic object system.
- Do not build a plugin architecture.
- Do not build a custom layout engine if CSS Grid can solve the problem.
- Do not create animations or transitions unless explicitly requested.
- Avoid premature abstractions.

## Content editing

The owner of the website should be able to:

- add a new content item manually;
- choose its category;
- change its grid size;
- add images;
- add GIFs;
- add videos;
- add embeds;
- create a new category;
- add a new filter;

without needing to understand the entire codebase.

Keep content configuration separate from visual components whenever practical.

Do not require copying large HTML templates to create new content.

## Grid philosophy

The homepage is based on a responsive modular CSS Grid.

Use native CSS Grid features whenever possible.

Grid packing does not need to be perfect.

Empty cells are acceptable.

Do not implement masonry, bin-packing, or custom positioning algorithms unless explicitly requested.

## Design philosophy

The visual language should be:

- Swiss
- minimal
- functional
- editorial
- slightly brutal
- neutral
- typography-first

Avoid unnecessary decorative design.

Function and structure are more important than visual effects.

### Required design guidance

Before designing, editing, or reviewing a page, read [DESIGN.md](DESIGN.md) for the established visual system and [docs/editorial-layout.md](docs/editorial-layout.md) for the owner-approved editorial principles and implementation status.

- The work leads; the interface recedes. Preserve the FARBER logo, existing font family, and neutral palette unless the owner requests a redesign.
- Build character through image scale, meaningful grouping, typography, and spacing, not decorative containers, strong outlines, or effects.
- Treat text-block placement separately from text alignment: a paragraph in a right-hand column still reads left aligned.
- Prepare images for the web; do not shrink complete presentation slides or dense identity boards into unreadable illustrations.
- Project cases foreground the work; articles foreground reading. Do not impose one case's sequence on every content type.
- Simplify editorial pages into a clear single-column mobile flow. The homepage retains its separately specified modular grid.
- English is the default site and article language. Bilingual articles expose a visible `EN | RU` switch at the top, with the active language clearly indicated; do not bury the alternative language in a bottom disclosure. Preserve both supplied texts and the correct document language. This is implemented with shared templates and separate static language URLs.
- The large editorial italic role is Extra Light: `font-weight: 200`, in the existing font family. Preserve its current purpose, size, line-height, spacing, tracking, colour and alignment. This applies site-wide to `large-italic` and its prototype equivalents, not to every inline emphasis.

The approved Schiffman composition is a design reference, not a universal page template. Documented design approval does not mean that a mockup is implemented or deployed, nor does it authorize unrelated visual changes.

### Prototype review delivery

Keep prototyping in HTML/CSS, but send actual browser screenshots directly in the conversation for each visual review. The owner often reviews on a phone and cannot reliably open localhost links. Show desktop and mobile views, with readable detail shots for the changed areas when useful; local preview URLs are optional, never the only deliverable. Screenshots must show the current code, not generated approximations.

## Responsive philosophy

Desktop should preserve the modular spatial composition.

Mobile should simplify aggressively.

Do not try to reproduce the exact desktop composition on mobile.

No horizontal scrolling.

## Development workflow

Before implementing any substantial architectural decision:

1. Check `/docs/site-spec.json`.
2. Prefer the smallest viable solution.
3. If two solutions provide nearly identical user-facing results, choose the simpler one.
4. Keep the code readable enough that the site owner can edit content manually later.

When requirements conflict with implementation complexity, prioritize the current working website over theoretical extensibility.

## Scope protection

Do not expand the project into:

- a SaaS product;
- a social network;
- a universal portfolio system;
- a visual website builder;
- a graph-based knowledge system;
- a modular CMS platform.

This repository is one personal website.
