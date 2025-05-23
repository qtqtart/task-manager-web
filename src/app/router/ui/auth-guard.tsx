import { useIsAuthStore } from "@features/auth/is-auth";
import { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { ROUTER_PATHS } from "../consts";

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const authState = useIsAuthStore();

  const { pathname } = useLocation();

  return !authState.isAuthenticated ? (
    <Navigate
      replace
      to={ROUTER_PATHS.FULL.SIGN_IN}
      state={{
        from: pathname,
      }}
    />
  ) : (
    <>{children}</>
  );
};
