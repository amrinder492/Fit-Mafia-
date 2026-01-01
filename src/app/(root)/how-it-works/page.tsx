import GetBtn from "@/components/buttons/GetBtn";
import Image from "next/image";
import Carousel from "@/components/main/Carousel";
import Link from "next/link";
import MealsCardsSection from "@/components/main/MealsCardsSection";
import OrderNow from "@/components/main/OrderNow";
import { howItWorksAddonItems, howItWorksMealsData } from "@/constants/data";

const page = () => {
  return (
    <div className="flex flex-col w-full h-full gap-6 bg-white">
      {/* how Fit Mafia works */}
      <div className="w-full flex flex-col gap-8 h-auto min-h-[450px] bg-[url('/temp/Homepage_footerTablet.avif')] bg-cover bg-center justify-center items-center px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-black font-Arial">
          How Fit Mafia Works
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-center text-black font-Arial">
          Healthy Meals. Zero Stress. Full Flavor
        </h2>
        <span className="font-normal -mt-5 text-black text-base md:text-[20px] leading-[22px]  xl:leading-[32px] font-Helvetica lg:w-[40%] text-center">
          At Fit Mafia, we’ve made eating healthy simple, convenient, and
          exciting — without sacrificing taste. Whether you&apos;re a busy
          professional, fitness enthusiast, or someone who just wants to eat
          better without the daily hassle, here&apos;s exactly how it works.
        </span>
        <div className="flex flex-col items-center gap-6">
          {/* <GetBtn content="" /> */}
          <Link
            href={"/our-plans"}
            className="bg-fit-red px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-white cursor-pointer "
          >
            Get $75 Off Your Next 4 Boxes
          </Link>
          <span className="font-normal text-black text-[16px] leading-[20px] font-Helvetica text-center">
            Pause or cancel anytime
          </span>
        </div>
      </div>

      {/* Fit Mafia meals in 3 steps */}
      <div className="flex flex-col min-h-[632px] h-auto py-8 items-center gap-7 xl:gap-10">
        <h2 className="text-black font-Arial text-4xl font-bold text-center h-fit flex justify-center">
          Our Service in 3 Steps
        </h2>
        <div className="relative flex md:flex-row flex-col max-w-[1140px] w-full gap-6">
          <div className="md:sticky md:top-24 flex flex-[0.5] justify-center h-fit items-center  rounded-xl">
            <Image
              src="/plan-images/warrior/1.jpg"
              alt="foodImage"
              width={342}
              height={342}
              className="rounded-xl w-full h-auto"
            />
          </div>
          <div className="flex-[0.5] flex flex-col gap-3 px-6 md:px-12">
            {/* step 1 */}
            <div className="flex gap-4">
              <img
                src="/icons/main/fa_plated_meal-318x.png"
                alt="foodIcon"
                className="w-10 h-10"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-black text-[20px] leading-[32px]">
                  Step 1: Choose Your Plan
                </span>
                <span className="text-black font-semibold text-[20px] leading-[32px]">
                  Select the meal plan that fits your lifestyle.
                </span>
                <h4>✅ Weekly or Monthly Options</h4>
                <h4>✅ Veg/Non-Veg/Mixed Choices</h4>
                <h4>✅ Flexible portion sizes</h4>
              </div>
            </div>
            {/* step 2 */}
            <div className="flex gap-4">
              <img
                src="/icons/main/fa_plated_meal-318x.png"
                alt="foodIcon"
                className="w-10 h-10"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-black text-[20px] leading-[32px]">
                  Step 2: Customize Your Box
                </span>
                <span className="text-black font-semibold text-[20px] leading-[32px]">
                  Each week, choose from a rotating menu of delicious meals.
                </span>
                <h4>✅ Add your favorites</h4>
                <h4>✅ Mix & match combos</h4>
                <h4>✅ Skip or swap meals anytime</h4>
              </div>
            </div>
            {/* step 3 */}
            <div className="flex gap-4">
              <img
                src="/icons/main/fa_plated_meal-318x.png"
                alt="foodIcon"
                className="w-10 h-10"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-black text-[20px] leading-[32px]">
                  Step 3: Delivered Fresh to Your Door
                </span>
                <span className="text-black font-semibold text-[20px] leading-[32px]">
                  Your meals are prepared by chefs and packed fresh.
                </span>
                <h4>✅ No prep needed</h4>
                <h4>✅ Delivered chilled and ready to eat</h4>
                <h4>✅ Perfect for home or work</h4>
              </div>
            </div>
            {/* step 4 */}
            <div className="flex gap-4">
              <img
                src="/icons/main/fa_plated_meal-318x.png"
                alt="foodIcon"
                className="w-10 h-10"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-black text-[20px] leading-[32px]">
                  Step 4: Heat, Eat & Thrive
                </span>
                <span className="text-black font-semibold text-[20px] leading-[32px]">
                  Enjoy your healthy meals in minutes.
                </span>
                <h4>✅ Microwave-safe containers</h4>
                <h4>✅ Balanced nutrition, guilt-free indulgence</h4>
                <h4>✅ Designed to power your day</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MealsCardsSection />

      {/* check out our meals */}
      <div className="flex flex-col min-h-[520px] w-full h-auto gap-6 items-center px-6 md:px-12">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center items-center">
            Explore Our Tiffin Options
          </h2>
          <span className="text-black text-center max-w-[817px] w-auto">
            Enjoy freshly cooked Indian meals prepared by expert home chefs.
            Choose from over 30 rotating options every week – including North
            Indian, South Indian, Jain, High-Protein, and Low-Calorie thalis.
            Each meal is crafted to bring the taste of home to your plate.
          </span>
        </div>
        <Carousel items={howItWorksMealsData} />
      </div>

      <OrderNow />
      {/* add ones */}
      <div className="flex flex-col min-h-[580px] h-auto gap-6 items-center bg-[#f1f1ea] pt-6 pb-12 px-12">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center items-center">
            Add-ons To Complete Your Meal
          </h2>
          <span className="text-black text-center max-w-[817px] w-auto">
            Complement your tiffin with healthy extras – like fresh chaas,
            seasonal fruit bowls, roasted makhanas, laddoos, and protein-rich
            snacks. Find all these delicious add-ons in our Add-Ons section to
            keep your meals balanced and fulfilling.
          </span>
        </div>
        <Carousel items={howItWorksAddonItems} />
      </div>

      {/* learn more */}
      {/* <LearnMoreFaqs/> */}

      {/* get off */}
      <div className="-mt-6  w-full flex flex-col gap-8 h-auto min-h-[450px] bg-[url('/temp/Homepage_footerTablet.avif')] bg-cover bg-center justify-center items-center px-12">
        <span className="font-normal text-black text-[20px] leading-[32px] font-Helvetica lg:w-[40%] text-center">
          Enjoy fully prepared, dietitian-approved meals delivered straight to
          your home with no long-term commitment. Skip or cancel anytime!
        </span>
        <div className="flex flex-col items-center gap-6">
          <GetBtn content="Get $75 Off Your Next 4 Boxes" />
          <span className="font-normal text-black text-[16px] leading-[20px] font-Helvetica text-center">
            Pause or cancel anytime
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
