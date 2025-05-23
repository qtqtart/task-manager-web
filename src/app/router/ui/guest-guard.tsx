import { useIsAuthStore } from "@features/auth/is-auth";
import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { ROUTER_PATHS } from "../consts";

export const GuestGuard: FC<PropsWithChildren> = ({ children }) => {
  const authState = useIsAuthStore();

  return authState.isAuthenticated ? (
    <Navigate replace to={ROUTER_PATHS.FULL.ANALYTICS} />
  ) : (
    <>{children}</>
  );
};
