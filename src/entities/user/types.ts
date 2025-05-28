import { z } from "zod";

export interface UserModel {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
}

export const UserScheme = z.object({
  id: z.string(),
  username: z.string(),
  imageUrl: z.string().optional(),
});
