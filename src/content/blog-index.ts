export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-apis",
    title: "Building Scalable APIs with Node.js and TypeScript",
    date: "2025-12-15",
    description:
      "A deep dive into patterns and best practices for building production-ready APIs that handle millions of requests.",
    readingTime: "8 min read",
    tags: ["Node.js", "TypeScript", "API Design"],
  },
  {
    slug: "typescript-backend-patterns",
    title: "TypeScript Backend Patterns You Should Know",
    date: "2025-09-22",
    description:
      "Essential design patterns for TypeScript backends: repository pattern, dependency injection, and more.",
    readingTime: "6 min read",
    tags: ["TypeScript", "Design Patterns", "Backend"],
  },
  {
    slug: "docker-kubernetes-guide",
    title: "From Docker to Kubernetes: A Practical Guide",
    date: "2025-06-10",
    description:
      "Step-by-step guide to containerizing your applications and deploying them to Kubernetes in production.",
    readingTime: "12 min read",
    tags: ["Docker", "Kubernetes", "DevOps"],
  },
];
