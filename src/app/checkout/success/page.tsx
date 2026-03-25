import Link from "next/link";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Successful",
};

export default function CheckoutSuccess() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mx-auto w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-green" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
          Thank You!
        </h1>
        <p className="text-muted-foreground mb-8">
          Your payment was successful. Brian will be in touch with you shortly
          to get started. A confirmation email has been sent to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-purple text-white rounded-full font-semibold hover:bg-purple-dark active:scale-[0.98] transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-border rounded-full font-semibold text-foreground hover:bg-muted active:scale-[0.98] transition-all"
          >
            Contact Brian
          </Link>
        </div>
      </div>
    </main>
  );
}
