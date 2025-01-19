import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: ({ image }) =>
    z.object({
      technologies: z.array(z.string()),
      title: z.string(),
      image: image(),
      alt: z.string(),
      featured: z.boolean(),
    }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/articles" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      tags: z.array(z.string()),
      image: image(),
      alt: z.string(),
      featured: z.boolean(),
    }),
});

export const collections = { articles, projects };
