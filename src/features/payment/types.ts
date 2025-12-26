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
 * State shape for payment processing
 */
export interface PaymentState {
  /** Whether payment is being processed */
  isProcessing: boolean;
  /** Error message if payment fails */
  errorMessage: string | null;
}

/**
 * Response from the create-payment-intent endpoint
 */
export interface CreatePaymentIntentResponse {
  clientSecret: string;
}

/**
 * State for the Stripe container
 */
export interface StripeContainerState {
  /** Client secret from backend */
  clientSecret: string | null;
  /** Whether client secret is being fetched */
  isLoading: boolean;
  /** Error message if fetch fails */
  errorMessage: string | null;
}
