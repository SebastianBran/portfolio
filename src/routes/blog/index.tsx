import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "@/components/seo/seo-head";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { BlogCard } from "@/components/blog/blog-card";
import { blogPosts } from "@/content/blog-index";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <SeoHead
        title="Blog"
        description="Thoughts on backend development, architecture, and engineering."
      />
      <SectionWrapper
        id="blog-page"
        title="Blog"
        subtitle="Writings on backend development and engineering"
      >
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
