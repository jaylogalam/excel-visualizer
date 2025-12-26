import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, type Stripe } from "@stripe/stripe-js";
import axios from "axios";
import CheckoutForm from "./CheckoutForm";
import type {
  StripeContainerProps,
  StripeContainerState,
  CreatePaymentIntentResponse,
} from "../types";

// Load Stripe outside of component to avoid recreating the object
const stripePromise: Promise<Stripe | null> = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

/**
 * StripeContainer component
 *
 * Responsible for:
 * - Fetching the client secret from the backend
 * - Wrapping the checkout flow in the Stripe Elements provider
 * - Handling loading and error states
 */
const StripeContainer: React.FC<StripeContainerProps> = ({
  amount = 2000,
  currency = "usd",
  metadata = {},
}) => {
  const [state, setState] = useState<StripeContainerState>({
    clientSecret: null,
    isLoading: true,
    errorMessage: null,
  });

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

        const response = await axios.post<CreatePaymentIntentResponse>(
          `${apiUrl}/api/create-payment-intent`,
          { amount, currency, metadata }
        );

        setState({
          clientSecret: response.data.clientSecret,
          isLoading: false,
          errorMessage: null,
        });
      } catch (error) {
        setState({
          clientSecret: null,
          isLoading: false,
          errorMessage:
            error instanceof Error
              ? error.message
              : "Failed to initialize payment. Please try again.",
        });
      }
    };

    fetchClientSecret();
  }, [amount, currency, metadata]);

  if (state.isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-muted-foreground">Initializing payment...</p>
      </div>
    );
  }

  if (state.errorMessage) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <div className="p-6 bg-destructive/10 border-2 border-destructive rounded-lg max-w-md">
          <h3 className="text-lg font-semibold text-destructive mb-2">
            Payment Error
          </h3>
          <p className="text-foreground">{state.errorMessage}</p>
        </div>
      </div>
    );
  }

  if (!state.clientSecret) {
    return null;
  }

  const options = {
    clientSecret: state.clientSecret,
    appearance: {
      theme: "stripe" as const,
      variables: {
        colorPrimary: "#212121",
        colorBackground: "#ffffff",
        colorText: "#212121",
        colorDanger: "#df1b41",
        fontFamily: "system-ui, sans-serif",
        spacingUnit: "4px",
        borderRadius: "10px",
      },
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeContainer;
