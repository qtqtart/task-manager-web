import { removeAccessToken } from "@features/auth";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { LoadingButton } from "@mui/lab";
import { ROUTER_PATHS } from "@shared/router";
import { FC, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useSignOutMutation } from "./api";

export const SignOutButton: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [signOut, { isLoading, isSuccess }] = useSignOutMutation();
  const handleSignOut = useCallback(async () => {
    await signOut().unwrap();
  }, [signOut]);

  useEffect(() => {
    if (!isSuccess) return;
    removeAccessToken();
    navigate(ROUTER_PATHS.FULL.SIGN_IN);
  }, [isSuccess, navigate]);

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
