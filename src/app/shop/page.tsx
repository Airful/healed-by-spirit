import type { Metadata } from "next";
import Image from "next/image";
import { products, productCategories, formatPrice } from "@/lib/data/products";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Books, healing sessions, workshops, and courses by Brian Kurtz. Purchase online.",
};

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-mist to-background" />
        <div className="absolute inset-0 opacity-[0.08]">
          <Image src="/images/hero-soul-spiritual.jpg" alt="" fill className="object-cover object-center" sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
              Shop
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              Books, healing sessions, workshops, and certification courses.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products by category */}
      {productCategories.map((category) => {
        const categoryProducts = products.filter(
          (p) => p.category === category
        );
        if (categoryProducts.length === 0) return null;

        return (
          <section key={category} className="py-16 even:bg-card">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <FadeIn>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
                  {category}
                </h2>
              </FadeIn>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <StaggerItem key={product.slug}>
                    <div className="bg-background rounded-2xl border border-border overflow-hidden hover:border-purple/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_-8px_rgba(123,94,167,0.15)] transition-all duration-300">
                      {product.image && (
                        <div className="relative aspect-[4/5] bg-muted flex items-center justify-center">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="font-heading font-semibold text-foreground text-sm leading-tight">
                          {product.name}
                        </h3>
                        <p className="mt-2 text-muted-foreground text-xs leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-purple font-bold text-lg">
                            {formatPrice(product.price)}
                          </span>
                          <button
                            className="px-4 py-2 bg-green text-white text-xs font-semibold rounded-full hover:bg-green-dark active:scale-[0.98] transition-all duration-200"
                            disabled
                            title="Stripe checkout coming soon"
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        );
      })}

      {/* Coming soon notice */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <FadeIn>
            <p className="text-muted-foreground text-sm">
              Online checkout is being set up. In the meantime, contact Brian directly at{" "}
              <a href="tel:505-541-0265" className="text-purple font-medium hover:underline">
                505-541-0265
              </a>{" "}
              or{" "}
              <a href="mailto:healer@healedbyspirit.com" className="text-purple font-medium hover:underline">
                healer@healedbyspirit.com
              </a>{" "}
              to purchase.
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider variant="peak" fill="var(--color-purple)" />
    </>
  );
}
