import { FC, PropsWithChildren } from "react";

export const AuthGuard: FC<PropsWithChildren> = ({ children }) => (
  <>{children}</>
);
