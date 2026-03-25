# Claude Code Context — Healed by Spirit

## What This Is

Modern Next.js rebuild of healedbyspirit.com — Brian Kurtz's spiritual healing, workshops, and courses website. Replacing WordPress + Elementor + WooCommerce with a fast static site and Stripe Checkout.

## Current Phase

**Phases 1-4 (Stripe) Complete** — Foundation, core pages, service sub-pages, and Stripe Checkout live.
**Phase 4 Remaining** — Cal.com booking embed, contact form backend.
**Phase 5** — Testimonials page, OG images, GA4, performance audit, DNS migration.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript strict
- **Styling**: Tailwind CSS v4 with `@theme` CSS variables (not Tailwind config file)
- **Animations**: Framer Motion (5 motion components)
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings) + DM Sans (body) via `next/font/google`
- **E-commerce**: Stripe Checkout — LIVE (direct REST API, not SDK)
- **Booking**: Calendly embed — LIVE (`CalendlyEmbed` component, https://calendly.com/healedbyspirit)
- **Hosting**: Vercel — deployed at https://healed-by-spirit.vercel.app
- **Domain**: healedbyspirit.com (DNS not yet pointed)

## File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, Header, Footer)
│   ├── globals.css             # @theme tokens (colors, fonts)
│   ├── page.tsx                # Homepage (7 sections)
│   ├── about/page.tsx          # About Brian (6 sections)
│   ├── services/
│   │   ├── page.tsx            # Services overview (4 category grid)
│   │   └── [slug]/page.tsx     # Dynamic detail (generateStaticParams)
│   ├── book/page.tsx           # "Access the Real You" book landing
│   ├── shop/page.tsx           # Product grid by category (20 items) + BuyButton
│   ├── contact/page.tsx        # Contact form + info cards
│   ├── terms/page.tsx          # Terms & Conditions
│   ├── checkout/
│   │   └── success/page.tsx    # Post-purchase thank you page
│   └── api/
│       └── checkout/route.ts   # Stripe Checkout session creator (direct REST fetch)
├── components/
│   ├── layout/
│   │   ├── header.tsx          # "use client" — top bar + sticky nav + mobile menu
│   │   └── footer.tsx          # 4-column footer
│   ├── ui/
│   │   ├── section-divider.tsx # SVG wave/curve/peak between sections
│   │   └── buy-button.tsx      # "use client" — Stripe Buy Now button
│   └── motion/
│       ├── index.ts            # Barrel export
│       ├── fade-in.tsx         # Scroll-triggered fade (up/left/right)
│       ├── scale-in.tsx        # Scroll-triggered scale
│       ├── stagger-container.tsx # Sequential child reveal
│       ├── count-up.tsx        # Animated number counter
│       └── floating-orb.tsx    # Ambient gradient orb
├── lib/
│   └── data/
│       ├── services.ts         # 4 categories, 12 services (typed)
│       ├── products.ts         # 20 products, 5 categories (typed)
│       └── testimonials.ts     # 2 testimonials (typed)
└── public/
    └── images/                 # 39 images
```

## Design System

### Colors (defined in `globals.css` via `@theme inline`)
| Token | Value | Usage |
|-------|-------|-------|
| `purple` | #7b5ea7 | Primary brand |
| `purple-dark` | #5a3d82 | Hover/active |
| `purple-light` | #b08dd4 | Gradient highlights |
| `purple-mist` | #f0e8f7 | Section backgrounds |
| `green` | #4a9e6f | CTA buttons (Buy Now, Subscribe) |
| `gold` | #d4a843 | Star ratings, highlights |
| `background` | #FDFAF7 | Page background (warm off-white) |
| `card` | #ffffff | Card surfaces |
| `border` | #e8e0d8 | Borders |

### Component Patterns
- **Cards**: `rounded-2xl border border-border` + hover lift `hover:-translate-y-1`
- **Primary buttons**: `bg-purple text-white rounded-full active:scale-[0.98]`
- **CTA sections**: `bg-[radial-gradient(ellipse_at_top,...)]` purple gradient with white text
- **Section heroes**: `bg-gradient-to-b from-purple-mist to-background` with faded bg image
- **Section dividers**: `<SectionDivider variant="wave|curve|peak" fill="..." />`

## Coding Conventions

- TypeScript strict mode
- Server components by default, `"use client"` only when needed (header, motion components)
- All page data is static — no database, no server actions yet
- Service/product data lives in `lib/data/*.ts` as typed arrays
- Framer Motion `whileInView` pattern for scroll animations
- `prefers-reduced-motion` respected via CSS `@media` rule

## Key Architecture Decisions

1. **Static content** — All content hardcoded in data files and pages (no CMS, no DB)
2. **Dynamic service routes** — `/services/[slug]` with `generateStaticParams` instead of separate page files
3. **Stripe Checkout (LIVE)** — Direct `fetch` to Stripe REST API (SDK had bundling issues on Vercel). `/api/checkout` route creates session → redirects to Stripe hosted page. `BuyButton` client component on shop + service detail pages. `productSlug` field in services.ts maps each service to its product.
4. **Calendly embed (LIVE)** — `CalendlyEmbed` client component on `/book-session` (https://calendly.com/healedbyspirit)
5. **Contact form (UI only)** — Backend handler not yet implemented (Resend preferred)
6. **Light theme only** — No dark mode (warm, spiritual aesthetic)

## When Making Changes

1. **New pages**: Add route under `src/app/`, use `FadeIn`/`StaggerContainer` for animations
2. **New services**: Add to `serviceCategories` array in `lib/data/services.ts`
3. **New products**: Add to `products` array in `lib/data/products.ts`
4. **Style changes**: Edit CSS variables in `globals.css` `@theme` block
5. **After changes**: Run `npm run build` to verify — Turbopack catches issues fast
6. **Deploy**: `npx vercel --prod` to deploy to production
7. **After deploy**: Run `npx playwright test` to verify production (tests hit the live URL)

## WordPress Redirects

`next.config.ts` has 42 redirect rules mapping old WordPress/WooCommerce URLs to new routes:
- 20 old page slugs → new service/page paths (permanent 301s)
- 20 matching trailing-slash variants (WordPress convention)
- 2 WooCommerce catch-alls (`/my-account/:path*`, `/checkout/cart`)

## Tests

**174 tests passing** across 5 files × 2 projects (chromium desktop + mobile):

- `pages-load.spec.ts` — All pages load with correct titles
- `navigation.spec.ts` — Header/footer nav links, CTA links
- `sections.spec.ts` — Key sections render on each page
- `visual-structure.spec.ts` — Layout structure, images load, animations present
- `links-integrity.spec.ts` — Click-through navigation + crawl all internal links for 200s

### Playwright Config
- Base URL: `https://healed-by-spirit.vercel.app` (env `BASE_URL` override)
- Two projects: `chromium` (1280×720) and `mobile` (375×812, `isMobile: true`)
- Retries: 1, timeout: 30s, screenshots on failure, trace on first retry

### Running Tests
```bash
npx playwright test                          # All tests
npx playwright test --project=chromium       # Desktop only
npx playwright test tests/navigation.spec.ts # Single file
```

### Playwright Gotchas
1. **Dual nav DOM** — Header has separate desktop (`hidden md:flex`) and mobile (AnimatePresence) nav elements. Use `page.getByRole("link", { name: text }).first()` instead of `page.locator("nav a")` to find the visible one.
2. **Image lazy-loading** — Next.js `<Image>` below-fold images aren't loaded at `domcontentloaded`. Use `waitUntil: "load"` + `scrollIntoViewIfNeeded()` + `waitForFunction(el => el.complete && el.naturalWidth > 0)`.
3. **Framer Motion timing** — `whileInView` animations need `waitForTimeout(800)` or `scrollIntoViewIfNeeded()` before asserting visibility.
4. **Scoped locators** — Use `page.locator("section", { has: heading })` to scope assertions to the correct section. `hasText` can match unrelated sections containing the same word.
5. **Mobile hamburger** — Tests using `isMobile` fixture must open the hamburger menu before asserting nav link visibility.

## Contact Info (for content reference)

- **Phone**: 505-541-0265
- **Email**: healer@healedbyspirit.com
- **Location**: Albuquerque, NM 87114
- **YouTube**: https://www.youtube.com/embed/Ji1ITSnhCZg

## Blockers

- Contact form backend ready to implement (Resend preferred, no blocker)

## Environment Variables (Vercel)

- `STRIPE_SECRET_KEY` — Stripe live secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — Stripe live publishable key
