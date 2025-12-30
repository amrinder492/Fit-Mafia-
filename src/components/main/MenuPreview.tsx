// import React from 'react'

// const MenuPreview = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default MenuPreview

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { servicesList } from "@/constants/data";
// import Link from "next/link";

const MenuPreview = () => {
  return (
    <div>
      <div className="flex flex-col gap-10  bg-gradient-to-r from-slate-300 to-fuchsia-100">
        {servicesList?.map((item, index) => (
          <div
            className="service-single flex flex-col gap-8 md:gap-16  py-10 "
            key={index}
            id={item.serviceName.replace(/\s+/g, "-")}
          >
            <div className="text-[40px] font-semibold capitalize px-5 md:px-10 flex flex-col gap-4">
              <h2 data-aos="fade-up" data-aos-delay="100" className="capitalize">
                {/* {index + 1}. */}
                 {item.serviceName}
              </h2>
              <h2 data-aos="fade-up" data-aos-delay="100" className="capitalize text-3xl">
                Real Meals. Real Ingredients. Real Results.
              </h2>
              <p data-aos="fade-up" data-aos-delay="200" className="text-base md:text-2xl ">
                {/* {item.serviceDescription} */}
                Explore our rotating selection of nutritious, homemade meals — curated by chefs and approved by nutritionists. Every box is designed to balance taste, health, and freshness for your busy lifestyle.
              </p>
            </div>
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
                //   spaceBetween: 10,
                },
                // 375: {
                //   slidesPerView: 1,
                // //   spaceBetween: 10,
                // },
                // 480: {
                //   slidesPerView: 1,
                // //   spaceBetween: 15,
                // },
                640: {
                  slidesPerView: 2,
                //   spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                //   spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                //   spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 35,
                },
                // 1536: {
                //   slidesPerView: 6,
                //   spaceBetween: 40,
                // },
              }}
              
              
              modules={[Autoplay, Navigation]}
              navigation={true}
              className="sub-cate-slider w-full max-w-[1200px] mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {item.slides.map((slide, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  {/* <Link href={slide.url || "/"}> */}
                    <div className=" h-full w-full flex items-center justify-center lg:max-w-[320px] mx-auto flex-col gap-2">
                    <div className="relative h-[320px] w-full max-w-[320px] rounded-lg overflow-hidden">
                      <Image
                        // src={ "/images/17.png"}
                        // src={ "/plan-images/alpha/1.jpg"}
                        src={ slide.image}
                        alt={slide.title}
                        className=""
                        fill
                        style={{objectFit: 'cover'}}
                      />
                    </div>
                      {/* <p className="text-xl md:text-3xl text-center font-semibold w-fit max-w-[320px] mx-auto">{slide.title}</p> */}
                    </div>
                  {/* </Link> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPreview;
