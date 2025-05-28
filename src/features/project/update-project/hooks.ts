import { UpdateProjectSchemaValues } from "./types";

export const useFormDefaultValues = () => {
  const defaultValues: UpdateProjectSchemaValues = {
    title: "",
    description: "",
    memberIds: [],
    file: undefined,
  };
  return { defaultValues };
};
