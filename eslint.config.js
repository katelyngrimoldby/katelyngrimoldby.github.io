import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default tseslint.config(
  {
    ignores: [
      "**/dist",
      "**/node_modules",
      "**/.astro",
      "**/.github",
      "**/.changeset",
    ],
  },

  // JavaScript
  eslint.configs.recommended,
  // TypeScript
  ...tseslint.configs.strict,
  // Astro
  ...eslintPluginAstro.configs.recommended,

  // Set globals for Node scripts.
  {
    files: ["scripts/**"],
    languageOptions: {
      globals: globals.node,
    },
  },
);
