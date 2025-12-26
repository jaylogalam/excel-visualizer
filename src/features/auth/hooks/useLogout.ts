import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "../services";

export default function useLogout() {
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: async () => await signOut(),
    onSuccess: () => navigate("/"),
  });

  return logout;
}
