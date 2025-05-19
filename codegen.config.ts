import "dotenv/config";

import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.VITE_BASE_API_URL,
  documents: ["./src/**/*.graphql"],
  generates: {
    "./src/__generated__/graphql.output.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-rtk-query"],
      config: {
        importBaseApiFrom: "../shared/api",
        importBaseApiAlternateName: "baseApi",
        exportHooks: true,
      },
    },
    "./.introspection.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
