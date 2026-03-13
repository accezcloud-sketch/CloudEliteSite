import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.blog.metaTitle,
    description: dict.blog.metaDesc,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const dict = getDictionary(loc);
  const posts = getAllPosts(loc);
  const dateLocale = loc === "ar" ? "ar-SA" : "en-US";

  return (
    <>
      <Navbar />
      <main className="bg-off-white min-h-screen pt-28 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[3px] uppercase text-sf-blue mb-3 block">
              {dict.blog.label}
            </span>
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-navy leading-[1.2] mb-4">
              {dict.blog.title}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-[600px] mx-auto">
              {dict.blog.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              >
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
                      {new Date(post.date).toLocaleDateString(dateLocale, {
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
