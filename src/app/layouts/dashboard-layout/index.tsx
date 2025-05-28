import { Loadable } from "@pages/loadable";
import { FC, lazy } from "react";

export const DashboardLayout: FC = Loadable(lazy(() => import("./ui")));
