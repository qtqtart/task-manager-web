import { AuthLayout } from "@app/layouts/auth-layout";
import { DashboardLayout } from "@app/layouts/dashboard-layout";
import { AnalyticsPage } from "@pages/analytics-page";
import { ForbiddenPage } from "@pages/forbidden-page";
import { NotFoundPage } from "@pages/not-found-page";
import { ProjectByIdPage } from "@pages/project-by-id-page";
import { ProjectsPage } from "@pages/projects-page";
import { SignInPage } from "@pages/sign-in-page";
import { SignUpPage } from "@pages/sign-up-page";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { ROUTER_PATHS } from "../consts/router-paths";
import { AuthGuard } from "./auth-guard";
import { GuestGuard } from "./guest-guard";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate replace to={ROUTER_PATHS.FULL.ANALYTICS} />,
  },
  {
    path: ROUTER_PATHS.LAYOUTS.AUTH,
    element: (
      <GuestGuard>
        <AuthLayout />
      </GuestGuard>
    ),
    children: [
      {
        index: true,
        element: <Navigate replace to={ROUTER_PATHS.PAGES.SIGN_IN} />,
      },
      {
        path: ROUTER_PATHS.PAGES.SIGN_IN,
        element: <SignInPage />,
      },
      {
        path: ROUTER_PATHS.PAGES.SIGN_UP,
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: ROUTER_PATHS.LAYOUTS.DASHBOARD,
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <Navigate replace to={ROUTER_PATHS.PAGES.ANALYTICS} />,
      },
      {
        path: ROUTER_PATHS.PAGES.ANALYTICS,
        element: <AnalyticsPage />,
      },
      {
        path: ROUTER_PATHS.PAGES.PROJECTS,
        children: [
          {
            index: true,
            element: <ProjectsPage />,
          },
          {
            path: ":id",
            element: <ProjectByIdPage />,
          },
        ],
      },
    ],
  },
  {
    path: ROUTER_PATHS.LAYOUTS.COMPACT,
    children: [
      {
        path: ROUTER_PATHS.PAGES.FORBIDDEN,
        element: <ForbiddenPage />,
      },
      {
        path: ROUTER_PATHS.PAGES.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate replace to={ROUTER_PATHS.FULL.NOT_FOUND} />,
  },
]);
