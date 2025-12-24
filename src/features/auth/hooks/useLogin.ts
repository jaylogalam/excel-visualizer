import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchLogin } from "../api/authApi";
import { useAuthStore } from "../store/authStore";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../schemas/auth.schema";

export default function useLogin() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    criteriaMode: "firstError",
    shouldFocusError: true,
  });

  const { mutate: login } = useMutation({
    mutationFn: fetchLogin,
    onSuccess: async (data) => {
      setUser(data.user);
      navigate("/");
    },
    onError: (error: Error) => {
      console.log(error.message);
      setError("password", { message: error.message });
    },
  });

  const submitLoginForm = handleSubmit((data) => {
    login(data);
  });

  return {
    isSubmitting,
    errors,
    register,
    submitLoginForm,
  };
}
