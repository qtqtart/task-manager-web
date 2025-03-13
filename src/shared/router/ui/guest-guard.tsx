import { useUser } from "@features/user-state";
import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { ROUTER_PATHS } from "../consts/router-paths";

export const GuestGuard: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useUser();

  return user.accessToken ? (
    <Navigate replace to={ROUTER_PATHS.FULL.ANALYTICS} />
  ) : (
    <>{children}</>
  );
};
