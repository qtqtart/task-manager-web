import { useAuthState } from "@features/auth/auth-state";
import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { ROUTER_PATHS } from "../consts";

export const GuestGuard: FC<PropsWithChildren> = ({ children }) => {
  const authState = useAuthState();

  return authState.isAuthenticated ? (
    <Navigate replace to={ROUTER_PATHS.FULL.ANALYTICS} />
  ) : (
    <>{children}</>
  );
};
