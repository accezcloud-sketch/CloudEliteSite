import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — CloudElite Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-off-white min-h-screen pt-28 pb-20">
        <article className="max-w-[760px] mx-auto px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 no-underline hover:text-sf-blue transition-colors duration-300 mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <span className="inline-block text-[0.7rem] font-semibold tracking-[2px] uppercase text-sf-blue bg-sf-blue/10 px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-display text-[clamp(1.8rem,4vw,2.75rem)] font-semibold text-navy leading-[1.2] mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed [&_h2]:font-display [&_h2]:text-navy [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-navy [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-5 [&_p]:leading-[1.8] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_li]:leading-[1.7] [&_strong]:text-navy [&_a]:text-sf-blue [&_a]:no-underline [&_a:hover]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-sf-blue [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-gray-500">
            <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-white border border-gray-100 rounded-2xl text-center">
            <h3 className="font-display text-xl font-semibold text-navy mb-2">
              Ready to transform your Salesforce experience?
            </h3>
            <p className="text-gray-500 mb-6">
              Our certified consultants are here to help you get the most out of
              your CRM investment.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-linear-to-br from-sf-blue to-sf-blue-dark text-white font-body text-sm font-semibold px-8 py-3.5 rounded-[10px] no-underline transition-all duration-300 shadow-[0_4px_20px_rgba(0,161,224,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,161,224,0.4)]"
            >
              Get in Touch
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
