import { useUser } from "@features/user-state";
import { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { ROUTER_PATHS } from "../consts/router-paths";

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useUser();
  const { pathname } = useLocation();

  return !user.accessToken ? (
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
