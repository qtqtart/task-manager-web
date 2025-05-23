import { ApolloProvider } from "@apollo/client";
import { client } from "@shared/api";
import { FC, PropsWithChildren } from "react";

export const WithApolloProvider: FC<PropsWithChildren> = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
