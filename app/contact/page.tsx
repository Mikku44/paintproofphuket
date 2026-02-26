import { Facebook, Mail, Phone } from 'lucide-react';
import FacebookPage from '../components/FacebookPage';
import ContactForm from './components/ContactForm';
import { BsLine } from 'react-icons/bs';

const contactLinks = [
  {
    name: "เฟซบุ๊ก",
    icon: <Facebook className="size-4" />,
    href: "https://www.facebook.com/Waterproofphuket",
    label: "Waterproof Phuket",
  },
  {
    name: "อีเมล",
    icon: <Mail className="size-4" />,
    href: "mailto:paintproof.office@gmail.com",
    label: "paintproof.office@gmail.com",
  },
  {
    name: "โทรศัพท์",
    icon: <Phone className="size-4" />,
    href: "tel:0809699965",
    label: "080-969-9965",
  },
   {
      name: "Line",
      icon: <BsLine  className="size-5" />,
      href: "https://line.me/ti/p/VSm3MrqeEr",
      color: "bg-green-500",
      label: "PaintProof บน Line"
    },
];
export const metadata = {
  title: "ติดต่อเรา | Paintproof Phuket บริการกันซึมและซ่อมรอยแตกร้าว ภูเก็ต",
  description: "ปรึกษาปัญหาบ้านรั่วซึม ดาดฟ้า ผนังแตกร้าว ในพื้นที่ภูเก็ตและใกล้เคียง ติดต่อทีมช่างผู้เชี่ยวชาญ Waterproof Phuket ประเมินหน้างานฟรี โทร 080-969-9965",
  keywords: [
    "กันซึม ภูเก็ต",
    "ซ่อมดาดฟ้ารั่ว",
    "แก้ปัญหาผนังรั่วซึม",
    "Waterproof Phuket",
    "ช่างกันซึม ภูเก็ต",
    "ทาสีกันซึม",
    "ติดต่อ Waterproof Phuket"
  ],
  openGraph: {
    title: "ติดต่อสอบถามบริการกันซึม - Waterproof Phuket",
    description: "ยินดีให้คำปรึกษาและประเมินราคาหน้างานโดยทีมช่างผู้เชี่ยวชาญ ระบบกันซึมมาตรฐานสากล",
    // url: "https://yourdomain.com/contact", // Replace with your actual URL
    siteName: "Waterproof Phuket",
    // images: [
    //   {
    //     url: "/og-contact.jpg", // Path to your shared image
    //     width: 1200,
    //     height: 630,
    //     alt: "Waterproof Phuket Contact Page",
    //   },
    // ],
    locale: "th_TH",
    type: "website",
  },
};


export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800 ">
      {/* ส่วนหัวของหน้า (Hero Section) */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-6xl mx-auto py-16 px-6">
          <h1 className="text-3xl md:text-4xl font-light text-slate-900">
            ติดต่อ <span className="font-semibold text-blue-800">เรา</span>
          </h1>
          <p className="mt-4 text-slate-500 max-w-2xl leading-relaxed">
            ยินดีให้คำปรึกษาและประเมินราคาหน้างานโดยทีมช่างผู้เชี่ยวชาญ 
            เราใช้วัสดุมาตรฐานสากลเพื่อการแก้ปัญหาที่ยั่งยืน ในพื้นที่ภูเก็ตและจังหวัดใกล้เคียง
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* คอลัมน์ซ้าย: ข้อมูลการติดต่อและแผนที่ */}
          <div className="lg:col-span-5 space-y-10">
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                ช่องทางการติดต่อ
              </h2>
              <div className="space-y-6">
                {contactLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="group flex items-center gap-4 text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    <div className="p-3 border border-slate-200 group-hover:border-blue-200 bg-white rounded-sm transition-all shadow-sm">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{link.name}</p>
                      <p className="text-md font-medium">{link.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                ที่ตั้งสำนักงาน
              </h2>
              <div className="aspect-video w-full border border-slate-200 grayscale-[0.3] hover:grayscale-0 transition-all duration-700 rounded-sm overflow-hidden shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.385804607537!2d98.3541212!3d7.854629600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502f2efd4679d3%3A0x35a0fa6074f50d04!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4nuC5h-C4meC4l-C5jOC4nuC4o-C4ueC4nyDguIjguLPguIHguLHguJQgfCBQQUlOVFBST09GIENPLiwgTFRELg!5e0!3m2!1sth!2sth!4v1772079545264!5m2!1sth!2sth" 
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </section>

            <FacebookPage />
          </div>

          {/* คอลัมน์ขวา: แบบฟอร์มสอบถาม */}
          <div className="lg:col-span-7">
           <ContactForm />
          </div>

        </div>
      </main>
    </div>
  );
}


