import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Badge } from "@/components/ui/badge";

const interests = [
  "System Design",
  "API Architecture",
  "Open Source",
  "DevOps",
  "Performance",
  "Clean Code",
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
            I'm a Software Engineer with a passion for building backend systems
            that scale. With 5+ years of experience, I specialize in designing
            RESTful APIs, distributed systems, and cloud-native architectures
            that handle millions of requests daily.
          </p>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            Beyond writing code, I enjoy mentoring developers, contributing to
            open-source projects, and exploring new technologies. I believe
            great software is built on clean abstractions, solid testing, and
            thoughtful design.
          </p>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            When I'm not coding, you'll find me reading about distributed
            systems, experimenting with new programming languages, or enjoying a
            good cup of coffee while sketching system diagrams.
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
              <li>5+ years of experience</li>
              <li>Based in Lima, Peru</li>
              <li>Open source contributor</li>
              <li>Coffee enthusiast</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
