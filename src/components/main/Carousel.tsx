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

const Carousel = ({ items }: CarouselProps) => {
  const [openDescription, setOpenDescription] = useState<Number>()
  const handleMouseEnter = (currIndex: number) => {
    setOpenDescription(currIndex)
  }
  return (
    <div className="relative flex w-full max-w-[1600px] items-center mx-auto gap-3  justify-center">
      <button
        className="prev-btn absolute left-3 top-1/2 -translate-y-1/2 z-10 
  bg-white/50 text-fit-red border border-fit-red/50 shadow-md rounded-full w-10 h-10 flex items-center justify-center
  transition"
      >
        <ChevronLeft size={20} />
      </button>
      <Swiper
        loop={true}
        speed={800}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        className="sub-cate-slider w-full max-w-[1200px] mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {items.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            {/* <Link href={slide.url || "/"}> */}
            <div onMouseEnter={() => handleMouseEnter(slideIndex)} className=" h-full w-full flex items-center justify-center lg:max-w-[320px] mx-auto flex-col gap-2">
              <div className="relative h-[400px] w-full max-w-[320px] rounded-lg overflow-hidden">
                <Image
                  src={slide?.imageUrl ?? slide?.image ?? ''}
                  alt={"img"}
                  className=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              {openDescription === slideIndex &&
              <div className="absolute w-full h-full px-2 text-white flex flex-col items-center justify-center gap-6 bg-black/70">
              <h2 className="text-xl md:text-3xl text-center font-semibold w-fit border-b-2 border-red-600  mx-auto ">{slide.title}</h2>
              <p className=" mx-auto text-center">{slide?.description}</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-orange-400">$69</span>
              <GetBtn
                content="Order Now"
                link="/our-plans"
                className="bg-fit-red text-white font-bold px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
              />
              </div>
              </div>}
              </div>
              {/* {openDescription === slideIndex &&
} */}
            </div>
            {/* </Link> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="next-btn absolute right-3 top-1/2 -translate-y-1/2 z-10 
  bg-white/50 text-fit-red border border-fit-red/50 shadow-md rounded-full w-10 h-10 flex items-center justify-center
  transition"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;
