import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Page,
} from "@/components";
import LoginForm from "@/features/auth/components/LoginForm";

const LoginPage = () => {
  return (
    <Page>
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>
            Please enter your details to sign in.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <LoginForm />
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-primary font-semibold hover:underline"
            >
              Sign up for free
            </a>
          </div>
        </CardContent>
      </Card>
    </Page>
  );
};

export default LoginPage;
