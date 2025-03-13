import { useAuth } from "@features/auth";
import { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { ROUTER_PATHS } from "../consts";

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const { auth } = useAuth();
  const { pathname } = useLocation();

  return !auth.accessToken ? (
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
