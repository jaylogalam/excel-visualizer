import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../services";

import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupSchema } from "../schemas/auth.schema";

export default function useSignup() {
  const navigate = useNavigate();

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
    mutationFn: async (data: SignupSchema) => await signUp(data),
    onSuccess: () => navigate("/"),
    onError: (error: any) => {
      if (error.message.includes("email"))
        setError("email", { message: error.message });
      if (error.message.includes("first name"))
        setError("firstName", { message: error.message });
      if (error.message.includes("last name"))
        setError("firstName", { message: error.message });
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
