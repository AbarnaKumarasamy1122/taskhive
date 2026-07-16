import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Name must contain at least 3 characters"),

  email: z.string().email("Invalid email"),

  password: z.string().min(8, "Password must contain minimum 8 characters"),

  role: z.enum(["ADMIN", "PROJECT_MANAGER", "TEAM_MEMBER"]).optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),

  password: z.string().min(8),
});
