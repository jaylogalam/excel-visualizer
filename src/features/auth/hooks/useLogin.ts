import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signIn } from "../services";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../schemas/auth.schema";

export default function useLogin() {
  const navigate = useNavigate();

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
    mutationFn: async (data: LoginSchema) => await signIn(data),
    onSuccess: () => navigate("/"),
    onError: (error: Error) => setError("password", { message: error.message }),
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
