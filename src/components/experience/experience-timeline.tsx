import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { experience } from "@/data/experience";
import type { Experience } from "@/data/experience";

function TimelineItem({ item, index }: { item: Experience; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex md:justify-center">
      {/* Line dot */}
      <div className="absolute left-0 top-2 z-10 size-3 rounded-full border-2 border-accent-500 bg-[var(--background)] md:left-1/2 md:-translate-x-1/2" />

      {/* Content */}
      <motion.div
        className={`ml-6 w-full md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
        initial={{
          opacity: 0,
          x: isLeft ? -30 : 30,
        }}
        animate={
          isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -30 : 30 }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/60 p-5 backdrop-blur-sm">
          <span className="font-mono text-xs text-accent-500">
            {item.period}
          </span>
          <h3 className="mt-1 font-semibold text-[var(--foreground)]">
            {item.role}
          </h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            {item.company}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
            {item.description}
          </p>
          <ul className="mt-3 space-y-1">
            {item.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-xs text-[var(--muted-foreground)]"
              >
                <span className="mt-1.5 inline-block size-1 shrink-0 rounded-full bg-accent-500" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export function ExperienceTimeline() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="My professional journey"
    >
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[5px] top-0 h-full w-px bg-[var(--border)] md:left-1/2 md:-translate-x-px" />

        <div className="space-y-8">
          {experience.map((item, i) => (
            <TimelineItem key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
