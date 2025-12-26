import { z } from "zod";

export const signupSchema = z.object({
  firstName: z
    .string()
    .nonempty("First name cannot be blank")
    .max(16, "First name cannot exceed 16 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "First name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  lastName: z
    .string()
    .nonempty("Last name cannot be blank")
    .max(16, "Last name cannot exceed 16 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Last name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  email: z.string().email("Invalid email address"),
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
