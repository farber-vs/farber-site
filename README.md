# FRBRVS

A static personal modular archive built with Astro, MDX, and native CSS Grid.

Requires Node.js 22.12 or newer and pnpm. Install dependencies once with `pnpm install`.

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed in the terminal (normally `http://localhost:4321/farber-site/`).
Keep the terminal process running while using the site. Content changes appear
automatically after saving a file.

To check the production build, run `pnpm build`, then `pnpm preview` and open
the address it prints. Serve the generated `dist/` directory through a web
server; opening `dist/index.html` directly with `file://` will not load the
site's root-relative links and assets correctly.

## Current content MVP

- `/`: modular archive, category filters, and persistent About and Contacts cards.
- `/{category}/{slug}/`: editorial pages authored in MDX.
- `/about/` and `/contacts/`: static pages.
- `/farber/`: a separate experimental navigation map.

The archive currently has two categories: Projects and Articles. It includes
the Schiffman Supplies visual-identity case and «Граница исчезла но осталась
внутри», with the supplied English translation available through a native
disclosure. About introduces Alexey Farber's design and art practice. Contacts
contains only `farbervs@gmail.com`.

Edit the current content here:

- `src/content/items/projects/schiffman-supplies/index.mdx`
- `src/content/items/articles/granitsa-ischezla-no-ostalas-vnutri/index.mdx`
- `src/content/static/about.mdx`
- `src/content/static/contacts.mdx`

Earlier demo entries are preserved under `docs/examples/items/`; they are not
part of the content collection and are not published. Internal source PDFs,
brand-strategy notes and design-review files are not included in the build.

Source code, content, media, documentation, and the pnpm lockfile belong in Git.
Dependencies, generated output, local environment files, Obsidian settings,
and local design-review reports are excluded through `.gitignore`.

## Publish to GitHub Pages

Public website: https://farber-vs.github.io/farber-site/

The `main` branch contains the source. The `gh-pages` branch contains only the
compiled static site. GitHub Pages serves that branch from its root directory;
`public/.nojekyll` keeps generated `_astro/` assets accessible.

After editing and checking the content, commit and push the source changes,
then publish from a terminal with authenticated Git access:

```sh
pnpm deploy
```

This rebuilds the site and updates `gh-pages` without force-pushing or changing
your working branch. The source must have no uncommitted changes. GitHub Pages
may take a few minutes to serve the new build. Pushing `main` alone does not
update the live site.

The `/farber-site/` prefix is configured once in `astro.config.mjs`. Internal
links and the logo use `import.meta.env.BASE_URL`, so they also work on nested
pages. The route examples below are relative to this prefix.

## Add a content item

1. Create `src/content/items/{category}/{latin-slug}/`.
2. Add `index.mdx`, `cover.jpg`, and any local media to that folder.
3. Add this small frontmatter block:

```yaml
---
title: Project Name
date: 2026-08-09
cover: ./cover.jpg
cols: 2
rows: 1
description: Optional short introduction.
---
```

`cols` must be 1–8 and `rows` must be 1–4. The folder name becomes the URL, so use lowercase Latin letters, numbers, and hyphens. The parent folder becomes the category.

`date` is the publication date used for chronological sorting, not the year a
project was made. `language` may be `en` (default) or `ru`; it sets the document
language. Covers can be JPEG, PNG, WebP or SVG. On phones, authored spans are
ignored and all homepage modules have equal size.

The body is ordinary Markdown. Local images use relative paths:

```md
![Useful alternative text](./image-01.jpg)
```

For a modular image composition, use the limited MDX wrappers:

```mdx
<MediaGrid>
  <MediaCell cols={2} rows={2}>

  ![Useful alternative text](./image-01.jpg)

  </MediaCell>
</MediaGrid>
```

For an uncropped case-study image with a caption, import the image and use
`Figure`. The opening image can have `priority` for eager loading:

```mdx
import identity from "./identity.webp";

<Figure src={identity} alt="Describe what the image shows" caption="Optional caption" priority />
```

For two complete images side by side, use `<MediaGrid layout="natural">`
with two `<MediaCell cols={2}>` wrappers containing a `Figure` each. They stack
on mobile. The default modular grid still crops media into authored cells;
`natural` preserves image proportions. Keep a blank line around Markdown
inside MDX wrappers.

For local video, import the file and pass the generated URL to `Video`:

```mdx
import clip from "./clip.mp4";

<Video src={clip} caption="Optional caption" />
```

YouTube and Vimeo are supported through a URL:

```mdx
<Embed url="https://www.youtube.com/watch?v=VIDEO_ID" title="Video title" />
```

Text blocks can use three alignments and three editorial variants:

```mdx
<TextBlock align="right" variant="display">

## A short display statement

</TextBlock>
```

`align` accepts `left`, `center`, or `right`. `variant` accepts `body`,
`display`, or `large-italic`. Keep long reading text left-aligned; centered and
right-aligned blocks work best as short editorial accents.

## Add a category and filter

Add its slug and label once in `src/config/categories.ts`. The filter bar is generated from that list.

## Static pages

Edit `src/content/static/about.mdx` and `src/content/static/contacts.mdx` directly.

## Local commands

```sh
pnpm dev
pnpm build
pnpm preview
```

After a production build, run `node scripts/check-content.mjs` to check page
and asset links, the configured filters, core content and the contact address.
