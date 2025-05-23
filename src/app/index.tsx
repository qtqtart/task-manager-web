import { router } from "@app/router";
import { FC } from "react";
import { RouterProvider } from "react-router-dom";

import { WithApolloProvider } from "./providers/with-apollo-provider";
import { WithThemeProvider } from "./providers/with-theme-provider";

export const Root: FC = () => (
  <WithApolloProvider>
    <WithThemeProvider>
      <RouterProvider router={router} />
    </WithThemeProvider>
  </WithApolloProvider>
);
