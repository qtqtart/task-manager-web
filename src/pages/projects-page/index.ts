import { Loadable } from "@pages/loadable";
import { FC, lazy } from "react";

export const ProjectsPage: FC = Loadable(lazy(() => import("./ui")));
