import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Page,
} from "@/components";
import SignupForm from "@/features/auth/components/SignupForm";

const SignupPage = () => {
  return (
    <Page>
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Join Excel Visualizer to start managing your data.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <SignupForm />
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </Page>
  );
};

export default SignupPage;
