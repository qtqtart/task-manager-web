import { useClearCookieMutation, useGetCurrentUserQuery } from "@generated";
import { useEffect } from "react";

import { useIsAuthStore } from "./store";

export const useCurrentUser = () => {
  const isAuth = useIsAuthStore();
  const user = useGetCurrentUserQuery({
    skip: !isAuth.isAuthenticated,
  });
  const [clearCookie] = useClearCookieMutation({
    onCompleted: () => {
      isAuth.set(false);
    },
  });

  useEffect(() => {
    if (user.error) {
      clearCookie();
    }
  }, [user.error, clearCookie]);

  return user;
};
