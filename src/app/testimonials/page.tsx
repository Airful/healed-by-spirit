import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Real stories from clients who have experienced healing, transformation, and renewal through Brian Kurtz's energy healing, workshops, and courses.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-mist to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
              Testimonials
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories of healing, transformation, and renewal from people
              who have worked with Brian.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured testimonial */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative bg-card rounded-2xl border border-border p-8 sm:p-12">
              <Quote className="absolute top-6 left-6 h-10 w-10 text-purple/15" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl text-foreground italic leading-relaxed">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-foreground">
                  {testimonials[0].name}
                </p>
                {testimonials[0].context && (
                  <p className="text-sm text-purple">{testimonials[0].context}</p>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider variant="wave" fill="var(--color-card)" className="-mt-1" />

      {/* All testimonials */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(1).map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-background rounded-2xl p-8 border border-border hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(123,94,167,0.15)] transition-all duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  {t.highlight && (
                    <p className="text-purple font-heading font-semibold text-lg mb-4">
                      &ldquo;{t.highlight}&rdquo;
                    </p>
                  )}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    {t.context && (
                      <p className="text-sm text-purple">{t.context}</p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider variant="peak" fill="var(--color-purple)" />

      {/* CTA */}
      <section className="py-24 bg-[radial-gradient(ellipse_at_top,var(--color-purple-light),var(--color-purple)_50%,var(--color-purple-dark))] text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold">
              Ready to Begin Your Journey?
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              Book a healing session or explore Brian&apos;s workshops and
              courses.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-session"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple font-semibold rounded-full hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
              >
                Book a Session
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
