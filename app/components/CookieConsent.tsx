"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieAcceptance() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ตรวจสอบว่าเคยยอมรับไปแล้วหรือยัง
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    // ในกรณีที่ปฏิเสธ อาจจะแค่ปิดหน้าต่าง หรือตั้งค่าลบคุกกี้ที่ไม่จำเป็น
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-2xl"
        >
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
            {/* Icon */}
            <div className="hidden md:flex bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full">
              <Cookie className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                เราใช้คุกกี้เพื่อประสบการณ์ที่ดีของคุณ
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                เว็บไซต์นี้มีการใช้คุกกี้เพื่อเพิ่มประสิทธิภาพและมอบประสบการณ์การใช้งานที่ดียิ่งขึ้น 
                คุณสามารถเลือกยอมรับคุกกี้ทั้งหมดหรือศึกษารายละเอียดเพิ่มเติมได้ที่ 
                <a href="/privacy-policy" className="text-blue-600 underline ml-1">นโยบายความเป็นส่วนตัว</a>
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleDecline}
                className="text-zinc-500 hover:text-zinc-900"
              >
                ไม่ยอมรับ
              </Button>
              <Button 
                size="sm" 
                onClick={handleAccept}
                className="bg-zinc-900 dark:bg-white dark:text-zinc-900 px-6 rounded-full"
              >
                ยอมรับทั้งหมด
              </Button>
            </div>

            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 p-1 text-zinc-400 hover:text-zinc-900"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}