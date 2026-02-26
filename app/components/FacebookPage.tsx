"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function FacebookPage() {
  
  // ฟังก์ชันสำหรับสั่งให้ Facebook SDK สแกนหา DOM และ Render ใหม่
  const renderFB = () => {
    if (typeof window !== "undefined" && (window as any).FB) {
      try {
        (window as any).FB.XFBML.parse();
      } catch (e) {
        console.error("FB Parse error:", e);
      }
    }
  };

  useEffect(() => {
    // สั่ง Render เมื่อ Component mount
    renderFB();
  }, []);

  return (
    <>
      {/* 1. โหลด SDK ด้วย next/script เพื่อประสิทธิภาพที่ดีขึ้น */}
      <Script
        src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v22.0&appId=853189677303409"
        strategy="afterInteractive"
        onLoad={renderFB}
      />

      <div className="w-full flex p-2 overflow-hidden bg-slate-50 py-4 rounded-sm">
        <div id="fb-root"></div>
        
        {/* 2. สำคัญ: ต้องระบุ Key เพื่อให้ React บังคับ Re-render เมื่อจำเป็น */}
        <div 
          key="fb-page"
          className="fb-page w-full" 
          data-href="https://www.facebook.com/Waterproofphuket" 
          data-tabs="timeline" 
          data-width="500" // ลองใส่ตัวเลขแน่นอนไปก่อน
          data-small-header="false" 
          data-adapt-container-width="true" 
          data-hide-cover="false" 
          data-show-facepile="true"
        >
          <blockquote cite="https://www.facebook.com/Waterproofphuket" className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/Waterproofphuket">กันซึม ดาดฟ้า หลังคารั่ว ภูเก็ต</a>
          </blockquote>
        </div>
      </div>
    </>
  );
}