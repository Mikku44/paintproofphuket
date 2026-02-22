"use client";

import React, { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import { IoLinkOutline, IoCheckmarkOutline } from 'react-icons/io5';

export default function SocialShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  // ฟังก์ชันสำหรับการแชร์
  const shareToFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
  };

  const shareToLine = () => {
    const url = window.location.href;
    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // กลับเป็นไอคอนเดิมหลังจาก 2 วินาที
  };

  return (
    <div className="mt-24 pt-16 border-t border-slate-100 flex flex-col items-center">
      {/* Label with decorative lines */}
      <div className="flex items-center gap-4 mb-10 w-full max-w-xs">
        <div className="h-[1px] bg-slate-100 flex-1"></div>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 whitespace-nowrap">
          Share Insight
        </p>
        <div className="h-[1px] bg-slate-100 flex-1"></div>
      </div>

      <div className="flex gap-10">
        {/* Facebook */}
        <button 
          onClick={shareToFacebook}
          className="group flex flex-col items-center gap-3 outline-none"
        >
          <div className="size-14 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 
            group-hover:bg-[#1877F2] group-hover:text-white group-hover:border-[#1877F2] 
            group-active:scale-90 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-100">
            <FaFacebookF className="size-5" />
          </div>
          <span className="text-[9px] font-bold tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">FACEBOOK</span>
        </button>

        {/* Line */}
        <button 
          onClick={shareToLine}
          className="group flex flex-col items-center gap-3 outline-none"
        >
          <div className="size-14 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 
            group-hover:bg-[#06C755] group-hover:text-white group-hover:border-[#06C755] 
            group-active:scale-90 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-green-100">
            <SiLine className="size-6" />
          </div>
          <span className="text-[9px] font-bold tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">LINE APP</span>
        </button>

        {/* Copy Link */}
        <button 
          onClick={handleCopyLink}
          className="group flex flex-col items-center gap-3 outline-none"
        >
          <div className={`size-14 rounded-full border flex items-center justify-center transition-all duration-300 shadow-sm
            ${copied 
              ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-200' 
              : 'border-slate-100 text-slate-400 hover:border-slate-900 hover:text-slate-900 hover:shadow-xl hover:shadow-slate-100'
            } group-active:scale-90`}>
            {copied ? <IoCheckmarkOutline className="size-6" /> : <IoLinkOutline className="size-6" />}
          </div>
          <span className="text-[9px] font-bold tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors uppercase">
            {copied ? 'Copied!' : 'Copy Link'}
          </span>
        </button>
      </div>

      {/* Floating Toast Notification (Optional) */}
      <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-slate-900 text-white text-xs font-bold tracking-widest rounded-full transition-all duration-500 shadow-2xl z-50
        ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        LINK COPIED TO CLIPBOARD
      </div>
    </div>
  );
}