import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
export default tseslint.config(
  {
    ignores: [
      "**/dist",
      "**/node_modules",
      "**/.astro",
      "**/.vscode",
      "**/.github",
    ],
  },

  // Standard Javascript
  js.configs.recommended,

  // String Typescript w/ Type Checking
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Astro
  ...eslintPluginAstro.configs.recommended,
);
