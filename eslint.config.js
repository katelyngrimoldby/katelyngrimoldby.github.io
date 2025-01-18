import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";
export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ["/dist", "**/*.config.js"],
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
