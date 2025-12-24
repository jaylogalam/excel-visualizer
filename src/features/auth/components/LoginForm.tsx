import {
  SubmitButton,
  InputText,
  InputPassword,
  Form,
  FormHeader,
  FormTitle,
  FormDescription,
  FormContent,
  FormFooter,
} from "./src";
import useLogin from "../hooks/useLogin";

function LoginForm() {
  const { isSubmitting, errors, register, submitLoginForm } = useLogin();

  return (
    <Form>
      <FormHeader>
        <FormTitle>Welcome Back</FormTitle>
        <FormDescription>Please enter your details to sign in.</FormDescription>
      </FormHeader>

      <FormContent>
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

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign In"}
          </SubmitButton>
        </form>
      </FormContent>

      <FormFooter>
        <div className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-primary font-semibold hover:underline"
          >
            Sign up
          </a>
        </div>
      </FormFooter>
    </Form>
  );
}

export default LoginForm;
