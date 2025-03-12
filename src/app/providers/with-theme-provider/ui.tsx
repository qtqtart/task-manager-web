import { useThemeMode } from "@features/theme-mode-state";
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { FC, PropsWithChildren, useEffect, useMemo } from "react";

export const WithThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { themeMode } = useThemeMode();
  const theme = useMemo(() => createTheme(), []);

  useEffect(() => {
    document.documentElement.style.colorScheme = themeMode;
  }, [themeMode]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
