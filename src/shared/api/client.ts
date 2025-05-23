import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CONFIG } from "@shared/config";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const httpLink = createUploadLink({
  uri: CONFIG.BASE_API_URL,
  credentials: "include",
  headers: {
    "apollo-require-preflight": "true",
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
