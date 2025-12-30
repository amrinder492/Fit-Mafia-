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
import Carousel from "./Carousel";
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
           <Carousel items={item?.slides} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPreview;
