export interface Product {
  slug: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  // Stripe price ID — to be filled in after Stripe setup
  stripePriceId?: string;
}

export const products: Product[] = [
  // Books
  {
    slug: "access-the-real-you",
    name: "Access the Real You — Single Copy",
    description:
      "A practical, principle-based process to Access The Real You — your inherent divinity, deeply connected to a greater source.",
    price: 22,
    category: "Books",
    image: "/images/book-cover-access-the-real-you.jpg",
  },
  {
    slug: "access-the-real-you-2",
    name: "Access the Real You — 2 Copies",
    description: "Two copies of Access the Real You — perfect for sharing.",
    price: 44,
    category: "Books",
    image: "/images/book-cover-access-the-real-you.jpg",
  },
  {
    slug: "access-the-real-you-3",
    name: "Access the Real You — 3 Copies",
    description: "Three copies of Access the Real You.",
    price: 66,
    category: "Books",
    image: "/images/book-cover-access-the-real-you.jpg",
  },
  {
    slug: "access-the-real-you-5",
    name: "Access the Real You — 5 Copies",
    description: "Five copies — great for study groups.",
    price: 110,
    category: "Books",
    image: "/images/book-cover-access-the-real-you.jpg",
  },
  {
    slug: "access-the-real-you-10",
    name: "Access the Real You — 10 Copies",
    description: "Ten copies — ideal for workshops and events.",
    price: 220,
    category: "Books",
    image: "/images/book-cover-access-the-real-you.jpg",
  },
  {
    slug: "audiobook",
    name: "Access the Real You — Audiobook",
    description: "Listen to the complete Access the Real You audiobook.",
    price: 18,
    category: "Books",
    image: "/images/book-cover-access-the-real-you.jpg",
  },
  // Courses
  {
    slug: "connect-radiate-course",
    name: "Connect & Radiate Course",
    description:
      "Five-module comprehensive curriculum for deep personal transformation.",
    price: 125,
    category: "Courses",
    image: "/images/brian-kurtz-headshot-austin.png",
  },
  // Healing Sessions
  {
    slug: "introductory-healing-package",
    name: "Introductory Healing Package",
    description:
      "3-4 hours + 90-min follow-up. Includes chakra clearing, bodywork, and guidance.",
    price: 600,
    category: "Healing Sessions",
    image: "/images/hero-healing-hands.jpg",
  },
  {
    slug: "healing-session-individual",
    name: "Healing Session (Single, 90 min)",
    description: "For existing clients — ongoing energetic maintenance.",
    price: 125,
    category: "Healing Sessions",
  },
  {
    slug: "healing-session-pets",
    name: "Healing Session for Pets",
    description: "Energetic healing for your animal companions.",
    price: 125,
    category: "Healing Sessions",
  },
  {
    slug: "clearing-homes-workspaces",
    name: "Clearing Homes & Workspaces",
    description: "Energetic clearing per hour, as needed.",
    price: 100,
    category: "Healing Sessions",
  },
  // Workshops
  {
    slug: "workshop-individual-group",
    name: "Soul Connection Workshop (Individual/Group)",
    description: "Access sacred space and connect at soul level.",
    price: 150,
    category: "Workshops",
  },
  {
    slug: "workshop-couples",
    name: "Soul Connection at Will for Couples",
    description: "Deepen your relationship through soul-level connection.",
    price: 150,
    category: "Workshops",
  },
  {
    slug: "workshop-couples-exclusive",
    name: "Soul Connection for Couples — Exclusive",
    description: "Private couples session with Brian.",
    price: 250,
    category: "Workshops",
  },
  {
    slug: "workshop-business",
    name: "Soul Connection at Will for Business",
    description: "Transform workplace relationships and team dynamics.",
    price: 150,
    category: "Workshops",
  },
  {
    slug: "workshop-families-group",
    name: "Access the Real You for Families — Group",
    description: "Family workshop at group rate.",
    price: 150,
    category: "Workshops",
  },
  {
    slug: "workshop-families-exclusive",
    name: "Soul Connection for Families — Exclusive",
    description: "Private family session with Brian.",
    price: 250,
    category: "Workshops",
  },
  // Healer's Curriculum
  {
    slug: "level-one-healers",
    name: "Level One Healer's Class",
    description: "Four-module foundation course in healing methodology.",
    price: 600,
    category: "Healer's Curriculum",
  },
  {
    slug: "master-class",
    name: "Healer's Master Class — 24 Sessions",
    description: "Advanced practitioner track for committed healers.",
    price: 2000,
    category: "Healer's Curriculum",
  },
  {
    slug: "facilitators-curriculum",
    name: "Soul Connection Facilitator's Curriculum",
    description: "Train to facilitate Soul Connection workshops.",
    price: 2000,
    category: "Healer's Curriculum",
  },
];

export const productCategories = [
  "Books",
  "Courses",
  "Healing Sessions",
  "Workshops",
  "Healer's Curriculum",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(cents);
}
