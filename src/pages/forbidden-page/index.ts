import { Loadable } from "@pages/loadable";
import { FC, lazy } from "react";

export const ForbiddenPage: FC = Loadable(lazy(() => import("./ui")));
