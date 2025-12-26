/**
 * Props for the StripeContainer component
 */
export interface StripeContainerProps {
  /** Amount to charge in cents (e.g., 2000 = $20.00) */
  amount?: number;
  /** Currency code (default: 'usd') */
  currency?: string;
  /** Additional metadata to attach to the payment */
  metadata?: Record<string, string>;
}

/**
 * Props for the CheckoutForm component
 */
export interface CheckoutFormProps {
  /** Optional callback when payment succeeds */
  onSuccess?: () => void;
  /** Optional callback when payment fails */
  onError?: (error: string) => void;
}

/**
 * Response from the create-payment-intent endpoint
 */
export interface CreatePaymentIntentResponse {
  clientSecret: string;
}
