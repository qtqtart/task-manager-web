import { createTheme } from "@app/styles";
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { LOCAL_STORAGE_KEYS } from "@shared/consts/local-storage-keys";
import { FC, PropsWithChildren } from "react";

export const WithThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = createTheme();

  return (
    <MUIThemeProvider
      theme={theme}
      defaultMode="system"
      colorSchemeStorageKey={LOCAL_STORAGE_KEYS.COLOR_SCHEME}
    >
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
