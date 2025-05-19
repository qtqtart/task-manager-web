import { createTheme } from "@app/styles";
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const WithThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = createTheme();

  return (
    <MUIThemeProvider theme={theme} defaultMode="system" storageManager={null}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
