import { PropsWithChildren } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

type Props<T extends FieldValues> = PropsWithChildren & {
  form: UseFormReturn<T>;
  onSubmit?: () => void;
  id?: string;
};

export const RHFForm = <T extends FieldValues>({
  children,
  form,
  onSubmit,
  id,
}: Props<T>) => {
  return (
    <FormProvider<T> {...form}>
      <form id={id} onSubmit={onSubmit} noValidate autoComplete="off">
        {children}
      </form>
    </FormProvider>
  );
};
