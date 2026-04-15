import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* ─── Standard markdown elements ─── */

function H1(props: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-10 mb-4"
      {...props}
    />
  );
}

function H2(props: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className="text-2xl sm:text-3xl font-heading font-bold text-foreground mt-10 mb-3"
      {...props}
    />
  );
}

function H3(props: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className="text-xl sm:text-2xl font-heading font-semibold text-foreground mt-8 mb-3"
      {...props}
    />
  );
}

function P(props: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className="text-base sm:text-lg leading-relaxed text-foreground/80 mb-5"
      {...props}
    />
  );
}

function UL(props: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      className="list-disc list-outside pl-6 space-y-2 text-foreground/80 mb-5"
      {...props}
    />
  );
}

function OL(props: ComponentPropsWithoutRef<"ol">) {
  return (
    <ol
      className="list-decimal list-outside pl-6 space-y-2 text-foreground/80 mb-5"
      {...props}
    />
  );
}

function LI(props: ComponentPropsWithoutRef<"li">) {
  return <li className="text-base sm:text-lg leading-relaxed" {...props} />;
}

function Blockquote(props: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className="border-l-4 border-purple pl-5 py-2 my-6 italic text-foreground/70 bg-purple-mist/40 rounded-r-xl"
      {...props}
    />
  );
}

function Anchor(props: ComponentPropsWithoutRef<"a">) {
  const { href, ...rest } = props;
  if (href?.startsWith("/")) {
    return (
      <Link
        href={href}
        className="text-purple font-medium underline underline-offset-2 hover:text-purple-dark transition-colors"
        {...rest}
      />
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple font-medium underline underline-offset-2 hover:text-purple-dark transition-colors"
      {...rest}
    />
  );
}

function Strong(props: ComponentPropsWithoutRef<"strong">) {
  return <strong className="font-semibold text-foreground" {...props} />;
}

function Em(props: ComponentPropsWithoutRef<"em">) {
  return <em className="italic" {...props} />;
}

function HR() {
  return <hr className="my-10 border-border" />;
}

/* ─── Custom MDX components ─── */

interface CallToActionProps {
  href: string;
  label: string;
  children: ReactNode;
}

export function CallToAction({ href, label, children }: CallToActionProps) {
  return (
    <div className="my-8 rounded-2xl bg-purple p-6 sm:p-8 text-white">
      <p className="text-lg sm:text-xl leading-relaxed mb-5 text-white/90">
        {children}
      </p>
      <Link
        href={href}
        className="inline-block px-8 py-3 bg-white text-purple font-semibold rounded-full hover:bg-white/90 active:scale-[0.98] transition-all duration-200"
      >
        {label}
      </Link>
    </div>
  );
}

export function BookPromo() {
  return (
    <div className="my-8 rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5">
      <div className="flex-1">
        <p className="text-purple font-medium tracking-wide uppercase text-sm mb-1">
          Recommended Reading
        </p>
        <h3 className="text-xl font-heading font-bold text-foreground mb-2">
          Access The Real You
        </h3>
        <p className="text-foreground/70 mb-4">
          Brian&apos;s book explores the practical steps to reconnecting with
          your essential spiritual nature. A companion for anyone on the path to
          deeper self-awareness.
        </p>
        <Link
          href="/book"
          className="inline-block px-6 py-2.5 bg-purple text-white font-semibold rounded-full hover:bg-purple-dark active:scale-[0.98] transition-all duration-200"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export function WorkshopPromo() {
  return (
    <div className="my-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <p className="text-purple font-medium tracking-wide uppercase text-sm mb-1">
        Upcoming Workshops
      </p>
      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
        Soul Connection at Will Workshops
      </h3>
      <p className="text-foreground/70 mb-4">
        Available for families, couples, businesses, and individuals. Experience
        the transformative power of distinguishing mind chatter from soul talk in
        a safe, sacred environment.
      </p>
      <Link
        href="/services/workshops"
        className="inline-block px-6 py-2.5 bg-purple text-white font-semibold rounded-full hover:bg-purple-dark active:scale-[0.98] transition-all duration-200"
      >
        View Workshops
      </Link>
    </div>
  );
}

/* ─── Exported component map ─── */

export const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  blockquote: Blockquote,
  a: Anchor,
  strong: Strong,
  em: Em,
  hr: HR,
  CallToAction,
  BookPromo,
  WorkshopPromo,
};
