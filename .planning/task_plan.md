# Healed by Spirit — Task Plan

## Project Overview

**Healed by Spirit** — Rebuild of Brian Kurtz's WordPress site (healedbyspirit.com) as a modern Next.js marketing + e-commerce website. Brian is a spiritual healer, teacher, and author based in Albuquerque, NM offering healing sessions, workshops, courses, and a book ("Access the Real You").

## Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (subtle, spiritual feel)
- **E-commerce**: Stripe Checkout (server-side sessions → hosted checkout)
- **Forms**: Server actions + Resend or Formspree
- **Video**: YouTube embeds (lite-youtube-embed for performance)
- **Hosting**: Vercel
- **Domain**: healedbyspirit.com (redirect from www)
- **Analytics**: GA4

## Content to Migrate

### From WordPress (30 pages, 20 products)

**Core pages** (must rebuild):
- Homepage (hero, services, about, locations, book promo, testimonials)
- About (bio, video, history, methodology, testimonials)
- Services (healing sessions, workshops, courses)
- Shop (20 products with prices)
- Contact (form, phone, scheduling)
- Access the Real You (book landing page)

**Service sub-pages** (consolidate into fewer pages):
- /healing-sessions/, /healing-sessions-for-people/, /healing-sessions-for-pets/
- /scw/ (Soul Connection at Will workshops)
- /connect-radiate-curriculum/
- /level-one-healers-class/, /advanced-healers-class/
- /soul-connection-facilitators-track/
- /family-workshop/, /couples-workshop/, /workshop-for-all/
- /book-a-workshop/, /book-a-healing-session/
- /guidance-sessions-for-business/
- /client-retention-workshop/

**Can likely drop**:
- /blog/ (dormant since 2020)
- /group-rate/, /individual-rate/ (merge into services pricing)
- /my-account/, /cart/, /checkout/ (WooCommerce — replaced by Stripe)

### Key Content Assets
- Brian's bio and history (1984 to present)
- YouTube videos (healing explainer, about Brian)
- Testimonials (Will Ferrer, Avi Ked)
- Book: "Access the Real You" — cover image, description, pricing
- Product descriptions and pricing for 20 offerings
- Nature/landscape photography used as backgrounds

---

## Phases

### Phase 1: Setup & Foundation
- [ ] Initialize Next.js 15 project with TypeScript
- [ ] Configure Tailwind CSS v4
- [ ] Set up Git repo
- [ ] Create CLAUDE.md
- [ ] Design system: finalize colors (purple primary), fonts, spacing
- [ ] Build shared layout: header (nav + top bar), footer (4-column)
- [ ] Set up Framer Motion for page transitions
- [ ] Configure metadata/SEO defaults

### Phase 2: Core Pages
- [ ] **Homepage** — Hero with video, services cards, about section, locations, book promo, testimonials, CTA
- [ ] **About** — Bio, YouTube embed, history timeline, methodology, stats counters, testimonials
- [ ] **Services** — Overview page with all service categories, pricing cards, booking CTAs
- [ ] **Contact** — Form (Name, Email, Message), phone, scheduling link, Brian's photo
- [ ] **Access the Real You** — Book landing page with description, buy options (book + audiobook)

### Phase 3: Services Sub-Pages
- [ ] **Healing Sessions** — For people, for pets, introductory package details
- [ ] **Soul Connection at Will** — Workshops for couples, families, business, individuals
- [ ] **Connect & Radiate** — Course curriculum and enrollment
- [ ] **Healer's Curriculum** — Level One, Master Class, Facilitator's Track
- [ ] **Clearing Homes & Workspaces** — Description + booking

### Phase 4: E-commerce & Booking
- [ ] Set up Stripe account + create 20 products with prices in Stripe Dashboard
- [ ] Build Shop page with product grid, category filters
- [ ] Stripe Checkout integration: server action to create checkout session → redirect
- [ ] Success/cancel pages for post-checkout flow
- [ ] **Booking page** (`/book`) — Cal.com embed with `@calcom/embed-react` (need Brian's Cal.com username + event slug)
- [ ] Link service page CTAs to `/book`
- [ ] Terms & Conditions page

### Phase 5: Polish & Launch
- [ ] Testimonials page (dedicated, with more testimonials if available)
- [ ] SEO metadata for all pages (titles, descriptions, OG images)
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Performance audit (Lighthouse, Core Web Vitals)
- [ ] GA4 setup
- [ ] DNS migration: point healedbyspirit.com to Vercel
- [ ] 301 redirects from old WordPress URLs
- [ ] Launch

---

## Architecture

```
src/
├── app/
│   ├── layout.tsx              # Root layout (header, footer, metadata)
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx          # About Brian
│   ├── services/
│   │   ├── page.tsx            # Services overview
│   │   ├── healing-sessions/page.tsx
│   │   ├── workshops/page.tsx  # Soul Connection at Will
│   │   ├── connect-radiate/page.tsx
│   │   ├── healers-curriculum/page.tsx
│   │   └── clearing/page.tsx
│   ├── book/
│   │   └── page.tsx            # Access the Real You (book landing)
│   ├── book-session/page.tsx   # Cal.com embed for booking
│   ├── shop/
│   │   └── page.tsx            # Product listing with Stripe buy buttons
│   ├── checkout/
│   │   ├── success/page.tsx    # Post-purchase thank you
│   │   └── cancel/page.tsx     # Checkout cancelled
│   ├── contact/page.tsx        # Contact form
│   ├── testimonials/page.tsx   # Testimonials
│   ├── terms/page.tsx          # Terms & Conditions
│   └── api/
│       ├── contact/route.ts    # Contact form handler
│       └── checkout/route.ts   # Stripe Checkout session creation
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Top bar + nav
│   │   └── footer.tsx          # 4-column footer
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── section.tsx
│   │   └── testimonial-card.tsx
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── services-grid.tsx
│   │   ├── about-preview.tsx
│   │   ├── locations.tsx
│   │   ├── book-promo.tsx
│   │   └── testimonials-carousel.tsx
│   └── shop/
│       ├── product-card.tsx
│       └── product-grid.tsx
├── lib/
│   ├── data/
│   │   ├── services.ts         # Service descriptions + pricing
│   │   ├── products.ts         # Shop product data
│   │   └── testimonials.ts     # Testimonial entries
│   └── utils/
│       └── format.ts           # Price formatting, etc.
└── public/
    ├── images/                 # Migrated photos + new assets
    └── fonts/                  # Self-hosted fonts
```

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
| /calendar/ | /contact (or external booking link) |
