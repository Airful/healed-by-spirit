import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Users, Zap, GraduationCap } from "lucide-react";
import { serviceCategories } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Healing sessions, Soul Connection workshops, Connect & Radiate courses, and Healer's Curriculum. In-person in Albuquerque or remote.",
};

const categoryIcons: Record<string, typeof Sparkles> = {
  "healing-sessions": Sparkles,
  workshops: Users,
  "connect-radiate": Zap,
  "healers-curriculum": GraduationCap,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-purple/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
            Our Services
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From personal healing to professional certification — find the right path for your journey.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category) => {
        const Icon = categoryIcons[category.slug] || Sparkles;
        return (
          <section key={category.slug} className="py-20 even:bg-card">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-start gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                  <Icon className="h-6 w-6 text-purple" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                    {category.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground max-w-2xl">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <div
                    key={service.slug}
                    className="bg-background rounded-2xl p-6 border border-border hover:border-purple/20 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      {service.price && (
                        <span className="text-purple font-bold text-lg">
                          {service.price}
                        </span>
                      )}
                      {service.duration && (
                        <span className="text-muted-foreground text-xs">
                          {service.duration}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={`/services/${category.slug}`}
                  className="inline-flex items-center text-purple font-medium hover:text-purple-dark transition-colors"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 bg-purple text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            Ready to Begin Your Journey?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Contact Brian to discuss which service is right for you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Browse Shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
