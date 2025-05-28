import { UserScheme } from "@entities/user";
import i18n from "@shared/i18n";
import { z } from "zod";

export const CreateProjectSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: i18n.t("formSchema.title.min"),
    })
    .max(255, {
      message: i18n.t("formSchema.title.max"),
    }),
  description: z
    .string()
    .max(1000, {
      message: i18n.t("formSchema.description.max"),
    })
    .optional(),
  memberIds: z.array(UserScheme).optional().default([]),
  file: z.instanceof(File).optional(),
});

export type CreateProjectSchemaValues = z.infer<typeof CreateProjectSchema>;
