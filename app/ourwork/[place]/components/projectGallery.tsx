"use client";
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

export default function ProjectGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <>
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="columns-2 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden rounded-sm bg-slate-100"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                loading='lazy'
                alt={`Project detail ${index}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 className="size-5 text-slate-900" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Screen Image Preview Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImage("")}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage("")}
          >
            <X className="size-8" />
          </button>
          
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300"
            alt="Full screen preview"
          />
          
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs font-bold uppercase tracking-widest">
            Click anywhere to close
          </p>
        </div>
      )}
    </>
  );
}