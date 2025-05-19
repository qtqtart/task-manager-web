import { ArrowDownward as ArrowDownwardIcon } from "@mui/icons-material";
import {
  autocompleteClasses,
  Components,
  svgIconClasses,
  Theme,
} from "@mui/material";
import { varAlpha } from "minimal-shared/utils";

const MuiAutocomplete: Components<Theme>["MuiAutocomplete"] = {
  defaultProps: {
    popupIcon: <ArrowDownwardIcon />,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      [`& span.${autocompleteClasses.tag}`]: {
        ...theme.typography.subtitle2,
        height: 24,
        minWidth: 24,
        lineHeight: "24px",
        textAlign: "center",
        padding: theme.spacing(0, 0.75),
        color: theme.vars.palette.text.secondary,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.16),
      },
    }),
    listbox: {
      padding: 0,
    },
    endAdornment: {
      [`& .${svgIconClasses.root}`]: { width: 18, height: 18 },
    },
  },
};

export const autocomplete = { MuiAutocomplete };
