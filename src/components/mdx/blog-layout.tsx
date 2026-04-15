import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/motion";

interface BlogLayoutProps {
  title: string;
  date: string;
  author: string;
  children: React.ReactNode;
}

export function BlogLayout({ title, date, author, children }: BlogLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-mist to-background" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-purple font-medium text-sm mb-6 hover:text-purple-dark transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              &middot; {author}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Article content */}
      <section className="pb-20 sm:pb-28">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {children}
        </article>
      </section>
    </>
  );
}
