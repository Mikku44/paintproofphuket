import type { Metadata } from "next";
import { Geist, Geist_Mono , Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import CookieAcceptance from "./components/CookieConsent";
import FloatingButton from "./components/floatingButton";
import Footer from "./components/footer";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700" ],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata = {
  title: "PaintProof Phuket | บริการกันซึม ดาดฟ้า หลังคารั่ว และรีโนเวทครบวงจร",
  description: "ผู้นำด้านระบบกันซึมมาตรฐานวิศวกรรมในภูเก็ต รับซ่อมดาดฟ้ารั่ว หลังคาซึม ผนังร้าว และงานรีโนเวทอาคาร โดยทีมช่างผู้เชี่ยวชาญ ประเมินหน้างานฟรี รับประกันผลงานสูงสุด 10 ปี",
  keywords: [
    "กันซึม ภูเก็ต",
    "ซ่อมดาดฟ้ารั่ว ภูเก็ต",
    "หลังคารั่ว ภูเก็ต",
    "รีโนเวทบ้าน ภูเก็ต",
    "ช่างซ่อมบ้าน ภูเก็ต",
    "PaintProof Phuket",
    "Waterproof Phuket",
    "ระบบกันซึม PU",
    "แก้ปัญหาบ้านรั่วซึม"
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "PaintProof Phuket - บริการกันซึมและรีโนเวทอันดับ 1 ในภูเก็ต",
    description: "แก้ปัญหาการรั่วซึมอย่างยั่งยืน ด้วยวัสดุมาตรฐานสากลและทีมวิศวกรมืออาชีพในพื้นที่ภูเก็ต",
    // url: "https://yourdomain.com",
    siteName: "PaintProof Phuket",
    images: [
      {
        url: "/og-image.jpg", // Create a high-quality banner for social shares
        width: 1200,
        height: 630,
        alt: "PaintProof Phuket Professional Services",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      
      <body
        className={`${kanit.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingButton />
        <CookieAcceptance />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
