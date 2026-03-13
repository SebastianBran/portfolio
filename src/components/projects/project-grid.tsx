import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ProjectCard } from "./project-card";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Things I've built">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
