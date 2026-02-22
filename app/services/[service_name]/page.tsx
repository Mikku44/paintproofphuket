import { serviceData } from '@/app/repositories/servicesData';
import { CheckCircle2, ShieldCheck, Clock,  ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { service_name: string } }) {
  const { service_name } = await params;
  const service = serviceData[service_name] || serviceData['waterproofing'];

  // Fallback keywords based on service name
  const dynamicKeywords = service_name === 'waterproofing' 
    ? ["กันซึมดาดฟ้า", "ซ่อมรอยรั่ว", "ช่างกันซึมภูเก็ต"] 
    : ["รีโนเวทบ้าน", "ปรับปรุงอาคาร", "รับเหมาภูเก็ต"];

  return {
    title: `${service.title} | PaintProof Phuket`,
    description: `${service.description} บริการโดยทีมช่างมืออาชีพในภูเก็ต พร้อมรับประกันผลงานและประเมินหน้างานฟรี`,
    keywords: [...dynamicKeywords, "PaintProof Phuket", "บริการช่างซ่อมบ้าน"],
    openGraph: {
      title: `${service.title} - PaintProof Phuket`,
      description: service.description,
      // url: `https://paintproofphuket.com/services/${service_name}`,
      siteName: "PaintProof Phuket",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "th_TH",
      type: "website",
    },
  };
}


export  default async  function ServiceDetailPage({ params }: { params: { service_name: string } }) {
  // ดึงข้อมูลตาม Params (ในที่นี้ทำตัวอย่างเป็น 'waterproofing')
  const { service_name } = await params
  const service = serviceData[service_name] || serviceData['waterproofing'];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[400px] flex items-center bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 w-full text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-lg text-slate-200 leading-relaxed font-light">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Content Left */}
          <div className="lg:col-span-8 space-y-12">
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 border-l-4 border-blue-800 pl-4">รายละเอียดบริการ</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {service.fullDetail}
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-6 bg-slate-50 p-8 rounded-sm">
              {service.benefits.map((benefit: string, idx: number) => (
                <div key={idx} className="flex gap-3 items-center">
                  <CheckCircle2 className="size-5 text-blue-800 shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </section>

            {/* Work Process */}
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold text-slate-900">ขั้นตอนการดำเนินงาน</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.process.map((step: any, idx: number) => (
                  <div key={idx} className="flex gap-5">
                    <div className="text-4xl font-black text-slate-100">{idx + 1}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Right */}
          <div className="lg:col-span-4 space-y-8">
            <div className="border border-slate-100 p-8 rounded-sm shadow-sm sticky top-28">
              <h3 className="text-xl font-bold mb-6">สนใจบริการนี้?</h3>
              <p className="text-sm text-slate-500 mb-8">
                ประเมินราคาเบื้องต้นและปรึกษาหน้างานฟรีโดยทีมช่างมืออาชีพในภูเก็ต
              </p>
              
              <div className="space-y-4">
                <Link 
                  href="/contact" 
                  className="w-full flex rounded-full justify-center items-center py-4 bg-blue-800 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-all"
                >
                  ส่งข้อความสอบถาม
                </Link>
                <a 
                  href="tel:0809699965" 
                  className="w-full flex rounded-full justify-center items-center py-4 border border-slate-200 text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-all gap-2"
                >
                  <Phone className="size-3" /> 080-969-9965
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <ShieldCheck className="size-5 text-blue-800" />
                  <span className="text-xs font-semibold">มีประกันงานหลังซ่อม</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Clock className="size-5 text-blue-800" />
                  <span className="text-xs font-semibold">นัดดูหน้างานได้ใน 24 ชม.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 4. Related Service Link */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-xl font-light">ต้องการรีโนเวทบ้านหรืออาคารเพิ่มเติม?</h3>
          <Link href="/services/renovation" className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-blue-800 group">
            ดูงานรีโนเวท <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}