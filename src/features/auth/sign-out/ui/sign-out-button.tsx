import { useAuthState } from "@features/auth/auth-state";
import { Button } from "@mui/material";
import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { useSignOutMutation } from "../api";

export const SignOutButton: FC = () => {
  const { t } = useTranslation();

  const authState = useAuthState();
  const [signOut, signOutState] = useSignOutMutation();

  const handleSignOut = useCallback(async () => {
    const res = await signOut().unwrap();
    if (res) {
      authState.set(false);
    }
  }, [signOut, authState]);

  return (
    <Button
      fullWidth
      variant="contained"
      color="error"
      size="medium"
      loading={signOutState.isLoading}
      onClick={handleSignOut}
    >
      {t("signOut")}
    </Button>
  );
};
