# Healed by Spirit — Progress

## Current Status
**Phases 1-3 Complete + Phase 4 Stripe Done** | Date: 2026-02-16
- Deployed: https://healed-by-spirit.vercel.app
- Stripe Checkout LIVE — all 20 products purchasable
- 174 Playwright tests passing (0 failures)

## What's Working
- Full marketing site with 8 routes: `/`, `/about`, `/services`, `/services/[slug]`, `/book`, `/shop`, `/contact`, `/terms`
- Dynamic service sub-pages via `generateStaticParams` (4 slugs: healing-sessions, workshops, connect-radiate, healers-curriculum)
- 12 services across 4 categories, all with descriptions + pricing
- 20 shop products across 5 categories (Books, Courses, Healing Sessions, Workshops, Healer's Curriculum)
- Header: purple top bar (slides on scroll), sticky nav, mobile hamburger menu with Framer Motion
- Footer: 4-column layout (brand, services, quick links, contact)
- 5 Framer Motion animation components: FadeIn, ScaleIn, StaggerContainer/Item, CountUp, FloatingOrb
- SectionDivider SVG component with wave/curve/peak variants
- Design system: Playfair Display headings, DM Sans body, custom Tailwind v4 `@theme` tokens
- YouTube video embed on About page ("What is This Healing Thing?")
- Stats counters: 98% / 40+ / 60+ (animated with CountUp)
- 39 images migrated to `/public/images/`
- Basic SEO metadata on all pages (title template, descriptions)
- 174 Playwright tests passing across 5 files × 2 projects (chromium + mobile)
- `prefers-reduced-motion` respected via CSS media query
- Deployed to Vercel: https://healed-by-spirit.vercel.app

## What Needs Work
- [x] ~~**Stripe Checkout**~~ — Live! Direct fetch to Stripe API, BuyButton client component, success page
- [x] ~~**Calendly booking**~~ — `/book-session` page live with `CalendlyEmbed` component (https://calendly.com/healedbyspirit)
- [ ] **Contact form backend** — Form renders but doesn't submit; needs server action or API route (Resend/Formspree)
- [ ] **OG images** — No Open Graph images set for any page
- [ ] **GA4** — Not set up
- [x] ~~WordPress redirects~~ — 42 rules in `next.config.ts` (20 slugs + 20 trailing-slash + 2 WooCommerce)
- [x] ~~CLAUDE.md~~ — Created and updated with testing patterns, deployment info
- [x] ~~Vercel deployment~~ — Live at https://healed-by-spirit.vercel.app
- [ ] **DNS migration** — Domain still on WordPress

## Blockers
- None currently

## Session History
| Session | Date | Focus |
|---------|------|-------|
| 1 | 2026-02-08 | Project initialization, planning files, full WordPress site audit |
| 2 | 2026-02-08 | Complete site build: all pages, components, animations, 20 products, 12 services, 39 images |
| 3 | 2026-02-08 | Visual redesign with Framer Motion animations and evolved design system |
| 4 | 2026-02-08 | Playwright tests (87 tests across 5 files), mobile overflow fix |
| 5 | 2026-02-08 | Fix scrolling (remove overflow-x:hidden from html) |
| 6 | 2026-02-08 | Planning file + CLAUDE.md creation |
| 7 | 2026-02-08 | WordPress redirects (42 rules), Vercel deploy, Playwright 174/174 pass, CLAUDE.md revision |
| 8 | 2026-02-16 | Client pricing updates + Stripe Checkout integration (live payments) |

### Session 1 Details
**WordPress Site Audit** — Analyzed healedbyspirit.com via Playwright + WebFetch:
- Captured full-page screenshots of Homepage, About, Services, Contact, Shop
- Extracted sitemap (30 pages, 20 WooCommerce products)
- Documented all navigation, content sections, pricing, testimonials
- Identified 10 issues on current site (broken links, typos, broken animations, phone mismatch)
- Mapped all 30 WordPress URLs to proposed Next.js routes

### Session 2 Details
**Full site build** — Built all core pages and components in one session:
- Root layout with Playfair Display + DM Sans, Header + Footer
- Homepage: 7 sections (hero, services, about, locations, book promo, testimonials, CTA)
- About: 6 sections (hero, intro+video, evolution, stats, methodology, testimonials)
- Services: Overview grid + dynamic /services/[slug] detail pages
- Book: Landing page for "Access the Real You"
- Shop: Product grid by category, all 20 products
- Contact: Form + Brian's photo + contact cards
- Terms: Disclaimer, refund policy, privacy, IP
- Data files: 12 services, 20 products, 2 testimonials

### Session 3 Details
**Visual redesign** — Evolved the design system:
- Added Framer Motion animations across all pages
- Created 5 motion components (FadeIn, ScaleIn, StaggerContainer, CountUp, FloatingOrb)
- SectionDivider with SVG wave/curve/peak variants
- Refined color system with warm purple palette, peach accents, gold highlights
- Scroll-responsive header (top bar slides away, nav shrinks + shadow)

### Session 4 Details
**Testing** — Added 87 Playwright tests across 5 files:
- pages-load, navigation, sections, visual-structure, links-integrity
- Fixed mobile horizontal overflow issue

### Session 5 Details
**Scrolling fix** — Removed `overflow-x: hidden` from `html` element (was blocking page scroll).

### Session 7 Details
**Redirects + Deploy + Testing** — Major milestone session:
- Implemented 42 WordPress→Next.js redirects in `next.config.ts` (20 slugs, 20 trailing-slash variants, 2 WooCommerce catch-alls)
- Deployed to Vercel at https://healed-by-spirit.vercel.app
- Updated Playwright config: stable base URL, added `isMobile: true` to mobile project
- Ran 174 tests — 3 rounds of fixes to reach 174/174 passing:
  - Round 1: Fixed mobile nav (hamburger + `isMobile`), image lazy-loading (`scrollIntoViewIfNeeded` + `waitForFunction`)
  - Round 2: Changed nav locators from `locator("nav a")` to `getByRole("link")` for dual-DOM nav
  - Round 3: Scoped section locators using `page.locator("section", { has: heading })` pattern
- Updated CLAUDE.md with deployment info, testing patterns, 5 Playwright gotchas

### Session 8 Details
**Client Pricing Updates + Stripe Checkout** — Two tasks in one session:
- **Pricing changes** (per client request):
  - Healer's Master Class: $2,000 → $3,000
  - Soul Connection Facilitator's Curriculum: $2,000 → $1,000 + 2% of workshops
  - Connect & Radiate Course: $125 → $500, 5 → 7 modules, now opens with Soul Connection at Will workshop, includes six 30-min 1:1 sessions with Brian
  - Updated across products.ts, services.ts, homepage, about page, shop page
- **Stripe Checkout integration**:
  - Created `/api/checkout` route using direct `fetch` to Stripe REST API (SDK had bundling issues on Vercel)
  - `BuyButton` client component replaces disabled buttons on shop page
  - `/checkout/success` page with thank you message
  - Fixed redirect conflict: old `/checkout/:path*` WooCommerce redirect was catching `/checkout/success`
  - Env vars set on Vercel: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - All 20 products verified working in live mode
  - Added `productSlug` field to all 12 services in `services.ts` (maps service → product for checkout)
  - Added `BuyButton` to `/services/[slug]` detail pages — each service card shows Buy Now next to its price
