export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "soul-connection-workshops",
    title: "What to Expect at a Soul Connection at Will Workshop",
    date: "2026-04-10",
    excerpt:
      "Discover how to distinguish between mind chatter and soul talk in a sacred, safe environment. Learn what happens when you release what's in the way and connect with who you truly are.",
    author: "G. Brian Kurtz",
  },
  {
    slug: "connect-and-radiate-course",
    title: "Connect & Radiate: A Seven-Module Journey to Your Essential Nature",
    date: "2026-04-01",
    excerpt:
      "Explore the seven modules of the Connect & Radiate course — a beautiful and challenging journey designed to grant you access to your essential spiritual nature.",
    author: "G. Brian Kurtz",
  },
];
