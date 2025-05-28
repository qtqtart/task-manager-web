import { Loadable } from "@pages/loadable";
import { FC, lazy } from "react";

export const ProjectByIdPage: FC = Loadable(lazy(() => import("./ui")));
