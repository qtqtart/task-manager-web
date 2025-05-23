import {
  accordionClasses,
  accordionSummaryClasses,
  Components,
  Theme,
  typographyClasses,
} from "@mui/material";

const MuiAccordion: Components<Theme>["MuiAccordion"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: "transparent",
      [`&.${accordionClasses.expanded}`]: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.vars.palette.background.paper,
        boxShadow: theme.vars.customShadows.z8,
      },
      [`&.${accordionClasses.disabled}`]: {
        backgroundColor: "transparent",
      },
    }),
  },
};

const MuiAccordionSummary: Components<Theme>["MuiAccordionSummary"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0, 1, 0),
      [`&.${accordionSummaryClasses.disabled}`]: {
        opacity: 1,
        color: theme.vars.palette.action.disabled,
        [`& .${typographyClasses.root}`]: {
          color: "inherit",
        },
      },
    }),
    expandIconWrapper: {
      color: "inherit",
    },
  },
};

export default { MuiAccordion, MuiAccordionSummary };
