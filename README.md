# FRBRVS

A static personal modular archive built with Astro, MDX, and native CSS Grid.

Requires Node.js 22.12 or newer and pnpm. Install dependencies once with `pnpm install`.

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed in the terminal (normally `http://localhost:4321/`).
Keep the terminal process running while using the site. Content changes appear
automatically after saving a file.

To check the production build, run `pnpm build`, then `pnpm preview` and open
the address it prints. Serve the generated `dist/` directory through a web
server; opening `dist/index.html` directly with `file://` will not load the
site's root-relative links and assets correctly.

## Current prototype

- `/`: modular archive, category filters, and persistent About and Contacts cards.
- `/{category}/{slug}/`: editorial pages authored in MDX.
- `/about/` and `/contacts/`: static pages.
- `/farber/`: a separate experimental navigation map.

The repository includes sample content. Replace the About text, contact
placeholders, and demo entries before a public launch.

Source code, content, media, documentation, and the pnpm lockfile belong in Git.
Dependencies, generated output, local environment files, Obsidian settings,
and local design-review reports are excluded through `.gitignore`.
Uploading this repository to GitHub stores the source; it does not publish a
live website automatically.

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
