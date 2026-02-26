import { MapPin, ArrowUpRight,  Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../repositories/worksData';

export const metadata = {
  title: "ผลงานของเรา | Paintproof Phuket รวมโปรเจกต์กันซึมและรีโนเวท",
  description: "ชมผลงานการแก้ไขปัญหารั่วซึมและงานรีโนเวทอาคารทั่วภูเก็ต กว่า 500 โครงการที่ไว้วางใจในมาตรฐานวิศวกรรมของ Waterproof Phuket",
};



export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* 1. Hero Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-800 mb-4">
            Our Portfolio
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight">
            พิสูจน์ด้วยผลงาน <br />
            <span className="font-semibold text-blue-900">มาตรฐานที่จับต้องได้</span>
          </h2>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            รวบรวมความสำเร็จในการดูแลอาคารทั่วเกาะภูเก็ต จากบ้านพักอาศัย สู่โครงการเชิงพาณิชย์ขนาดใหญ่
          </p>
        </div>
      </section>

      {/* 2. Portfolio Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Filter (Static UI) */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['All Projects', 'Waterproofing', 'Renovation', 'Commercial'].map((cat, idx) => (
              <button 
                key={idx}
                className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-full border ${
                  idx === 0 ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-400 border-slate-200 hover:border-slate-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 rounded-sm shadow-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="size-5 text-blue-800" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6 flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-800">
                      <span>{project.category}</span>
                      <span className="w-4 h-[1px] bg-blue-200"></span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="size-3" /> {project.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-light text-slate-900 group-hover:text-blue-900 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More / Pagination */}
          {/* <div className="mt-20 text-center">
            <button className="px-10 py-4 border border-slate-200 text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all rounded-sm">
              View More Projects
            </button>
          </div> */}
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="bg-slate-900 py-24 px-6 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6">พร้อมให้เราดูแล <span className="font-semibold text-blue-400">อาคารของคุณ</span> หรือยัง?</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">
            ประเมินหน้างานฟรีโดยทีมวิศวกร เพื่อการแก้ไขที่ตรงจุดและคุ้มค่าที่สุด
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all rounded-sm flex items-center gap-3">
               ติดต่อสอบถาม <MessageSquare className="size-4" />
            </Link>
            <a href="tel:0809699965" className="px-8 py-4 border border-slate-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all rounded-sm flex items-center gap-3">
              <Phone className="size-3" /> 080-969-9965
            </a>
          </div>
        </div>
        {/* Background Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}