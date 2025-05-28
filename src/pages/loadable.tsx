import { LoadingScreen } from "@shared/ui/loading-screen";
import { ElementType, Suspense } from "react";

export const Loadable = (Component: ElementType) => (props: any) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);
