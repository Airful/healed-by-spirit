import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { serviceCategories, getServiceCategory } from "@/lib/data/services";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionDivider } from "@/components/ui/section-divider";

export function generateStaticParams() {
  return serviceCategories.map((cat) => ({ slug: cat.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const category = getServiceCategory(slug);
    if (!category) return { title: "Service Not Found" };
    return {
      title: category.title,
      description: category.description,
    };
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getServiceCategory(slug);

  if (!category) notFound();

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
              {category.title}
            </h1>
            <p className="mt-4 text-muted-foreground max-w-3xl text-lg">
              {category.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-8">
            {category.services.map((service) => (
              <StaggerItem key={service.slug}>
                <div className="bg-card rounded-2xl p-8 border border-border hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(123,94,167,0.15)] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-heading font-semibold text-foreground">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      {service.duration && (
                        <p className="mt-2 text-sm text-muted-foreground">
                          Duration: {service.duration}
                        </p>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      {service.price && (
                        <p className="text-2xl font-bold text-purple">
                          {service.price}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider variant="peak" fill="var(--color-purple)" />

      {/* CTA */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_top,var(--color-purple-light),var(--color-purple)_50%,var(--color-purple-dark))] text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              Contact Brian to schedule your session or register for a workshop.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple font-semibold rounded-full hover:bg-white/90 active:scale-[0.98] transition-all duration-200">
                Contact Us
              </Link>
              <Link href="/shop" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 active:scale-[0.98] transition-all duration-200">
                Purchase in Shop
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
