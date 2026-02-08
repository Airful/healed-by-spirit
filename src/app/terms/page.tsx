import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Healed by Spirit services.",
};

export default function TermsPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-foreground mb-10">
          Terms &amp; Conditions
        </h1>
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
          <p>
            By scheduling a session with Healed by Spirit, you acknowledge and agree to the following terms.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground mt-8">
            Services
          </h2>
          <p>
            Healed by Spirit provides spiritual healing, energy work, and educational workshops. These services are not a substitute for professional medical, psychological, or psychiatric treatment. Brian Kurtz is not a licensed medical professional.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground mt-8">
            Payment
          </h2>
          <p>
            Payment is due at the time of service unless a payment plan has been arranged. All prices are listed in US Dollars (USD). Refunds are handled on a case-by-case basis.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground mt-8">
            Cancellation
          </h2>
          <p>
            Please provide at least 24 hours notice for cancellations. Late cancellations may be subject to a fee.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground mt-8">
            Contact
          </h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a
              href="mailto:healer@healedbyspirit.com"
              className="text-purple hover:underline"
            >
              healer@healedbyspirit.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:505-541-0265"
              className="text-purple hover:underline"
            >
              505-541-0265
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
