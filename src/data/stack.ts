export interface StackItem {
  name: string;
  icon: string;
}

export interface StackCategory {
  name: string;
  items: StackItem[];
}

export const stackCategories: StackCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "Go", icon: "go" },
      { name: "Rust", icon: "rust" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Express", icon: "express" },
      { name: "FastAPI", icon: "fastapi" },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "InfluxDB", icon: "influxdb" },
    ],
  },
  {
    name: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "AWS", icon: "amazonwebservices" },
      { name: "GitHub Actions", icon: "githubactions" },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "Linux", icon: "linux" },
      { name: "VS Code", icon: "vscode" },
      { name: "Neovim", icon: "neovim" },
    ],
  },
];
