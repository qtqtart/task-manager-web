import i18n from "@shared/i18n";
import { z } from "zod";

export const SignInSchema = z.object({
  login: z
    .string()
    .min(5, {
      message: i18n.t("form.short"),
    })
    .max(255, {
      message: i18n.t("form.long"),
    }),
  password: z
    .string()
    .min(6, {
      message: i18n.t("form.short"),
    })
    .max(255, {
      message: i18n.t("form.long"),
    }),
});

export type SignInSchemaValues = z.infer<typeof SignInSchema>;
