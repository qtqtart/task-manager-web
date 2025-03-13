import { removeAccessToken } from "@features/auth";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { LoadingButton } from "@mui/lab";
import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { useSignOutMutation } from "./api";

export const SignOutButton: FC = () => {
  const { t } = useTranslation();

  const [signOut, { isLoading, isSuccess }] = useSignOutMutation();
  const handleSignOut = useCallback(async () => {
    await signOut();
    if (isSuccess) removeAccessToken();
  }, [signOut, isSuccess]);

  return (
    <LoadingButton
      fullWidth
      loading={isLoading}
      onClick={handleSignOut}
      startIcon={<ExitToAppIcon />}
      variant="outlined"
      color="error"
      size="large"
    >
      {t("sign-out")}
    </LoadingButton>
  );
};
