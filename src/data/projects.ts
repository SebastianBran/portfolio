export interface Project {
  title: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  repoUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    title: "WappTienda",
    description:
    "Full-stack e-commerce platform with a NestJS REST API and a React frontend. Includes JWT authentication, product catalog, order management and customer handling.",
    stack: ["TypeScript", "NestJS", "React", "Vite", "Tailwind CSS", "Docker"],
    repoUrl: "https://github.com/orgs/WappTienda/repositories",
    category: "Fullstack",
  },
  {
    title: "poc-cce-directory-service",
    description:
      "Microservices built with Spring Boot to validate an on-premise Kubernetes architecture and observability tooling for a banking institution. Integrates Redis, PostgreSQL, IBM MQ, Grafana, Prometheus and Tempo.",
    stack: [
      "Java",
      "Spring Boot",
      "Kubernetes",
      "Redis",
      "PostgreSQL",
      "IBM MQ",
      "Grafana",
      "Prometheus",
      "Tempo",
      "Docker",
    ],
    repoUrl: "https://github.com/SebastianBran/poc-cce-directory-service",
    category: "Microservices",
  },
  {
    title: "Portfolio",
    description:
      "Personal developer portfolio built with React, TypeScript and Vite. Features a dark theme, smooth animations, and a fully responsive layout showcasing projects and skills.",
    stack: ["TypeScript", "React", "Vite", "Tailwind CSS", "TanStack Router"],
    repoUrl: "https://github.com/SebastianBran/portfolio",
    category: "Frontend",
  },
];
