export const APP_MENU = [
  { label: "หน้าแรก", href: "/" },

  {
    label: "บริการของเรา",
    href: "/services",
    children: [
      { label: "กันซึมดาดฟ้า หลังคา ผนัง", href: "/services/waterproofing" },
      { label: "ซ่อมแซมรอยรั่ว รอยแตกร้าว", href: "/services/crack-repair" },
      { label: "งานติดตั้ง ซ่อมฝ้าเพดาน", href: "/services/ceiling-work" },
      { label: "งานพ่นสีหลังคา กันซึม ซ่อมหลังคา", href: "/services/roof-coating-repair" },
      { label: "ซ่อมพื้นปูน กระเบื้อง ภายนอก", href: "/services/exterior-flooring" },
      { label: "รีโนเวทบ้าน อาคาร", href: "/services/renovation" }
    ],
  },

  { label: "สาระน่ารู้", href: "/knowledge" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "ติดต่อเรา", href: "/contact" },
];

export const HOME_IMAGES = [
  {
    id: 1,
    title: "The Future of Design",
    subtitle: "Experience minimalist aesthetics combined with peak performance functionality.",
    image: "/waterproof.jpg",
  },
  {
    id: 2,
    title: "Innovate Your Workflow",
    subtitle: "Our tools are built for teams that demand speed and seamless collaboration.",
    image: "/waterproof2.jpg",
  },
];

export const SERVICES = [
  { label: "กันซึมดาดฟ้า หลังคา ผนัง", href: "/services/waterproofing" },
  { label: "ซ่อมแซมรอยรั่ว รอยแตกร้าว", href: "/services/crack-repair" },
  { label: "งานติดตั้ง ซ่อมฝ้าเพดาน", href: "/services/ceiling-work" },
  { label: "งานพ่นสีหลังคา กันซึม ซ่อมหลังคา", href: "/services/roof-coating-repair" },
  { label: "ซ่อมพื้นปูน กระเบื้อง ภายนอก", href: "/services/exterior-flooring" },
  { label: "รีโนเวทบ้าน อาคาร", href: "/services/renovation" }
];


export const serviceImage = [
  {
    title: "กันซึมดาดฟ้า หลังคา ผนัง",
    description: "ติดตั้งระบบกันซึมมาตรฐานสากล ป้องกันน้ำรั่วซึมเข้าสู่โครงสร้างอาคารอย่างถาวร",
    image: "/images/service1.jpg",
    href: "/services/waterproofing"
  },
  {
    title: "ซ่อมแซมรอยรั่ว รอยแตกร้าว",
    description: "วิเคราะห์และแก้ไขปัญหารอยร้าวด้วยวัสดุประสานประสิทธิภาพสูง ทนทานต่อแรงมัดตัว",
    image: "/images/service2.jpg",
    href: "/services/crack-repair"
  },
  {
    title: "งานติดตั้ง ซ่อมฝ้าเพดาน",
    description: "บริการงานฝ้าครบวงจร แก้ไขปัญหาฝ้าบวมชื้นจากน้ำรั่ว พร้อมตกแต่งให้เรียบเนียน",
    image: "/images/service3.jpg",
    href: "/services/ceiling-work"
  },
  {
    title: "งานพ่นสีหลังคา ซ่อมหลังคา",
    description: "ฟื้นฟูหลังคาเก่าให้ใหม่ด้วยสีสะท้อนความร้อน พร้อมระบบกันซึมคุณภาพสูง",
    image: "/images/service4.jpg",
    href: "/services/roof-painting"
  },
  {
    title: "ซ่อมพื้นปูน กระเบื้อง ภายนอก",
    description: "ซ่อมบำรุงพื้นผิวภายนอก ปูกระเบื้อง และแก้ไขปัญหาพื้นแตกร้าวจากการทรุดตัว",
    image: "/images/service5.jpg",
    href: "/services/flooring-repair"
  },
  {
    title: "รีโนเวทบ้าน อาคาร",
    description: "ปรับปรุงอาคารเก่าให้ทันสมัย แข็งแรง และตอบโจทย์การใช้งานยุคใหม่",
    image: "/images/service6.jpg",
    href: "/services/renovation"
  }
];