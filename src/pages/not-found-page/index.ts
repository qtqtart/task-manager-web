import { Loadable } from "@shared/ui/loadable";
import { FC, lazy } from "react";

export const NotFoundPage: FC = Loadable(lazy(() => import("./ui")));
