import { Loadable } from "@pages/loadable";
import { FC, lazy } from "react";

export const SignUpPage: FC = Loadable(lazy(() => import("./ui")));
