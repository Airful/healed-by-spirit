import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on spiritual healing, soul connection, workshops, and courses by G. Brian Kurtz.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-mist to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-purple font-medium tracking-wide uppercase text-sm mb-3">
              Insights &amp; Teachings
            </p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reflections on spiritual healing, soul connection, and the journey
              to your essential nature.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Blog post grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-8">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl border border-border bg-card p-6 sm:p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <p className="text-sm text-muted-foreground mb-2">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    &middot; {post.author}
                  </p>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
                    {post.title}
                  </h2>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-purple font-medium text-sm">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
