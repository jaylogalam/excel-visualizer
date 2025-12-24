import { Button, InputText, InputPassword } from "./src";
import useLogin from "../hooks/useLogin";

function LoginForm() {
  const { isSubmitting, errors, register, submitLoginForm } = useLogin();

  return (
    <div>
      <form onSubmit={submitLoginForm} className="space-y-6">
        <InputText
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
      <div className="mt-6 text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <a
          href="/signup"
          className="text-primary font-semibold hover:underline"
        >
          Sign up
        </a>
      </div>
    </div>
  );
}

export default LoginForm;
