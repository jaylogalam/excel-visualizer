import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { fetchLogout } from "../api/authApi";

export default function useLogout() {
  const navigate = useNavigate();
  const { mutate: logout } = useMutation({
    mutationFn: fetchLogout,
    onSuccess: async () => {
      navigate("/");
    },
    onError: (error: Error) => {
      console.error("Logout failed:", error);
    },
  });

  return logout;
}
