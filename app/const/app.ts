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
    description: "บริการติดตั้งระบบกันซึมมาตรฐานสูง ป้องกันน้ำรั่วซึมทุกจุดของอาคารอย่างถาวร",
    image: "/images/service1.jpg" // เปลี่ยน path รูปภาพตามจริง
  },
  {
    title: "ซ่อมแซมรอยรั่ว รอยแตกร้าว",
    description: "แก้ไขปัญหารอยร้าวโครงสร้างและรอยรั่วซึมด้วยวัสดุประสานประสิทธิภาพสูง",
    image: "/images/service2.jpg"
  },
  {
    title: "งานติดตั้ง ซ่อมฝ้าเพดาน",
    description: "ติดตั้งและซ่อมบำรุงงานฝ้าเพดานทุกชนิด เก็บงานละเอียด เรียบเนียน",
    image: "/images/service3.jpg"
  },
  {
    title: "งานพ่นสีหลังคา กันซึม ซ่อมหลังคา",
    description: "ฟื้นฟูสภาพหลังคาให้เหมือนใหม่ พร้อมเสริมชั้นกันซึมและพ่นสีสะท้อนความร้อน",
    image: "/images/service4.jpg"
  },
  {
    title: "ซ่อมพื้นปูน กระเบื้อง ภายนอก",
    description: "งานซ่อมบำรุงพื้นผิวภายนอก ปูกระเบื้อง และแก้ไขปัญหาพื้นทรุดแตกร้าว",
    image: "/images/service5.jpg"
  },
  {
    title: "รีโนเวทบ้าน อาคาร",
    description: "บริการปรับปรุงอาคารเก่าให้ทันสมัย ครบวงจรตั้งแต่โครงสร้างจนถึงความสวยงาม",
    image: "/images/service6.png"
  }
];