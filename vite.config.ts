import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

import { compilerOptions } from "./tsconfig.paths.json";

const resolveAliases = (paths: Record<string, string[]>) =>
  Object.entries(paths).reduce(
    (acc, [alias, path]) => {
      acc[alias] = resolve(__dirname, ...path);
      return acc;
    },
    {} as Record<string, string>,
  );

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: resolveAliases(compilerOptions.paths),
  },
});
