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
        boxShadow: theme.vars.customShadows.z8,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.vars.palette.background.paper,
      },
      [`&.${accordionClasses.disabled}`]: { backgroundColor: "transparent" },
    }),
  },
};

const MuiAccordionSummary: Components<Theme>["MuiAccordionSummary"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      [`&.${accordionSummaryClasses.disabled}`]: {
        opacity: 1,
        color: theme.vars.palette.action.disabled,
        [`& .${typographyClasses.root}`]: { color: "inherit" },
      },
    }),
    expandIconWrapper: { color: "inherit" },
  },
};

export const accordion = { MuiAccordion, MuiAccordionSummary };
