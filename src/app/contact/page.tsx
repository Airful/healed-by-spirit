import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
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
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-mist to-background" />
        <div className="absolute inset-0 opacity-8">
          <Image src="/images/contact-hero-background.png" alt="" fill className="object-cover" />
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
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <FadeIn direction="right">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                  Send a Message
                </h2>
                <form className="space-y-6">
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
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-purple text-white font-semibold rounded-full hover:bg-purple-dark active:scale-[0.98] transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Right side */}
            <div>
              <ScaleIn>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-10">
                  <Image
                    src="/images/contact-brian-headshot.png"
                    alt="Brian Kurtz"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScaleIn>

              {/* Contact info */}
              <StaggerContainer className="space-y-6">
                <FadeIn>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Get in Touch
                  </h3>
                </FadeIn>
                <StaggerItem>
                  <a
                    href="tel:505-541-0265"
                    className="flex items-center gap-3 text-foreground hover:text-purple transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-purple" />
                    </div>
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p className="text-muted-foreground text-sm">505-541-0265</p>
                    </div>
                  </a>
                </StaggerItem>
                <StaggerItem>
                  <a
                    href="mailto:healer@healedbyspirit.com"
                    className="flex items-center gap-3 text-foreground hover:text-purple transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-purple" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground text-sm">healer@healedbyspirit.com</p>
                    </div>
                  </a>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-purple" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground text-sm">Albuquerque, NM 87114 &amp; Remote Sessions</p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="peak" fill="var(--color-purple)" />
    </>
  );
}
