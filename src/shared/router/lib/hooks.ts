import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ROUTER_PATHS } from "../consts/router-paths";

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectAfterAuth = useCallback(() => {
    const from = location.state?.from || ROUTER_PATHS.FULL.ANALYTICS;
    navigate(from, {
      replace: true,
    });
  }, [location.state?.from, navigate]);

  return { redirectAfterAuth };
};
