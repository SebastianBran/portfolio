export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: "Kyndryl",
    role: "Software Engineer – Technical Specialist",
    period: "Aug 2025 — Present",
    description:
      "Delivering technical solutions for enterprise clients across infrastructure, frontend, and backend projects.",
    highlights: [
      "Designed reusable Terraform modules for Oracle Cloud Infrastructure (OCI) and contributed to a corporate landing zone at Credicorp",
      "Developed the frontend of an internal chatbot for Interbank call center agents using Angular 19 with hexagonal architecture",
      "Built an on-premise infrastructure testing application for CCE using Spring Boot, Docker, Kubernetes, Kafka, and an observability stack with Grafana, Prometheus, and Loki",
    ],
  },
  {
    company: "Avatar Global",
    role: "Full Stack / Backend Engineer",
    period: "Jan 2022 — Jul 2025",
    description:
      "Built and maintained scalable applications across fintech, e-commerce, and enterprise environments for international clients.",
    highlights: [
      "Developed backend features and integrated Webpay payment gateway APIs for DVP (Chile) using Node.js",
      "Implemented frontend features for Mayoral (Spain) using Next.js, React, TypeScript, Material UI, and GraphQL with Apollo Client",
      "Migrated backend services from Java to Express.js and developed back-office services using NestJS for Avatar OMS",
      "Designed a notification service for Apuesta Total using NestJS with DDD, integrating Firebase Cloud Messaging and Huawei Push Kit",
    ],
  },
];
