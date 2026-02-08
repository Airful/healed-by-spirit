import type { Metadata } from "next";
import { FadeIn } from "@/components/motion";
import { SectionDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Healed by Spirit services.",
};

export default function TermsPage() {
  return (
    <>
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl font-heading font-bold text-foreground mb-10">
            Terms &amp; Conditions
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground">
                Disclaimer
              </h2>
              <p>
                G. Brian Kurtz / Healed by Spirit© is not a medical doctor and does not practice medicine. Healing sessions, workshops, and courses are spiritual in nature and are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground">
                Refund Policy
              </h2>
              <p>
                Due to the nature of healing work, all sales are final. If you have concerns about a session or purchase, please contact us directly at{" "}
                <a href="mailto:healer@healedbyspirit.com" className="text-purple hover:underline">
                  healer@healedbyspirit.com
                </a>{" "}
                or{" "}
                <a href="tel:505-541-0265" className="text-purple hover:underline">
                  505-541-0265
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground">
                Privacy
              </h2>
              <p>
                We respect your privacy. Any personal information shared during sessions, workshops, or through this website is kept strictly confidential. We do not sell or share your information with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground">
                Intellectual Property
              </h2>
              <p>
                Healed by Spirit©, Soul Connection at Will™, and Miracles are Available® are proprietary marks of G. Brian Kurtz. All content on this website, including text, images, and course materials, is protected by copyright.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </section>

    <SectionDivider variant="peak" fill="var(--color-purple)" />
    </>
  );
}
