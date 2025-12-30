// import React from 'react'

// const Testimonials = () => {
//   return (
//     <div className='w-full px-10 py-5 bg-red-100'>

//     </div>
//   )
// }

// export default Testimonials

// components/TestimonialsSlider.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Anita Sharma",
    text: "The tiffin service has been a lifesaver for my busy workdays. The food tastes just like home, and it's always delivered fresh and on time.",
    stars: 5,
  },
  {
    name: "Ravi Patel",
    text: "I’ve tried multiple tiffin services, but this one stands out! Delicious meals, generous portions, and great value for money.",
    stars: 4,
  },
  {
    name: "Priya Mehta",
    text: "As a student living away from home, this service gives me comfort. The meals are healthy, homemade, and super convenient!",
    stars: 5,
  },
  {
    name: "Suresh Iyer",
    text: "Their variety and quality are top-notch. I love the rotating menu and how they cater to different dietary needs. Highly recommend!",
    stars: 5,
  },
];

const StarIcon = () => (
  <svg
    className="text-yellow-500 w-4 h-4"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  return (
    <div className="bg-slate-100 py-12 w-full h-full ">
      {/* <span className="bg-slate-100 pt-5 w-full h-full "> */}
        <h2 className=" font-black text-black text-center text-2xl lg:text-3xl leading-none uppercase max-w-2xl mx-auto mb-4">
          What Our Customers Say
        </h2>
      {/* </span> */}
      <section className="bg-slate-100 px-4 py-5 md:py-8 flex items-center max-w-[1600px] mx-auto">
        <div className="w-1/3  hidden sm:block max-h-[280px]">
          <img
            src="/plan-images/spartans/6.jpg"
            alt="image"
            className="my-auto max-h-[280px] mx-auto rounded-xl "
          />
        </div>
        <div className="sm:w-2/3 max-w-full sm:max-w-screen-xl mx-auto">
          <div className="max-w- screen-xl mx-auto ">
            {/* <h2 className="font-black text-black text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-4">
            What Our Customers Say
          </h2> */}
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,

                // disableOnInteraction: false,
              }}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 1 },
                800: { slidesPerView: 2 },
                //   1024: { slidesPerView: 3 },
              }}
              className="scroll-smooth
    pb-12
   [&_.swiper-pagination]:bottom-[-20px]
"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className=" rounded-lg p-8 text-center h-full">
                    <p className="font-bold uppercase">{t.name}</p>
                    <img
                      src="/icons/main/icons8-quote-left-64.png"
                      alt="comma"
                      className="h-5 w-5"
                    />
                    <p className="text-xl font-light italic text-gray-700 ">
                      {t.text}
                    </p>
                    <div className="flex justify-end">
                      <img
                        src="/icons/main/icons8-quote-left-64.png"
                        alt="comma"
                        className="h-5 w-5 rotate-180 right-0"
                      />
                    </div>
                    <div className="flex items-center justify-center space-x-2 mt-4">
                      {[...Array(t.stars)].map((_, idx) => (
                        <StarIcon key={idx} />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
