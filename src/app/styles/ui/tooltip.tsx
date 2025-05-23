import { Components, Theme, tooltipClasses } from "@mui/material";

const MuiTooltip: Components<Theme>["MuiTooltip"] = {
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor: theme.vars.palette.grey[800],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.vars.palette.grey[700],
      }),
    }),
    arrow: ({ theme }) => ({
      color: theme.vars.palette.grey[800],
      ...theme.applyStyles("dark", {
        color: theme.vars.palette.grey[700],
      }),
    }),
    popper: ({ theme }) => ({
      [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
        {
          marginTop: theme.spacing(1.5),
        },
      [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
        {
          marginBottom: theme.spacing(1.5),
        },
      [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
        {
          marginLeft: theme.spacing(1.5),
        },
      [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
        {
          marginRight: theme.spacing(1.5),
        },
    }),
  },
};

export default { MuiTooltip };
