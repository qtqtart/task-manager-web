import { Loadable } from "@pages/loadable";
import { FC, lazy } from "react";

export const AnalyticsPage: FC = Loadable(lazy(() => import("./ui")));
