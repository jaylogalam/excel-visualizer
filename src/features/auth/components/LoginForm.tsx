import { Button, InputText, InputPassword } from "./src";
import useLogin from "../hooks/useLogin";

function LoginForm() {
  const { isSubmitting, errors, register, submitLoginForm } = useLogin();

  return (
    <form onSubmit={submitLoginForm} className="space-y-6">
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

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
}

export default LoginForm;
