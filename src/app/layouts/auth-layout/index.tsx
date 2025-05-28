import { Loadable } from "@pages/loadable";
import { FC, lazy } from "react";

export const AuthLayout: FC = Loadable(lazy(() => import("./ui")));
