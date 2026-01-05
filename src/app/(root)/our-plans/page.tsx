"use client";
import Carousel from "@/components/main/Carousel";
import { useState } from "react";
import Stepper from "@/components/main/Stepper";
import FaqAccordion from "@/components/main/FaqAccordion";
import { faqData, menuData } from "@/constants/data";
import ChoosePlanForm from "@/components/forms/ChoosePlanForm";


const Page = () => {
  // const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex flex-col w-full h-full bg-[#f1f1ea]">
      {/* create your first box */}
      <div className="flex flex-col w-full min-h- [868px] h-auto bg-[#f1f1ea] px-6 py-12 gap-6 items-center ">
        <h2 className="text-[#4b4d4c] font-Arial text-4xl font-bold text-center flex justify-center">
          Create Your First Box
        </h2>
        <h3 className="text-[#4b4d4c] font-Arial text-2xl font-bold text-center flex justify-center">
          No commitments, except to yourself. You can pause, cancel or change
          your plan at any time.
        </h3>

        <Stepper
          // steps={steps}
          currentStep={currentStep}
          onStepChange={(step) => setCurrentStep(step)}
        />
        {/* select plan container */}
        <ChoosePlanForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
       
      </div>

      {/* flexible menu */}
      <div className="flex flex-col gap-12 w-full p-5 sm:p-12 min-h-[563px] bg-[#f1f1ea] items-center">
        {/* heading */}
        <div className="flex flex-col gap-3">
          <h2 className="flex justify-center text-4xl font-bold text-center text-black font-Arial">
            A flexible menu every week
          </h2>
          <span className="text-center text-black">
            Simply select meals after checkout or{" "}
            <a
              href="#"
              className="text-gray-600 underline hover:text-[#1a5614]"
            >
              view our complete weekly menus
            </a>
          </span>
        </div>

        {/* carousel */}
        <Carousel items={menuData} />

        {/* promo code */}
        {/* <form className="flex  flex-wrap gap-3 max-w-[582px] w-full bg-white py-6 px-10 items-center justify-center rounded-md">
          <input
            type="text"
            className="w-full max-w-[337px] outline-none rounded-md border border-gray-300 p-3"
            placeholder="Enter Promo Code"
            required
          />
          <button
            type="submit"
            className="bg-fit-red/80 font-bold text-[16px] leading-[24px] w-full max-w-[150px] p-3 text-white rounded-md"
          >
            Apply
          </button>
        </form> */}
      </div>

      {/* common questions */}
      <FaqAccordion faqs={faqData}  />
    </div>
  );
};

export default Page;


