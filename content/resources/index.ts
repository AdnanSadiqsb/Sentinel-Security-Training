export interface ResourceMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
}

export const resources: ResourceMeta[] = [
  {
    slug: "building-close-protection-readiness",
    title: "Building close protection readiness with structured training",
    excerpt:
      "A clear overview of how staged assessments and practical delivery support reliable outcomes.",
    date: "12 February 2024",
    readingTime: "4 min read"
  },
  {
    slug: "event-security-planning-basics",
    title: "Event safety planning: a calm, methodical approach",
    excerpt:
      "Key steps to assess risk, brief teams, and maintain consistent safety coverage.",
    date: "28 January 2024",
    readingTime: "3 min read"
  }
];

export async function getResourceContent(slug: string) {
  switch (slug) {
    case "building-close-protection-readiness":
      return (await import("./building-close-protection-readiness.mdx")).default;
    case "event-security-planning-basics":
      return (await import("./event-security-planning-basics.mdx")).default;
    default:
      throw new Error("Resource not found");
  }
}
