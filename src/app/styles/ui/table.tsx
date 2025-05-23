import {
  Components,
  tableCellClasses,
  tableRowClasses,
  Theme,
} from "@mui/material";

import { varAlpha } from "../utils";

const MuiTableContainer: Components<Theme>["MuiTableContainer"] = {
  styleOverrides: {
    root: () => ({
      position: "relative",
    }),
  },
};

const MuiTable: Components<Theme>["MuiTable"] = {
  styleOverrides: {
    root: {},
  },
};

const MuiTableRow: Components<Theme>["MuiTableRow"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`&.${tableRowClasses.selected}`]: {
        backgroundColor: varAlpha(theme.vars.palette.primary.darkChannel, 0.04),
        "&:hover": {
          backgroundColor: varAlpha(
            theme.vars.palette.primary.darkChannel,
            0.08,
          ),
        },
      },
      "&:last-of-type": {
        [`& .${tableCellClasses.root}`]: {
          borderColor: "transparent",
        },
      },
    }),
  },
};

const MuiTableCell: Components<Theme>["MuiTableCell"] = {
  styleOverrides: {
    root: { borderBottomStyle: "dashed" },
    head: ({ theme }) => ({
      fontSize: "14px",
      color: theme.vars.palette.text.secondary,
      fontWeight: theme.typography.fontWeightSemiBold,
      backgroundColor: theme.vars.palette.background.neutral,
    }),
    stickyHeader: ({ theme }) => ({
      backgroundColor: theme.vars.palette.background.paper,
      backgroundImage: `linear-gradient(to bottom, ${theme.vars.palette.background.neutral}, ${theme.vars.palette.background.neutral})`,
    }),
    paddingCheckbox: ({ theme }) => ({
      paddingLeft: theme.spacing(1),
    }),
  },
};

const MuiTablePagination: Components<Theme>["MuiTablePagination"] = {
  defaultProps: {
    backIconButtonProps: {
      size: "small",
    },
    nextIconButtonProps: {
      size: "small",
    },
    slotProps: {
      select: {
        name: "table-pagination-select",
      },
    },
  },
  styleOverrides: {
    root: {
      width: "100%",
    },
    toolbar: {
      height: "64px",
    },
    actions: ({ theme }) => ({
      marginRight: theme.spacing(1),
    }),
    select: ({ theme }) => ({
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      "&:focus": {
        borderRadius: theme.shape.borderRadius,
      },
    }),
    selectIcon: ({ theme }) => ({
      right: theme.spacing(1 / 2),
      width: "16px",
      height: "16px",
      top: "calc(50% - 8px)",
    }),
  },
};

export default {
  MuiTable,
  MuiTableRow,
  MuiTableCell,
  MuiTableContainer,
  MuiTablePagination,
};
