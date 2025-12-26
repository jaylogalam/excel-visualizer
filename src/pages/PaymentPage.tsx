import { Page } from "@/components";
import { StripeContainer } from "@/features/payment";

/**
 * PaymentPage component
 *
 * Renders the Stripe payment checkout flow
 */
const PaymentPage = () => {
  return (
    <Page>
      <div className="max-w-2xl mx-auto py-12 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Complete Your Payment</h1>
          <p className="text-muted-foreground">
            Secure payment powered by Stripe
          </p>
        </div>

        <StripeContainer
          amount={2000} // $20.00 in cents
          currency="usd"
          metadata={{
            // Add any custom metadata here
            orderId: "generated-order-id",
          }}
        />
      </div>
    </Page>
  );
};

export default PaymentPage;
