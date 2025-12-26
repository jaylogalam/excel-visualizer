import { Page } from "@/components";
import { Zap, CreditCard, Shield, ArrowRight } from "lucide-react";

const PaymentPage = () => {
  return (
    <Page>
      <div className="max-w-2xl mx-auto py-12 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Complete Your Purchase</h1>
          <p className="text-muted-foreground">
            You'll be redirected to Stripe's secure checkout
          </p>
        </div>

        {/* Plan Summary Card */}
        <div className="p-8 bg-card border border-border rounded-2xl shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Product Pro</h2>
              <p className="text-muted-foreground text-sm">
                Monthly subscription
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center py-3 border-t border-border">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-semibold">$20.00</span>
            </div>
            <div className="flex justify-between items-center py-3 border-t border-border text-lg font-bold">
              <span>Total due today</span>
              <span className="text-2xl">$20.00</span>
            </div>
          </div>

          {error && (
            <div className="p-4 mb-6 bg-destructive/10 border border-destructive rounded-lg">
              <p className="text-sm text-destructive font-medium">{error}</p>
            </div>
          )}

          <button
            onClick={handleCheckout}
            disabled={isLoading}
            className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-center flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                Redirecting to checkout...
              </>
            ) : (
              <>
                Proceed to Checkout <ArrowRight size={18} />
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            Secure payment processing powered by Stripe
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-secondary/30 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm">Secure Checkout</span>
            </div>
            <p className="text-xs text-muted-foreground">
              256-bit SSL encryption
            </p>
          </div>
          <div className="p-4 bg-secondary/30 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm">Multiple Methods</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Credit cards, Apple Pay & more
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default PaymentPage;
