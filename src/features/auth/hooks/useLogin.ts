import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchLogin } from "../api/authApi";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../schemas/auth.schema";

export default function useLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    criteriaMode: "firstError",
    shouldFocusError: true,
  });

  const { mutate: login } = useMutation({
    mutationFn: fetchLogin,
    onSuccess: async () => {
      navigate("/");
    },
    onError: (error: Error) => {},
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
