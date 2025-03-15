import { SignInSchemaValues } from "../models/schema";

export const useFormDefaultValues = () => {
  const defaultValues: SignInSchemaValues = {
    login: "",
    password: "",
  };
  return { defaultValues };
};
