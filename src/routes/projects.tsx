import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "@/components/seo/seo-head";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <SeoHead
        title="Projects"
        description="Projects and open-source work by Estefano Bran."
      />
      <SectionWrapper
        id="projects-page"
        title="All Projects"
        subtitle="A collection of things I've built"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
