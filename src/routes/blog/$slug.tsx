import { createFileRoute, notFound } from "@tanstack/react-router";
import { SeoHead } from "@/components/seo/seo-head";
import { blogPosts } from "@/content/blog-index";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { lazy, Suspense, type ComponentType } from "react";

const mdxModules = import.meta.glob<{ default: ComponentType }>(
  "../../content/blog/*.mdx",
);

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  const MdxContent = lazy(async () => {
    const key = `../../content/blog/${post.slug}.mdx`;
    const loader = mdxModules[key];
    if (!loader) {
      return {
        default: (() => <p>Post content not found.</p>) as ComponentType,
      };
    }
    const mod = await loader();
    return { default: mod.default as ComponentType };
  });

  return (
    <>
      <SeoHead
        title={post.title}
        description={post.description}
        type="article"
      />
      <article className="py-16">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm text-[var(--muted-foreground)] transition-colors hover:text-accent-500"
        >
          <ArrowLeft className="size-3.5" />
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-3 flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
            <span className="flex items-center gap-1">
              <Calendar className="size-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" />
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
        </header>

        <Suspense
          fallback={
            <div className="text-sm text-[var(--muted-foreground)]">
              Loading...
            </div>
          }
        >
          <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:text-[var(--foreground)] prose-p:text-[var(--muted-foreground)] prose-a:text-accent-500 prose-a:no-underline hover:prose-a:underline prose-code:text-accent-400 prose-pre:bg-[var(--card)] prose-pre:border prose-pre:border-[var(--border)]">
            <MdxContent />
          </div>
        </Suspense>
      </article>
    </>
  );
}
