"use client";

import { CarouselProps } from "@/lib/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import GetBtn from "../buttons/GetBtn";
import { motion } from "framer-motion";

const Carousel = ({ items }: CarouselProps) => {
  const [openDescription, setOpenDescription] = useState<number | null>(null);

  return (
    <div className="relative flex w-full max-w-[1600px] mx-auto items-center justify-center gap-3">
      {/* Prev */}
      <button className="prev-btn absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/50 text-fit-red border border-fit-red/50 shadow-md rounded-full w-10 h-10 flex items-center justify-center">
        <ChevronLeft size={20} />
      </button>

      <Swiper
        loop
        speed={800}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        spaceBetween={10}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        className="w-full max-w-[1200px]"
      >
        {items.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              onMouseEnter={() => setOpenDescription(index)}
              onMouseLeave={() => setOpenDescription(null)}
              className="flex flex-col items-center gap-2 mx-auto"
            >
              <div className="relative h-[400px] w-full max-w-[320px] rounded-lg overflow-hidden">
                <Image
                  src={slide.imageUrl || slide.image || ""}
                  alt={slide.title || "image"}
                  fill
                  sizes="320px"
                  className="object-cover"
                />

                {openDescription === index && (
                  <div className="absolute inset-0 bg-black/70 flex items-end">
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: '50%', opacity: 1 }}
                      className="w-full h-1/2 bg-white px-3 rounded-t-2xl shadow-2xl flex flex-col items-center justify-center gap-4"
                    >
                      <h2 className="text-xl font-semibold border-b-2 border-red-600">
                        {slide.title}
                      </h2>
                      <p className="text-center text-sm">
                        {slide.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-orange-400 font-semibold">$69</span>
                        <GetBtn
                          content="Order Now"
                          link="/our-plans"
                          className="bg-fit-red text-white font-bold px-6 py-3 rounded-full"
                        />
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Next */}
      <button className="next-btn absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/50 text-fit-red border border-fit-red/50 shadow-md rounded-full w-10 h-10 flex items-center justify-center">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;
