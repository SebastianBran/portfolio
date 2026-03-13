export interface StackItem {
  name: string;
  icon: string;
  extension?: string;
}

export interface StackCategory {
  name: string;
  items: StackItem[];
}

export const stackCategories: StackCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "SQL", icon: "postgresql" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "React Native", icon: "react" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Express", icon: "express" },
      { name: "Spring Boot", icon: "spring" },
      { name: "GraphQL", icon: "graphql" },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQL Server", icon: "microsoftsqlserver" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    name: "DevOps & Cloud",
    items: [
      { name: "AWS", icon: "amazonwebservices", extension: "-wordmark" },
      { name: "Azure", icon: "azure" },
      { name: "Oracle Cloud", icon: "oracle" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Terraform", icon: "terraform" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    name: "Testing",
    items: [
      { name: "Jest", icon: "jest" },
      { name: "React Testing Library", icon: "react" },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "Linux", icon: "linux" },
      { name: "VS Code", icon: "vscode" },
      { name: "Nginx", icon: "nginx" },
    ],
  },
];
