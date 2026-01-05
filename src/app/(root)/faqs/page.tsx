"use client";

import ContactUsCard from "@/components/main/ContactUsCard";
import FaqAccordion from "@/components/main/FaqAccordion";
import FaqCard from "@/components/main/FaqCard";
import { deliveryFaqs, faqs, mealsAndNutritionFaqs, orderingAndPlansFaqs, paymentsAndSupportFaqs } from "@/constants/data";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Faq = { question: string; answer: string };
const Page = () => {
  const [filterData, setFilterData] = useState<Faq[]>([]);
  const [selectedFaqGroup, setSelectedFaqGroup] = useState<string | null>(null);

  const router = useRouter()

  return (
    <div className="flex flex-col gap-6 w-full h-full overflow-auto scrollbar-hide bg-[#F4F3EF]">
      {/* heading */}
      <h1 className="pt-8 text-5xl font-bold text-center text-black font-Arial Black">
        Frequently Asked Questions
      </h1>
      {/* searchbar */}
      {/* <div className="w-full px-12 py-2">
        <input
          type="text"
          name="faq"
          className="w-full p-3 text-black bg-white border border-gray-200"
          placeholder="What can we help you with?"
        />
      </div> */}
      {/* questions */}
      <div className="grid grid-cols-1 lg-tall:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 w-full h-full px-4 lg-tall:px-4 lg:px-0 xl:px-12 py-2 ">
        {faqs.map((data) => {
          const isActive = selectedFaqGroup === data.value;
          return (
            <FaqCard
              fc={() => {
                 setSelectedFaqGroup(data.value);
                if (data.value === "orderingAndPlansFaqs")
                  setFilterData(orderingAndPlansFaqs);
                else if (data.value === "mealsAndNutritionFaqs")
                  setFilterData(mealsAndNutritionFaqs);
                else if (data.value === "deliveryFaqs")
                  setFilterData(deliveryFaqs);
                else if (data.value === "paymentsAndSupportFaqs")
                  setFilterData(paymentsAndSupportFaqs);
                else setFilterData([]);
              }}
              key={data.title}
              icon={data.icon}
              title={data.title}
              className={` transition-all duration-300 ${
                isActive
                  ? "border-2 border-red-700 shadow-md"
                  : "border border-gray-200"
              }`}
            />
          );
        })}
      </div>

      {filterData.length > 0 && <FaqAccordion faqs={filterData} />}
      {/* contact us */}
      <div className="flex flex-col items-center w-full h-full gap-4 p-6">
        <h2 className="text-3xl font-bold text-black font-arial">
          🧠 Still Got Questions?
        </h2>
        <p>we’ll get back to you ASAP.</p>
        <button
          // type="submit"
          onClick={()=> router.push('/contact-us')}
          className="px-6 py-3 text-white border rounded-lg bg-fit-red"
        >
          Contact Us
        </button>
      </div>
      {/* bg-img section */}
      <ContactUsCard title="Fit Mafia: Fresh Healthy Meals, Delivered Daily." description="Healthy food shouldn’t be boring or time consuming. That’s why we created Fit Mafia to make eating clean easy, exciting, and effortless." buttonText="Contact Us" />
  
    </div>
  );
};

export default Page;
