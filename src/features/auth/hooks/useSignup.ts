import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { fetchSignup } from "../api/authApi";

import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupSchema } from "../schemas/auth.schema";

export default function useSignup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    criteriaMode: "firstError",
    shouldFocusError: true,
  });

  const { mutate: signup } = useMutation({
    mutationFn: fetchSignup,
    onSuccess: async () => {
      navigate("/");
    },
    onError: (err: any) => {},
  });

  const submitSignupForm = handleSubmit((data) => {
    signup(data);
  });

  return {
    isSubmitting,
    errors,
    register,
    submitSignupForm,
  };
}
