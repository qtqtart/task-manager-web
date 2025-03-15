import i18n from "@shared/i18n";
import { z } from "zod";

export const SignInSchema = z.object({
  login: z
    .string()
    .min(5, {
      message: i18n.t("formSchema.login.min"),
    })
    .max(255, {
      message: i18n.t("formSchema.login.max"),
    }),
  password: z
    .string()
    .min(6, {
      message: i18n.t("formSchema.password.min"),
    })
    .max(255, {
      message: i18n.t("formSchema.password.max"),
    }),
});

export type SignInSchemaValues = z.infer<typeof SignInSchema>;
