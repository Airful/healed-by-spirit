import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, Video } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { CalendlyEmbed } from "@/components/ui/calendly-embed";
import { SectionDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Schedule a healing session, workshop, or free consultation with Brian Kurtz. Available in-person in Albuquerque or remotely via Zoom.",
};

export default function BookSessionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-mist to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/services"
              className="inline-flex items-center text-purple text-sm font-medium mb-4 hover:text-purple-dark transition-colors"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              All Services
            </Link>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
              Book a Session
            </h1>
            <p className="mt-4 text-muted-foreground max-w-3xl text-lg">
              Choose from healing sessions, workshops, courses, or a free
              consultation. All offerings are available in-person or remotely.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-purple" />
                In-person in Albuquerque
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Video className="h-4 w-4 text-purple" />
                Remote via Zoom or phone
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Calendly embed */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2}>
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <CalendlyEmbed url="https://calendly.com/healedbyspirit" />
            </div>
          </FadeIn>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Questions? Call or text Brian at{" "}
            <a
              href="tel:505-541-0265"
              className="text-purple hover:text-purple-dark transition-colors font-medium"
            >
              505-541-0265
            </a>{" "}
            or email{" "}
            <a
              href="mailto:healer@healedbyspirit.com"
              className="text-purple hover:text-purple-dark transition-colors font-medium"
            >
              healer@healedbyspirit.com
            </a>
          </p>
        </div>
      </section>

      <SectionDivider variant="peak" fill="var(--color-purple)" />

      {/* CTA */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_top,var(--color-purple-light),var(--color-purple)_50%,var(--color-purple-dark))] text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold">
              Not Sure Where to Start?
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              Book a free consultation and Brian will help you choose the right
              combination of services.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple font-semibold rounded-full hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
