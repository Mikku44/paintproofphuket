import ImageCarousel from "./components/ImageCarousel";
import { HOME_IMAGES } from "./const/app";
import { ArrowRight, ShieldCheck, Paintbrush, Home as HomeIcon } from "lucide-react";

// ข้อมูลบริการสำหรับ Grid
const services = [
  {
    title: "กันซึมดาดฟ้า หลังคา ผนัง",
    description: "ติดตั้งระบบกันซึมมาตรฐานสากล ป้องกันน้ำรั่วซึมเข้าสู่โครงสร้างอาคารอย่างถาวร",
    image: "/images/service1.jpg"
  },
  {
    title: "ซ่อมแซมรอยรั่ว รอยแตกร้าว",
    description: "วิเคราะห์และแก้ไขปัญหารอยร้าวด้วยวัสดุประสานประสิทธิภาพสูง ทนทานต่อแรงมัดตัว",
    image: "/images/service2.jpg"
  },
  {
    title: "งานติดตั้ง ซ่อมฝ้าเพดาน",
    description: "บริการงานฝ้าครบวงจร แก้ไขปัญหาฝ้าบวมชื้นจากน้ำรั่ว พร้อมตกแต่งให้เรียบเนียน",
    image: "/images/service3.jpg"
  },
  {
    title: "งานพ่นสีหลังคา ซ่อมหลังคา",
    description: "ฟื้นฟูหลังคาเก่าให้ใหม่ด้วยสีสะท้อนความร้อน พร้อมระบบกันซึมคุณภาพสูง",
    image: "/images/service4.jpg"
  },
  {
    title: "ซ่อมพื้นปูน กระเบื้อง ภายนอก",
    description: "ซ่อมบำรุงพื้นผิวภายนอก ปูกระเบื้อง และแก้ไขปัญหาพื้นแตกร้าวจากการทรุดตัว",
    image: "/images/service5.jpg"
  },
  {
    title: "รีโนเวทบ้าน อาคาร",
    description: "ปรับปรุงอาคารเก่าให้ทันสมัย แข็งแรง และตอบโจทย์การใช้งานยุคใหม่",
    image: "/images/service6.jpg"
  }
];

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

      {/* 3. Services Grid Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-800 mb-3">Our Services</h2>
            <p className="text-3xl md:text-4xl font-light text-slate-900">บริการของเรา</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-1">
            {services.map((service, index) => (
              <div key={index} className="group bg-white border border-slate-100  overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="aspect-[1/1] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <a href="/services" className="absolute bottom-4 left-4
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
                  <a href="/services" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-800 transition-colors">
                    ดูรายละเอียด <ArrowRight className="ml-2 size-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
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