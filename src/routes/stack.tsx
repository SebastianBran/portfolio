import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "@/components/seo/seo-head";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { stackCategories } from "@/data/stack";

export const Route = createFileRoute("/stack")({
  component: StackPage,
});

function StackPage() {
  return (
    <>
      <SeoHead
        title="Tech Stack"
        description="Technologies and tools Estefano Bran works with."
      />
      <SectionWrapper
        id="stack-page"
        title="Tech Stack"
        subtitle="My go-to technologies"
      >
        <div className="space-y-8">
          {stackCategories.map((cat) => (
            <div key={cat.name}>
              <h3 className="mb-4 text-lg font-semibold text-[var(--foreground)]">
                {cat.name}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)]/60 p-4 backdrop-blur-sm transition-colors hover:border-accent-500/50"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}/${item.icon}-original${item.extension ?? ""}.svg`}
                      alt={item.name}
                      className="size-8"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}/${item.icon}-plain.svg`;
                      }}
                    />
                    <span className="text-sm font-medium text-[var(--foreground)]">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
