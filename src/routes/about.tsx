import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "@/components/seo/seo-head";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Badge } from "@/components/ui/badge";

const skills = [
  "API Design",
  "Microservices",
  "System Design",
  "Cloud Architecture",
  "CI/CD",
  "Testing",
  "Performance Optimization",
  "Database Design",
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <SeoHead
        title="About"
        description="Learn more about Estefano Bran, a Software Engineer & Backend Developer."
      />
      <SectionWrapper id="about-page" title="About Me">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-[var(--muted-foreground)]">
            Hi, I'm Estefano — a Software Engineer based in Lima, Peru, with a
            deep passion for backend development and distributed systems. Over
            the past 5+ years, I've had the privilege of working on projects
            ranging from fintech platforms to developer tools.
          </p>
          <p className="leading-relaxed text-[var(--muted-foreground)]">
            My journey in software started with a curiosity about how things
            work under the hood. That curiosity led me to backend development,
            where I found my sweet spot — building the invisible infrastructure
            that powers modern applications.
          </p>
          <p className="leading-relaxed text-[var(--muted-foreground)]">
            I specialize in designing scalable APIs, building event-driven
            architectures, and optimizing database performance. I'm a strong
            advocate for clean code, comprehensive testing, and developer
            experience.
          </p>
          <p className="leading-relaxed text-[var(--muted-foreground)]">
            When I'm not writing code, I contribute to open-source projects,
            write technical blog posts, and experiment with new programming
            languages. I believe in continuous learning and sharing knowledge
            with the community.
          </p>

          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold text-[var(--foreground)]">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
