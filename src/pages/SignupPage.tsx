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
        </CardContent>
      </Card>
    </Page>
  );
};

export default SignupPage;
