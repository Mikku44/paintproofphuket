import React from 'react';
import { Facebook, Mail, Phone, MapPin, Send } from 'lucide-react';
import { SERVICES } from '../const/app';

const contactLinks = [
  {
    name: "เฟซบุ๊ก",
    icon: <Facebook className="size-4" />,
    href: "https://www.facebook.com/Waterproofphuket",
    label: "Waterproof Phuket",
  },
  {
    name: "อีเมล",
    icon: <Mail className="size-4" />,
    href: "mailto:paintproof.office@gmail.com",
    label: "paintproof.office@gmail.com",
  },
  {
    name: "โทรศัพท์",
    icon: <Phone className="size-4" />,
    href: "tel:0809699965",
    label: "080-969-9965",
  },
];


export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800 ">
      {/* ส่วนหัวของหน้า (Hero Section) */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-6xl mx-auto py-16 px-6">
          <h1 className="text-3xl md:text-4xl font-light text-slate-900">
            ติดต่อ <span className="font-semibold text-blue-800">เรา</span>
          </h1>
          <p className="mt-4 text-slate-500 max-w-2xl leading-relaxed">
            ยินดีให้คำปรึกษาและประเมินราคาหน้างานโดยทีมช่างผู้เชี่ยวชาญ 
            เราใช้วัสดุมาตรฐานสากลเพื่อการแก้ปัญหาที่ยั่งยืน ในพื้นที่ภูเก็ตและจังหวัดใกล้เคียง
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* คอลัมน์ซ้าย: ข้อมูลการติดต่อและแผนที่ */}
          <div className="lg:col-span-5 space-y-10">
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                ช่องทางการติดต่อ
              </h2>
              <div className="space-y-6">
                {contactLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="group flex items-center gap-4 text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    <div className="p-3 border border-slate-200 group-hover:border-blue-200 bg-white rounded-sm transition-all shadow-sm">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{link.name}</p>
                      <p className="text-md font-medium">{link.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                ที่ตั้งสำนักงาน
              </h2>
              <div className="aspect-video w-full border border-slate-200 grayscale-[0.3] hover:grayscale-0 transition-all duration-700 rounded-sm overflow-hidden shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.28548123!2d98.284410!3d7.880447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031fd2d6380a3%3A0x8dd35920cf97791!2z4Lig4Li54LmA4LiB4LmH4LiV!5e0!3m2!1sth!2sth!4v1710000000000" 
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </section>
          </div>

          {/* คอลัมน์ขวา: แบบฟอร์มสอบถาม */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-sm shadow-sm relative overflow-hidden">
              
              <h2 className="text-xl font-semibold text-slate-900 mb-8">ส่งคำขอรับบริการ</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">ชื่อ-นามสกุล</label>
                    <input
                      type="text"
                      className="w-full border-b border-slate-300 py-2 focus:border-blue-800 outline-none transition-colors bg-transparent"
                      placeholder="ระบุชื่อผู้ติดต่อ"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">เบอร์โทรศัพท์</label>
                    <input
                      type="tel"
                      className="w-full border-b border-slate-300 py-2 focus:border-blue-800 outline-none transition-colors bg-transparent"
                      placeholder="08X-XXX-XXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">บริการที่สนใจ</label>
                  <select defaultValue={SERVICES[0].label} className="w-full border-b border-slate-300 py-2 bg-transparent focus:border-blue-800 outline-none transition-colors appearance-none cursor-pointer">
                    <option value="" disabled >กรุณาเลือกประเภทงานบริการ</option>
                    {SERVICES.map((service, index) => (
                      <option key={index} value={service.label}>{service.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">รายละเอียดข้อความ</label>
                  <textarea
                    rows={4}
                    className="w-full border border-slate-200 p-3 focus:border-blue-800 outline-none transition-colors bg-slate-50/50 rounded-sm"
                    placeholder="ระบุรายละเอียดปัญหา หรือขนาดพื้นที่โดยสังเขป..."
                  ></textarea>
                </div>

                <div className="pt-2 ">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-3 w-full  rounded-xl px-12 py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-blue-800 transition-all duration-300"
                  >
                    ส่งข้อมูล <Send className="size-3" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}