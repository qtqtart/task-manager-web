import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import globals from "globals";
import ts from "typescript-eslint";

export default ts.config(
  ...ts.configs.recommended,
  js.configs.recommended,
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.es2025,
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      react: reactPlugin,
      //
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefreshPlugin,
      //
      "simple-import-sort": simpleImportSortPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      //
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      //
      "no-undef": "off",
      "no-unused-vars": "off",
      //
      "react/display-name": "off",
      "react/react-in-jsx-scope": "off",
      //
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
);
