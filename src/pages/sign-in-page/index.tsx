import { Loadable } from "@pages/loadable";
import { FC, lazy } from "react";

export const SignInPage: FC = Loadable(lazy(() => import("./ui")));
