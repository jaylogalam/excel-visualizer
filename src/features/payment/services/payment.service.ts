import axios from "axios";
import type { CreatePaymentIntentResponse } from "../types";

/**
 * Payment API Service
 *
 * Handles all payment-related API calls
 */

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

/**
 * Create a payment intent on the backend
 *
 * @param amount - Amount in cents (e.g., 2000 = $20.00)
 * @param currency - Currency code (default: 'usd')
 * @param metadata - Additional metadata to attach to the payment
 * @returns Promise with client secret
 */
export async function createPaymentIntent(
  amount: number,
  currency: string = "usd",
  metadata: Record<string, string> = {}
): Promise<string> {
  try {
    const response = await axios.post<CreatePaymentIntentResponse>(
      `${API_URL}/api/payment/create-payment-intent`,
      { amount, currency, metadata }
    );

    return response.data.clientSecret;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "Failed to initialize payment. Please try again."
      );
    }
    throw new Error("An unexpected error occurred. Please try again.");
  }
}
