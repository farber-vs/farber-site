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

The approved layouts are integrated into the Astro site. Local design studies in
`prototypes/` are excluded from Git and publication; the durable design rules
live in [docs/editorial-layout.md](docs/editorial-layout.md).

- `/`: modular archive, category filters, and persistent About and Contacts cards.
- `/{category}/{slug}/`: editorial pages authored in MDX.
- `/about/` and `/contacts/`: static pages.
- `/farber/`: a separate experimental navigation map.

The archive has Projects, Articles, Images and Digest. It includes Schiffman
Supplies with the supplied animated logo, an English/Russian essay, three
owner-supplied photographs, and Digest 001 with short summaries and external
source links (no third-party images). About introduces Alexey Farber's practice;
Contacts contains only `farbervs@gmail.com`.

Edit the current content here:

- `src/content/items/projects/schiffman-supplies/index.mdx`
- `src/content/items/articles/granitsa-ischezla-no-ostalas-vnutri/index.mdx`
- `src/content/items/articles/granitsa-ischezla-no-ostalas-vnutri/ru.mdx`
- `src/content/items/images/image-02/index.mdx` (also image-11 and image-19)
- `src/content/items/digest/issue-001/index.mdx`
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

## Article languages

Keep the English article in `index.mdx`. Add `ru.mdx` alongside it with
`title`, `description`, and `language: ru` frontmatter and the Russian body.
Do not duplicate cover, spans or publication date in the translation.
The shared template automatically exposes EN | RU; Russian lives at
`/articles/{slug}/ru/`. Both versions work without JavaScript.

Optional article source metadata is separate from the site's publication date:

```yaml
source:
  date: August 19
  publication: Science Advances
  url: https://example.com/original-paper
  label: Original paper
```

For the two essay accents, use `<p class="essay-metaphor">…</p>` (italic 200)
and `<p class="essay-question">…</p>` (dense grotesk). Keep ordinary paragraphs
separated by blank lines.

## Images

Create `src/content/items/images/{slug}/index.mdx` with no body:

```yaml
---
title: Image 02
date: 2026-09-26
cover: ./cover.webp
fullImage: ./photo.webp
alt: Describe what the photograph shows.
cols: 2
rows: 2
---
```

Keep an approximately 800px thumbnail and a 2200px full image beside it.
No internal page is generated. The tile opens a native dialog with
Close/Escape/backdrop dismissal, focus restoration and loading/error messages.
Without JavaScript, the link opens the full image directly. Images have no
visible title overlay. Publication date determines archive order, not when
the photograph was taken.

## Digest and case layouts

Digest issues live in `src/content/items/digest/{slug}/index.mdx`.
`displayTitle` optionally supplies the short visible issue title;
`title` remains the full archive/browser title. Each selection uses a
`digest-entry` section with a heading and `digest-copy`: a short paragraph,
a `source-link`, and optional `digest-tags`. Use the existing issue as the
small editing example. Publish original short summaries with attribution,
not copied articles. Do not add third-party images without verified permission.

The Schiffman MDX uses small explicit groups (`story-split`, `identity-pair`,
`pattern-pair`, `applications`) and `CaseImage` for prepared local images.
These are layout helpers, not a required sequence for every project.
`CaseImage` takes `src`, `alt`, optional `caption`, `frame` and `priority`.
Keep clean artwork exports alongside the content; do not carry slide crop
coordinates into MDX. `LogoMotion` takes a poster URL and animation URL,
with a static reduced-motion/no-JS fallback.

When adding a category also set its position in `src/config/farber-map.ts`
if it should appear in the separate experimental map.
