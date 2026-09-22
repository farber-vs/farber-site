export const categories = [
  { slug: "projects", label: "Projects" },
  { slug: "digest", label: "Digest" },
  { slug: "notes", label: "Notes" },
  { slug: "photos", label: "Photos" },
  { slug: "antiblues", label: "Antiblues" },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export const categorySlugs = new Set<string>(
  categories.map((category) => category.slug),
);

export function getCategoryLabel(slug: string) {
  return categories.find((category) => category.slug === slug)?.label ?? slug;
}
