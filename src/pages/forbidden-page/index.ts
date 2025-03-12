import { Loadable } from "@shared/ui/loadable";
import { FC, lazy } from "react";

export const ForbiddenPage: FC = Loadable(lazy(() => import("./ui")));
