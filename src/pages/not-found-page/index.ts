import { Loadable } from "@pages/loadable";
import { FC, lazy } from "react";

export const NotFoundPage: FC = Loadable(lazy(() => import("./ui")));
