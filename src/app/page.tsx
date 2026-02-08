import Link from "next/link";
import Image from "next/image";
import { Sparkles, Users, Zap, MapPin, ArrowRight, Star, BookOpen } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/motion";
import { FloatingOrb } from "@/components/motion/floating-orb";
import { SectionDivider } from "@/components/ui/section-divider";

const services = [
  {
    title: "Healing Sessions",
    description: "Chakra clearing, energetic bodywork, and divinely-guided counseling for physical, emotional, and spiritual healing.",
    icon: Sparkles,
    href: "/services/healing-sessions",
  },
  {
    title: "Soul Connection Workshops",
    description: "Learn to connect at soul level and access sacred space where miracles are available.",
    icon: Users,
    href: "/services/workshops",
  },
  {
    title: "Connect & Radiate",
    description: "A comprehensive five-module course bringing together all of Brian's transformative teachings.",
    icon: Zap,
    href: "/services/connect-radiate",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/10 via-background to-background" />
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero-yoga-sunset.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <FloatingOrb size={300} className="top-20 -left-20" delay={0} />
        <FloatingOrb size={200} color="rgba(176, 141, 212, 0.06)" className="top-40 right-10" delay={2} duration={10} />
        <FloatingOrb size={150} color="rgba(242, 160, 123, 0.06)" className="bottom-32 left-1/4" delay={4} duration={12} />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center py-24">
          <FadeIn delay={0.1}>
            <p className="text-purple font-medium tracking-wide uppercase text-sm mb-4">
              Welcome to
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
              Healed by Spirit
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Over 40 years of divinely-inspired energy healing, workshops, and transformative courses with G. Brian Kurtz.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-purple text-white font-semibold rounded-full hover:bg-purple-dark active:scale-[0.98] transition-all duration-200 text-base"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple text-purple font-semibold rounded-full hover:bg-purple/5 active:scale-[0.98] transition-all duration-200 text-base"
              >
                Meet Brian
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider variant="wave" fill="var(--color-card)" className="-mt-1" />

      {/* Services */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                Our Services
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                From personal healing sessions to group workshops and professional certification courses.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.href}>
                  <Link
                    href={service.href}
                    className="group block bg-background rounded-2xl p-8 border border-border hover:border-purple/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(123,94,167,0.15)] transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-purple/10 flex items-center justify-center mb-6 group-hover:bg-purple/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-7 w-7 text-purple" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center mt-4 text-purple text-sm font-medium group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider variant="curve" fill="var(--color-background)" />

      {/* About Brian */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScaleIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/images/brian-kurtz-portrait.jpg"
                  alt="Brian Kurtz — Healer and creator of the Healed by Spirit modality"
                  fill
                  className="object-cover"
                />
              </div>
            </ScaleIn>
            <FadeIn direction="left">
              <div>
                <p className="text-purple font-medium tracking-wide uppercase text-sm mb-3">
                  About Brian
                </p>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight">
                  Hello, I&apos;m Brian Kurtz
                </h2>
                <p className="mt-2 text-xl font-heading text-muted-foreground italic">
                  Healer and creator of the Healed by Spirit© modality
                </p>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Brian is a teacher and light worker who calls in Spirit&apos;s power and love to heal physical, psychological, and emotional issues. His divinely-inspired method includes chakra and life-history energetic residue clearing, client-specific symptomatic healing, and a divinely-connected guidance session.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Brian works with anyone — adults, families, business HR departments, schools, children, and pets, and clears homes and work spaces as required.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center mt-8 px-6 py-3 bg-purple text-white font-semibold rounded-full hover:bg-purple-dark active:scale-[0.98] transition-all duration-200"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                Our Locations
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <StaggerItem>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <Image src="/images/location-albuquerque.jpg" alt="Albuquerque, New Mexico" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white">
                  <MapPin className="h-5 w-5" />
                  <span className="text-xl font-heading font-semibold">Albuquerque</span>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <Image src="/images/hero-remote-handshake.jpg" alt="Remote healing sessions available worldwide" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white">
                  <MapPin className="h-5 w-5" />
                  <span className="text-xl font-heading font-semibold">Remotely</span>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Book Promo */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <div>
                <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">Now Available</p>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Access The Real You</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  This book offers a practical, principle-based process to Access The Real You — your inherent divinity, deeply connected to a greater source. It empowers you with ready access to this essence, influencing your life, health, self-love, forgiveness, and personal growth.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/book" className="inline-flex items-center justify-center px-6 py-3 bg-purple text-white font-semibold rounded-full hover:bg-purple-dark active:scale-[0.98] transition-all duration-200">
                    <BookOpen className="mr-2 h-4 w-4" /> Learn More
                  </Link>
                  <Link href="/shop" className="inline-flex items-center justify-center px-6 py-3 border-2 border-purple text-purple font-semibold rounded-full hover:bg-purple/5 active:scale-[0.98] transition-all duration-200">
                    Buy Now — From $18
                  </Link>
                </div>
              </div>
            </FadeIn>
            <ScaleIn className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-64 sm:w-72">
                <div className="absolute -inset-4 bg-purple/10 rounded-2xl -rotate-3" />
                <Image src="/images/book-cover-access-the-real-you.jpg" alt="Access the Real You by Brian Kurtz" width={288} height={432} className="relative rounded-lg shadow-xl" />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-purple-mist">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Testimonials</h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-card rounded-2xl p-8 border border-border hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(123,94,167,0.15)] transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground italic leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-semibold text-foreground">{t.name}</p>
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
            <h2 className="text-3xl sm:text-4xl font-heading font-bold">Have a Question?</h2>
            <p className="mt-4 text-white/80 text-lg">If you need assistance, feel free to reach out. We&apos;re here to help.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple font-semibold rounded-full hover:bg-white/90 active:scale-[0.98] transition-all duration-200">
                Contact Us
              </Link>
              <a href="tel:505-541-0265" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 active:scale-[0.98] transition-all duration-200">
                Call 505-541-0265
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
