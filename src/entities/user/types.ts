import { z } from "zod";

export const UserScheme = z.object({
  id: z.string(),
  username: z.string(),
  imageUrl: z.string().optional(),
});
