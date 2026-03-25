# Healed by Spirit — Task Plan

## Project Overview

**Healed by Spirit** — Rebuild of Brian Kurtz's WordPress site (healedbyspirit.com) as a modern Next.js marketing + e-commerce website. Brian is a spiritual healer, teacher, and author based in Albuquerque, NM offering healing sessions, workshops, courses, and a book ("Access the Real You").

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 (custom `@theme` with CSS variables)
- **Animations**: Framer Motion (fade-in, scale-in, stagger, count-up, floating-orb)
- **Icons**: Lucide React
- **E-commerce**: Stripe Checkout (server-side sessions → hosted checkout) — NOT YET IMPLEMENTED
- **Forms**: Contact form built (no backend handler yet)
- **Video**: YouTube iframes (direct embed)
- **Hosting**: Vercel — deployed at https://healed-by-spirit.vercel.app
- **Domain**: healedbyspirit.com (redirect from www)
- **Analytics**: GA4 (not yet set up)

## Content to Migrate

### From WordPress (30 pages, 20 products)

**Core pages** (must rebuild):
- Homepage (hero, services, about, locations, book promo, testimonials) ✅
- About (bio, video, history, methodology, testimonials) ✅
- Services (healing sessions, workshops, courses) ✅
- Shop (20 products with prices) ✅
- Contact (form, phone, scheduling) ✅
- Access the Real You (book landing page) ✅

**Service sub-pages** (consolidated into 4 dynamic routes):
- /services/healing-sessions ✅
- /services/workshops ✅
- /services/connect-radiate ✅
- /services/healers-curriculum ✅

**Dropped**:
- /blog/ (dormant since 2020)
- /group-rate/, /individual-rate/ (merged into shop)
- /my-account/, /cart/, /checkout/ (WooCommerce — replaced by Stripe)

### Key Content Assets
- Brian's bio and history (1984 to present) ✅
- YouTube video ("What is This Healing Thing?") ✅
- Testimonials (Will Ferrer, Avi Ked) ✅
- Book: "Access the Real You" — cover image, description, pricing ✅
- 20 product descriptions with pricing ✅
- 39 images in /public/images/ ✅

---

## Phases

