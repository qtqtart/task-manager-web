import { PropsWithChildren } from "react";
import { memo } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { FormProvider } from "react-hook-form";

type Props<T extends FieldValues> = PropsWithChildren & {
  form: UseFormReturn<T>;
  onSubmit?: VoidFunction;
  id?: string;
};

const RHFForm_ = <T extends FieldValues>({
  children,
  form,
  onSubmit,
  id,
}: Props<T>) => {
  return (
    <FormProvider {...form}>
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
