import React from "react";

const ProcessSection = () => {
  return (
    <div>
      <section className="py-12 bg-gray-50 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900  sm:text-4xl xl:text-5xl">
              How Fit Mafia Works
            </h2>
            <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 ">
              Healthy meals made effortless. No prep. No stress. Just fresh, flavorful food delivered daily.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-md mx-auto mt-8 lg:mt-20 lg:flex-row lg:max-w-none">
            {/* <!-- First card --> */}
            <div className="relative flex-1 w-full overflow-hidden bg-white  border border-gray-200 rounded-2xl shadow-lg">
              <div className="py-8 px-9">
                <div className="w-full flex gap-3">
                  {/* <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl">
                    1
                  </div> */}
                  <div className="">
                    <img
                      src="/images/plan.png"
                      alt="images"
                      className="h-10 w-10"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mt-2 ">
                  Choose Your Plan
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900 ">
                  Whether you&apos;re vegetarian, non-vegetarian, or somewhere in between — pick a weekly or monthly plan that fits your lifestyle and appetite.
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:-mx-2">
              <svg
                className="w-auto h-4 text-gray-300 "
                viewBox="0 0 81 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                  stroke="currentColor"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                  stroke="currentColor"
                />
              </svg>
            </div>

            <div className="relative flex-1 w-full mt-8 lg:mt-0">
              <div className="absolute -inset-4">
                <div
                  className="w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>
              <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-lg">
                <div className="py-8 px-9">
                  <div className="w-full flex gap-3">
                    {/* <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900  rounded-xl">
                      2
                    </div> */}
                    <img
                      src="/images/meals.png"
                      alt="images"
                      className="h-10 w-10"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600 mt-2 ">
                    Fresh Meals Cooked Daily
                  </h3>
                  <p className="mt-4 text-xl font-medium text-gray-900 ">
                    Every dish is crafted by our chefs using premium ingredients, whole grains, fresh veggies, lean proteins, and good fats — all cooked daily with zero shortcuts
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:-mx-2">
              <svg
                className="w-auto h-4 text-gray-300 "
                viewBox="0 0 81 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                  stroke="currentColor"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                  stroke="currentColor"
                />
              </svg>
            </div>

            {/* <!-- Last card --> */}
            <div className="relative flex-1 w-full mt-8 lg:mt-0">
              <div className="relative overflow-hidden bg-white  border border-gray-200 rounded-2xl shadow-lg">
                <div className="py-8 px-9">
                  <div className="w-full flex gap-3">
                    {/* <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900  rounded-xl">
                      3
                    </div> */}
                    <img
                      src="/images/delivery.png"
                      alt="images"
                      className="h-10 w-10"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600 mt-2 ">
                    Delivered to Your Door
                  </h3>
                  <p className="mt-4 text-xl font-medium text-gray-900 ">
                    We bring your meals straight to your home, office, or wherever you are. Fresh, hot, and ready to fuel your day — just heat (if needed) and enjoy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessSection;
