import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "./i18n";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---/;

/**
 * The blog posts are produced by an external generator that sometimes emits
 * unquoted YAML scalars. An unquoted value containing ": " makes js-yaml throw
 * ("incomplete explicit mapping pair"), which previously failed the whole
 * production build. Quote any bare scalar so those files still parse.
 */
function quoteBareScalars(raw: string): string {
  return raw.replace(FRONTMATTER_RE, (_match, body: string) => {
    const fixed = body
      .split(/\r?\n/)
      .map((line) => {
        const kv = line.match(/^([A-Za-z0-9_-]+):[ \t]+(.*)$/);
        if (!kv) return line;
        const [, key, rawValue] = kv;
        const value = rawValue.trim();
        // Leave empty values and anything already quoted or structural alone.
        if (!value || /^["'[{|>&*!#]/.test(value)) return line;
        const escaped = value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
        return `${key}: "${escaped}"`;
      })
      .join("\n");
    return `---\n${fixed}\n---`;
  });
}

// gray-matter caches the file object BEFORE parsing it, so a file that throws
// leaves an empty, unparsed entry in its cache. Every later call for the same
// content then returns that empty object without throwing, which would skip the
// repair below and silently blank the post. Passing an options object opts out
// of that cache so parsing (and any failure) is consistent on every call.
const NO_CACHE = {};

function parsePost(raw: string, source: string) {
  try {
    return matter(raw, NO_CACHE);
  } catch {
    try {
      const parsed = matter(quoteBareScalars(raw), NO_CACHE);
      console.warn(`[blog] Repaired malformed frontmatter in ${source}`);
      return parsed;
    } catch (err) {
      console.error(
        `[blog] Skipping ${source} - unreadable frontmatter:`,
        err instanceof Error ? err.message : err
      );
      return null;
    }
  }
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
  content: string;
}

function getBlogDir(locale: Locale): string {
  if (locale === "en") return BLOG_DIR;
  return path.join(process.cwd(), `content/blog/${locale}`);
}

export function getAllPosts(locale: Locale = "en"): BlogPost[] {
  const dir = getBlogDir(locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const posts = files.flatMap((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
    const parsed = parsePost(raw, `${locale}/${filename}`);
    if (!parsed) return [];
    const { data, content } = parsed;

    return {
      slug,
      title: data.title ?? "",
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      author: data.author ?? "",
      category: data.category ?? "",
      coverImage: data.coverImage,
      content,
    } satisfies BlogPost;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(
  slug: string,
  locale: Locale = "en"
): BlogPost | undefined {
  const dir = getBlogDir(locale);
  const filePath = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const parsed = parsePost(raw, `${locale}/${slug}.md`);
  if (!parsed) return undefined;
  const { data, content } = parsed;

  return {
    slug,
    title: data.title ?? "",
    excerpt: data.excerpt ?? "",
    date: data.date ?? "",
    author: data.author ?? "",
    category: data.category ?? "",
    coverImage: data.coverImage,
    content,
  };
}
