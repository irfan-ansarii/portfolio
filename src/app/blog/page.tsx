import Link from "next/link";
import { getBlogPosts } from "@/data/blog";

import BlurFade from "@/components/magicui/blur-fade";
import SectionHeading from "@/components/section-heading";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <BlurFade delay={0.2}>
      <section className="container">
        <SectionHeading
          badge="projects"
          heading="Check out my latest work"
          subheading="I have worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites."
          fadeDelay={BLUR_FADE_DELAY * 11}
          className="border-t-0"
        />
        <div className="border-x overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 [&>*:nth-child(2n)]:border-r-0">
            {Array.from(posts)
              .sort((a, b) => {
                if (
                  new Date(a.metadata.publishedAt) >
                  new Date(b.metadata.publishedAt)
                ) {
                  return -1;
                }
                return 1;
              })
              .map((post, id) => (
                <BlurFade
                  delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                  key={post.slug}
                  className="border-r border-t"
                >
                  <Link
                    className="flex flex-col space-y-1 mb-4"
                    href={`/blog/${post.slug}`}
                  >
                    <img src={post.metadata.thumbnail} />
                    <div className="w-full flex flex-col">
                      <p className="tracking-tight">{post.metadata.title}</p>
                      <p className="h-6 text-xs text-muted-foreground">
                        {post.metadata.publishedAt}
                      </p>
                    </div>
                  </Link>
                </BlurFade>
              ))}
          </div>
        </div>
      </section>
    </BlurFade>
  );
}
