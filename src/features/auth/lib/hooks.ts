import { useRootSelector } from "@app/store";

export const useAuth = () => {
  const auth = useRootSelector((slice) => slice.auth);
  return { auth };
};
