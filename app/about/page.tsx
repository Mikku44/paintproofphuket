import { ShieldCheck, Users, HardHat,  CheckCircle2 } from 'lucide-react';

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
            <div className="absolute -bottom-8 -left-8 bg-white p-10 border border-slate-100 shadow-xl hidden lg:block">
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
                  <div className="p-2 border border-slate-200 group-hover:border-blue-200 transition-colors">
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