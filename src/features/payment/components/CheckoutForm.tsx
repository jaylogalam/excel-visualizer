import { PaymentElement } from "@stripe/react-stripe-js";
import { Button } from "@/components";
import { usePayment } from "../hooks";
import type { CheckoutFormProps } from "../types";

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
  const { isProcessing, error, handleSubmit } = usePayment({
    onSuccess,
    onError,
  });

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

        {error && (
          <div
            className="p-4 mb-6 bg-destructive/10 border border-destructive rounded-lg"
            role="alert"
          >
            <p className="text-sm text-destructive font-medium">{error}</p>
          </div>
        )}

        <Button
          type="submit"
          fullWidth
          disabled={isProcessing}
          isLoading={isProcessing}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </Button>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          Your payment is secured by Stripe
        </p>
      </div>
    </form>
  );
};

export default CheckoutForm;
