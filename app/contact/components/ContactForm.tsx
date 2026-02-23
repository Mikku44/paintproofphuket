"use client";

import React, { useRef, useState } from "react";
import { Send, Loader2, CheckCircle2, MessageCircle } from "lucide-react";
import { SERVICES } from "@/app/const/app";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  // 👉 เปิด LINE
  const handleOpenLine = () => {
    window.open("https://line.me/ti/p/VSm3MrqeEr", "_blank");
  };

  // 👉 copy fallback
  const handleCopyAgain = async () => {
    try {
      await navigator.clipboard.writeText(copiedText);
      alert("คัดลอกข้อความอีกครั้งแล้ว");
    } catch {
      alert("ไม่สามารถคัดลอกได้ กรุณาคัดลอกเอง");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsPending(true);

    try {
      const formData = new FormData(formRef.current);

      const text = `📩 แจ้งขอรับบริการ
ชื่อ: ${formData.get("user_name")}
เบอร์: ${formData.get("user_phone")}
บริการ: ${formData.get("service_type")}
รายละเอียด: ${formData.get("message")}
`;

      // 👉 copy auto
      await navigator.clipboard.writeText(text);
      setCopiedText(text);

      setIsSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-sm shadow-sm relative overflow-hidden">
      {/* ✅ Success Overlay */}
      {isSuccess && (
        <div className="fixed  inset-0 bg-black/60 z-99 flex flex-col items-center justify-center text-center p-6 animate-in fade-in  duration-300">
          <div className="mx-auto rounded-2xl animate-in zoom-in bg-white p-10 max-w-sm shadow-lg flex flex-col items-center">
            <div className="size-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
             <svg xmlns="http://www.w3.org/2000/svg"
             className="size-12 text-green-600"
             width={24} height={24} viewBox="0 0 24 24">
             <defs><mask id="SVGwmTVw6iw"><path fill="#fff" fillOpacity={0} d="M12 11l-8 -5h16l-8 5Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" to={0.3}></animate></path><g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={66} d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0"></animate></path><path strokeDasharray={24} strokeDashoffset={24} d="M3 6.5l9 5.5l9 -5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" to={0}></animate></path></g><path d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z" opacity={0}><set fill="freeze" attributeName="opacity" begin="1.15s" to={1}></set></path></mask></defs><path fill="currentColor" d="M0 0h24v24H0z" mask="url(#SVGwmTVw6iw)"></path><path fill="none" stroke="currentColor" strokeDasharray={10} strokeDashoffset={10} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 19l1.75 1.75l3.75 -3.75"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.15s" dur="0.2s" to={0}></animate></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              ดำเนินการต่อโดยเพิ่มเพื่อนผ่าน LINE
            </h3>
            <p className="text-slate-500 mt-2 max-w-xs">
              ระบบได้คัดลอกข้อความไว้แล้ว 👉 กดเพิ่มเพื่อน แล้ววางข้อความในแชทได้ทันที
            </p>
            <div className="flex flex-col gap-3 w-full max-w-xs mt-8">
              <button
                onClick={handleOpenLine}
                className="flex items-center justify-center gap-2 w-full py-4
                 bg-[#06C755] text-white rounded-xl font-bold text-sm 
                 hover:bg-[#05a346] transition-all "
              >
                <MessageCircle className="size-5 fill-white" />
                เพิ่มเพื่อน LINE & วางข้อความ
              </button>
              <button
                onClick={handleCopyAgain}
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-800 transition-colors py-2"
              >
                คัดลอกข้อความอีกครั้ง
              </button>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-800 transition-colors py-2"
              >
                กลับหน้าฟอร์ม
              </button>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-xl font-semibold text-slate-900 mb-8">
        ส่งคำขอรับบริการ
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
              ชื่อ-นามสกุล
            </label>
            <input
              name="user_name"
              required
              type="text"
              className="w-full border-b border-slate-300 py-2 focus:border-blue-800 outline-none bg-transparent"
              placeholder="ระบุชื่อผู้ติดต่อ"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
              เบอร์โทรศัพท์
            </label>
            <input
              name="user_phone"
              required
              type="tel"
              className="w-full border-b border-slate-300 py-2 focus:border-blue-800 outline-none bg-transparent"
              placeholder="08X-XXX-XXXX"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
            บริการที่สนใจ
          </label>

          <select
            name="service_type"
            required
            defaultValue=""
            className="w-full border-b border-slate-300 py-2 bg-transparent focus:border-blue-800 outline-none cursor-pointer"
          >
            <option value="" disabled>
              กรุณาเลือกประเภทงานบริการ
            </option>
            {SERVICES.map((service, index) => (
              <option key={index} value={service.label}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
            รายละเอียดข้อความ
          </label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full border border-slate-200 p-3 focus:border-blue-800 outline-none bg-slate-50 rounded-sm"
            placeholder="ระบุรายละเอียดปัญหา หรือขนาดพื้นที่โดยสังเขป..."
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="flex items-center justify-center gap-3 w-full rounded-xl px-12 py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-blue-800 disabled:bg-slate-400 transition-all"
        >
          {isPending ? (
            <>
              กำลังส่งข้อมูล <Loader2 className="size-3 animate-spin" />
            </>
          ) : (
            <>
              ส่งข้อมูล <Send className="size-3" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}