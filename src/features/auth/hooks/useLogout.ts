import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { fetchLogout } from "../api/authApi";
import { useAuthStore } from "../store/authStore";

export default function useLogout() {
  const navigate = useNavigate();
  const clearUser = useAuthStore((state) => state.clearUser);
  const { mutate: logout } = useMutation({
    mutationFn: fetchLogout,
    onSuccess: async () => {
      clearUser();
      navigate("/");
    },
    onError: (error: Error) => {
      console.error("Logout failed:", error);
    },
  });

  return logout;
}
