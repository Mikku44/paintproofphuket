// app/blog/[blog_slug]/page.tsx
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react';
import * as prod from 'react/jsx-runtime';
import Link from 'next/link';

import { FaChevronLeft, FaRegClock, FaRegCalendarAlt, FaRegUser } from 'react-icons/fa';

import { blogData } from '../../repositories/blogsData';
import SocialShare from '@/app/components/ShareButton';

export async function generateMetadata({ params }: { params: Promise<{ blog_slug: string }> }) {
  const { blog_slug } = await params;
  
  // Fetch post data or fallback
  const post = blogData[blog_slug] ?? blogData["roof-insulation-technology"];

  return {
    title: `${post.title} | PaintProof Phuket`,
    description: post.excerpt || `อ่านบทความเรื่อง ${post.title} และสาระน่ารู้เกี่ยวกับการดูแลบ้านและระบบกันซึมโดยทีมช่างภูเก็ต`,
    keywords: [post.category, "ความรู้เรื่องบ้าน", "กันซึม ภูเก็ต", "ซ่อมบ้าน ภูเก็ต"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      // url: `https://yourdomain.com/blog/${blog_slug}`,
      siteName: "PaintProof Phuket",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "th_TH",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

async function getMarkdownContent(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)           // ← enables tables, strikethrough, task lists
    .use(remarkRehype)
    .use(rehypeReact, {
      ...prod,
      components: {
        h2: (props: any) => (
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-14 mb-5 border-l-4 border-blue-800 pl-4" {...props} />
        ),
        h3: (props: any) => (
          <h3 className="text-xl font-bold text-slate-800 mt-10 mb-4 border-l-4 border-blue-400 pl-4" {...props} />
        ),
        p: (props: any) => (
          <p className="text-slate-600 leading-relaxed mb-6 text-[17px]" {...props} />
        ),
        ul: (props: any) => (
          <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-600 text-[17px]" {...props} />
        ),
        ol: (props: any) => (
          <ol className="list-decimal pl-6 space-y-2 mb-8 text-slate-600 text-[17px]" {...props} />
        ),
        li: (props: any) => (
          <li className="leading-relaxed" {...props} />
        ),
        blockquote: (props: any) => (
          <blockquote className="border-l-4 border-blue-800 bg-blue-50/60 px-7 py-5 italic my-10 rounded-r-md text-slate-700 text-[17px] shadow-sm" {...props} />
        ),
        strong: (props: any) => (
          <strong className="text-blue-900 font-semibold" {...props} />
        ),
        // Table support (remark-gfm)
        table: (props: any) => (
          <div className="overflow-x-auto my-10">
            <table className="w-full text-sm text-left border-collapse" {...props} />
          </div>
        ),
        thead: (props: any) => (
          <thead className="bg-blue-800 text-white" {...props} />
        ),
        tbody: (props: any) => (
          <tbody className="divide-y divide-slate-100" {...props} />
        ),
        tr: (props: any) => (
          <tr className="even:bg-slate-50 hover:bg-blue-50 transition-colors" {...props} />
        ),
        th: (props: any) => (
          <th className="px-5 py-3 font-semibold tracking-wide text-[13px] uppercase" {...props} />
        ),
        td: (props: any) => (
          <td className="px-5 py-3 text-slate-600" {...props} />
        ),
      },
    } as any)
    .process(markdown);

  return result.result;
}

export default async function BlogDetailPage({ params }: { params: Promise<{ blog_slug: string }> }) {
  const { blog_slug } = await params;

  const post = blogData[blog_slug] ?? blogData["roof-insulation-technology"];
  const content = await getMarkdownContent(post.content);  // ← changed from post.markdownContent

  return (
    <article className="bg-white min-h-screen pb-20">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center">
          <Link href="/knowledge" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-800 transition-colors">
            <FaChevronLeft className="size-3" /> Back to Blog
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
        <span className="px-4 py-1.5 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mt-8 mb-10">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          <span className="flex items-center gap-2"><FaRegUser className="text-blue-800" />{post.author}</span>
          <span className="flex items-center gap-2"><FaRegCalendarAlt className="text-blue-800" />{post.date}</span>
          <span className="flex items-center gap-2"><FaRegClock className="text-blue-800" />{post.readingTime}</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="rounded-sm overflow-hidden shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full object-cover aspect-video" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="prose-custom">
          {content}
        </div>
        <SocialShare title={post.title} />
      </div>
    </article>
  );
}