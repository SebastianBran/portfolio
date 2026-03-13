import { Calendar, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { NoiseTexture } from "@/components/effects/noise-texture";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/content/blog-index";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group relative block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]/60 p-6 backdrop-blur-sm transition-all hover:border-accent-500/50 hover:shadow-lg hover:shadow-accent-500/5"
    >
      <NoiseTexture />
      <div className="relative z-10">
        <h3 className="mb-2 font-semibold text-[var(--foreground)] transition-colors group-hover:text-accent-500">
          {post.title}
        </h3>
        <p className="mb-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
          {post.description}
        </p>
        <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
          <span className="flex items-center gap-1">
            <Calendar className="size-3" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3" />
            {post.readingTime}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
