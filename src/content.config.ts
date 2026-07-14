import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One collection, one frontmatter shape. `source` records where a piece
// originally lived so nothing loses its provenance during the migration.
const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    source: z
      .enum([
        "original", // written directly for this site
        "instagram-personal",
        "instagram-versionex",
        "facebook-versionex",
        "youtube",
        "reddit",
        "github",
      ])
      .default("original"),
    sourceUrl: z.string().url().optional(), // canonical link back to the platform copy
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
