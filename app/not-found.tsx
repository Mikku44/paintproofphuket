'use client';
import { Search, ArrowLeft, Home } from 'lucide-react';

export default function NotFoundMessage() {
    return (
        <div className="flex flex-col items-center gap-8 px-6 py-20 min-h-[70vh] justify-center bg-white">
            
            {/* Minimalist Icon Group */}
            <div className="relative group">
                <div className="absolute inset-0 bg-blue-50 rounded-full scale-150 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative border border-slate-100 p-8 bg-white shadow-sm rounded-sm">
                    <Search 
                        className="size-16 text-slate-200 stroke-[1.5px]" 
                    />
                    <div className="absolute -top-3 -right-3 bg-blue-800 text-white text-[10px] font-bold tracking-tighter px-2 py-1 rounded-sm shadow-xl">
                        CODE: 404
                    </div>
                </div>
            </div>

            {/* Refined Text Content */}
            <div className="text-center space-y-4 max-w-md">
                <h1 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-800">
                    Page Not Found
                </h1>
                <h2 className="text-3xl font-light text-slate-900 leading-tight">
                    ไม่พบหน้าที่คุณต้องการเรียกหา
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                    ขออภัยครับ หน้าที่คุณกำลังเข้าถึงอาจถูกลบ ย้าย หรือไม่มีอยู่จริง 
                    หากคุณพบปัญหาในการใช้งาน สามารถติดต่อทีมช่างเพื่อขอความช่วยเหลือได้ทันที
                </p>
            </div>

            {/* Action Buttons - Minimalist & Bold */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-xs sm:max-w-none justify-center">
                <button 
                    onClick={() => window.history.back()}
                    className="flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-slate-600 border border-slate-200 hover:bg-slate-50 transition-all rounded-sm"
                >
                    <ArrowLeft className="size-4" /> ย้อนกลับ
                </button>
                <a 
                    href="/"
                    className="flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-blue-800 hover:bg-slate-900 transition-all rounded-sm shadow-lg shadow-blue-900/10"
                >
                    <Home className="size-4" /> กลับหน้าหลัก
                </a>
            </div>

            {/* Subtle Brand Footer */}
            <div className="pt-12">
                <div className="h-[1px] w-12 bg-slate-200 mx-auto mb-4"></div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                    Waterproof Phuket Specialist
                </p>
            </div>
        </div>
    );
}