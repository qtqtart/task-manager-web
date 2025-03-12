import { FC, PropsWithChildren } from "react";

export const GuestGuard: FC<PropsWithChildren> = ({ children }) => (
  <>{children}</>
);
