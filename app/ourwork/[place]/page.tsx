import { MapPin, Calendar, HardHat, ChevronLeft, ArrowLeft, Phone, SearchX, Home } from 'lucide-react';
import Link from 'next/link';
import ProjectGallery from './components/projectGallery';
import { projects } from '@/app/repositories/worksData';


// This allows you to generate dynamic SEO metadata based on the project
export async function generateMetadata({ params }: { params: { place: string } }) {
    const { place } = await params;
    return {
        title: `ผลงานที่ ${place} | Paintproof Phuket`,
        description: `ชมรายละเอียดงานกันซึมและรีโนเวทอาคาร ณ พื้นที่ ${place} โดยทีมงานมืออาชีพ`,
    };
}

export default async function ProjectDetailPage({ params }: { params: { place: string } }) {
    const { place } = await params;

    const project = projects.find(p => p.slug.toLowerCase().includes(place.toLowerCase()));

    if (!project) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center px-6 bg-white">
                <div className="max-w-md w-full text-center space-y-8">

                    {/* Visual Icon */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-50 rounded-full scale-150 blur-xl opacity-50"></div>
                            <SearchX className="size-20 text-slate-200 relative z-10 stroke-[1px]" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3">
                        <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-800">
                            Project Not Found
                        </h1>
                        <h2 className="text-3xl font-light text-slate-900">
                            ไม่พบข้อมูลโครงการที่คุณเรียกดู
                        </h2>
                        <p className="text-slate-500 leading-relaxed">
                            หน้านี้อาจถูกย้าย ลบออก หรือคุณอาจพิมพ์ URL ไม่ถูกต้อง
                            ลองตรวจสอบหน้าผลงานทั้งหมดของเราอีกครั้ง
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 pt-4">
                        <Link
                            href="/our-work"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-800 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-all rounded-sm"
                        >
                            <ArrowLeft className="size-4" /> ดูผลงานทั้งหมด
                        </Link>

                        <div className="grid grid-cols-2 gap-3">
                            <Link
                                href="/"
                                className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all rounded-sm"
                            >
                                <Home  className="size-3" /> กลับหน้าแรก
                            </Link>
                            <a
                                href="tel:0809699965"
                                className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all rounded-sm"
                            >
                                <Phone className="size-3" /> ติดต่อช่าง
                            </a>
                        </div>
                    </div>

                    {/* Decorative Support Text */}
                    <p className="text-[10px] text-slate-300 uppercase tracking-widest pt-8">
                        Paintproof Phuket — Engineering Standards
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Header (Static Server Side) */}
            <nav className="p-6 border-b container-x mx-auto border-slate-100 flex justify-between items-center bg-white sticky top-0 z-30">
                <Link href="/ourwork" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-800 transition-colors">
                    <ChevronLeft className="size-4" /> Back to Projects
                </Link>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-800">Project Details</div>
            </nav>

            {/* 2. Project Info (Static Server Side) */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight text-balance">
                            {project.title} <br />
                            <span className="font-semibold text-blue-900">Residential Excellence</span>
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                            {project.description}
                        </p>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-sm space-y-6 border border-slate-100">
                        <div className="space-y-4">
                            <InfoItem icon={<MapPin className="size-5 text-blue-800" />} label="Location" value={project.title} />
                            <InfoItem icon={<Calendar className="size-5 text-blue-800" />} label="Completion" value={project.date} />
                            <InfoItem icon={<HardHat className="size-5 text-blue-800" />} label="Category" value={project.category} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Interactive Gallery (Client Component) */}
            <ProjectGallery images={project.images} />

            {/* 4. Footer CTA (Static Server Side) */}
            <section className="py-20 bg-slate-50 text-center border-t border-slate-100">
                <h3 className="text-xl font-light text-slate-900 mb-6 px-6">สนใจงานระบบกันซึมมาตรฐานเดียวกับโครงการนี้?</h3>
                <Link href="/contact" className="inline-block px-10 rounded-full py-4 bg-blue-800 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg hover:shadow-blue-900/20">
                    ขอใบเสนอราคาฟรี
                </Link>
            </section>
        </div>
    );
}

// Small helper component for the sidebar (Can remain in this file)
function InfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="flex items-center gap-3">
            {icon}
            <div>
                <p className="text-[10px] font-bold uppercase text-slate-400">{label}</p>
                <p className="text-sm font-semibold text-slate-800">{value}</p>
            </div>
        </div>
    );
}