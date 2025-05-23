import { useIsAuthStore } from "@features/auth/is-auth";
import { useSignOutMutation } from "@generated";
import { Button } from "@mui/material";
import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";

export const SignOutButton: FC = () => {
  const { t } = useTranslation();

  const authState = useIsAuthStore();
  const [signOut, signOutState] = useSignOutMutation({
    onCompleted: () => {
      authState.set(false);
    },
  });

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Button
      fullWidth
      variant="contained"
      color="error"
      size="medium"
      loading={signOutState.loading}
      onClick={handleSignOut}
    >
      {t("signOut")}
    </Button>
  );
};
