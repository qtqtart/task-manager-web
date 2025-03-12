import { Loadable } from "@shared/ui/loadable";
import { FC, lazy } from "react";

export const SignUpPage: FC = Loadable(lazy(() => import("./ui")));
