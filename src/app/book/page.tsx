import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Headphones, Star, ArrowRight } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/motion";
import { SectionDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "Access the Real You — Book",
  description:
    "A practical, principle-based process to Access The Real You — your inherent divinity. By G. Brian Kurtz. Available in print and audiobook.",
};

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Book cover */}
            <ScaleIn className="flex justify-center">
              <div className="relative w-72 sm:w-80">
                <div className="absolute -inset-6 bg-purple/10 rounded-3xl -rotate-2" />
                <Image
                  src="/images/book-cover-access-the-real-you.jpg"
                  alt="Access the Real You by Brian Kurtz"
                  width={320}
                  height={480}
                  className="relative rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </ScaleIn>

            {/* Content */}
            <FadeIn direction="left">
              <div>
                <p className="text-gold font-medium tracking-wide uppercase text-sm mb-3">
                  Now Available
                </p>
                <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground leading-tight">
                  Access The Real You
                </h1>
                <p className="mt-2 text-xl text-muted-foreground italic font-heading">
                  Touching Your Divinity and Applying Its Wisdom to Your Life
                </p>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  This book offers a practical, principle-based process to Access The Real You — your inherent divinity, deeply connected to a greater source. It empowers you with ready access to this essence, influencing your life, health, self-love, forgiveness, and personal growth.
                </p>

                {/* Buy options */}
                <div className="mt-10 space-y-4">
                  <Link
                    href="/shop?category=Books"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-purple/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(123,94,167,0.15)] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center shrink-0 group-hover:bg-purple/20 group-hover:scale-110 transition-all duration-300">
                      <BookOpen className="h-6 w-6 text-purple" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Print Book</p>
                      <p className="text-sm text-muted-foreground">Single copy or bulk options available</p>
                    </div>
                    <span className="text-purple font-bold text-lg">From $22</span>
                  </Link>

                  <Link
                    href="/shop"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-purple/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(123,94,167,0.15)] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center shrink-0 group-hover:bg-purple/20 group-hover:scale-110 transition-all duration-300">
                      <Headphones className="h-6 w-6 text-purple" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Audiobook</p>
                      <p className="text-sm text-muted-foreground">Listen to the complete book</p>
                    </div>
                    <span className="text-purple font-bold text-lg">$18</span>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About the Book */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-10">
              About the Book
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                After about 500 people had completed the Soul Connection at Will workshops, some mentioned how brain chatter was getting in the way of their full engagement. Brian soon received what he now calls The Real You Principles — a set of foundational concepts that became the opening presentation of every workshop.
              </p>
              <p>
                These principles are now the heart of <em>Access The Real You</em>. The book walks you through a practical process of connecting with your inherent divinity — that part of you deeply connected to a greater source — and applying its wisdom in everyday life.
              </p>
              <p>
                Whether you&apos;re new to spiritual work or a seasoned practitioner, the principles in this book will help you access a deeper sense of self-love, forgiveness, and authentic personal growth.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-purple-mist">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-10">
              What Readers Say
            </h2>
          </FadeIn>
          <ScaleIn delay={0.2}>
            <div className="bg-card rounded-2xl p-10 border border-border max-w-2xl mx-auto">
              <div className="flex gap-1 justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-lg text-foreground italic leading-relaxed">
                &ldquo;Brian&apos;s work is incredible and has helped me reach new heights in my understanding of how to live a better life.&rdquo;
              </p>
              <p className="mt-4 font-semibold text-foreground">— Avi Ked</p>
            </div>
          </ScaleIn>
        </div>
      </section>

      <SectionDivider variant="peak" fill="var(--color-purple)" />

      {/* CTA */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_top,var(--color-purple-light),var(--color-purple)_50%,var(--color-purple-dark))] text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold">
              Ready to Access The Real You?
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              Available in print and audiobook. Bulk pricing for workshops and study groups.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center mt-8 px-8 py-4 bg-white text-purple font-semibold rounded-full hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
            >
              Visit Shop
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
