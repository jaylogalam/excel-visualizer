import { Button, InputText, InputPassword, PasswordRequirements } from "./src";
import useSignup from "../hooks/useSignup";
import { useWatch } from "react-hook-form";

function SignupForm() {
  const { isSubmitting, errors, register, submitSignupForm } = useSignup();

  useWatch;

  return (
    <form onSubmit={submitSignupForm} className="space-y-6">
      <InputText
        placeholder="Enter your username"
        error={errors.username?.message}
        {...register("username")}
      />

      <InputText
        type="email"
        placeholder="Enter your email"
        error={errors.email?.message}
        {...register("email")}
      />

      <InputPassword
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register("password")}
      />
      <PasswordRequirements />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </Button>
    </form>
  );
}

export default SignupForm;
