import { authClient } from "./client";
import type { LoginSchema, SignupSchema } from "../schemas/auth.schema";

/**
 * Authentication Service
 * Handles all authentication operations using Better Auth.
 */

/**
 * Sign in a user with email and password.
 * @param credentials - User login credentials
 * @returns Promise with sign-in result
 */
export const signIn = async ({ email, password }: LoginSchema) => {
  const result = await authClient.signIn.email({
    email,
    password,
  });

  if (result.error) {
    throw new Error("Invalid email or password");
  }
};

/**
 * Sign up a new user with email, username, and password.
 * @param credentials - User signup credentials
 * @returns Promise with sign-up result
 */
export const signUp = async (credentials: SignupSchema) => {
  const fullName = `${credentials.firstName} ${credentials.lastName}`.trim();

  const result = await authClient.signUp.email({
    name: fullName,
    email: credentials.email,
    password: credentials.password,
  });

  if (result.error) {
    if (result.error.code?.includes("USE_ANOTHER_EMAIL")) {
      throw new Error("This email is already in use");
    }
    console.log(result.error);
  }

  return result;
};

/**
 * Sign out the current user.
 * @returns Promise with sign-out result
 */
export const signOut = async () => {
  const result = await authClient.signOut();

  if (result.error) {
    throw new Error(result.error.message || "Logout failed");
  }

  return result;
};
