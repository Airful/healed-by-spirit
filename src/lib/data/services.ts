export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string; // lucide icon name
  price?: string;
  duration?: string;
  href: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "healing-sessions",
    title: "Healing Sessions",
    description:
      "Complete energetic healing for physical, psychological, and emotional issues. Brian's divinely-inspired method includes chakra clearing, bodywork, and guidance sessions.",
    services: [
      {
        slug: "introductory-healing",
        title: "Introductory Healing Package",
        shortDescription:
          "Comprehensive first session with chakra clearing, bodywork, and guidance.",
        description:
          "A complete introductory session includes Chakra work and intuitively guided session, as well as a full-body energetic clearing of every system. This session may take as long as three hours, followed by a 90-minute guidance session.",
        icon: "Sparkles",
        price: "$600",
        duration: "3-4 hours + 90-min follow-up",
        href: "/services/healing-sessions",
      },
      {
        slug: "follow-up-session",
        title: "Healing Session (Follow-up)",
        shortDescription:
          "For existing clients — tune-ups and ongoing energetic maintenance.",
        description:
          "Follow-up sessions for existing clients. Bodywork tune-ups may be done remotely by the hour. Sessions are generally much shorter after intro sessions.",
        icon: "Heart",
        price: "$125",
        duration: "90 minutes",
        href: "/services/healing-sessions",
      },
      {
        slug: "pet-healing",
        title: "Healing Session for Pets",
        shortDescription: "Energetic healing for your animal companions.",
        description:
          "Brian works with pets just as he does with people, using the same divinely-inspired healing methods.",
        icon: "PawPrint",
        price: "$125",
        duration: "Varies",
        href: "/services/healing-sessions",
      },
      {
        slug: "clearing-spaces",
        title: "Clearing Homes & Workspaces",
        shortDescription:
          "Energetic clearing for homes and commercial spaces.",
        description:
          "Brian clears homes (new and pre-owned) and work spaces as required, removing residual energies.",
        icon: "Home",
        price: "$100/hr",
        duration: "As needed",
        href: "/services/healing-sessions",
      },
    ],
  },
  {
    slug: "workshops",
    title: "Soul Connection at Will Workshops",
    description:
      "Learn to connect on a soul level and access sacred space where miracles are available. Workshops for couples, families, business teams, and individuals.",
    services: [
      {
        slug: "workshop-individual",
        title: "Individual / Group Workshop",
        shortDescription:
          "Access sacred space and connect at soul level with those around you.",
        description:
          "These workshops teach how to connect on a soul level, allowing access to the sacred space where Miracles are Available®. Gain the ability to access this sacred space whenever you wish.",
        icon: "Users",
        price: "$150",
        duration: "Group session",
        href: "/services/workshops",
      },
      {
        slug: "workshop-couples",
        title: "Soul Connection for Couples",
        shortDescription: "Deepen your relationship through soul-level connection.",
        description:
          "Experience yourself and your partner at soul level beyond normal daily interaction. Available as group rate or exclusive session.",
        icon: "HeartHandshake",
        price: "From $150",
        duration: "Group or exclusive session",
        href: "/services/workshops",
      },
      {
        slug: "workshop-families",
        title: "Access the Real You for Families",
        shortDescription: "Family-focused workshop on authentic connection.",
        description:
          "Help your family access deeper connection and understanding through these powerful principles.",
        icon: "Users",
        price: "From $150",
        duration: "Group session",
        href: "/services/workshops",
      },
      {
        slug: "workshop-business",
        title: "Soul Connection for Business",
        shortDescription: "Transform workplace relationships and team dynamics.",
        description:
          "Enhance relationships with colleagues, improve team dynamics, and create a more connected workplace.",
        icon: "Briefcase",
        price: "$150",
        duration: "Group session",
        href: "/services/workshops",
      },
    ],
  },
  {
    slug: "connect-radiate",
    title: "Connect & Radiate Course",
    description:
      "A comprehensive five-module course that ties together Brian's teachings — from accessing your real self to connecting with others at the deepest level.",
    services: [
      {
        slug: "connect-radiate-course",
        title: "Connect & Radiate Course",
        shortDescription:
          "Five-module comprehensive curriculum for deep personal transformation.",
        description:
          "The culmination of Brian's work — a five-module course that brings together the principles from Access The Real You, Soul Connection, and healing practices into a complete transformative curriculum.",
        icon: "Zap",
        price: "$125",
        duration: "5 modules",
        href: "/services/connect-radiate",
      },
    ],
  },
  {
    slug: "healers-curriculum",
    title: "Healer's Curriculum",
    description:
      "Brian teaches his healing methods to those called to heal. The modality is teachable — not some special gift unique to one person.",
    services: [
      {
        slug: "level-one",
        title: "Level One Healer's Class",
        shortDescription:
          "Four-module foundation course in Brian's healing methodology.",
        description:
          "A four-module class where students learn how to heal other people and themselves — physically, spiritually, and emotionally.",
        icon: "GraduationCap",
        price: "$600",
        duration: "4 modules",
        href: "/services/healers-curriculum",
      },
      {
        slug: "master-class",
        title: "Healer's Master Class",
        shortDescription:
          "24-session advanced practitioner track for committed healers.",
        description:
          "Advanced level class for graduates of Level One. 24 sessions of intensive practitioner development.",
        icon: "Award",
        price: "$2,000",
        duration: "24 sessions",
        href: "/services/healers-curriculum",
      },
      {
        slug: "facilitators-curriculum",
        title: "Soul Connection Facilitator's Curriculum",
        shortDescription:
          "Train to facilitate Soul Connection workshops yourself.",
        description:
          "Learn to lead Soul Connection at Will workshops, extending Brian's reach and mission.",
        icon: "BookOpen",
        price: "$2,000",
        duration: "Full curriculum",
        href: "/services/healers-curriculum",
      },
    ],
  },
];

export function getAllServices(): Service[] {
  return serviceCategories.flatMap((cat) => cat.services);
}

export function getServiceCategory(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((cat) => cat.slug === slug);
}
