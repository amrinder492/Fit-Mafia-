import React from "react";

const LearnMoreFaqs = () => {
  return (
    <div className="flex flex-col min-h-fit pb-5 md:pb-10 h-auto items-center px-12">
      <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center items-center">
        Learn More About us
      </h2>
      <div className="flex flex-col max-w-[960px] gap-12">
        <div className="flex gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="rightArrow"
            className="h-6 "
          />

          <div className="flex flex-col max-h-[148px] gap-3">
            <h4 className="font-semibold text-black">
              Is there a commitment required?
            </h4>
            <span className="font-normal text-black">
              Not at all! You can skip your weekly delivery, pause, or cancel at
              any time. Just make sure to do so by your weekly cutoff to avoid
              any charges for that week.
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="rightArrow"
            className="h-6 "
          />

          <div className="flex flex-col max-h-[148px] gap-3">
            <h4 className="font-semibold text-black">
              How do I choose my weekly meals?
            </h4>
            <span className="font-normal text-black">
              Select the meals and add-ons you want from our menu. We&apos;ll
              deliver everything directly to your door, hassle-free.
            </span>
          </div>
        </div>

        <div className="flex gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="rightArrow"
            className="h-6 "
          />

          <div className="flex flex-col max-h-[148px] gap-3">
            <h4 className="font-semibold text-black">
              Do I need to cook anything?
            </h4>
            <span className="font-normal text-black">
              No cooking needed—our meals are ready for you to heat and enjoy.
              Simply warm them up and dig in!
            </span>
          </div>
        </div>

        <div className="flex gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="rightArrow"
            className="h-6 "
          />

          <div className="flex flex-col max-h-[148px] gap-3">
            <h4 className="font-semibold text-black">
              Can I customize my meal plan?
            </h4>
            <span className="font-normal text-black">
              Absolutely! You can select your Fit Mafia meals each week to match
              your preferences. Plus, our plans are flexible, allowing you to
              change your meals based on your current lifestyle.
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="rightArrow"
            className="h-6 "
          />

          <div className="flex flex-col max-h-[148px] gap-3">
            <h4 className="font-semibold text-black">
              What happens if I’m not home for delivery?
            </h4>
            <span className="font-normal text-black">
              You do not need to be home to receive your meals! We deliver our
              meals in insulated boxes with ice packs that maintain a safe,
              refrigerated temperature for an extended period, ensuring
              freshness. We rigorously test our packaging in all weather
              conditions across Canada.
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="rightArrow"
            className="h-6 "
          />

          <div className="flex flex-col max-h-[148px] gap-3">
            <h4 className="font-semibold text-black">
              How is my food kept fresh during delivery?
            </h4>
            <span className="font-normal text-black">
              Our meals are shipped in insulated boxes with ice packs that
              maintain a refrigerated temperature to keep your food fresh for a
              long time. We have thoroughly tested our packaging to withstand
              all seasons and climates in Canada. Please note that it is normal
              for the ice packs to be partially melted upon arrival, as they
              release cold air into the box while melting. Be sure to transfer
              the meals to the fridge as soon as you receive them to maintain
              their freshness.
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="rightArrow"
            className="h-6 "
          />

          <div className="flex flex-col max-h-[148px] gap-3">
            <h4 className="font-semibold text-black">
              How does Fit Mafia handle allergies or dietary restrictions?
            </h4>
            <span className="font-normal text-black">
              Food safety is a top priority for us. All Fit Mafia meals come
              with clear allergen declarations on their packaging. We advise
              carefully reviewing the individual product packaging for the most
              accurate and up-to-date information regarding ingredients and
              allergens. Additionally, please check the ingredient list on our
              website before selecting meals to ensure they meet your dietary
              needs. Please be aware that our meals are prepared in a facility
              that also processes wheat, milk, soy, eggs, tree nuts, peanuts,
              fish, and shellfish.
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="rightArrow"
            className="h-6 "
          />

          <div className="flex flex-col max-h-[148px] gap-3">
            <h4 className="font-semibold text-black">
              Can I skip a week of meals?
            </h4>
            <span className="font-normal text-black">
              No problem! You can easily skip a week (or more) whenever
              necessary. Just make sure to do so by your cutoff: 11:59 pm
              Pacific Time (PT) 5 days prior to your next scheduled delivery.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreFaqs;
