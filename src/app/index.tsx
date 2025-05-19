import { router } from "@app/router";
import { FC } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { WithThemeProvider } from "./providers/with-theme-provider";
import { persistor, store } from "./store";

export const Root: FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <WithThemeProvider>
        <RouterProvider router={router} />
      </WithThemeProvider>
    </PersistGate>
  </Provider>
);
