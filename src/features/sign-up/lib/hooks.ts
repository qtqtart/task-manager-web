import { SignUpSchemaValues } from "../models/schema";

export const useFormDefaultValues = () => {
  const defaultValues: SignUpSchemaValues = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
    file: undefined,
  };
  return { defaultValues };
};
