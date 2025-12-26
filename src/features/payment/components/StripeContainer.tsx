import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, type Stripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useStripeSetup } from "../hooks";
import type { StripeContainerProps } from "../types";

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
  const { clientSecret, isLoading, error } = useStripeSetup({
    amount,
    currency,
    metadata,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-muted-foreground">Initializing payment...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <div className="p-6 bg-destructive/10 border-2 border-destructive rounded-lg max-w-md">
          <h3 className="text-lg font-semibold text-destructive mb-2">
            Payment Error
          </h3>
          <p className="text-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (!clientSecret) {
    return null;
  }

  const options = {
    clientSecret,
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
