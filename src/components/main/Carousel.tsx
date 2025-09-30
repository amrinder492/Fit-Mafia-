"use client";
import { useEffect, useRef } from "react";
import { CarouselProps } from "@/lib/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ items }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // const scroll = (direction: "left" | "right") => {
  //   if (carouselRef.current) {
  //     const scrollAmount = 268; // 262px card + 6px gap
  //     carouselRef.current.scrollBy({
  //       left: direction === "left" ? -scrollAmount : scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 268; // 262px card + 6px gap
      const container = carouselRef.current;
  
      if (direction === "left") {
        if (container.scrollLeft === 0) {
          // Scroll to end if at start
          container.scrollTo({
            left: container.scrollWidth,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        }
      } else {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
          // Scroll to start if at end
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }
  };

  useEffect(() => {
  const interval = setInterval(() => {
    scroll("right");
  }, 4000); // Scroll every 4 seconds

  return () => clearInterval(interval); // Clean up on unmount
}, []);

  
  return (
    <div className="relative flex w-full max-w-[1600px] items-center mx-auto gap-3 justify-center">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-[30%] bg-white/50 left-0 z-50 flex items-center justify-center w-10 h-10 text-3xl text-fit-red border border-fit-red/50 rounded-full "
      >
        <ChevronLeft/>
      </button>

      {/* Scrollable container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth max-w-[1440px] w-auto gap-6 mx-2 md:mx-10"
      >
        {items.map((item, index) => {

          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              className={`relative w-[262px] h-[325px] rounded-md bg-cover bg-center flex items-end justify-start p-4 shrink-0`}
            >
              <div className="z-10 flex flex-col text-white">
                {/* <h2 className="text-3xl md:text-4xl font-bold font-Arial">{item.title}</h2>
                <span className="text-base md:text-xl font-semibold md:font-bold font-Arial">
                  {item.description}
                </span> */}
              </div>
              {/* <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black to-transparent"></div> */}
            </div>
          );
        })}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute top-[30%] bg-white/50 right-0 z-50 flex items-center justify-center w-10 h-10 text-3xl text-fit-red border border-fit-red/50 rounded-full"
      >
        <ChevronRight/>
      </button>
    </div>
  );
};

export default Carousel;
