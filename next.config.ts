import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["stripe"],
  async redirects() {
    return [
      // Healing session pages → consolidated service page
      { source: "/healing-sessions", destination: "/services/healing-sessions", permanent: true },
      { source: "/healing-sessions-for-people", destination: "/services/healing-sessions", permanent: true },
      { source: "/healing-sessions-for-pets", destination: "/services/healing-sessions", permanent: true },
      { source: "/book-a-healing-session", destination: "/book-session", permanent: true },

      // Workshop pages → consolidated workshops page
      { source: "/scw", destination: "/services/workshops", permanent: true },
      { source: "/family-workshop", destination: "/services/workshops", permanent: true },
      { source: "/couples-workshop", destination: "/services/workshops", permanent: true },
      { source: "/workshop-for-all", destination: "/services/workshops", permanent: true },
      { source: "/book-a-workshop", destination: "/book-session", permanent: true },
      { source: "/guidance-sessions-for-business", destination: "/services/workshops", permanent: true },
      { source: "/client-retention-workshop", destination: "/services/workshops", permanent: true },

      // Course pages
      { source: "/connect-radiate-curriculum", destination: "/services/connect-radiate", permanent: true },

      // Healer's curriculum pages
      { source: "/level-one-healers-class", destination: "/services/healers-curriculum", permanent: true },
      { source: "/advanced-healers-class", destination: "/services/healers-curriculum", permanent: true },
      { source: "/soul-connection-facilitators-track", destination: "/services/healers-curriculum", permanent: true },

      // Book page
      { source: "/access-the-real-you", destination: "/book", permanent: true },

      // Shop/rate pages
      { source: "/group-rate", destination: "/shop", permanent: true },
      { source: "/individual-rate", destination: "/shop", permanent: true },

      // Terms
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },

      // Calendar/booking → book session page
      { source: "/calendar", destination: "/book-session", permanent: true },

      // WordPress trailing slash variants (WordPress uses trailing slashes)
      { source: "/healing-sessions/", destination: "/services/healing-sessions", permanent: true },
      { source: "/healing-sessions-for-people/", destination: "/services/healing-sessions", permanent: true },
      { source: "/healing-sessions-for-pets/", destination: "/services/healing-sessions", permanent: true },
      { source: "/book-a-healing-session/", destination: "/book-session", permanent: true },
      { source: "/scw/", destination: "/services/workshops", permanent: true },
      { source: "/family-workshop/", destination: "/services/workshops", permanent: true },
      { source: "/couples-workshop/", destination: "/services/workshops", permanent: true },
      { source: "/workshop-for-all/", destination: "/services/workshops", permanent: true },
      { source: "/book-a-workshop/", destination: "/book-session", permanent: true },
      { source: "/guidance-sessions-for-business/", destination: "/services/workshops", permanent: true },
      { source: "/client-retention-workshop/", destination: "/services/workshops", permanent: true },
      { source: "/connect-radiate-curriculum/", destination: "/services/connect-radiate", permanent: true },
      { source: "/level-one-healers-class/", destination: "/services/healers-curriculum", permanent: true },
      { source: "/advanced-healers-class/", destination: "/services/healers-curriculum", permanent: true },
      { source: "/soul-connection-facilitators-track/", destination: "/services/healers-curriculum", permanent: true },
      { source: "/access-the-real-you/", destination: "/book", permanent: true },
      { source: "/group-rate/", destination: "/shop", permanent: true },
      { source: "/individual-rate/", destination: "/shop", permanent: true },
      { source: "/terms-and-conditions/", destination: "/terms", permanent: true },
      { source: "/calendar/", destination: "/book-session", permanent: true },

      // WooCommerce pages (no longer needed)
      { source: "/my-account", destination: "/", permanent: true },
      { source: "/my-account/:path*", destination: "/", permanent: true },
      { source: "/cart", destination: "/shop", permanent: true },
      { source: "/checkout/cart", destination: "/shop", permanent: true },
    ];
  },
};

export default nextConfig;
