"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  CheckCircle,
  Truck,
  Leaf,
  Calendar,
  ShieldCheck,
  Flame,
} from "lucide-react";

const features = [
  {
    icon: <CheckCircle size={32} />,
    title: "Dietitian-Approved Meals",
    description:
      "Curated by certified nutritionists — perfectly balanced to support your health, energy, and goals.",
  },
  {
    icon: <Truck size={32} />,
    title: "Fresh, Daily Delivery",
    description:
      "Hot, homemade-style meals delivered right to your door — no prep, no stress, just eat and go.",
  },
  {
    icon: <Leaf size={32} />,
    title: "Seasonal, Fresh Ingredients",
    description:
      "We use only in-season veggies, fruits, grains, and proteins — because your body deserves real food, not fillers.",
  },
  {
    icon: <Calendar size={32} />,
    title: "Flexible Subscriptions",
    description:
      "Pause, switch, or change plans anytime. Choose weekly or monthly — we fit your lifestyle, not the other way around.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Hygienic Kitchens",
    description:
      "Every meal is cooked in spotless, sanitized kitchens — because clean eating starts with a clean kitchen.",
  },
  {
    icon: <Flame size={32} />,
    title: "Fitness-Focused Meals",
    description:
      "Packed with protein, rich in nutrients, and low on junk — designed for energy, strength, and long-term wellness.",
  },
];

export default function WhyFitMafia() {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // Equal height sync
  useEffect(() => {
    const syncHeights = () => {
      cardRefs.current.forEach((el) => el && (el.style.height = "auto"));

      const maxHeight = Math.max(
        ...cardRefs.current.map((el) => el?.offsetHeight || 0)
      );

      cardRefs.current.forEach(
        (el) => el && (el.style.height = `${maxHeight}px`)
      );
    };

    syncHeights();
    window.addEventListener("resize", syncHeights);
    return () => window.removeEventListener("resize", syncHeights);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-16 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          🔥 Why <span className="text-red-500">Fit Mafia</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Healthy eating shouldn’t feel like a chore. Here’s why thousands trust
          us to fuel their day:
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            el: ".why-fit-pagination",
          }}
        >
          {features.map((feature, idx) => (
            <SwiperSlide key={idx} className="flex">
              <div
               ref={(el) => {
                if (el) {
                  cardRefs.current[idx] = el;
                }
              }}              
                className="
                  relative w-full rounded-3xl p-8
                  flex flex-col text-center
                  bg-white/60 border border-gray-200 backdrop-blur-md
                  transition-transform duration-300
                  hover:-translate-y-2 hover:shadow-lg
                  overflow-hidden
                "
              >
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-300 via-orange-200 to-orange-300 opacity-90 pointer-events-none" />

                <div className="relative z-10 text-red-500 mb-4">
                  {feature.icon}
                </div>

                <h3 className="relative z-10 text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>

                <p className="relative z-10 text-gray-500 text-sm mt-auto">
                  {feature.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ PAGINATION OUTSIDE SWIPER */}
        <div className="why-fit-pagination flex justify-center mt-8" />
      </div>
    </section>
  );
}
