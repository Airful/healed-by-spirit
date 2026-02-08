import type { Metadata } from "next";
import Image from "next/image";
import { products, productCategories, formatPrice } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Books, healing sessions, workshops, and courses by Brian Kurtz. Purchase online.",
};

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-purple/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
            Shop
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Books, healing sessions, workshops, and certification courses.
          </p>
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
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <div
                    key={product.slug}
                    className="bg-background rounded-2xl border border-border overflow-hidden hover:border-purple/20 hover:shadow-md transition-all"
                  >
                    {/* Product image */}
                    {product.image && (
                      <div className="relative aspect-square bg-muted">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    {/* Product info */}
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
                          className="px-4 py-2 bg-green text-white text-xs font-semibold rounded-full hover:bg-green-dark transition-colors"
                          disabled
                          title="Stripe checkout coming soon"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Coming soon notice */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Online checkout is being set up. In the meantime, contact Brian directly at{" "}
            <a
              href="tel:505-541-0265"
              className="text-purple font-medium hover:underline"
            >
              505-541-0265
            </a>{" "}
            or{" "}
            <a
              href="mailto:healer@healedbyspirit.com"
              className="text-purple font-medium hover:underline"
            >
              healer@healedbyspirit.com
            </a>{" "}
            to purchase.
          </p>
        </div>
      </section>
    </>
  );
}
