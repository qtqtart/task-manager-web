import "dotenv/config";

import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.VITE_BASE_API_URL,
  documents: ["./src/**/*.graphql"],
  generates: {
    "./src/__generated__/graphql.output.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "./.introspection.json": {
      plugins: ["introspection"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
