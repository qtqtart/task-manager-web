import { SignInSchemaValues } from "./types";

export const useFormDefaultValues = () => {
  const defaultValues: SignInSchemaValues = {
    login: "",
    password: "",
  };
  return { defaultValues };
};
