import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        tech: z.array(z.string()).optional(),
        repo: z.url().optional(),
        demo: z.url().optional(),
    }),
});

export const collections = { projects };
