import {
  ColorSystemOptions,
  CSSObject,
  CssVarsThemeOptions,
  PaletteColor,
  PaletteColorChannel,
  Shadows,
  SupportedColorScheme,
  ThemeOptions as MuiThemeOptions,
} from "@mui/material";

export type CommonColorsExtend = {
  whiteChannel: string;
  blackChannel: string;
};

export type GreyExtend = {
  "50Channel": string;
  "100Channel": string;
  "200Channel": string;
  "300Channel": string;
  "400Channel": string;
  "500Channel": string;
  "600Channel": string;
  "700Channel": string;
  "800Channel": string;
  "900Channel": string;
};

//

export type InputPalette = Record<string, string | undefined>;

export type ChannelPalette<T extends InputPalette> = T & {
  [K in keyof T as `${string & K}Channel`]: string;
};

export type PaletteColorExtend = {
  lighter: string;
  darker: string;
  lighterChannel: string;
  darkerChannel: string;
};

export type PaletteColorKey =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

export type PaletteColorNoChannels = Omit<
  PaletteColor,
  "lighterChannel" | "darkerChannel"
>;

export type PaletteColorWithChannels = PaletteColor & PaletteColorChannel;

//

export interface CustomShadows {
  z1?: string;
  z4?: string;
  z8?: string;
  z12?: string;
  z16?: string;
  z20?: string;
  z24?: string;
  //
  primary?: string;
  secondary?: string;
  info?: string;
  success?: string;
  warning?: string;
  error?: string;
  //
  drawer?: string;
  dialog?: string;
  card?: string;
  dropdown?: string;
}

//

export type FontStyleExtend = {
  fontWeightSemiBold: CSSObject["fontWeight"];
  fontSecondaryFamily: CSSObject["fontFamily"];
};

export type TypeTextExtend = {
  disabledChannel: string;
};

export type TypeBackgroundExtend = {
  neutral: string;
  neutralChannel: string;
};

//

export type ThemeCssVariables = Pick<
  CssVarsThemeOptions,
  | "colorSchemeSelector"
  | "disableCssColorScheme"
  | "cssVarPrefix"
  | "shouldSkipGeneratingVar"
>;

export type ThemeOptions = Omit<MuiThemeOptions, "components"> &
  Pick<CssVarsThemeOptions, "defaultColorScheme" | "components"> & {
    colorSchemes?: Record<
      SupportedColorScheme,
      ColorSystemOptions & {
        shadows?: Shadows;
        customShadows?: CustomShadows;
      }
    >;
    cssVariables?: ThemeCssVariables;
  };

//
