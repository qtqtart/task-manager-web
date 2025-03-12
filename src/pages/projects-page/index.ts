import { Loadable } from "@shared/ui/loadable";
import { FC, lazy } from "react";

export const ProjectsPage: FC = Loadable(lazy(() => import("./ui")));
