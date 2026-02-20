"use client";

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselData {
  id: number;
  title: string;
  color: string;
}

export default function MotionCarousel({ data }: { data: CarouselData[] }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                className="p-1"
              >
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent 
                    className={`flex aspect-square items-center justify-center p-6 ${item.color} text-white`}
                  >
                    <span className="text-3xl font-semibold">{item.title}</span>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-12 h-10 w-10" />
        <CarouselNext className="-right-12 h-10 w-10" />
      </Carousel>
    </div>
  );
}