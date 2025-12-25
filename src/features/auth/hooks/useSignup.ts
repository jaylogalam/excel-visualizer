import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { fetchSignup } from "../api/authApi";

import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupSchema } from "../schemas/auth.schema";
import { useAuthStore } from "../store/authStore";

export default function useSignup() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    criteriaMode: "firstError",
    shouldFocusError: true,
  });

  const { mutate: signup } = useMutation({
    mutationFn: fetchSignup,
    onSuccess: async (data) => {
      setUser(data.user);
      navigate("/");
    },
    onError: (error: any) => {
      if (error.message.includes("email"))
        setError("email", { message: error.message });
      if (error.message.includes("Username"))
        setError("username", { message: error.message });
    },
  });

  const submitSignupForm = handleSubmit((data) => {
    signup(data);
  });

  return {
    isSubmitting,
    errors,
    control,
    register,
    submitSignupForm,
  };
}
