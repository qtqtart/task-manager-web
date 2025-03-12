import { useRootDispatch, useRootSelector } from "@app/store";
import { useCallback } from "react";

import { userSlice, UserState } from "./slice";

export const useUserState = () => {
  const dispatch = useRootDispatch();
  const user = useRootSelector((state) => state.user);

  const setUser = useCallback(
    (state: UserState) => {
      dispatch(userSlice.actions.set(state));
    },
    [dispatch],
  );

  return { user, setUser };
};
