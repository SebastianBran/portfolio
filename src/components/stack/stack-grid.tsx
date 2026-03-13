import { SectionWrapper } from "@/components/layout/section-wrapper";
import { stackCategories } from "@/data/stack";
import type { StackCategory } from "@/data/stack";

function StackCategoryCard({ category }: { category: StackCategory }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/60 p-5 backdrop-blur-sm">
      <h3 className="mb-4 text-sm font-semibold text-[var(--foreground)]">
        {category.name}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-[var(--muted)]"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}/${item.icon}-original${item.extension ?? ""}.svg`}
              alt={item.name}
              className="size-6"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}/${item.icon}-plain.svg`;
              }}
            />
            <span className="text-sm text-[var(--muted-foreground)]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StackGrid() {
  return (
    <SectionWrapper
      id="stack"
      title="Tech Stack"
      subtitle="Technologies I work with"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stackCategories.map((cat) => (
          <StackCategoryCard key={cat.name} category={cat} />
        ))}
      </div>
    </SectionWrapper>
  );
}
