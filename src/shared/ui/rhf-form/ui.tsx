import { memo, PropsWithChildren } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

type Props<T extends FieldValues> = PropsWithChildren & {
  form: UseFormReturn<T>;
  onSubmit?: () => void;
  id?: string;
};

const RHFForm_ = <T extends FieldValues>({
  children,
  form,
  onSubmit,
  id,
}: Props<T>) => {
  return (
    <FormProvider<T> {...form}>
      <form
        id={id}
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "16px",
          width: "100%",
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export const RHFForm = memo(RHFForm_) as <T extends FieldValues>(
  props: Props<T>,
) => JSX.Element;
