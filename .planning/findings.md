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
- **Fonts**: Roboto (primary), Poppins, Raleway, Montserrat (mixed — needs consolidation)
- **Tone**: Warm, spiritual, personal, service-oriented

### Contact Information

- **Phone**: 505-541-0265
- **Email**: healer@healedbyspirit.com
- **Location**: Albuquerque NM 87114-4096
- **Services**: In-person (Albuquerque) + Remote
- **Social**: Twitter, Facebook, YouTube
- **External link**: befreesocial.com

### Navigation Structure

| Item | URL | Notes |
|------|-----|-------|
| Home | / | |
| About | /about/ | Has dropdown |
| Access the Real You | /access-the-real-you/ | Book/program page |
| Services | /services/ | Has dropdown |
| Shop | /shop/ | WooCommerce |
| Contact | /contact/ | |
| Subscribe (CTA button) | /shop | Green button in header |
| Cart | # | WooCommerce cart icon |

### Homepage Sections (top to bottom)

1. **Top bar**: Phone, email, address, search, social link
2. **Navigation**: Logo + 6 nav items + Subscribe button + Cart
3. **Hero**: YouTube video background + "WELCOME TO Healed by Spirit" + CTA → Connect & Radiate Course
4. **Our Services**: 3 icon cards — Healing Sessions, Soul Connection at Will Workshops, Connect and Radiate
5. **About Brian**: Photo + short bio paragraph
6. **Our Locations**: 2 image cards — Albuquerque / Remotely (both link to /calendar)
7. **Book promo**: "Now Available! Access The Real You" + product carousel (audiobook $18, single $22, etc.)
8. **Any Question?**: CTA → Contact page
9. **Testimonials**: Carousel with 2 testimonials (Will Ferrer, Avi Ked)
10. **Footer**: 4 columns — Bio+social, Services links, About Brian video, Contact info

### About Page Sections

1. Hero banner "About Us"
2. "Hello My Name is Brian" + YouTube video "What is This Healing Thing?"
3. Detailed bio — Healed by Spirit modality (40+ years, claims 98% positive results)
4. "Evolution from healer to current diversity" — history from 1984 to present
5. Stats counters: Positive reviews %, Questions answered K, Years of healing 0+ (not animated/broken)
6. "Modality & Methodology" — teaching philosophy, workshops, session descriptions
7. Testimonials carousel (same as homepage)

### Services Page

1. Hero "Our Services"
2. **Healing Sessions** — Intro session description + pricing card
   - Introductory Healing Package: **$600** (3-4 hrs + 90-min follow-up)
   - Includes: Chakra cleaning, bodywork, counseling
   - Payment plans available
3. **Soul Connection at Will Workshops** — Image with "Learn More & Schedule" CTA
4. Page appears truncated — large blank areas, possibly broken Elementor sections

### Shop (WooCommerce — 20 products)

**Categories**: Books, Group Rate, Individual Rate, Exclusive Session Rate, Healers Curriculum

| Product | Price | Category |
|---------|-------|----------|
| Access the Real You (single) | $22 | Books |
| Access the Real You (2 copies) | $44 | Books |
| Access the Real You (3 copies) | $66 | Books |
| Access the Real You (5 copies) | $110 | Books |
| Access the Real You (10 copies) | $220 | Books |
| Access The Real You Audiobook | $18 | Books |
| Connect & Radiate Course | $125 | Exclusive |
| Introductory Healing Package | $600 | Exclusive |
| Healing Session (single, 90min, existing) | $125 | Individual |
| Healing Session for Pets | $125 | Uncategorized |
| Clearing Homes & Workspaces | $100/hr | Uncategorized |
| Soul Connection at Will (Couples group) | $150 | Group |
| Soul Connection at Will (Business group) | $150 | Group |
| Soul Connection at Will (Workshop/Individual/Group) | $150 | Group |
| Soul Connection at Will (Couples exclusive) | $250 | Exclusive |
| Soul Connection at Will (Families exclusive) | $250 | Exclusive |
| Access The Real You for Families (Group) | $150 | Group |
| Level One Healer's Class | $600 | Healers Curriculum |
| Healer's Master Class (24 sessions) | $2,000 | Healers Curriculum |
| Soul Connection Facilitator's Curriculum | $2,000 | Healers Curriculum |

### Contact Page

- Simple form: Name*, Email*, Message* + Send button
- Phone: 505-541-0265
- "Schedule Your Session" link (broken — links to `#`)
- Photo of Brian

### Additional Pages (from sitemap, 30 total)

- /blog/ (last updated 2020 — likely dormant)
- /testimonials/
- /calendar/ (booking calendar)
- /healing-sessions/, /healing-sessions-for-people/, /healing-sessions-for-pets/
- /scw/ (Soul Connection at Will)
- /connect-radiate-curriculum/
- /access-the-real-you/ (book/program landing)
- /level-one-healers-class/, /advanced-healers-class/
- /soul-connection-facilitators-track/
- /family-workshop/, /couples-workshop/, /workshop-for-all/
- /book-a-workshop/, /book-a-healing-session/
- /guidance-sessions-for-business/
- /client-retention-workshop/
- /group-rate/, /individual-rate/
- /terms-and-conditions/
- /my-account/, /cart/, /checkout/ (WooCommerce)

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
- Products can be listed statically with Stripe/external checkout OR simple WooCommerce API integration
- Next.js App Router + Tailwind gives better performance, SEO, and maintainability

### E-commerce: Stripe Checkout (CONFIRMED)
- Each of the 20 products gets a Stripe Checkout session
- Server action creates checkout session → redirects to Stripe hosted page → success/cancel URLs back to site
- Products defined in `lib/data/products.ts` with Stripe price IDs
- Shop page renders product grid with "Buy Now" buttons
- No cart needed — direct checkout per product (Brian's business is service-based, not high-volume retail)
- Stripe webhook for fulfillment notifications (optional — most products are digital/in-person)

### Booking: Cal.com Embed (CONFIRMED)
- Dedicated `/book` page with `@calcom/embed-react` inline embed (same pattern as Airful Website)
- Need Brian's Cal.com username and event type slug
- CTAs across service pages link to `/book`
- Replaces the broken `/calendar` page on current WordPress site

---

## Design System

### Colors (to refine)
- **Primary**: Purple (#795796 or similar — Brian's brand color)
- **Secondary**: Green/teal (used for CTAs on current site)
- **Accent**: Gold (#ffd315 — star ratings, highlights)
- **Neutrals**: White, off-white, dark gray/charcoal
- **Background**: Nature imagery (rivers, mountains, forests — spiritual/calming)

### Fonts (recommended consolidation)
- **Headings**: Playfair Display or similar serif (spiritual, elegant feel)
- **Body**: Inter or DM Sans (clean, readable)
- **Accent**: A script font for "Healed by Spirit" branding if needed

### Image Themes
- Nature landscapes (rivers, rocks, forests, sunsets)
- Brian's portrait photos (casual, approachable)
- Hands/energy/healing imagery
- Book cover ("Access the Real You")

---

## Infrastructure Notes

- **Current domain**: healedbyspirit.com (registered, active)
- **Hosting**: TBD (Vercel recommended for Next.js)
- **DNS**: Will need to point healedbyspirit.com to Vercel
- **Analytics**: TBD (GA4 recommended)
- **Forms**: Contact form needs backend (Formspree, Resend, or Vercel serverless)
