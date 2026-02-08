"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Book", href: "/book" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-purple text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a
              href="tel:505-541-0265"
              className="flex items-center gap-1.5 hover:text-purple-light transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">505-541-0265</span>
            </a>
            <a
              href="mailto:healer@healedbyspirit.com"
              className="flex items-center gap-1.5 hover:text-purple-light transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">healer@healedbyspirit.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-white/80">
            <MapPin className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Albuquerque, NM</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-heading font-bold text-purple">
                Healed by Spirit
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-purple transition-colors rounded-lg hover:bg-purple/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/shop"
                className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-green rounded-full hover:bg-green-dark transition-colors"
              >
                Subscribe
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-foreground/70 hover:text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <nav className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-foreground/70 hover:text-purple hover:bg-purple/5 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/shop"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-4 py-3 text-base font-semibold text-white bg-green rounded-full hover:bg-green-dark transition-colors"
                >
                  Subscribe
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
