import { MapPin, Calendar, HardHat, ChevronLeft, ArrowLeft, Phone, SearchX, Home } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/app/repositories/worksData';
import ProjectGallery from './components/projectGallery';

export async function generateMetadata({ params }: { params: { place: string } }) {
    const { place } = await params;
    const project = projects.find(p => p.slug.toLowerCase() === place.toLowerCase());
    
    return {
        title: project ? `${project.title} | Paintproof Phuket` : "Project Not Found",
        description: project?.description || `รายละเอียดงานกันซึมพื้นที่ ${place}`,
    };
}

export default async function ProjectDetailPage({ params }: { params: { place: string } }) {
    const { place } = await params;
    const project = projects.find(p => p.slug.toLowerCase() === place.toLowerCase());

    // 404 NOT FOUND UI
    if (!project) {
        return (
            <div className="min-h-[85vh] flex items-center justify-center px-6 bg-white">
                <div className="max-w-md w-full text-center space-y-8">
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-50 rounded-full scale-150 blur-2xl opacity-50"></div>
                            <SearchX className="size-20 text-slate-200 relative z-10 stroke-[1px]" />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-800">Project Not Found</h1>
                        <h2 className="text-3xl font-light text-slate-900">ไม่พบข้อมูลโครงการ</h2>
                        <p className="text-slate-500 text-sm leading-relaxed">หน้านี้อาจไม่มีอยู่จริงหรือถูกย้ายที่อยู่ โปรดลองตรวจสอบอีกครั้ง</p>
                    </div>
                    <div className="flex flex-col gap-3 pt-4">
                        <Link href="/our-work" className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-800 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-all rounded-sm">
                            <ArrowLeft className="size-4" /> ดูผลงานทั้งหมด
                        </Link>
                        <div className="grid grid-cols-2 gap-3">
                            <Link href="/" className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all rounded-sm">
                                <Home className="size-3" /> หน้าแรก
                            </Link>
                            <a href="tel:0809699965" className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all rounded-sm">
                                <Phone className="size-3" /> ติดต่อช่าง
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ACTUAL PAGE UI
    return (
        <div className="bg-white min-h-screen">
            <nav className="p-6 border-b container-x mx-auto border-slate-100 flex justify-between items-center bg-white sticky top-0 z-30">
                <Link href="/ourwork" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-800 transition-colors">
                    <ChevronLeft className="size-4" /> Back to Projects
                </Link>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-800">Portfolio Detail</div>
            </nav>

            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-16 items-start">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="space-y-4">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-800 flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-blue-800"></span> Selected Works
                            </p>
                            <h1 className="text-4xl md:text-6xl font-light text-slate-900 leading-tight">
                                {project.title} <br />
                                <span className="font-semibold text-blue-900">High-End Finishing</span>
                            </h1>
                        </div>
                        <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
                            {project.description}
                        </p>
                    </div>

                    <div className="bg-slate-50 p-10 rounded-sm space-y-8 border border-slate-100 shadow-sm sticky top-32">
                        <div className="space-y-6">
                            <InfoItem icon={<MapPin className="size-5 text-blue-800" />} label="Location" value={project.location} />
                            <InfoItem icon={<Calendar className="size-5 text-blue-800" />} label="Completion" value={project.date} />
                            <InfoItem icon={<HardHat className="size-5 text-blue-800" />} label="Category" value={project.category} />
                        </div>
                        <div className="pt-6 border-t border-slate-200">
                             <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-loose">
                                Certified Engineering Standard <br /> by Paintproof Phuket
                             </p>
                        </div>
                    </div>
                </div>
            </section>

            <ProjectGallery images={project.images} />

            <section className="py-24 bg-slate-900 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h3 className="text-2xl md:text-4xl font-light text-white mb-8">สนใจงานระบบที่ได้มาตรฐานวิศวกรรม?</h3>
                    <Link href="/contact" className="inline-block px-12 py-5 bg-blue-700 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all rounded-full shadow-2xl">
                        รับปรึกษาและประเมินราคาฟรี
                    </Link>
                </div>
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
            </section>
        </div>
    );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-1">{icon}</div>
            <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{label}</p>
                <p className="text-base font-semibold text-slate-800">{value}</p>
            </div>
        </div>
    );
}