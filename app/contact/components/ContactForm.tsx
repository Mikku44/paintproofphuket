"use client";

import React, { useRef, useState } from 'react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '@/app/const/app';


export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsPending(true);

    try {
      // แทนที่ด้วย ID ของคุณจาก EmailJS Dashboard
    
      
      setIsSuccess(true);
      formRef.current.reset();
      
      // กลับสู่สถานะปกติหลังจาก 5 วินาที
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      alert('เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง หรือติดต่อทางโทรศัพท์');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-sm shadow-sm relative overflow-hidden">
      {/* Success Overlay */}
      {isSuccess && (
        <div className="absolute inset-0 bg-white/95 z-10 flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
          <CheckCircle2 className="size-16 text-green-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-900">ส่งข้อมูลสำเร็จ!</h3>
          <p className="text-slate-500 mt-2">เจ้าหน้าที่ได้รับข้อมูลแล้ว และจะติดต่อกลับโดยเร็วที่สุด</p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="mt-6 text-xs font-bold uppercase tracking-widest text-blue-800 underline"
          >
            ส่งข้อความอื่นอีกครั้ง
          </button>
        </div>
      )}

      <h2 className="text-xl font-semibold text-slate-900 mb-8">ส่งคำขอรับบริการ</h2>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">ชื่อ-นามสกุล</label>
            <input
              name="user_name" // ใช้ชื่อเดียวกับใน EmailJS Template
              required
              type="text"
              className="w-full border-b border-slate-300 py-2 focus:border-blue-800 outline-none transition-colors bg-transparent"
              placeholder="ระบุชื่อผู้ติดต่อ"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">เบอร์โทรศัพท์</label>
            <input
              name="user_phone"
              required
              type="tel"
              className="w-full border-b border-slate-300 py-2 focus:border-blue-800 outline-none transition-colors bg-transparent"
              placeholder="08X-XXX-XXXX"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">บริการที่สนใจ</label>
          <div className="relative">
            <select 
              name="service_type"
              required
              defaultValue=""
              className="w-full border-b border-slate-300 py-2 bg-transparent focus:border-blue-800 outline-none transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled>กรุณาเลือกประเภทงานบริการ</option>
              {SERVICES.map((service, index) => (
                <option key={index} value={service.label}>{service.label}</option>
              ))}
            </select>
            <div className="absolute right-0 bottom-3 pointer-events-none text-slate-400">
              <svg className="size-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">รายละเอียดข้อความ</label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full border border-slate-200 p-3 focus:border-blue-800 outline-none transition-colors bg-slate-50/50 rounded-sm"
            placeholder="ระบุรายละเอียดปัญหา หรือขนาดพื้นที่โดยสังเขป..."
          ></textarea>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="flex items-center justify-center gap-3 w-full rounded-xl px-12 py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-blue-800 disabled:bg-slate-400 transition-all duration-300"
          >
            {isPending ? (
              <>กำลังส่งข้อมูล... <Loader2 className="size-3 animate-spin" /></>
            ) : (
              <>ส่งข้อมูล <Send className="size-3" /></>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}