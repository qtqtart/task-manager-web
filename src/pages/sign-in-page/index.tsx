import { Loadable } from "@shared/ui/loadable";
import { FC, lazy } from "react";

export const SignInPage: FC = Loadable(lazy(() => import("./ui")));
