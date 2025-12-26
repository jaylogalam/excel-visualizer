import {
  SubmitButton,
  InputText,
  InputPassword,
  PasswordRequirements,
  Form,
  FormTitle,
  FormHeader,
  FormDescription,
  FormContent,
  FormFooter,
  RedirectToLogin,
  InputError,
} from "./src";
import useSignup from "../hooks/useSignup";
import { useWatch } from "react-hook-form";

function SignupForm() {
  const { isSubmitting, errors, control, register, submitSignupForm } =
    useSignup();

  const password = useWatch({
    control,
    name: "password",
    defaultValue: "",
  });

  return (
    <Form>
      <FormHeader>
        <FormTitle>Create an Account</FormTitle>
        <FormDescription>Please enter your details to sign up.</FormDescription>
      </FormHeader>

      <FormContent onSubmit={submitSignupForm}>
        <div className="space-y-1">
          <div className="flex gap-4">
            <InputText placeholder="First Name" {...register("firstName")} />

            <InputText placeholder="Last Name" {...register("lastName")} />
          </div>

          {/* Single error for both name fields */}
          {(errors.firstName || errors.lastName) && (
            <InputError
              error={errors.firstName?.message || errors.lastName?.message}
            />
          )}
        </div>

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
        <PasswordRequirements password={password} />

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </SubmitButton>
      </FormContent>

      <FormFooter>
        <RedirectToLogin />
      </FormFooter>
    </Form>
  );
}

export default SignupForm;
