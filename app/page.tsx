import Link from "next/link";
import ImageCarousel from "./components/ImageCarousel";
import { HOME_IMAGES, serviceImage } from "./const/app";
import { ArrowRight, ShieldCheck, CheckCircle2, MapPin } from "lucide-react";
import { serviceData } from "./repositories/servicesData";

// ข้อมูลบริการสำหรับ Grid


export default async function Home() {
  return (
    <div className="flex flex-col bg-white dark:bg-zinc-950 min-h-screen">
      {/* 1. Hero Section: Carousel */}
      <ImageCarousel slides={HOME_IMAGES} />

      {/* 2. Highlight Section: About PaintProof */}
      <section className="py-20 border-b border-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/1.jpg"
              alt="PaintProof Service"
              className="w-full h-[400px] object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-800 text-white p-8 hidden md:block rounded-sm">
              <p className="text-4xl font-light">10+</p>
              <p className="text-xs uppercase tracking-widest opacity-80">Years Experience</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
              ผู้เชี่ยวชาญด้าน <br />
              <span className="font-semibold text-blue-800">ระบบกันซึมมาตรฐานวิศวกรรม</span>
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Waterproof Phuket มอบบริการทาสีกันซึมคุณภาพสูง (Paint Proof)
              ที่ถูกออกแบบมาเพื่อสภาพอากาศร้อนชื้นในภูเก็ตโดยเฉพาะ
              ช่วยปกป้องอาคารของคุณจากความชื้น การรั่วซึม และการกัดเซาะจากไอทะเล
            </p>

            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="flex gap-4 items-start">
                <div className="mt-1"><ShieldCheck className="text-blue-800 size-5" /></div>
                <div>
                  <h3 className="font-semibold text-slate-900">วัสดุเกรดพรีเมียม</h3>
                  <p className="text-sm text-slate-500">ทน UV และสะท้อนความร้อน ช่วยลดอุณหภูมิในอาคาร</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-3">
              <h3 className=" font-bold flex items-center gap-2">
                <MapPin className="size-4 text-blue-800" /> พื้นที่ให้บริการ
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                ครอบคลุมทั่วเกาะภูเก็ต ทั้งอำเภอเมือง, กะทู, ถลาง รวมถึงพื้นที่ใกล้เคียงอย่าง พังงา และกระบี่
              </p>
            </div>
            <div className="space-y-3">
              <h3 className=" font-bold flex items-center gap-2">
                <ShieldCheck className="size-4 text-blue-800" /> มาตรฐานสากล
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                เลือกใช้ผลิตภัณฑ์กันซึมเกรดพรีเมียม (Polyurethane & Acrylic) ที่ทนทานต่อไอเค็มทะเลและ UV สูง
              </p>
            </div>
            <div className="space-y-3">
              <h3 className=" font-bold flex items-center gap-2">
                <CheckCircle2 className="size-4 text-blue-800" /> รับประกันงาน
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                ทุกงานซ่อมและงานติดตั้งมีการรับประกันผลงาน ช่างเข้าตรวจสอบหน้างานรวดเร็วภายใน 24 ชม.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Grid Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-800 mb-3">Our Services</h2>
            <p className="text-3xl md:text-4xl font-light text-slate-900">บริการของเรา</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-1">
            {serviceImage.map((service, index) => (
              <div key={index} className="group bg-white border border-slate-100  overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="aspect-[1/1] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <a href={service.href} className="absolute bottom-4 left-4
                   items-center text-xs font-medium uppercase tracking-widest
                   bg-white rounded-full  w-fit inline-flex px-4 py-2
                     group-hover:text-blue-800 transition-colors">
                    ดูรายละเอียด <ArrowRight className="ml-2 size-3" />
                  </a>
                </div>
                <div className="md:block hidden p-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a href={service.href} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-800 transition-colors">
                    ดูรายละเอียด <ArrowRight className="ml-2 size-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ฝั่งซ้าย: เนื้อหาหลัก */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-800">
                  Expertise You Can Trust
                </h2>
                <h3 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
                  ทำไมต้องเลือก <br />
                  <span className="font-semibold text-blue-900 italic">Waterproof Phuket?</span>
                </h3>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed">
                หากคุณกำลังมองหา <strong>ช่างทาสีกันซึมดาดฟ้าในภูเก็ต</strong> หรือต้องการ <strong>ซ่อมหลังคารั่ว</strong> ที่ได้มาตรฐาน เราคือคำตอบ
                ด้วยประสบการณ์กว่า 10 ปี ในการดูแลวิลล่าและอาคารหรูทั่วเกาะภูเก็ต
              </p>

              {/* ฟีเจอร์ย่อยแบบ Grid */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4">
                  <div className="size-10 shrink-0 bg-blue-100 flex items-center justify-center rounded-sm">
                    <ShieldCheck className="text-blue-800 size-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">วัสดุคุณภาพสูง</h4>
                    <p className="text-xs text-slate-500 mt-1">Paint Proof ยืดหยุ่นสูง สะท้อนความร้อน</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-10 shrink-0 bg-blue-100 flex items-center justify-center rounded-sm">
                    <MapPin className="text-blue-800 size-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">เชี่ยวชาญพื้นที่</h4>
                    <p className="text-xs text-slate-500 mt-1">เข้าใจสภาพอากาศฝนชุกและไอทะเลภูเก็ต</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/about" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-blue-800 transition-all group">
                  อ่านเรื่องราวของเรา <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* ฝั่งขวา: Visual Element (สไตล์วิศวกรรม) */}
            <div className="relative">
              <div className="aspect-square bg-slate-200 rounded-sm relative overflow-hidden shadow-2xl">
                <img
                  src="/images/5.jpg"
                  alt="Waterproof Phuket Professional Work"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* กล่องตัวเลขลอยตัว (Floating Badge) */}
              <div className="absolute -bottom-8 -left-8 bg-blue-900 p-8 rounded-sm text-white shadow-xl hidden sm:block">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold italic">10+</span>
                  <div className="text-[10px] uppercase tracking-widest leading-tight opacity-80">
                    Years of <br /> Engineering <br /> Excellence
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-12 w-full container-x max-w-6xl border-t mb-12 border-slate-100">
        <h2 className="text-2xl font-semibold text-slate-900 mb-8">คำถามที่พบบ่อย (FAQ)</h2>
        <div className="space-y-4">
          {Object.entries(serviceData).map(([key, value]) => (value as any).faqs || []).flat().map((faq: any, idx: number) => (
            <details
              key={idx}
              className="group border border-slate-200 rounded-lg bg-white overflow-hidden transition-all"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50">
                <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                <div className="text-blue-800 transition-transform group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </summary>
              <div className="px-5 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-50 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-light mb-6">
            พร้อมแก้ไขปัญหา <span className="font-semibold">น้ำรั่วซึม</span> แล้วหรือยัง?
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            บริการประเมินหน้างานฟรีในพื้นที่ภูเก็ต โดยทีมช่างผู้เชี่ยวชาญที่มีประสบการณ์ยาวนาน
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-10 py-4 bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-widest transition-all rounded-full"
            >
              ติดต่อสอบถามฟรี
            </a>
            <a
              href="tel:0809699965"
              className="px-10 py-4 border border-slate-700 hover:bg-white hover:text-slate-900 text-white text-xs font-bold uppercase tracking-widest transition-all rounded-full"
            >
              โทรเลย: 080-969-9965
            </a>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      </section>
    </div>
  );
}