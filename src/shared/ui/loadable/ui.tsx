import { CircularProgress, Stack } from "@mui/material";
import { ComponentProps, ElementType, FC, Suspense } from "react";

export const Loadable = <T extends ElementType>(Component: T) => {
  const LoadableComponent: FC<ComponentProps<T>> = (props) => (
    <Suspense
      fallback={
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Stack>
      }
    >
      <Component {...props} />
    </Suspense>
  );

  return LoadableComponent;
};
