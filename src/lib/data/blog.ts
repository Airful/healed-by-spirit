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
      "What actually happens in the workshop, from the mind chatter vs. soul talk exercise to the sacred space that makes real connection possible.",
    author: "G. Brian Kurtz",
  },
  {
    slug: "connect-and-radiate-course",
    title: "Connect & Radiate: A Seven-Module Journey to Your Essential Nature",
    date: "2026-04-01",
    excerpt:
      "A look inside all seven modules, what you get when you enroll, and what past students say about the experience.",
    author: "G. Brian Kurtz",
  },
];
