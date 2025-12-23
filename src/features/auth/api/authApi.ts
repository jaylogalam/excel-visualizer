import apiClient from "@/lib/api-client";
import type { AuthResponse, LoginRequest, SignupRequest } from "../types";

/**
 * Signs up a new user.
 * @param data - The signup registration data.
 * @returns A promise that resolves to the authentication response.
 */
export const fetchSignup = async (
  data: SignupRequest
): Promise<AuthResponse> => {
  const { data: response } = await apiClient.post<AuthResponse>(
    "/auth/signup",
    data
  );

  if (response.error) {
    console.log(response.error);
    throw new Error(response.error);
  }
  console.log(response.message);
  return response;
};

/**
 * Logs in an existing user.
 * @param data - The login credentials.
 * @returns A promise that resolves to the authentication response.
 */
export const fetchLogin = async (data: LoginRequest): Promise<AuthResponse> => {
  const { data: response } = await apiClient.post<AuthResponse>(
    "/auth/login",
    data
  );

  if (response.error) {
    throw new Error(response.error);
  }
  console.log(response.message);

  return response;
};

/**
 * Logs out the current user.
 * @returns A promise that resolves when the logout is complete.
 */
export const fetchLogout = async (): Promise<void> => {
  const { data: response } = await apiClient.post("/auth/logout");
  console.log(response.message);
};
