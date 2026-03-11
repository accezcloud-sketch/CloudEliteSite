import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog — CloudElite",
  description:
    "Insights, guides, and best practices for Salesforce implementation and CRM strategy from the CloudElite team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="bg-off-white min-h-screen pt-28 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[3px] uppercase text-sf-blue mb-3 block">
              Our Blog
            </span>
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-navy leading-[1.2] mb-4">
              Insights & Resources
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-[600px] mx-auto">
              Expert perspectives on Salesforce, CRM strategy, and digital
              transformation to help your business grow.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              >
                {/* Category badge area */}
                <div className="bg-navy/[0.03] px-7 pt-7 pb-5">
                  <span className="inline-block text-[0.7rem] font-semibold tracking-[2px] uppercase text-sf-blue bg-sf-blue/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="px-7 pb-7">
                  <h2 className="font-display text-xl font-semibold text-navy leading-snug mb-3 group-hover:text-sf-blue transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-[0.9rem] text-gray-500 leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[0.8rem] text-gray-500">
                    <span>{post.author}</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