### Phase 1: Setup & Foundation ✅ COMPLETE
- [x] Initialize Next.js 16 project with TypeScript
- [x] Configure Tailwind CSS v4 with custom `@theme` (CSS variables)
- [x] Set up Git repo (5 commits)
- [x] Design system: Purple primary (#7b5ea7), Playfair Display headings, DM Sans body
- [x] Build shared layout: header (top bar + nav with scroll behavior) + footer (4-column)
- [x] Set up Framer Motion animations (5 components: FadeIn, ScaleIn, StaggerContainer, CountUp, FloatingOrb)
- [x] Configure metadata/SEO defaults (title template, description, keywords)
- [x] SectionDivider component (wave, curve, peak variants)
- [x] Create CLAUDE.md ✅

### Phase 2: Core Pages ✅ COMPLETE
- [x] **Homepage** — Hero with background image + floating orbs, services cards, about section, locations, book promo, testimonials, CTA
- [x] **About** — Bio, YouTube embed, evolution history, stats counters (98%/40+/60+), modality section, testimonials
- [x] **Services** — Overview page with 4 categories, pricing cards, "View details" links to sub-pages
- [x] **Contact** — Form (Name, Email, Message), Brian's photo, phone/email/location cards
- [x] **Access the Real You** — Book landing page with cover, description, print+audiobook buy options, testimonial

### Phase 3: Service Sub-Pages ✅ COMPLETE (consolidated into dynamic route)
- [x] **Dynamic /services/[slug]** — `generateStaticParams` for all 4 categories, back link, service cards with pricing
- [x] **Healing Sessions** — Intro package, follow-up, pets, clearing (4 services)
- [x] **Workshops** — Individual/group, couples, families, business (4 services)
- [x] **Connect & Radiate** — 5-module course (1 service)
- [x] **Healer's Curriculum** — Level One, Master Class, Facilitator's (3 services)

### Phase 4: E-commerce & Booking 🟡 IN PROGRESS
- [x] **Shop page** — Product grid by category, all 20 products listed with prices
- [x] Stripe Checkout integration — direct `fetch` to Stripe REST API (`/api/checkout` route) ✅
- [x] Enable "Buy Now" buttons — `BuyButton` client component on shop page + all service detail pages ✅
- [x] Success page — `/checkout/success` with thank you message ✅
- [x] Service page buy buttons — `productSlug` field maps each service to its product for checkout ✅
- [x] **Booking page** (`/book-session`) — Calendly embed (`CalendlyEmbed` component) ✅
- [ ] Contact form backend (server action or API route → Resend/Formspree)
- [x] Terms & Conditions page ✅ (already built)

### Phase 5: Polish & Launch 🟡 IN PROGRESS
- [ ] Testimonials page (dedicated, with more testimonials if available)
- [ ] SEO metadata for all pages (basic metadata ✅, OG images ⬜)
- [x] Responsive testing — 174 Playwright tests passing (chromium desktop + mobile)
- [ ] Performance audit (Lighthouse, Core Web Vitals)
- [ ] GA4 setup
- [ ] DNS migration: point healedbyspirit.com to Vercel
- [x] 301 redirects from old WordPress URLs — 42 rules in `next.config.ts` ✅
- [x] Vercel deployment — https://healed-by-spirit.vercel.app ✅
- [ ] Launch (pending DNS migration)

---

## Architecture

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Playfair + DM Sans, Header, Footer)
│   ├── globals.css             # Tailwind v4 @theme with CSS variables
│   ├── page.tsx                # Homepage (7 sections)
│   ├── about/page.tsx          # About Brian (6 sections)
│   ├── services/
│   │   ├── page.tsx            # Services overview (category grid)
│   │   └── [slug]/page.tsx     # Dynamic service detail (generateStaticParams)
│   ├── book/page.tsx           # Access the Real You (book landing)
│   ├── shop/page.tsx           # Product listing by category (20 products)
│   ├── contact/page.tsx        # Contact form + info
│   └── terms/page.tsx          # Terms & Conditions
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Top bar (slides on scroll) + sticky nav + mobile menu
│   │   └── footer.tsx          # 4-column (Brand, Services, Quick Links, Contact)
│   ├── ui/
│   │   └── section-divider.tsx # SVG wave/curve/peak transitions
│   └── motion/
│       ├── index.ts            # Barrel export
│       ├── fade-in.tsx         # Scroll-triggered fade with direction
│       ├── scale-in.tsx        # Scroll-triggered scale animation
│       ├── stagger-container.tsx # Parent + StaggerItem for sequential reveals
│       ├── count-up.tsx        # Number counter animation
│       └── floating-orb.tsx    # Ambient floating gradient orb
├── lib/
│   └── data/
│       ├── services.ts         # 4 categories, 12 services (typed)
│       ├── products.ts         # 20 products with prices (typed, no Stripe IDs yet)
│       └── testimonials.ts     # 2 testimonials (typed)
└── public/
    └── images/                 # 39 images (portraits, heroes, services, book)
```

## Tests

**174 tests passing** — 5 files × 2 projects (chromium + mobile):
- `pages-load.spec.ts` — All pages load with correct titles
- `navigation.spec.ts` — Header/footer nav links, CTA links
- `sections.spec.ts` — Key page sections render
- `visual-structure.spec.ts` — Layout, images, animations
- `links-integrity.spec.ts` — Click-through + crawl all internal links

## URL Redirect Map (WordPress → Next.js)

| Old URL | New URL |
|---------|---------|
| /healing-sessions/ | /services/healing-sessions |
| /healing-sessions-for-people/ | /services/healing-sessions |
| /healing-sessions-for-pets/ | /services/healing-sessions |
| /scw/ | /services/workshops |
| /connect-radiate-curriculum/ | /services/connect-radiate |
| /level-one-healers-class/ | /services/healers-curriculum |
| /advanced-healers-class/ | /services/healers-curriculum |
| /soul-connection-facilitators-track/ | /services/healers-curriculum |
| /family-workshop/ | /services/workshops |
| /couples-workshop/ | /services/workshops |
| /workshop-for-all/ | /services/workshops |
| /book-a-workshop/ | /services/workshops |
| /book-a-healing-session/ | /services/healing-sessions |
| /guidance-sessions-for-business/ | /services/workshops |
| /client-retention-workshop/ | /services/workshops |
| /access-the-real-you/ | /book |
| /group-rate/ | /shop |
| /individual-rate/ | /shop |
| /terms-and-conditions/ | /terms |
| /calendar/ | /contact |
