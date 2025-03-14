const LAYOUTS = {
  AUTH: "auth",
  DASHBOARD: "dashboard",
};

const PAGES = {
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
  ANALYTICS: "analytics",
  PROJECTS: "projects",
  FORBIDDEN: "403",
  NOT_FOUND: "404",
};

export const ROUTER_PATHS = {
  PAGES,
  LAYOUTS,
  FULL: {
    SIGN_IN: `/${LAYOUTS.AUTH}/${PAGES.SIGN_IN}`,
    SIGN_UP: `/${LAYOUTS.AUTH}/${PAGES.SIGN_UP}`,
    //
    ANALYTICS: `/${LAYOUTS.DASHBOARD}/${PAGES.ANALYTICS}`,
    PROJECTS: `/${LAYOUTS.DASHBOARD}/${PAGES.PROJECTS}`,
    //
    FORBIDDEN: `/${PAGES.FORBIDDEN}`,
    NOT_FOUND: `/${PAGES.NOT_FOUND}`,
  } as typeof PAGES,
};
