"use client";

import FaqAccordion from "@/components/main/FaqAccordion";
import FaqCard from "@/components/main/FaqCard";
import { useRouter } from "next/navigation";
import { useState } from "react";

const faqs = [
  { img: "", value: "orderingAndPlansFaqs", title: "💼 Ordering & Plans" },
  { img: "", value: "mealsAndNutritionFaqs", title: "🥗 Meals & Nutrition" },
  { img: "", value: "deliveryFaqs", title: "🚚 Delivery" },
  { img: "", value: "paymentsAndSupportFaqs", title: "💳 Payments & Support" },
  // { img: '', value: '', title: "🧠 Still Got Questions?", },
];

const orderingAndPlansFaqs = [
  {
    question: "How do I start my Fit Mafia subscription?",
    answer:
      'Just head to our "Create Your Box" page, choose your meal plan (weekly or monthly), select your preferences (veg/non-veg/mixed), and you’re good to go!',
  },
  {
    question: "Can I skip a week or pause my subscription?",
    answer:
      "Yes! Life gets busy — you can pause, skip, or cancel your plan anytime through your account dashboard.",
  },
  {
    question: "Do I need to commit long-term?",
    answer:
      "Not at all. There are no contracts or commitments. You’re free to change your plan as needed.",
  },
];

const mealsAndNutritionFaqs = [
  {
    question: "Are your meals healthy?",
    answer:
      "100%. All our meals are dietitian-approved, balanced with protein, fiber, good fats, and whole grains. They’re made to fuel your body without sacrificing taste.",
  },
  {
    question: "Do you offer vegetarian or vegan meals?",
    answer:
      "Yes! We offer vegetarian, non-vegetarian, and mixed plans. While we don’t offer full vegan boxes yet, many of our meals are plant-forward.",
  },
  {
    question: "Are meals fresh or frozen?",
    answer:
      "Meals are cooked fresh daily and delivered chilled for optimal freshness. Just heat and eat!",
  },
];

const deliveryFaqs = [
  {
    question: "When and where do you deliver?",
    answer:
      "We deliver daily (or as per your plan) to homes, offices, and selected locations. You’ll get an exact schedule based on your area after signing up.",
  },
  {
    question: "What if I’m not home during delivery?",
    answer:
      "No worries — we use insulated packaging to keep your meals safe and fresh. You can also request office delivery or change your drop-off time.",
  },
];

const paymentsAndSupportFaqs = [
  {
    question: "How do I pay?",
    answer:
      "We accept all major debit/credit cards, e-transfers. Subscriptions auto-renew weekly or monthly, but you can manage everything from your account.",
  },
  {
    question: "Who do I contact if I have an issue?",
    answer:
      'Our customer support team is always here to help. Reach us via WhatsApp, email, or through the "Contact Us" page for any questions or concerns.',
  },
];

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
      <div className="flex items-center justify-center gap-5 w-full h-full  xl:px-12 py-2 ">
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
              // img={data.img}
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
      <div className="w-full relative min-h-[600px] bg-[url('/images/food-main.avif')] bg-cover bg-center flex justify-center mt-40">
        <div className="flex flex-col items-center mx-12 px-12 absolute top-[-80px] bg-white gap-6 py-10 border-gray-200 rounded-sm group hover:bg-fit-red hover:text-white hover:rounded-xl duration-500">
          <h1 className="text-[#000] group-hover:text-white font-Arial Black text-4xl font-bold  text-center pt-8">
            Fit Mafia: Fresh Healthy Meals, Delivered Daily.
          </h1>
          <span className="text-[#4b4d4c] group-hover:text-white text-center">
            Healthy food shouldn’t be boring or time-consuming. That’s why we created Fit Mafia — to make eating clean easy, exciting, and effortless.
          </span>
          <button
            // type="submit"
            onClick={()=> router.push('/contact-us')}
            className="px-6 py-3 text-white border rounded-lg bg-fit-red group-hover:bg-white group-hover:text-fit-red"
          >
             Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
