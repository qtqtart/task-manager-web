import {
  AvatarGroupExtendVariant,
  ButtonExtendVariant,
  ButtonGroupExtendVariant,
  ChipExtendVariant,
  CommonColorsExtend,
  CustomShadows,
  FabExtendVariant,
  FontStyleExtend,
  GreyExtend,
  PaletteColorExtend,
  TypeBackgroundExtend,
  TypeTextExtend,
} from "@app/styles";
import {} from "@mui/lab/themeAugmentation";
import {} from "@mui/material/themeCssVarsAugmentation";
import {} from "@mui/x-data-grid/themeAugmentation";
import {} from "@mui/x-date-pickers/themeAugmentation";
import {} from "@mui/x-tree-view/themeAugmentation";

declare module "@mui/material/styles" {
  interface Color extends GreyExtend {}
  interface TypeText extends TypeTextExtend {}
  interface CommonColors extends CommonColorsExtend {}
  interface TypeBackground extends TypeBackgroundExtend {}
  interface PaletteColor extends PaletteColorExtend {}
  interface SimplePaletteColorOptions extends Partial<PaletteColorExtend> {}
}

declare module "@mui/material/styles" {
  interface TypographyVariants extends FontStyleExtend {}
  interface TypographyVariantsOptions extends Partial<FontStyleExtend> {}
}

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: CustomShadows;
  }
  interface ThemeOptions {
    customShadows?: CustomShadows;
  }
  interface ThemeVars {
    customShadows: CustomShadows;
    typography: Theme["typography"];
    transitions: Theme["transitions"];
  }
}

//

declare module "@mui/material/AvatarGroup" {
  interface AvatarGroupPropsVariantOverrides extends AvatarGroupExtendVariant {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides extends ButtonExtendVariant {}
}

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsVariantOverrides extends ButtonGroupExtendVariant {}
}

declare module "@mui/material/Fab" {
  interface FabPropsVariantOverrides extends FabExtendVariant {}
}

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides extends ChipExtendVariant {}
}
