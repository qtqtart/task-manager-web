import { Loadable } from "@shared/ui/loadable";
import { FC, lazy } from "react";

export const CompactLayout: FC = Loadable(lazy(() => import("./ui")));
