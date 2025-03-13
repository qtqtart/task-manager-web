import { breakpoints, shadows, typography } from "@app/styles";
import { useThemeMode } from "@features/theme-mode";
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { FC, PropsWithChildren, useEffect, useMemo } from "react";

export const WithThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { themeMode } = useThemeMode();
  const theme = useMemo(
    () =>
      createTheme({
        breakpoints,
        shadows,
        typography,
        shape: {
          borderRadius: 4,
        },
        colorSchemes: {
          dark: themeMode === "dark",
          light: themeMode === "light",
        },
      }),
    [themeMode],
  );

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
