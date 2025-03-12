import { Loadable } from "@shared/ui/loadable";
import { FC, lazy } from "react";

export const ProjectByIdPage: FC = Loadable(lazy(() => import("./ui")));
