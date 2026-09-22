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