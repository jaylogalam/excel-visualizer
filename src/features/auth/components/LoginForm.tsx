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
  RedirectToSignup,
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

      <FormContent onSubmit={submitLoginForm}>
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
      </FormContent>

      <FormFooter>
        <RedirectToSignup />
      </FormFooter>
    </Form>
  );
}

export default LoginForm;
