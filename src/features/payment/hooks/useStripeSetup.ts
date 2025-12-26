import { useEffect, useState } from "react";
import { createPaymentIntent } from "../services";

interface UseStripeSetupParams {
  amount: number;
  currency?: string;
  metadata?: Record<string, string>;
}

interface UseStripeSetupReturn {
  clientSecret: string | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook to handle Stripe setup and client secret fetching
 *
 * @param amount - Amount to charge in cents
 * @param currency - Currency code (default: 'usd')
 * @param metadata - Additional metadata for the payment
 * @returns Client secret, loading state, and error state
 */
export default function useStripeSetup({
  amount,
  currency = "usd",
  metadata = {},
}: UseStripeSetupParams): UseStripeSetupReturn {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const secret = await createPaymentIntent(amount, currency, metadata);

        setClientSecret(secret);
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Failed to initialize payment. Please try again.";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClientSecret();
  }, [amount, currency, metadata]);

  return {
    clientSecret,
    isLoading,
    error,
  };
}
