import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const items = defineCollection({
  loader: glob({
    base: "./src/content/items",
    pattern: "**/index.{md,mdx}",
    generateId: ({ entry }) => entry.replace(/\/index\.(md|mdx)$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      date: z.coerce.date(),
      cover: image(),
      cols: z.number().int().min(1).max(8),
      rows: z.number().int().min(1).max(4),
      description: z.string().optional(),
    }),
});

const staticPages = defineCollection({
  loader: glob({
    base: "./src/content/static",
    pattern: "*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().optional(),
  }),
});

export const collections = { items, staticPages };
