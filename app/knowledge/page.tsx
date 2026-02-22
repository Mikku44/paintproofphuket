import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

const posts = [
   {
    id: 0,
    slug: "roof-insulation-technology",
    title: "นวัตกรรมการพ่นสีหลังคากันความร้อน ช่วยลดอุณหภูมิในบ้านได้จริงหรือ?",
    excerpt: "เจาะลึกเทคโนโลยีสีสะท้อนรังสีความร้อนที่กำลังได้รับความนิยมในพื้นที่ชายฝั่งทะเล...",
    date: "20 Feb 2026",
    author: "Admin",
    category: "ความรู้เรื่องบ้าน",
    image: "/images/tech.png",
    featured: true,
  },
  {
    id: 1,
    slug: "warning-signs-waterproofing",
    title: "5 สัญญาณเตือนว่าดาดฟ้าของคุณกำลังต้องการระบบกันซึมใหม่",
    excerpt: "อย่าปล่อยให้รอยร้าวเล็กๆ กลายเป็นปัญหาระดับโครงสร้าง เรียนรู้วิธีสังเกตอาการก่อนงบบานปลาย...",
    date: "15 Feb 2026",
    author: "Admin",
    category: "ความรู้เรื่องบ้าน",
    image: "/images/1.jpg"
  },
  {
    id: 2,
    slug: "pu-vs-acrylic",
    title: "เปรียบเทียบระบบกันซึม PU vs Acrylic แบบไหนเหมาะกับภูเก็ต?",
    excerpt: "เจาะลึกข้อดีข้อเสียของวัสดุกันซึมแต่ละประเภท เพื่อการตัดสินใจที่คุ้มค่าที่สุดสำหรับบ้านของคุณ",
    date: "10 Feb 2026",
    author: "Engineer Team",
    category: "รีวิววัสดุ",
    image: "/images/pu.png"
  },
  {
    id: 3,
    slug: "renovation-case-study",
    title: "ขั้นตอนการรีโนเวทบ้านเก่าให้กลับมาดูใหม่ พร้อมระบบกันความร้อน",
    excerpt: "เคสศึกษาการปรับปรุงบ้านพักอาศัยอายุ 20 ปี ในจังหวัดภูเก็ต ให้ทันสมัยและเย็นสบายขึ้น",
    date: "05 Feb 2026",
    author: "Admin",
    category: "ผลงานของเรา",
    image: "/images/blog.jpg"
  }
];

export const metadata = {
  title: "สาระน่ารู้เรื่องบ้านและงานกันซึม | Blog & Insights - PaintProof Phuket",
  description: "ศูนย์รวมบทความและเทคนิคการดูแลบ้านจากผู้เชี่ยวชาญ เจาะลึกเรื่องระบบกันซึม การเลือกวัสดุ PU vs Acrylic นวัตกรรมสีกันความร้อน และเคสรีโนเวทจริงในภูเก็ต",
  keywords: [
    "ความรู้เรื่องบ้าน",
    "วิธีแก้ดาดฟ้ารั่ว",
    "สีทากันความร้อน",
    "รีวิวกันซึม PU vs Acrylic",
    "รีโนเวทบ้าน ภูเก็ต",
    "การดูแลอาคาร",
    "PaintProof Phuket Blog"
  ],
  openGraph: {
    title: "บทความและสาระน่ารู้เรื่องการดูแลอาคาร - PaintProof Phuket",
    description: "อัปเดตเทรนด์นวัตกรรมกันซึมและเทคนิคการรีโนเวทบ้านให้น่าอยู่ พร้อมคำแนะนำจากทีมวิศวกรมืออาชีพ",
    // url: "https://yourdomain.com/knowledge", // Replace with your actual URL
    siteName: "PaintProof Phuket",
    images: [
      {
        url: "/images/tech.png", // Using your featured post image
        width: 1200,
        height: 630,
        alt: "นวัตกรรมการพ่นสีหลังคากันความร้อน",
      },
    ],
    locale: "th_TH",
    type: "article",
  },
};

export default function BlogPage() {

  const featuredPost = posts.find((p) => p.featured);
  const gridPosts = posts.filter((p) => !p.featured);


  return (
    <div className="bg-white min-h-screen text-slate-800 ">
      {/* 1. Header Section */}
      <section className="border-b border-slate-100 bg-slate-50/30 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-800 mb-4">
                Knowledge & Insights
              </h1>
              <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight">
                บทความและ <br />
                <span className="font-semibold text-blue-900">สาระน่ารู้เรื่องการดูแลอาคาร</span>
              </h2>
            </div>
            <div className="flex gap-3">
              <span className="px-4 py-2 bg-white border rounded-full border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-500 cursor-pointer hover:border-blue-800 transition-colors">
                ทั้งหมด
              </span>
              <span className="px-4 py-2 bg-white border rounded-full border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-500 cursor-pointer hover:border-blue-800 transition-colors">
                งานกันซึม
              </span>
              <span className="px-4 py-2 bg-white border rounded-full border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-500 cursor-pointer hover:border-blue-800 transition-colors">
                รีโนเวท
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Post (Main highlighted blog) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <Link href={`/knowledge/${featuredPost?.slug}`} className="group grid md:grid-cols-2 gap-10 items-center border-b border-slate-100 pb-16">
          <div className="overflow-hidden bg-slate-100 aspect-video md:aspect-square lg:aspect-video rounded-sm">
            <img src={featuredPost?.image} alt={featuredPost?.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-blue-800">
              <Tag className="size-3" /> Featured Post
            </div>
            <h3 className="text-3xl font-semibold text-slate-900 group-hover:text-blue-800 transition-colors leading-snug">
              {featuredPost?.title}
            </h3>
            <p className="text-slate-500 leading-relaxed italic text-lg">"{featuredPost?.excerpt}"</p>
            <div className="flex items-center gap-6 text-slate-400 text-xs font-medium">
              <span className="flex items-center gap-2"><Calendar className="size-3" /> {featuredPost?.date}</span>
              <span className="flex items-center gap-2"><User className="size-3" /> By {featuredPost?.author}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 pt-4">
              อ่านบทความฉบับเต็ม <ArrowRight className="size-3 text-blue-800" />
            </div>
          </div>
        </Link>
      </section>

      {/* 3. Blog Grid Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {gridPosts.map((post) => (
            <Link href={`/knowledge/${post.slug}`} key={post.id} className="group">
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden bg-slate-50 mb-6 rounded-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:brightness-90 transition-all duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-800">
                    {post.category}
                  </p>
                  <h4 className="text-xl font-semibold text-slate-900 group-hover:text-blue-800 transition-colors leading-tight">
                    {post.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{post.date}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">Read More +</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* 4. Pagination (Simplified) */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex justify-center">
          <nav className="flex items-center gap-8">
            <button className="text-xs font-bold uppercase tracking-widest text-slate-300 cursor-not-allowed">Previous</button>
            <div className="flex gap-4">
              <span className="text-xs font-bold text-blue-800">01</span>
              {/* <span className="text-xs font-bold text-slate-400 hover:text-slate-900 cursor-pointer transition-colors">02</span>
              <span className="text-xs font-bold text-slate-400 hover:text-slate-900 cursor-pointer transition-colors">03</span> */}
            </div>
            <button className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-blue-800 transition-colors">Next</button>
          </nav>
        </div>
      </section>
    </div>
  );
}