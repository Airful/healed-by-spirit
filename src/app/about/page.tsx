import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "About Brian Kurtz",
  description:
    "G. Brian Kurtz — healer, teacher, and author with over 40 years of divinely-inspired energy healing experience. Creator of the Healed by Spirit© modality.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-purple/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
            About Us
          </h1>
        </div>
      </section>

      {/* Intro + Video */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Video */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted">
              <iframe
                src="https://www.youtube.com/embed/Ji1ITSnhCZg"
                title="What is This Healing Thing?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-purple font-medium tracking-wide uppercase text-sm mb-2">
                Who I Am
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                Hello, My Name is Brian
              </h2>
              <h3 className="mt-2 text-xl font-heading text-muted-foreground italic">
                About the Healed By Spirit™ Modality
              </h3>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Brian&apos;s Healed by Spirit© modality is all his own. Refined over 40+ years of service, Brian removes himself to allow Spirit to work as required by each individual at that moment in time. Every session is different, and the results are over 98% positive on virtually every condition you might consider.
                </p>
                <p>
                  Introductory sessions are quite comprehensive — lasting roughly three hours. During this time Brian is shown lifelong-energetic residue patterns, actually charting them out for you to see and study after all harmful energetic residue is removed. After this intensive segment is completed, complete hands-off energetic bodywork is implemented on every bodily system.
                </p>
                <p>
                  After this, any subsequent treatments required are usually very minimal, quickly implemented, and generally less expensive than an insurance copayment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground text-center mb-12">
            Evolution from Healer to Current Diversity of Program Offerings
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              G. Brian Kurtz received his first &ldquo;healing downloads&rdquo; in June, 1984. In November, 2010, after somewhat successful stints in the public recreation and consumer electronics fields, Brian dedicated his life to energy healing.
            </p>
            <p>
              By January, 2013, Kurtz noticed a formula had emerged in his healing work, and realized &ldquo;If it&apos;s formulaic, I can TEACH it!&rdquo; He spent most of 2013 downloading what is now his four-module Level One Healer&apos;s Class (60 classes have followed since January 2014).
            </p>
            <p>
              Before he&apos;d even taught his first class, synchronicities occurred that led Brian to see that the second module of the class — centered around generating sacred space and divine connection — could be its own thing… thus Soul Connection at Will Workshops were born.
            </p>
            <p>
              After about 500 people had done the workshop, a few folks mentioned how their brain chatter was getting in the way. Brian soon received what he now calls The Real You Principles, which became the opening presentation of the workshops, and are foundational to his book <em>Access The Real You: Touching Your Divinity and Applying Its Wisdom to Your Life</em>.
            </p>
            <p>
              Brian is now traveling the world delivering talks centered around the book&apos;s principles, delivering workshops, and leading the five-module Connect and Radiate course — a comprehensive curriculum to teach and practice these powerful principles.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-purple text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-heading font-bold">98%</p>
              <p className="mt-2 text-white/70">Positive Results</p>
            </div>
            <div>
              <p className="text-5xl font-heading font-bold">40+</p>
              <p className="mt-2 text-white/70">Years of Healing</p>
            </div>
            <div>
              <p className="text-5xl font-heading font-bold">60+</p>
              <p className="mt-2 text-white/70">Healer Classes Taught</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modality & Methodology */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-purple font-medium tracking-wide uppercase text-sm mb-2 text-center">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground text-center">
            Modality &amp; Methodology
          </h2>
          <h3 className="mt-3 text-lg text-muted-foreground text-center italic">
            The modality is teachable, not some special &ldquo;gift&rdquo; unique to one person
          </h3>
          <div className="mt-12 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Brian teaches his healing methods to those called to heal. With dozens of Level One healer&apos;s classes graduated, and advanced level classes in ongoing development, Brian is committed to sharing this inspired method with the world. Through the techniques learned in these courses, students literally learn how to heal other people and themselves — physically, spiritually, and emotionally.
            </p>
            <p>
              Brian has also created the Soul Connection Workshop Series that teaches how to connect on a soul level. These workshops will allow you access to the sacred space where Miracles are Available®. In this space you will experience yourself and others around you at soul level beyond that which is normally available.
            </p>
            <p>
              What&apos;s most rewarding is gaining the ability to access this sacred space whenever you wish — a gift which will instantly — in the time it takes to intentionally inhale and exhale — enhance relationships with everyone you encounter — friends, family members, colleagues at work, or the server at your favorite coffee shop!
            </p>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-purple text-white font-semibold rounded-full hover:bg-purple-dark transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-purple/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-purple font-medium tracking-wide uppercase text-sm mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              What My Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
