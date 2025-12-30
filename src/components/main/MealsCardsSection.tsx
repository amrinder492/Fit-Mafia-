import { mealDetailsData } from "@/constants/data";
import React from "react";

const MealsCardsSection = () => {
  return (
    <>
      <div className="flex flex-col min-h-full h-auto pt-10 pb-16 bg-[#f1f1ea] gap-12 items-center">
        <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center items-center">
          Why Fit Mafia Meals?
        </h2>
        <div className="grid grid-cols-1 gap-12 px-6 md:px-12 sm:grid-cols-2 md:grid-cols-3 xl:gap-16">
          {mealDetailsData?.map((card, idx) => {
            return (
              <div key={idx} className="max-w-[348px] w-auto flex flex-col items-center gap-6">
                <div className="">
                  <img
                    src={card.img}
                    // src="/temp/Weekly-meals.png"
                    alt="icon"
                    className="h-14 w-14"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-bold text-center text-black font-Arial">
                    {card.title}
                  </h4>
                  <span className="text-center text-black">{card.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MealsCardsSection;
