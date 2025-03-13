import AnalyticsIcon from "@mui/icons-material/Analytics";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { ROUTER_PATHS } from "@shared/router";
import { useTranslation } from "react-i18next";

export type Option = {
  link: string;
  icon: JSX.Element;
  label: string;
};

export const useOptions = () => {
  const { t } = useTranslation();

  const options: Option[] = [
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

  return { options };
};
