import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "@/components/seo/seo-head";
import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about/about-section";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { StackGrid } from "@/components/stack/stack-grid";
import { ContactSection } from "@/components/contact/contact-section";
import { SocialLinks } from "@/components/social/social-links";
import { SectionWrapper } from "@/components/layout/section-wrapper";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <SeoHead />
      <HeroSection />
      <AboutSection />
      <ProjectGrid />
      <ExperienceTimeline />
      <StackGrid />
      <ContactSection />
      <SectionWrapper
        id="social"
        title="Let's Connect"
        subtitle="Find me on the web"
      >
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </SectionWrapper>
    </>
  );
}
