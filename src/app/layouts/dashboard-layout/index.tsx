import { Loadable } from "@shared/ui/loadable";
import { FC, lazy } from "react";

export const DashboardLayout: FC = Loadable(lazy(() => import("./ui")));
