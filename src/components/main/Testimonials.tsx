"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/constants/data";
import Image from "next/image";

const StarIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="bg-slate-100 py-12 w-full">
      <h2 className="font-black text-black text-center text-2xl lg:text-3xl uppercase mb-8">
        What Our Customers Say
      </h2>

      <div className="flex max-w-[1600px] mx-auto px-4 items-center">
        {/* Left image */}
        <div className="hidden sm:block w-1/3">
          <div className="relative w-[400px] h-[280px] mx-auto">
            <Image
              src="/plan-images/spartans/6.jpg"
              alt="Food"
              fill
              className="rounded-xl object-contain"
              sizes="(min-width: 640px) 33vw, 100vw"
              priority
            />
          </div>
        </div>

        {/* Slider */}
        <div className="sm:w-2/3 w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              el: ".testimonial-pagination",
              clickable: true,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              800: { slidesPerView: 2 },
            }}
          >
            {testimonials?.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="p-8 text-center h-full">
                  <p className="font-bold uppercase mb-4">{t.name}</p>

                  <p className="text-xl italic text-gray-700 mb-6">
                    “{t.text}”
                  </p>

                  <div className="flex justify-center gap-1">
                    {Array.from({ length: t.stars }).map((_, idx) => (
                      <StarIcon key={idx} />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* PAGINATION IS HERE — BELOW CONTENT */}
          <div className="testimonial-pagination mt-8 flex justify-center" />
        </div>
      </div>
    </section>
  );
}
