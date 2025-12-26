import { createAuthClient } from "better-auth/react";
import { usernameClient } from "better-auth/client/plugins";

/**
 * Better Auth client configuration.
 * Handles authentication infrastructure and session management.
 */
export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  basePath: "/api/auth",
  fetchOptions: {
    credentials: "include",
  },
  plugins: [usernameClient()],
});

/**
 * Hook for accessing current session state.
 * Use this in components to get reactive session updates.
 */
export const { useSession } = authClient;
