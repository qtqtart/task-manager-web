import { breakpoints, palette, shadows, typography } from "@app/styles";
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
  const theme = useMemo(
    () =>
      createTheme({
        palette: palette(themeMode),
        breakpoints,
        shadows,
        typography,
        shape: {
          borderRadius: 4,
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
