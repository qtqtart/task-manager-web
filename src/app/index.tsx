import { FC } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { ErrorBoundary } from "./providers/error-boundary";
import { WithThemeProvider } from "./providers/with-theme-provider";
import { router } from "./router/";
import { persistor, store } from "./store";

export const Root: FC = () => (
  <HelmetProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <WithThemeProvider>
          <ErrorBoundary>
            <RouterProvider router={router} />
          </ErrorBoundary>
        </WithThemeProvider>
      </PersistGate>
    </Provider>
  </HelmetProvider>
);
