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

export const metadata: Metadata = {
  title: "กันซึม ดาดฟ้า หลังคารั่ว ภูเก็ต | PaintProof",
  description: "กันซึม ดาดฟ้า หลังคารั่ว ภูเก็ต by PaintProof",
  icons : "/logo.png",
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
