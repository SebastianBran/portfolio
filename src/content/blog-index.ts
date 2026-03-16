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
    slug: "spring-boot-observability-prometheus-grafana-tempo",
    title:
      "Setting up Observability in Spring Boot with Prometheus, Grafana and Tempo",
    date: "2026-03-15",
    description:
      "How to instrument Spring Boot 3 microservices with the OTel Java agent and route traces, metrics and logs through an OpenTelemetry Collector to Tempo, Prometheus and Loki — with zero code changes.",
    readingTime: "10 min read",
    tags: ["Spring Boot", "Observability", "Kubernetes", "OpenTelemetry"],
  },
  {
    slug: "nestjs-jwt-authentication-guards",
    title:
      "JWT Authentication in NestJS: Guards, Strategies and Refresh Tokens",
    date: "2026-02-20",
    description:
      "A full walkthrough of the JWT auth system in a NestJS REST API: global guard pattern, passport strategy, @Public() decorator, @CurrentUser() param decorator, rate limiting and how to extend it with refresh tokens.",
    readingTime: "12 min read",
    tags: ["NestJS", "TypeScript", "Security", "JWT"],
  },
];
