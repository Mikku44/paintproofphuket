import { ShieldCheck, Users, HardHat, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "เกี่ยวกับเรา | Paintproof Phuket ผู้เชี่ยวชาญระบบกันซึมและรีโนเวทอาคาร",
  description: "รู้จัก Paintproof Phuket ทีมช่างมืออาชีพที่มีประสบการณ์กว่า 10 ปี ด้านระบบกันซึมมาตรฐานวิศวกรรมและการรีโนเวทอาคารในภูเก็ต มุ่งมั่นฟื้นฟูอาคารด้วยวัสดุเกรดพรีเมียม",
  keywords: [
    "เกี่ยวกับ Paintproof Phuket",
    "ช่างซ่อมบ้าน ภูเก็ต",
    "บริษัทรีโนเวท ภูเก็ต",
    "ประสบการณ์งานกันซึม",
    "ซ่อมดาดฟ้า ภูเก็ต",
    "รีโนเวทอาคาร ภูเก็ต",
    "Paint Proof Phuket"
  ],
  openGraph: {
    title: "รู้จัก Waterproof Phuket - ผู้นำด้านระบบกันซึมและงานวิศวกรรมอาคาร",
    description: "ปกป้องการลงทุนของคุณด้วยเทคโนโลยีกันซึมมาตรฐานสากล และทีมช่างผู้เชี่ยวชาญที่มีผลงานกว่า 500 โครงการในภูเก็ต",
    // url: "https://yourdomain.com/about", // Replace with your actual URL
    siteName: "Waterproof Phuket",
    images: [
      {
        url: "/images/2.jpg", // Using the team image from your code
        width: 1200,
        height: 630,
        alt: "ทีมงาน Waterproof Phuket",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. Header Section */}
      <section className="bg-slate-50 border-b border-slate-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-800 mb-4">
            About Waterproof Phuket
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight">
            มุ่งมั่นสู่การเป็นผู้นำด้าน <br />
            <span className="font-semibold text-blue-900">ระบบกันซึมและงานวิศวกรรมอาคาร</span>
          </h2>
        </div>
      </section>

      {/* 2. Our Story & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-slate-200 rounded-sm overflow-hidden shadow-2xl">
              <img
                src="/images/2.jpg"
                alt="ทีมงาน Waterproof Phuket"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* ตราประทับความสำเร็จ */}
            <div className="absolute rounded-sm -bottom-8 -left-8 bg-white p-10 border border-slate-100 shadow-xl hidden lg:block">
              <p className="text-5xl font-bold text-blue-800">10+</p>
              <p className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-semibold">Years of Quality</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">ประสบการณ์และความเชี่ยวชาญ</h3>
              <p className="text-slate-500 leading-relaxed">
                Waterproof Phuket เริ่มต้นจากการเล็งเห็นปัญหาการรั่วซึมของอาคารในพื้นที่ภูเก็ต
                ซึ่งเป็นจังหวัดที่มีสภาพอากาศร้อนชื้นและมีฝนตกชุกตลอดปี
                เราจึงทุ่มเทศึกษาและพัฒนาระบบกันซึมที่เหมาะสมกับสภาพอากาศในพื้นที่โดยเฉพาะ
              </p>
              <p className="text-slate-500 leading-relaxed">
                เราเชื่อว่าบ้านและอาคารคือการลงทุนที่สำคัญที่สุด
                ภารกิจของเราคือการปกป้องการลงทุนนั้นด้วยเทคโนโลยีกันซึมมาตรฐานสากล
                และการบริการที่ซื่อสัตย์ต่อลูกค้า
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 gap-6 pt-6">
              {[
                { title: "มาตรฐานวิศวกรรม", desc: "เลือกใช้วัสดุและเทคนิคการติดตั้งที่ถูกต้องตามหลักวิศวกรรม" },
                { title: "รับประกันผลงาน", desc: "มีการติดตามผลและรับประกันงานหลังการส่งมอบ" },
                { title: "ตรงต่อเวลา", desc: "บริหารจัดการงานอย่างเป็นระบบ จบงานตามกำหนดการ" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="p-2 border rounded-full border-slate-200 group-hover:border-blue-200 transition-colors">
                    <CheckCircle2 className="size-5 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">{item.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Section (Clean Minimalist) */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Completed Projects", value: "500+" },
            { label: "Expert Workers", value: "25+" },
            { label: "Client Satisfaction", value: "100%" },
            { label: "Area Covered", value: "Phuket" }
          ].map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <p className="text-4xl font-light text-white">{stat.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us (Grid Icons) */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-800 mb-12">
          Why Choose Our Professional Service
        </h3>
        <div className="grid md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <div className="flex justify-center"><ShieldCheck className="size-10 text-slate-300" /></div>
            <h4 className="text-lg font-semibold">Reliability</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              เราเลือกใช้เฉพาะผลิตภัณฑ์กันซึมเกรดพรีเมียม (Paint Proof)
              ที่ผ่านการทดสอบแล้วว่าทนทานต่อรังสียูวีและไอเค็มจากทะเล
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center"><Users className="size-10 text-slate-300" /></div>
            <h4 className="text-lg font-semibold">Expert Team</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              ทีมช่างของเราผ่านการฝึกอบรมเฉพาะทางด้านงานกันซึมและงานรีโนเวท
              เข้าใจปัญหาหน้างานที่ซับซ้อนและรู้วิธีแก้ไขที่ต้นเหตุ
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center"><HardHat className="size-10 text-slate-300" /></div>
            <h4 className="text-lg font-semibold">Quality Control</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              ทุกขั้นตอนการทำงานมีการตรวจสอบคุณภาพอย่างละเอียด (Quality Check)
              เพื่อให้มั่นใจว่างานจะไม่มีปัญหาการรั่วซึมซ้ำซาก
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

            {/* 1. Image Banner Area (9:16 Aspect Ratio) */}
            <div className="md:col-span-5 lg:col-span-4">
              <div className="relative aspect-[13/16] w-full overflow-hidden rounded-sm shadow-2xl group">
                <img
                  src="/images/banner.jpg"
                  alt="Renovation Work"
                  className="w-full h-full object-cover transition-transform duration-1000 "
                />
                {/* Overlay Decor */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>


              </div>
            </div>

            {/* 2. Content Area */}
            <div className="md:col-span-7 lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-800">Premium Renovation</h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-tight">
                  ที่สุดของงานปรับปรุง <br />
                  <span className="font-semibold">และรีโนเวทอาคาร</span>
                </h3>
              </div>

              <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                เราไม่เพียงแค่ซ่อมแซม แต่เราคือการฟื้นฟูอาคารของคุณให้กลับมามีชีวิตชีวาอีกครั้ง
                ด้วยการคัดสรรวัสดุคุณภาพสูงและทีมช่างที่ใส่ใจในทุกรายละเอียดงานผิวและโครงสร้าง
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-light text-slate-900 tracking-tighter">100+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Projects Done</span>
                </div>
                <div className="w-[1px] h-12 bg-slate-200 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-light text-slate-900 tracking-tighter">100%</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Quality Assured</span>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-4 bg-blue-800 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-all rounded-sm flex items-center gap-3">
                  รับคำปรึกษาฟรี <ArrowRight className="size-4" />
                </Link>
                <a href="tel:0809699965" className="px-8 py-4 border border-slate-200 text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-all rounded-sm flex items-center gap-3">
                  <Phone className="size-3" /> 080-969-9965
                </a>
              </div>
            </div>

          </div>


        </div>
      </section>

      <section>
        <div className="container-x grid md:grid-cols-4 grid-cols-2 gap-2">
         {[
            "/images/banner2.jpg",
            "/images/banner3.jpg",
            "/images/banner4.jpg",
            "/images/banner5.jpg"
         ].map((image, index) => <div key={index} className="relative aspect-[13/16] w-full overflow-hidden rounded-sm shadow-2xl group">
            <img
              src={image}
              alt="Renovation Work"
              loading='lazy'
              className="w-full h-full object-cover transition-transform duration-1000 "
            />
            {/* Overlay Decor */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>


          </div>)}
        </div>
      </section>



      {/* 5. Closing CTA */}
      <section className="pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto border-t border-slate-100 pt-16">
          <p className="text-slate-500 italic mb-8">
            "คุณภาพงานที่คงทน คือหัวใจสำคัญของการทำงานของเรา"
          </p>
          <a
            href="/contact"
            className="inline-block border-b-2 border-blue-800 pb-2 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-blue-800 transition-all"
          >
            ร่วมงานกับเราวันนี้
          </a>
        </div>
      </section>
    </div>
  );
}