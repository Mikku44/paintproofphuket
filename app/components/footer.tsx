'use client';
import  { useState, useEffect } from 'react';
import { 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  ShieldCheck,

} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { APP_MENU, SERVICES } from '../const/app';


const CONTACT_INFO = [
  {
    type: "Phone",
    value: "080-969-9965",
    href: "tel:0809699965",
    icon: <Phone className="size-4" />,
    sub: "โทรปรึกษาฟรี 24 ชม."
  },
  {
    type: "Email",
    value: "paintproof.office@gmail.com",
    href: "mailto:paintproof.office@gmail.com",
    icon: <Mail className="size-4" />,
    sub: "ตอบกลับภายใน 24 ชม."
  },
  {
    type: "Address",
    value: "100/56 หมู่ 3 ต.วิชิต อ.เมือง จ.ภูเก็ต",
    href: "#",
    icon: <MapPin className="size-4" />,
    sub: "83000"
  }
];

// --- Components ---

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-600  border-t border-slate-200">
    

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand & Description Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col gap-3">
              <div className="w-[220px] h-auto  flex items-center justify-center ">
                <img src="/logo.jpg" alt="PaintProof Logo" className="mix-blend-darken" />
              </div>
              {/* <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">PAINTPROOF</h2>
                <p className="text-xs font-bold text-blue-700 tracking-[0.2em] uppercase">Waterproofing Co.</p>
              </div> */}
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm text-justify">
              เราคือผู้เชี่ยวชาญด้านการกันซึมและการป้องกันความชื้นครบวงจร ด้วยทีมงานวิศวกรและช่างเทคนิคที่ได้รับการรับรองมาตรฐาน ให้บริการด้วยความซื่อสัตย์และระบบงานที่ได้มาตรฐานสากล
            </p>

            {/* Certification Badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-sm shadow-sm">
              <ShieldCheck className="size-8 text-blue-800" />
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold">Certified Contractor</p>
                <p className="text-sm font-bold text-slate-800">ประสบการณ์กว่า 10 ปี</p>
              </div>
            </div>
          </div>

          {/* Links Columns Container */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {/* Navigation */}
            <div>
              <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-6 border-l-4 border-blue-700 pl-3">
                หมวดหมู่
              </h3>
              <ul className="space-y-3">
                {APP_MENU.map((item) => (
                  <li key={item.href}>
                    <a 
                      href={item.href} 
                      className="group flex items-center text-slate-500 hover:text-blue-700 transition-colors text-sm font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3 group-hover:bg-blue-700 transition-colors" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-6 border-l-4 border-blue-700 pl-3">
                บริการหลัก
              </h3>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.label}>
                    <a 
                      href={service.href} 
                      className="group flex items-center text-slate-500 hover:text-blue-700 transition-colors text-sm font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3 group-hover:bg-blue-700 transition-colors" />
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 h-fit">
            <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-6 border-l-4 border-blue-700 pl-3">
              ข้อมูลติดต่อ
            </h3>
            
            <div className="space-y-5">
              {CONTACT_INFO.map((item) => (
                <div key={item.type} className="flex gap-3">
                  <div className="mt-1 text-blue-700">
                    {item.icon}
                  </div>
                  <div>
                    <a 
                      href={item.href} 
                      className="block text-slate-900 font-semibold text-sm hover:text-blue-700 transition-colors"
                    >
                      {item.value}
                    </a>
                    <span className="text-xs text-slate-400">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <a 
                href="https://www.facebook.com/Waterproofphuket"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white text-sm font-medium rounded transition-colors"
              >
                <Facebook className="size-4" />
                ติดตามเราบน Facebook
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} PaintProof Company Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* <a href="#" className="hover:text-slate-800">นโยบายความเป็นส่วนตัว</a>
            <a href="#" className="hover:text-slate-800">เงื่อนไขการให้บริการ</a> */}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-900 hover:bg-blue-800 text-white rounded shadow-lg z-50 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="size-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}