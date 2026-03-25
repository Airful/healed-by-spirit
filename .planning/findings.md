# Healed by Spirit — Findings & Research Notes

## Existing Site Audit (healedbyspirit.com)

**Platform**: WordPress + Elementor page builder + WooCommerce
**Last updated**: Feb 2025 (most pages)
**Domain**: healedbyspirit.com (www.healedbyspirit.com)

### Brand Identity

- **Owner**: G. Brian Kurtz — healer, teacher, author
- **Tagline**: "Healed by Spirit" (trademarked ©)
- **Logo**: Purple hand with heart icon, script "healed by spirit" text below
- **Colors**: Purple (#795796, #825ea8, #8b4b6e), green/teal accents, gold (#ffd315 for star ratings), white text on purple
- **Fonts**: Roboto (primary), Poppins, Raleway, Montserrat (mixed — consolidated in rebuild)
- **Tone**: Warm, spiritual, personal, service-oriented

### Contact Information

- **Phone**: 505-541-0265
- **Email**: healer@healedbyspirit.com
- **Location**: Albuquerque NM 87114-4096
- **Services**: In-person (Albuquerque) + Remote
- **Social**: Twitter, Facebook, YouTube
- **External link**: befreesocial.com

### Issues Found on Current Site

1. **Phone link mismatch**: Displays `505-541-0265` but `<a>` links to `tel:512-922-6043`
2. **Broken link**: "Schedule Your Session" on contact page links to `#`
3. **Typos**: "who i'm", "from my setisfy client", "of healing work of varios conditions"
4. **Stats counters broken**: Show "0%" / "0K" / "0+" — animation not firing
5. **Services page truncated**: Large blank areas below workshops section (broken Elementor sections)
6. **Product carousel**: Some product images blank/not loading
7. **Mixed fonts**: 4 different font families used inconsistently
8. **jQuery Migrate warning**: Running jQuery Migrate 3.4.1
9. **No HTTPS redirect**: Both http and https work but no canonical enforcement visible
10. **Heavy page weight**: Elementor + WooCommerce + multiple YouTube embeds

---

## Architecture Decisions

### Rebuild as Next.js Static/SSG Site
- WordPress + Elementor is heavy and fragile (broken sections, animation failures)
- Content is relatively static — no blog activity since 2020
- Products listed statically with Stripe Checkout
- Next.js App Router + Tailwind gives better performance, SEO, and maintainability

### E-commerce: Stripe Checkout (LIVE)
- Each of the 20 products gets a Stripe Checkout session via direct REST API `fetch`
- **Why not Stripe SDK**: The `stripe` npm package v20 had HTTP connection errors in Vercel's serverless environment ("Request was retried 2 times"). Direct `fetch` to `https://api.stripe.com/v1/checkout/sessions` with `URLSearchParams` works reliably.
- `/api/checkout` route: receives `{ slug }`, looks up product, creates Checkout Session, returns `{ url }`
- `BuyButton` client component: "use client", calls `/api/checkout`, redirects to Stripe-hosted page
- Success page at `/checkout/success` with thank you message + links
- Products defined in `lib/data/products.ts` — prices are dollar amounts, multiplied ×100 for Stripe cents
- Services linked to products via `productSlug` field in `services.ts` — Buy Now buttons appear on both shop and service detail pages
- No cart needed — direct checkout per product (Brian's business is service-based)
- **Redirect conflict fix**: Old WooCommerce `/checkout/:path*` → `/shop` redirect was catching `/checkout/success`. Changed to `/checkout/cart` → `/shop` only.

### Booking: Calendly Embed (LIVE)
- Dedicated `/book-session` page with `CalendlyEmbed` client component (inline widget)
- URL: `https://calendly.com/healedbyspirit`
- CTAs across service pages link to `/book-session`
- Replaces the broken `/calendar` page on current WordPress site

### Service Pages: Dynamic Route
- Instead of separate files per service category, used `/services/[slug]/page.tsx` with `generateStaticParams`
- Service data centralized in `lib/data/services.ts` (4 categories, 12 services total)
- Each category has a slug, title, description, and array of services

### Contact Form: Server-Side Handler (TODO)
- Form UI built on `/contact` with Name, Email, Message fields
- Backend options: Resend (email API), Formspree, or Vercel serverless function
- No choice finalized yet — Resend preferred for consistency with other Airful projects

---

## Design System (Finalized)

### Colors (Tailwind v4 `@theme` CSS variables)
| Token | Value | Usage |
|-------|-------|-------|
| `background` | #FDFAF7 | Page background (warm off-white) |
| `foreground` | #1a1a2e | Primary text |
| `muted` | #f5f0eb | Subtle backgrounds |
| `muted-foreground` | #6b6b7b | Secondary text |
| `card` | #ffffff | Card backgrounds |
| `border` | #e8e0d8 | Borders |
| `purple` | #7b5ea7 | Primary brand color |
| `purple-dark` | #5a3d82 | Hover/active states |
| `purple-light` | #b08dd4 | Gradient highlights |
| `purple-mist` | #f0e8f7 | Section backgrounds |
| `peach` | #F2A07B | Warm accent |
| `green` | #4a9e6f | CTA buttons (Subscribe, Buy Now) |
| `green-dark` | #3a7d58 | CTA hover |
| `gold` | #d4a843 | Star ratings, "Now Available" label |

### Fonts
- **Headings**: Playfair Display (Google Fonts, `--font-heading`)
- **Body**: DM Sans (Google Fonts, `--font-body`)
- Loaded via `next/font/google` with `display: "swap"`

### Animation Components
| Component | Trigger | Behavior |
|-----------|---------|----------|
| `FadeIn` | Scroll into view | Fade + optional direction (up/left/right) |
| `ScaleIn` | Scroll into view | Scale from 0.95 to 1 with fade |
| `StaggerContainer` + `StaggerItem` | Scroll into view | Sequential reveal of children |
| `CountUp` | Scroll into view | Animated number counter (e.g., 0→98%) |
| `FloatingOrb` | Always | Ambient floating gradient circle |
| `SectionDivider` | Static | SVG wave/curve/peak between sections |

### Component Patterns
- **Rounded cards** with `rounded-2xl`, `border border-border`, hover lift (`hover:-translate-y-1`)
- **Purple gradient CTAs**: `bg-[radial-gradient(ellipse_at_top,...)]` with white text
- **Pill buttons**: `rounded-full` with `active:scale-[0.98]`
- **Section heroes**: Purple-mist gradient background with faded background image (`opacity-8` or `opacity-10`)

---

## Product Catalog (20 items)

| # | Product | Price | Category |
|---|---------|-------|----------|
| 1 | Access the Real You (single) | $22 | Books |
| 2 | Access the Real You (2 copies) | $44 | Books |
| 3 | Access the Real You (3 copies) | $66 | Books |
| 4 | Access the Real You (5 copies) | $110 | Books |
| 5 | Access the Real You (10 copies) | $220 | Books |
| 6 | Access the Real You Audiobook | $18 | Books |
| 7 | Connect & Radiate Course | $500 | Courses |
| 8 | Introductory Healing Package | $600 | Healing Sessions |
| 9 | Healing Session (single, 90min) | $125 | Healing Sessions |
| 10 | Healing Session for Pets | $125 | Healing Sessions |
| 11 | Clearing Homes & Workspaces | $100/hr | Healing Sessions |
| 12 | Soul Connection Workshop (Individual/Group) | $150 | Workshops |
| 13 | Soul Connection for Couples | $150 | Workshops |
| 14 | Soul Connection for Couples — Exclusive | $250 | Workshops |
| 15 | Soul Connection for Business | $150 | Workshops |
| 16 | Access the Real You for Families — Group | $150 | Workshops |
| 17 | Soul Connection for Families — Exclusive | $250 | Workshops |
| 18 | Level One Healer's Class | $600 | Healer's Curriculum |
| 19 | Healer's Master Class (24 sessions) | $3,000 | Healer's Curriculum |
| 20 | Soul Connection Facilitator's Curriculum | $1,000 + 2% | Healer's Curriculum |

---

## Image Assets (39 files in /public/images/)

### Categories
- **Portraits**: brian-kurtz-portrait.jpg, brian-kurtz-headshot-austin.png, contact-brian-headshot.png, about-brian-screen-shot.png
- **Heroes**: hero-yoga-sunset.jpg, hero-healing-hands.jpg, hero-beach-dawn.jpg, hero-yoga-meditation.jpg, hero-remote-handshake.jpg, hero-soul-spiritual.jpg
- **About**: about-header-river-rocks.jpg, about-decorative-group-1.png, about-decorative-group-2.png
- **Book**: book-cover-access-the-real-you.jpg, book-cover-graphic.png, book-single-copy.jpg, book-three-copies.jpg, shop-book-standing.jpg, shop-book-5-copies.jpg, shop-10-copies-stack.jpg
- **Services**: service-healing.png, service-couples.png, service-couples-alt.png, service-family.png, service-business.png, service-all-people.png, service-work.png, service-workspace.png, service-pets.png, service-pets-all.png, service-pets-healing.png, service-healers-level-one.png, service-healers-master-class.png, service-soul-connection-facilitator.png
- **Other**: location-albuquerque.jpg, contact-hero-background.png, logo-healed-by-spirit.png, testimonial-avi-ked.jpeg, testimonial-placeholder.png

---

## Infrastructure Notes

- **Current domain**: healedbyspirit.com (registered, active on WordPress)
- **Hosting**: Vercel — deployed at https://healed-by-spirit.vercel.app
- **Stripe**: Live mode, env vars `STRIPE_SECRET_KEY` + `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` on Vercel
- **DNS**: Will need to point healedbyspirit.com to Vercel
- **Analytics**: GA4 (not yet set up)
- **Forms**: Contact form needs backend (Resend preferred)
