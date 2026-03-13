export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: "TechCorp Solutions",
    role: "Senior Backend Engineer",
    period: "Jan 2024 — Present",
    description:
      "Leading backend architecture for a microservices platform serving 2M+ daily active users.",
    highlights: [
      "Reduced API latency by 40% through query optimization and caching strategies",
      "Designed event-driven architecture using Kafka for real-time data processing",
      "Mentored 4 junior engineers and established code review practices",
    ],
  },
  {
    company: "DataStream Inc.",
    role: "Backend Developer",
    period: "Mar 2022 — Dec 2023",
    description:
      "Built and maintained data processing pipelines and RESTful APIs for a fintech analytics platform.",
    highlights: [
      "Developed real-time transaction processing system handling 10K events/sec",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Migrated monolith to microservices architecture with zero downtime",
    ],
  },
  {
    company: "WebForge Studio",
    role: "Full Stack Developer",
    period: "Jun 2020 — Feb 2022",
    description:
      "Developed web applications and APIs for various clients across e-commerce and SaaS domains.",
    highlights: [
      "Built custom e-commerce platform serving 50K+ monthly users",
      "Designed and implemented RESTful APIs with comprehensive documentation",
      "Introduced automated testing, increasing code coverage from 30% to 85%",
    ],
  },
  {
    company: "CodeLab Academy",
    role: "Junior Developer",
    period: "Jan 2019 — May 2020",
    description:
      "Started career building internal tools and contributing to open-source projects.",
    highlights: [
      "Developed internal dashboard for tracking student progress",
      "Contributed to 3 open-source Node.js libraries",
      "Automated data migration scripts saving 20+ hours of manual work weekly",
    ],
  },
];
