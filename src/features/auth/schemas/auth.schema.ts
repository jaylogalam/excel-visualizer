import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(5, "Username must be at least 5 characters long")
    .max(16, "Username must be at most 16 characters long")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Invalid password")
    .regex(/[A-Z]/, "Invalid password")
    .regex(/[a-z]/, "Invalid password")
    .regex(/[0-9]/, "Invalid password")
    .regex(/[^a-zA-Z0-9]/, "Invalid password"),
});

export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type SignupSchema = z.infer<typeof signupSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
