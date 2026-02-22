import {   ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { BsShieldLock } from 'react-icons/bs';

export const metadata = {
  title: "นโยบายความเป็นส่วนตัว (Privacy Policy) | Waterproof Phuket",
  description: "นโยบายความเป็นส่วนตัวของ Waterproof Phuket รายละเอียดการเก็บรวบรวม การใช้ และการคุ้มครองข้อมูลส่วนบุคคลของลูกค้าตามกฎหมาย PDPA",
  robots: {
    index: false, // Usually, you don't want legal pages to compete for SEO rankings
    follow: true,
  },
};

export default function PrivacyPolicy() {
  const lastUpdated = "22 กุมภาพันธ์ 2026";

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      {/* Header Section */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-6">
            <BsShieldLock className="size-6 text-blue-800" />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            นโยบายความเป็นส่วนตัว
          </h1>
          <p className="text-slate-500 text-sm uppercase tracking-widest">
            Privacy Policy • แก้ไขล่าสุดเมื่อ: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <main className="max-w-3xl mx-auto py-20 px-6">
        <div className="prose prose-slate max-w-none space-y-12">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="p-1 bg-slate-100 rounded text-blue-800">01</span>
              บทนำ
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Waterproof Phuket ("เรา") ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของท่าน 
              นโยบายนี้อธิบายถึงวิธีการที่เราเก็บรวบรวม ใช้ และป้องกันข้อมูลที่ท่านให้ไว้ผ่านทางเว็บไซต์ 
              และบริการของเรา เพื่อให้เป็นไปตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="p-1 bg-slate-100 rounded text-blue-800">02</span>
              ข้อมูลที่เราเก็บรวบรวม
            </h2>
            <p className="text-slate-600 mb-4">เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลที่ท่านให้ไว้โดยสมัครใจเมื่อท่านติดต่อสอบถามบริการ ดังนี้:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "ชื่อ-นามสกุล",
                "เบอร์โทรศัพท์ติดต่อ",
                "อีเมล (Email Address)",
                "ที่อยู่โครงการหรือสถานที่รับบริการ",
                "รูปภาพหน้างานเพื่อการประเมินราคา"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="size-1.5 bg-blue-800 rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-blue-50/50 p-8 rounded-sm border border-blue-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="p-1 bg-white rounded text-blue-800 shadow-sm">03</span>
              วัตถุประสงค์ในการใช้ข้อมูล
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>• เพื่อใช้ในการติดต่อกลับและนัดหมายเข้าดูหน้างาน</p>
              <p>• เพื่อจัดทำใบเสนอราคาและสัญญาจ้างบริการกันซึมหรือรีโนเวท</p>
              <p>• เพื่อใช้ในการติดต่อสื่อสารระหว่างดำเนินงานและบริการหลังการขาย</p>
              <p>• เพื่อปรับปรุงคุณภาพการบริการและเว็บไซต์ให้ดียิ่งขึ้น</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="p-1 bg-slate-100 rounded text-blue-800">04</span>
              การรักษาความปลอดภัยของข้อมูล
            </h2>
            <p className="text-slate-600 leading-relaxed">
              เราใช้มาตรการทางเทคนิคและองค์กรที่เหมาะสม เพื่อป้องกันข้อมูลส่วนบุคคลของท่านจากการเข้าถึงโดยไม่ได้รับอนุญาต 
              การสูญหาย หรือการนำข้อมูลไปใช้ในทางที่ผิด ข้อมูลของท่านจะถูกเก็บรักษาไว้เป็นความลับและเข้าถึงได้เฉพาะบุคคลที่เกี่ยวข้องเท่านั้น
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="p-1 bg-slate-100 rounded text-blue-800">05</span>
              สิทธิของเจ้าของข้อมูล
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล ท่านมีสิทธิในการ:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 border border-slate-100 rounded">
                <p className="text-xs font-bold text-blue-800 uppercase mb-1">Access</p>
                <p className="text-[11px] text-slate-500">ขอเข้าถึงข้อมูล</p>
              </div>
              <div className="p-4 border border-slate-100 rounded">
                <p className="text-xs font-bold text-blue-800 uppercase mb-1">Rectify</p>
                <p className="text-[11px] text-slate-500">ขอแก้ไขข้อมูล</p>
              </div>
              <div className="p-4 border border-slate-100 rounded">
                <p className="text-xs font-bold text-blue-800 uppercase mb-1">Erasure</p>
                <p className="text-[11px] text-slate-500">ขอให้ลบข้อมูล</p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-100 pt-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">ติดต่อเจ้าหน้าที่คุ้มครองข้อมูล</h2>
            <p className="text-slate-600 text-sm mb-6">
              หากท่านมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ โปรดติดต่อเราที่:
            </p>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-slate-900">Waterproof Phuket (PaintProof)</p>
              <p className="text-slate-500">อีเมล: paintproof.office@gmail.com</p>
              <p className="text-slate-500">โทรศัพท์: 080-969-9965</p>
            </div>
          </section>
        </div>

        {/* Footer Link */}
        <div className="mt-20 text-center">
          <Link href="/" className="text-xs font-bold uppercase tracking-widest text-blue-800 hover:text-slate-900 transition-colors inline-flex items-center gap-2">
            กลับสู่หน้าหลัก <ChevronRight className="size-3" />
          </Link>
        </div>
      </main>
    </div>
  );
}