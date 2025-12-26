import { useState, type FormEvent } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

interface UsePaymentReturn {
  isProcessing: boolean;
  error: string | null;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

interface UsePaymentParams {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

/**
 * Hook to handle payment submission logic
 *
 * @param onSuccess - Optional callback when payment succeeds
 * @param onError - Optional callback when payment fails
 * @returns Payment state and submit handler
 */
export default function usePayment({
  onSuccess,
  onError,
}: UsePaymentParams = {}): UsePaymentReturn {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const { error: stripeError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/completion`,
        },
      });

      if (stripeError) {
        // Handle immediate errors
        const message =
          stripeError.type === "card_error" ||
          stripeError.type === "validation_error"
            ? stripeError.message
            : "An unexpected error occurred. Please try again.";

        setError(message || "Payment failed");
        setIsProcessing(false);
        onError?.(message || "Payment failed");
      } else {
        // Payment succeeded - user will be redirected
        onSuccess?.();
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(message);
      setIsProcessing(false);
      onError?.(message);
    }
  };

  return {
    isProcessing,
    error,
    handleSubmit,
  };
}
