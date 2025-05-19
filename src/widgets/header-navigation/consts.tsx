import { ROUTER_PATHS } from "@app/router";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { t } from "i18next";
import { ReactNode } from "react";

type Option = {
  link: string;
  icon: ReactNode;
  label: string;
};

export const HEADER_NAVIGATION_OPTIONS: Option[] = [
  {
    link: ROUTER_PATHS.FULL.ANALYTICS,
    icon: <AnalyticsIcon />,
    label: t("pages.analytics"),
  },
  {
    link: ROUTER_PATHS.FULL.PROJECTS,
    icon: <AssignmentIcon />,
    label: t("pages.projects"),
  },
];
