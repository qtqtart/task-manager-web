import { ArrowDownward as ArrowDownwardIcon } from "@mui/icons-material";
import {
  autocompleteClasses,
  Components,
  svgIconClasses,
  Theme,
} from "@mui/material";

import { varAlpha } from "../utils";

const MuiAutocomplete: Components<Theme>["MuiAutocomplete"] = {
  defaultProps: {
    popupIcon: <ArrowDownwardIcon />,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      [`& span.${autocompleteClasses.tag}`]: {
        ...theme.typography.subtitle2,
        minWidth: "24px",
        height: "24px",
        lineHeight: "24px",
        textAlign: "center",
        padding: theme.spacing(0, 0.75),
        color: theme.vars.palette.text.secondary,
        backgroundColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.16),
        borderRadius: theme.shape.borderRadius,
      },
    }),
    endAdornment: {
      [`& .${svgIconClasses.root}`]: {
        width: "18px",
        height: "18px",
      },
    },
    listbox: {
      padding: 0,
    },
  },
};

export default { MuiAutocomplete };
