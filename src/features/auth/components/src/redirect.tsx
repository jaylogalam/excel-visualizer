import React from "react";

const RedirectToSignup: React.FC = () => (
  <div className="text-sm text-muted-foreground">
    Don't have an account?{" "}
    <a href="/signup" className="text-primary font-semibold hover:underline">
      Sign up
    </a>
  </div>
);

const RedirectToLogin: React.FC = () => (
  <div className="text-sm text-muted-foreground">
    Already have an account?{" "}
    <a href="/login" className="text-primary font-semibold hover:underline">
      Sign in
    </a>
  </div>
);

export { RedirectToSignup, RedirectToLogin };
