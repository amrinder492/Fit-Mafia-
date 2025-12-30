import React from "react";
import GetBtn from "../buttons/GetBtn";
import Image from "next/image";
import { featuresData } from "@/constants/data";

const Features = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto h-full flex flex-col gap-10 lg:gap-16 justify-center bg-[#F1F1EA] pt-10 pb-5 px-5 ">
      <h3 className="font-bold text-3xl w-fit text-center mx-auto">
        Fresh. Healthy. And incredibly delicious.
      </h3>

      <div className="w-full flex justify-evenly gap-5 flex-wrap">
        {featuresData?.map((e,i) => {
            return ( <div key={i} className="md:w-[30%] max-w-[384px] bg-white border border-gray-200 rounded-lg shadow-sm ">
                <div className="relative w-full rounded-t-lg h-96">
                  <Image
                    src={e.image}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {e.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 ">
                    {e.description}
                  </p>
                </div>
              </div>)
        })}

        {/* <div className="w-fit max-w-1/4 text-center text-base flex flex-col items-center justify-center  ">
                    <h4 className='font-bold'>
                        Fresh, Never-Frozen Prepared Meals
                    </h4>
                    <h5 className='font-medium'>
                        Serving up the freshest ingredients from our network of trusted partners. No nitrates, no refined sugars, and meat raised without antibiotics.
                    </h5>
                </div> */}

        {/* <div className="w-fit max-w-1/4 text-center text-base flex flex-col items-center justify-center  ">
          <h4 className="font-bold">Chef-Crafted Meal delivery</h4>
          <h5 className="font-medium">
            Enjoy nutritious, restaurant-quality premade meals at home. Crafted
            by our team of culinary experts.
          </h5>
        </div> */}

        {/* <div className="w-fit max-w-1/4 text-center text-base flex flex-col items-center justify-center ">
          <h4 className="font-bold">Nutritious Meals Designed by Dietitians</h4>
          <h5 className="font-medium">
            Our registered dietitians work hand-in-hand with our chefs to ensure
            every meal is packed with premium, healthy ingredients.
          </h5>
        </div> */}
      </div>

      <div className="sticky bottom-0 bg-[#F1F1EA] text-center text-base space-y-3 ">
        {/* <button className='bg-fit-red px-6 py-3 rounded-lg font-semibold text-white'>Get Offer</button> */}
        <GetBtn />

        <h4 className="">Skip or cancel any time</h4>
      </div>
    </div>
  );
};

export default Features;
