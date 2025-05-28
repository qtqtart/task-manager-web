import { CreateProjectSchemaValues } from "./types";

export const useFormDefaultValues = () => {
  const defaultValues: CreateProjectSchemaValues = {
    title: "",
    description: "",
    memberIds: [],
    file: undefined,
  };
  return { defaultValues };
};
