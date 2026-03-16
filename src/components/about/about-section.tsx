import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Badge } from "@/components/ui/badge";

const interests = [
  "Cloud Architecture",
  "API Design",
  "DevOps",
  "Backend Development",
  "Clean Code",
  "Competitive Programming",
];

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know me better"
    >
      <div className="grid gap-8 md:grid-cols-5">
        <div className="space-y-4 md:col-span-3">
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            I'm a Software Engineer with 4+ years of experience building
            scalable, cloud-native applications across fintech, e-commerce, and
            enterprise environments. I specialize in backend development using 
            Node.js, NestJS and Spring Boot. I also have experience with modern
            frontend frameworks such as React and Next.js. 
          </p>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            Experienced with cloud infrastructure (AWS, Azure, OCI),
            Infrastructure as Code (Terraform), CI/CD automation, and
            distributed systems. I've worked in remote cross-functional teams
            delivering production-grade solutions for international clients.
          </p>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            I hold a degree in Software Engineering from UPC (Lima, Peru), and I was 
            recognized for academic excellence throughout my studies. I've also 
            participated in ICPC and IEEE Xtreme competitive programming contests.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:col-span-2">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/60 p-6 backdrop-blur-sm">
            <h3 className="mb-3 text-sm font-semibold text-[var(--foreground)]">
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge key={interest} variant="secondary" className="text-xs">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/60 p-6 backdrop-blur-sm">
            <h3 className="mb-2 text-sm font-semibold text-[var(--foreground)]">
              Quick Facts
            </h3>
            <ul className="space-y-1 text-sm text-[var(--muted-foreground)]">
              <li>4+ years of experience</li>
              <li>Based in Lima, Peru</li>
              <li>AWS, Azure & Oracle certified</li>
              <li>ICPC & IEEE Xtreme competitor</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
