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
        </CardContent>
      </Card>
    </Page>
  );
};

export default LoginPage;
