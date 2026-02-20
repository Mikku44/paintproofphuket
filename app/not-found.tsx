'use client';

export default function NotFoundMessage() {
    return (
        <div className="flex flex-col items-center gap-6 px-4 py-20  h-[80vh] justify-center">
            {/* Icon Group */}
            <div className="relative">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="size-[100px] text-gray-300"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    404
                </div>
            </div>

            {/* Text Content */}
            <div className="text-center space-y-3">
                <h1 className="text-4xl font-bold text-gray-900">ไม่พบหน้าที่คุณต้องการ</h1>
                <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                    ขออภัยครับ หน้าที่คุณกำลังเรียกหาอาจถูกลบไปแล้ว เปลี่ยนชื่อใหม่ 
                    หรืออาจจะไม่เคยมีอยู่จริงตั้งแต่แรก
                </p>
            </div>

            {/* Action Button */}
            <div className="flex gap-3 mt-4">
                <button 
                    onClick={() => window.history.back()}
                    className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                    ย้อนกลับ
                </button>
                <a 
                    href="/"
                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg transition-colors"
                >
                    กลับหน้าหลัก
                </a>
            </div>
        </div>
    );
}