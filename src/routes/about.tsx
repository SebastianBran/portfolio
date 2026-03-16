import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "@/components/seo/seo-head";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Badge } from "@/components/ui/badge";

const skills = [
  "API Design",
  "Microservices",
  "Cloud Architecture",
  "CI/CD",
  "Testing",
  "Infrastructure as Code",
  "Full Stack Development",
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
        description="Learn more about Estefano Bran, a Software Engineer specializing in Backend Development, Cloud & DevOps."
      />
      <SectionWrapper id="about-page" title="About Me">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-[var(--muted-foreground)]">
            Hi, I'm Estefano — a Software Engineer based in Lima, Peru, with 4+
            years of experience building scalable, cloud-native applications
            across fintech, e-commerce, and enterprise environments.
          </p>
          <p className="leading-relaxed text-[var(--muted-foreground)]">
            I specialize in backend development using Node.js, NestJS, and Spring Boot. 
            I also have experience with modern frontend frameworks such as React and Next.js. 
            Additionally, I have worked with cloud infrastructure on AWS, Azure, and Oracle Cloud,
            as well as Infrastructure as Code (IaC) using Terraform.
          </p>
          <p className="leading-relaxed text-[var(--muted-foreground)]">
            I graduated from the Peruvian University of Applied Sciences (UPC) with a degree 
            in Software Engineering and an award for academic excellence. I've also
            competed in ICPC South America and IEEE Xtreme, and co-authored a
            scientific publication on blockchain and health records
            interoperability.
          </p>
          <p className="leading-relaxed text-[var(--muted-foreground)]">
            I've worked with companies like Kyndryl and Avatar Global,
            delivering production-grade solutions for clients including
            Credicorp, Interbank, DVP, and Mayoral. I thrive in remote
            cross-functional teams and enjoy tackling complex technical
            challenges.
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
