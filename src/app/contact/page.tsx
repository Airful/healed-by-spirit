import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/motion";
import { SectionDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Brian Kurtz for healing sessions, workshops, or questions. Call 505-541-0265 or email healer@healedbyspirit.com.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-mist to-background" />
        <div className="absolute inset-0 opacity-[0.08]">
          <Image src="/images/contact-hero-background.png" alt="" fill className="object-cover object-center" sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
              Contact Us
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              We&apos;d love to hear from you. Reach out with any questions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — Form */}
            <FadeIn direction="right">
              <div className="bg-card rounded-2xl border border-border p-8 sm:p-10">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Send a Message
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-colors resize-none"
                    />
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-purple text-white font-semibold rounded-full hover:bg-purple-dark active:scale-[0.98] transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </FadeIn>

            {/* Right — Image + Contact Info */}
            <div className="flex flex-col gap-8">
              

              {/* Contact info card */}
              <FadeIn delay={0.2}>
                <div className="bg-card rounded-2xl border border-border p-8">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                    Get in Touch
                  </h3>
                  <StaggerContainer className="space-y-5">
                    <StaggerItem>
                      <a
                        href="tel:505-541-0265"
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-purple/5 transition-colors"
                      >
                        <div className="w-11 h-11 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                          <Phone className="h-5 w-5 text-purple" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Call Us</p>
                          <p className="text-muted-foreground text-sm">505-541-0265</p>
                        </div>
                      </a>
                    </StaggerItem>
                    <StaggerItem>
                      <a
                        href="mailto:healer@healedbyspirit.com"
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-purple/5 transition-colors"
                      >
                        <div className="w-11 h-11 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                          <Mail className="h-5 w-5 text-purple" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Email</p>
                          <p className="text-muted-foreground text-sm">healer@healedbyspirit.com</p>
                        </div>
                      </a>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="flex items-center gap-4 p-3">
                        <div className="w-11 h-11 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                          <MapPin className="h-5 w-5 text-purple" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Location</p>
                          <p className="text-muted-foreground text-sm">Albuquerque, NM 87114 &amp; Remote Sessions</p>
                        </div>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="peak" fill="var(--color-purple-deep)" />

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-ellipse-gradient text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              Whether in person or remotely, Brian is here to help you on your path to wellness.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple font-semibold rounded-full hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="tel:505-541-0265"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
              >
                Call 505-541-0265
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
