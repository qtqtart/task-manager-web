import { useAuth } from "@features/auth";
import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { ROUTER_PATHS } from "../consts";

export const GuestGuard: FC<PropsWithChildren> = ({ children }) => {
  const { auth } = useAuth();

  return auth.accessToken ? (
    <Navigate replace to={ROUTER_PATHS.FULL.ANALYTICS} />
  ) : (
    <>{children}</>
  );
};
