import { useEffect, useState } from "react";

export const useOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const onChange = () => setIsOnline(navigator.onLine);

    window.addEventListener("online", onChange);
    window.addEventListener("offline", onChange);

    return () => {
      window.removeEventListener("online", onChange);
      window.removeEventListener("offline", onChange);
    };
  }, []);

  return {
    isOnline,
  };
};
