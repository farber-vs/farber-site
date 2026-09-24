import { categories } from "./categories";

const base = import.meta.env.BASE_URL;

export const farberMenu = [
  { label: "Archive", href: base },
  ...categories.map((category) => ({
    label: category.label,
    href: `${base}?filter=${category.slug}`,
  })),
  { label: "About", href: `${base}about/` },
  { label: "Contacts", href: `${base}contacts/` },
];

export const mapPositions: Record<
  (typeof categories)[number]["slug"],
  { x: number; y: number; width: number }
> = {
  projects: { x: 42, y: 58, width: 320 },
  digest: { x: 1136, y: 48, width: 320 },
  notes: { x: 62, y: 654, width: 300 },
  photos: { x: 1134, y: 662, width: 322 },
  antiblues: { x: 1194, y: 342, width: 270 },
};

export const mapCenter = { x: 750, y: 450 };
