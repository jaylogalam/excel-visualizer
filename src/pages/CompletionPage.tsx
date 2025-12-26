import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Page } from "@/components";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

/**
 * CompletionPage component
 *
 * Displayed after successful payment or payment failure
 * Shows confirmation details and status
 */
const CompletionPage = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    // Check payment status from URL params
    const paymentIntent = searchParams.get("payment_intent");
    const paymentIntentClientSecret = searchParams.get(
      "payment_intent_client_secret"
    );
    const redirectStatus = searchParams.get("redirect_status");

    if (redirectStatus === "succeeded" && paymentIntent) {
      setStatus("success");
    } else if (redirectStatus === "failed") {
      setStatus("error");
    } else {
      // If no redirect status, assume still processing
      setTimeout(() => setStatus("success"), 1000);
    }
  }, [searchParams]);

  return (
    <Page>
      <div className="max-w-2xl mx-auto py-12 px-4">
        {status === "loading" && (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            <Loader2 className="w-16 h-16 text-primary animate-spin" />
            <h2 className="text-2xl font-semibold">Processing payment...</h2>
            <p className="text-muted-foreground">
              Please wait while we confirm your payment
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>

            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold">Payment Successful!</h1>
              <p className="text-muted-foreground text-lg">
                Thank you for your payment. Your transaction has been completed
                successfully.
              </p>
            </div>

            <div className="w-full p-6 bg-card border border-border rounded-xl shadow-sm space-y-3">
              <h3 className="font-semibold text-lg">Payment Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment ID:</span>
                  <span className="font-mono text-xs">
                    {searchParams.get("payment_intent")?.slice(0, 20) || "N/A"}
                    ...
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    Completed
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 h-12 px-6 py-3 bg-primary text-white shadow-sm hover:brightness-110"
            >
              Return to Home
            </Link>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
              <XCircle className="w-12 h-12 text-red-600 dark:text-red-400" />
            </div>

            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold">Payment Failed</h1>
              <p className="text-muted-foreground text-lg">
                We couldn't process your payment. Please try again.
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                to="/payment"
                className="inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 h-12 px-6 py-3 bg-primary text-white shadow-sm hover:brightness-110"
              >
                Try Again
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 h-12 px-6 py-3 border-2 border-accent bg-transparent text-foreground hover:bg-accent/10"
              >
                Return to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </Page>
  );
};

export default CompletionPage;
