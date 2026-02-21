"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export default function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => handleNext(), 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[82vh] w-full overflow-hidden bg-zinc-900">
      <AnimatePresence custom={direction} initial={false}>
        <motion.img
          key={slides[currentIndex].id}
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} // cubic-bezier smooth
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
      </AnimatePresence>

      {/* Controls */}
      <div className="">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full bg-black/20 border-white/20 absolute bottom-1/2 left-10 flex gap-2 z-20 text-white hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full bg-black/20 border-white/20 absolute bottom-1/2 right-10 flex gap-2 z-20 text-white hover:bg-white/20"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}