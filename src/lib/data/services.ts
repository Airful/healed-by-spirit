export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string; // lucide icon name
  price?: string;
  priceNote?: string;
  duration?: string;
  href: string;
  productSlug?: string; // maps to product slug for checkout
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
        productSlug: "introductory-healing-package",
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
        productSlug: "healing-session-individual",
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
        productSlug: "healing-session-pets",
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
        productSlug: "clearing-homes-workspaces",
      },
    ],
  },
  {
    slug: "workshops",
    title: "Soul Connection at Will Workshops",
    description:
      "Learn to connect on a soul level and access sacred space where miracles are available. Workshops for couples, families, business teams, and individuals. Available in person or remotely via Zoom.",
    services: [
      {
        slug: "workshop-individual",
        title: "Individual / Group Workshop",
        shortDescription:
          "Access sacred space and connect at soul level with those around you.",
        description:
          "You'll first be led through an engaging exercise in which you will learn to distinguish between \"mind chatter\" and \"soul talk.\" From this place you will be guided through processes that will open you up to safely and lovingly connect with the person in front of you. You will learn to access this Sacred Space whenever and with whomever you wish, and will have the tools to return there whenever you choose.",
        icon: "Users",
        price: "$50",
        priceNote: "per person (group rate)",
        duration: "Saturdays 10am–noon",
        href: "/services/workshops",
        productSlug: "workshop-individual-group",
      },
      {
        slug: "workshop-individual-private",
        title: "Individual Workshop — Private",
        shortDescription:
          "Private, in-home or Zoom workshop experience with Brian.",
        description:
          "A private Soul Connection at Will workshop tailored to you. Available in-home or via Zoom teleconferencing. Two-person minimum.",
        icon: "Users",
        price: "$200",
        priceNote: "per person (2 person minimum)",
        duration: "By appointment",
        href: "/services/workshops",
      },
      {
        slug: "workshop-couples",
        title: "Soul Connection for Couples",
        shortDescription: "Deepen your relationship through soul-level connection.",
        description:
          "This beautiful process peels away the layers through which we generally communicate. Upon completion, you will find yourself in a place where the divinity in you is able to readily connect to the divinity in another, and will have the tools to return there whenever you wish with whomever you choose.",
        icon: "HeartHandshake",
        price: "$100",
        priceNote: "per couple (group rate)",
        duration: "Saturdays 2–4pm",
        href: "/services/workshops",
        productSlug: "workshop-couples",
      },
      {
        slug: "workshop-couples-private",
        title: "Soul Connection for Couples — Private",
        shortDescription: "Private couples session with Brian, in-home or via Zoom.",
        description:
          "An exclusive couples workshop in the comfort of your home or via Zoom teleconferencing.",
        icon: "HeartHandshake",
        price: "$300",
        priceNote: "per couple",
        duration: "By appointment",
        href: "/services/workshops",
        productSlug: "workshop-couples-exclusive",
      },
      {
        slug: "workshop-families",
        title: "Access the Real You for Families",
        shortDescription: "Family-focused workshop on authentic connection.",
        description:
          "Help your family access deeper connection and understanding through these powerful principles. Available at group rate or as a private in-home session.",
        icon: "Users",
        price: "$100",
        priceNote: "per family (group rate)",
        duration: "Saturdays 10am–noon",
        href: "/services/workshops",
        productSlug: "workshop-families-group",
      },
      {
        slug: "workshop-families-private",
        title: "Access the Real You for Families — Private",
        shortDescription: "Private family session with Brian, in-home or via Zoom.",
        description:
          "A private family workshop in the comfort of your home or via Zoom teleconferencing.",
        icon: "Users",
        price: "$300",
        priceNote: "per family",
        duration: "By appointment",
        href: "/services/workshops",
        productSlug: "workshop-families-exclusive",
      },
      {
        slug: "workshop-business",
        title: "Soul Connection for Business",
        shortDescription: "Transform workplace relationships and team dynamics.",
        description:
          "Enhance relationships with colleagues, improve team dynamics, and create a more connected workplace. Corporate programs are customized for your business.",
        icon: "Briefcase",
        price: "Custom",
        priceNote: "based on services provided",
        duration: "Customized program",
        href: "/services/workshops",
        productSlug: "workshop-business",
      },
    ],
  },
  {
    slug: "connect-radiate",
    title: "Connect & Radiate Course",
    description:
      "A seven-module course empowering you to walk through life as the powerful Soul you are. Grounded in The Real You principles, presented in hybrid format in-person and via Zoom. Includes six 1-on-1 sessions with Brian between modules.",
    services: [
      {
        slug: "connect-radiate-course",
        title: "Connect & Radiate Course",
        shortDescription:
          "Seven-module course with six one-on-one sessions with Brian for deep personal transformation.",
        description:
          "This beautiful and challenging course will guide you through processes designed to grant you access to your essential spiritual nature. In this place you will connect to, and ground yourself in, the Power that lives in you which is always bigger than anything you may encounter, empowering you to effortlessly live your best life! Includes the Soul Connection at Will Workshop as Module One, SIX 1-on-1 sessions with Brian between modules, a copy of \"Access The Real You,\" and the extensive 60+ page course workbook. All classes are recorded.",
        icon: "Zap",
        price: "$600",
        duration: "7 modules (Thursdays, 6:30–8:30pm MST)",
        href: "/services/connect-radiate",
        productSlug: "connect-radiate-course",
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
        productSlug: "level-one-healers",
      },
      {
        slug: "master-class",
        title: "Healer's Master Class",
        shortDescription:
          "24-session advanced practitioner track for committed healers.",
        description:
          "Advanced level class for graduates of Level One. 24 sessions of intensive practitioner development.",
        icon: "Award",
        price: "$3,000",
        duration: "24 sessions",
        href: "/services/healers-curriculum",
        productSlug: "master-class",
      },
      {
        slug: "facilitators-curriculum",
        title: "Soul Connection Facilitator's Curriculum",
        shortDescription:
          "Train to facilitate Soul Connection at Will workshops yourself.",
        description:
          "Learn to lead Soul Connection at Will workshops, extending Brian's reach and mission. Includes 2% of all workshops delivered.",
        icon: "BookOpen",
        price: "$1,000 + 2%",
        duration: "Full curriculum",
        href: "/services/healers-curriculum",
        productSlug: "facilitators-curriculum",
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
