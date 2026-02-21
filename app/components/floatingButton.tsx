"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Mail,
  Facebook,
  X,
} from "lucide-react";

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contactLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="size-5" />,
      href: "https://www.facebook.com/Waterproofphuket",
      color: "bg-[#1877F2]",
      label: "Facebook Page"
    },
    {
      name: "Email",
      icon: <Mail className="size-5" />,
      href: "mailto:paintproof.office@gmail.com",
      color: "bg-red-500",
      label: "ส่งอีเมล"
    },
    {
      name: "Phone",
      icon: <Phone className="size-5" />,
      href: "tel:0809699965",
      color: "bg-green-500",
      label: "080-969-9965"
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Contact Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 mb-2">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 group"
              >
                {/* Tooltip Label */}
                <span className="px-3 py-1 bg-white dark:bg-zinc-800 shadow-md rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {link.label}
                </span>

                {/* Icon Circle */}
                <div className={`${link.color} p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform active:scale-95`}>
                  {link.icon}
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="flex items-center">
        {/* ✅ Chat Bubble */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ delay: 0.3 }}
              className="mr-2"
            >
              <div className="relative left-0 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white text-sm px-4 py-2 rounded-xl shadow-lg font-medium">
                ติดต่อเราที่นี้ได้เลยค่ะ!
                {/* tail */}
                {/* <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-zinc-800 rotate-45 shadow-md"></div> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 rounded-full shadow-2xl transition-all duration-300 active:scale-90 ${isOpen
              ? "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900"
              : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", damping: 12 }}
          >
            {isOpen ? <X className="size-7" /> : <Message className="size-7" />}
          </motion.div>
        </button>
      </div>
    </div>
  );
}



function Message({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 13H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2" /><path fill="currentColor" d="M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20M9 7h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 10H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m2-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2" opacity="0.5" /><path fill="currentColor" d="M15 17H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m0-8H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2" /></svg>
  )
}
