import { ExternalLink, Github } from "lucide-react";
import { NoiseTexture } from "@/components/effects/noise-texture";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]/60 p-6 backdrop-blur-sm transition-all hover:border-accent-500/50 hover:shadow-lg hover:shadow-accent-500/5",
        index === 0 && "sm:row-span-2",
      )}
    >
      <NoiseTexture />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full border border-dashed border-[var(--border)] px-2.5 py-0.5 font-mono text-xs text-[var(--muted-foreground)]">
            {project.category}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {project.demoUrl && (
            <Button size="sm" variant="default" asChild>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-3.5" />
                Demo
              </a>
            </Button>
          )}
          <Button size="sm" variant="outline" asChild>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="size-3.5" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
