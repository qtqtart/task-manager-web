import {
  Components,
  tableCellClasses,
  tableRowClasses,
  Theme,
} from "@mui/material";
import { varAlpha } from "minimal-shared/utils";

const MuiTableContainer: Components<Theme>["MuiTableContainer"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      position: "relative",
      scrollbarWidth: "thin",
      scrollbarColor: `${varAlpha(theme.vars.palette.text.disabledChannel, 0.4)} ${varAlpha(theme.vars.palette.text.disabledChannel, 0.08)}`,
    }),
  },
};

const MuiTable: Components<Theme>["MuiTable"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      "--palette-TableCell-border": theme.vars.palette.divider,
    }),
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
        [`& .${tableCellClasses.root}`]: { borderColor: "transparent" },
      },
    }),
  },
};

const MuiTableCell: Components<Theme>["MuiTableCell"] = {
  styleOverrides: {
    root: { borderBottomStyle: "dashed" },
    head: ({ theme }) => ({
      fontSize: 14,
      color: theme.vars.palette.text.secondary,
      fontWeight: theme.typography.fontWeightSemiBold,
      backgroundColor: theme.vars.palette.background.neutral,
    }),
    stickyHeader: ({ theme }) => ({
      backgroundColor: theme.vars.palette.background.paper,
      backgroundImage: `linear-gradient(to bottom, ${theme.vars.palette.background.neutral}, ${theme.vars.palette.background.neutral})`,
    }),
    paddingCheckbox: ({ theme }) => ({ paddingLeft: theme.spacing(1) }),
  },
};

const MuiTablePagination: Components<Theme>["MuiTablePagination"] = {
  defaultProps: {
    backIconButtonProps: { size: "small" },
    nextIconButtonProps: { size: "small" },
    slotProps: { select: { name: "table-pagination-select" } },
  },
  styleOverrides: {
    root: { width: "100%" },
    toolbar: { height: 64 },
    actions: { marginRight: 8 },
    select: ({ theme }) => ({
      paddingLeft: 8,
      display: "flex",
      alignItems: "center",
      "&:focus": { borderRadius: theme.shape.borderRadius },
    }),
    selectIcon: {
      right: 4,
      width: 16,
      height: 16,
      top: "calc(50% - 8px)",
    },
  },
};

export const table = {
  MuiTable,
  MuiTableRow,
  MuiTableCell,
  MuiTableContainer,
  MuiTablePagination,
};
