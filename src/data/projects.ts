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
    title: "CloudSync API",
    description:
      "High-performance REST API for real-time cloud file synchronization with conflict resolution, versioning, and end-to-end encryption.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    demoUrl: "https://cloudsync-demo.dev",
    repoUrl: "https://github.com/SebastianBran/cloudsync",
    category: "Backend API",
  },
  {
    title: "TaskFlow",
    description:
      "Distributed task queue system with priority scheduling, dead-letter handling, and real-time monitoring dashboard.",
    stack: ["Go", "gRPC", "RabbitMQ", "Kubernetes"],
    repoUrl: "https://github.com/SebastianBran/taskflow",
    category: "Infrastructure",
  },
  {
    title: "AuthGuard",
    description:
      "OAuth 2.0 / OpenID Connect authentication service with MFA support, session management, and rate limiting.",
    stack: ["TypeScript", "NestJS", "PostgreSQL", "Redis", "JWT"],
    demoUrl: "https://authguard-demo.dev",
    repoUrl: "https://github.com/SebastianBran/authguard",
    category: "Security",
  },
  {
    title: "MetricsHub",
    description:
      "Real-time application monitoring platform with custom dashboards, alerting rules, and anomaly detection powered by ML.",
    stack: ["Python", "FastAPI", "InfluxDB", "Grafana", "Docker"],
    demoUrl: "https://metricshub-demo.dev",
    repoUrl: "https://github.com/SebastianBran/metricshub",
    category: "DevOps",
  },
  {
    title: "DataPipe",
    description:
      "ETL pipeline framework for streaming and batch data processing with schema validation and transformation plugins.",
    stack: ["Python", "Apache Kafka", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/SebastianBran/datapipe",
    category: "Data Engineering",
  },
  {
    title: "DevKit CLI",
    description:
      "Developer productivity CLI tool for scaffolding projects, managing environments, and automating repetitive tasks.",
    stack: ["Rust", "Clap", "Serde", "Tokio"],
    repoUrl: "https://github.com/SebastianBran/devkit-cli",
    category: "Developer Tools",
  },
];
