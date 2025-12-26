import { useState, type FormEvent } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Button } from "@/components";
import type { CheckoutFormProps, PaymentState } from "../types";

/**
 * CheckoutForm component
 *
 * Responsible for:
 * - Rendering the Stripe PaymentElement
 * - Handling payment submission with stripe.confirmPayment
 * - Managing loading states and error messages
 * - Redirecting to /completion on success
 */
const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentState, setPaymentState] = useState<PaymentState>({
    isProcessing: false,
    errorMessage: null,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet
      return;
    }

    setPaymentState({ isProcessing: true, errorMessage: null });

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/completion`,
        },
      });

      if (error) {
        // This point will only be reached if there's an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`.
        const message =
          error.type === "card_error" || error.type === "validation_error"
            ? error.message
            : "An unexpected error occurred. Please try again.";

        setPaymentState({
          isProcessing: false,
          errorMessage: message || "Payment failed",
        });

        onError?.(message || "Payment failed");
      } else {
        // Payment succeeded - user will be redirected
        onSuccess?.();
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setPaymentState({
        isProcessing: false,
        errorMessage: message,
      });
      onError?.(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>

        <div className="mb-6">
          <PaymentElement
            options={{
              layout: "tabs",
            }}
          />
        </div>

        {paymentState.errorMessage && (
          <div
            className="p-4 mb-6 bg-destructive/10 border border-destructive rounded-lg"
            role="alert"
          >
            <p className="text-sm text-destructive font-medium">
              {paymentState.errorMessage}
            </p>
          </div>
        )}

        <Button
          type="submit"
          fullWidth
          disabled={!stripe || !elements || paymentState.isProcessing}
          isLoading={paymentState.isProcessing}
        >
          {paymentState.isProcessing ? "Processing..." : "Pay Now"}
        </Button>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          Your payment is secured by Stripe
        </p>
      </div>
    </form>
  );
};

export default CheckoutForm;
