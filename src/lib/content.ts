import { categorySlugs, type CategorySlug } from "../config/categories";

export function parseItemId(id: string) {
  const parts = id.split("/");

  if (parts.length !== 2) {
    throw new Error(
      `Invalid content path "${id}". Expected {category}/{latin-slug}/index.mdx.`,
    );
  }

  const [category, slug] = parts;

  if (!categorySlugs.has(category)) {
    throw new Error(
      `Unknown category "${category}" in "${id}". Add it to src/config/categories.ts first.`,
    );
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(
      `Invalid slug "${slug}" in "${id}". Use lowercase Latin letters, digits, and hyphens.`,
    );
  }

  return { category: category as CategorySlug, slug };
}
