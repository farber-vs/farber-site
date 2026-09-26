import assert from "node:assert/strict";
import { readdir, readFile, access } from "node:fs/promises";
import { resolve, join } from "node:path";
import { categories } from "../src/config/categories.ts";

const root = resolve("dist");
const base = "/farber-site/";

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : path;
  }))).flat();
}

const files = await walk(root);
const pages = files.filter((file) => file.endsWith(".html"));
const knownRoutes = ["", "about/", "contacts/", "farber/", "articles/granitsa-ischezla-no-ostalas-vnutri/", "projects/schiffman-supplies/"];
for (const route of knownRoutes) await access(join(root, route, "index.html"));
let checkedLinks = 0;

for (const file of pages) {
  const html = await readFile(file, "utf8");
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length <= 1, true, `${file}: multiple h1 headings`);
  assert(!/hello@example\.com|instagram\.com|Replace these placeholders|This page is intentionally simple/.test(html), `${file}: placeholder content`);
  for (const email of html.match(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi) ?? []) {
    assert.equal(email, "farbervs@gmail.com", `${file}: unexpected contact`);
  }
  for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!value.startsWith("/")) continue;
    assert(value.startsWith(base), `${file}: link outside configured base: ${value}`);
    const url = new URL(value, "https://example.test");
    let target = decodeURIComponent(url.pathname.slice(base.length));
    if (!target || target.endsWith("/")) target += "index.html";
    await access(join(root, target));
    checkedLinks += 1;
  }
}

const home = await readFile(join(root, "index.html"), "utf8");
assert.deepEqual([...home.matchAll(/data-filter-link="([^"]+)"/g)].map((m) => m[1]), ["show-all", ...categories.map(category => category.slug)]);
const sourceEntries = (await walk(resolve("src/content/items"))).filter(file => /\/index\.mdx?$/.test(file));
const cardCount = [...home.matchAll(/<article\b[^>]*\bdata-filterable\b/g)].length;
assert.equal(cardCount, sourceEntries.length, "Each source entry must have one card");
const article = await readFile(join(root, knownRoutes[4], "index.html"), "utf8");
assert(article.includes('<html lang="en">'));
assert(article.includes('class="language-switcher"'));
assert(!article.includes('class="article-translation"'));
assert(article.includes("10.1126/sciadv.adz5561"));
const russian = await readFile(join(root, knownRoutes[4], "ru/index.html"), "utf8");
assert(russian.includes('<html lang="ru">'));
assert(russian.includes('aria-label="Русский" aria-current="page"'));
const project = await readFile(join(root, knownRoutes[5], "index.html"), "utf8");
assert.equal((project.match(/<figure(?:\s|>)/g) ?? []).length, 7);
assert(project.includes("data-animated-logo"));
assert(project.includes('fetchpriority="high"'));
assert(project.includes("visualisations"));
const contacts = await readFile(join(root, "contacts/index.html"), "utf8");
assert.equal((contacts.match(/mailto:farbervs@gmail.com/g) ?? []).length, 1);
const digest = await readFile(join(root, "digest/issue-001/index.html"), "utf8");
assert.equal((digest.match(/class="source-link"/g) ?? []).length, 3);
assert.equal((digest.match(/<img\s/g) ?? []).length, 1, "Only the site logo, no third-party Digest images");
assert(!files.some(file => /basquiat|colour\.webp|prototypes/.test(file)));
assert(!pages.some(file => file.includes("/images/")), "Images must not have object pages");
console.log(JSON.stringify({ pages: pages.length, checkedLinks, categories: categories.map(category => category.slug), contentEntries: cardCount, contact: "farbervs@gmail.com", result: "pass" }, null, 2));
