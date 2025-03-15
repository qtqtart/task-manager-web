import i18n from "@shared/i18n";
import { z } from "zod";

export const SignUpSchema = z
  .object({
    username: z
      .string()
      .regex(/^[A-Za-z0-9]+$/, {
        message: i18n.t("formSchema.username.regex"),
      })
      .min(5, {
        message: i18n.t("formSchema.username.min"),
      })
      .max(255, {
        message: i18n.t("formSchema.username.max"),
      }),
    email: z
      .string()
      .email({
        message: i18n.t("formSchema.email.invalid"),
      })
      .min(5, {
        message: i18n.t("formSchema.email.min"),
      })
      .max(255, {
        message: i18n.t("formSchema.email.max"),
      }),
    firstName: z
      .string()
      .min(1, {
        message: i18n.t("formSchema.firstName.min"),
      })
      .max(255, {
        message: i18n.t("formSchema.firstName.max"),
      }),
    lastName: z
      .string()
      .min(1, {
        message: i18n.t("formSchema.lastName.min"),
      })
      .max(255, {
        message: i18n.t("formSchema.lastName.max"),
      }),
    password: z
      .string()
      .min(6, {
        message: i18n.t("formSchema.password.min"),
      })
      .max(255, {
        message: i18n.t("formSchema.password.max"),
      }),
    passwordConfirm: z
      .string()
      .min(6, {
        message: i18n.t("formSchema.passwordConfirm.min"),
      })
      .max(255, {
        message: i18n.t("formSchema.passwordConfirm.max"),
      }),
    file: z.instanceof(File).optional(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: i18n.t("formSchema.passwordConfirm.mismatch"),
    path: ["passwordConfirm"],
  });

export type SignUpSchemaValues = z.infer<typeof SignUpSchema>;
