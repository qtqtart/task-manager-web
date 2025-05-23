import js from "@eslint/js";
import i18next from "eslint-plugin-i18next";
import prettier from "eslint-plugin-prettier";
import reactDom from "eslint-plugin-react-dom";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactX from "eslint-plugin-react-x";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

const config = tseslint.config(
  {
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["**/*.{js,ts,tsx}"],
    extends: [
      ...tseslint.configs.recommended,
      js.configs.recommended,
      i18next.configs["flat/recommended"],
    ],
    languageOptions: {
      globals: {
        ...globals.es2025,
        ...globals.browser,
      },
    },
    plugins: {
      prettier: prettier,
      "react-x": reactX,
      "react-dom": reactDom,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      ...reactX.configs["recommended-typescript"].rules,
      ...reactDom.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.recommended.rules,
      //
      "no-var": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      //
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      //
      "react-x/no-array-index-key": "off",
      "react-x/jsx-key-before-spread": "off",
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

export default config;
