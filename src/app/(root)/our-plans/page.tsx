"use client";
import Carousel from "@/components/main/Carousel";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Stepper from "@/components/main/Stepper";
// import { ChevronDownIcon } from "lucide-react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import FaqAccordion from "@/components/main/FaqAccordion";
import { faqData, goals, menuData, portion, preferences } from "@/constants/data";

type Inputs = {
  email: string;
  preference: string;
  meals: string;
  portion: string;
  goal: string;
  plan: string;
  duration: string;
  promoCode?: string;
  totalPrice: number;
  address: {
    firstName: string;
    lastName: string;
    street: string;
    addressLine2: string;
    city: string;
    province: string;
    postalCode: string;
    phoneNumber: number;
    deliveryInstructions: string;
  };
};


const Page = () => {
  // const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  // const [currentFaq, setCurrentFaq] = useState(0);
  const { data: session } = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      preference: "Veg",
      plan: "Alpha",
      duration: "10",
      meals: "3",
      portion: "large",
      goal: "health",
    },
  });

  const selectedMeals = watch("duration");
  const selectedPreference = watch("preference");

  useEffect(() => {
    const selected = selectedMeals ?? "10";
    const price = pricingData[selected] || pricingData["10"];
    setValue("totalPrice", price.total);
  }, [selectedMeals, setValue]);

  const onSubmit = async (data: Inputs) => {
    if (!session?.user?.email) {
      toast.error("User email not found. Please log in again.");
      return;
    }
    const requestData = { ...data, email: session?.user?.email as string };
    console.log("Submitting subscription:", requestData);
    try {
      const res = await axios.post("/api/v1/subscribe-plan", requestData);
      console.log(res);

      if (res.status === 200) {
        toast.success("Subscription successful!");
        router.push("/");
        return;
      }
      if (res.status === 400) {
        toast.warn(res.data.message);
        return;
      }
    } catch (error: unknown) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "An unexpected error occurred."
        );
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  // const handleFaq = (e: number) => {
  //   setCurrentFaq((prev) => (prev === e ? 0 : e));
  // };

  const pricingData: Record<
    string,
    { boxPrice: number; perServing: number; total: number }
  > = {
    "6": { boxPrice: 89.94, perServing: 14.99, total: 99.93 },
    "8": { boxPrice: 111.92, perServing: 13.99, total: 121.91 },
    "10": { boxPrice: 134.9, perServing: 13.49, total: 144.89 },
    "12": { boxPrice: 155.88, perServing: 12.99, total: 165.87 },
    "14": { boxPrice: 174.86, perServing: 12.49, total: 184.85 },
    "18": { boxPrice: 215.82, perServing: 11.99, total: 225.81 },
  };

  // const price =
    // pricingData[selectedMeals as keyof typeof pricingData] || pricingData["10"];

  // const steps = [
  //   { title: 'Food Preference', description: 'Desc for step one' },
  //   { title: 'Step Two', description: 'Desc for step two' },
  //   { title: 'Step Three', description: 'Desc for step three' },
  // ];

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[1054px] bg-transparent flex flex-col w-full gap-12 px-2 py-4 md:p-8 items-center rounded-lg"
        >
          <div className="flex flex-col w-full lg:flex-row justify-center">
            {/*  Step 1*/}
            {currentStep === 1 && (
              <div className="flex flex-col gap-6 items-center p-6">
                <h3 className="flex justify-center text-2xl font-bold text-center text-black font-Arial">
                  Choose Your First Plan
                </h3>
                No commitments — just a promise to yourself.
                {/* Updated select buttons */}
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 justify-center">
                  {/* Veg */}
                  <div className="relative">
                    <input
                      type="radio"
                      id="veg"
                      {...register("preference")}
                      value="Veg"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="veg"
                      className="w-full h-[104px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all peer-checked:border-[#BF1C15] peer-checked:border-2  box-border"
                    >
                      <img
                        src="/images/brocolli.svg"
                        alt="veg"
                        className="w-10 h-10"
                      />
                      <span className="px-2 text-center text-black">Veg</span>
                    </label>
                  </div>

                  {/* Non-Veg */}
                  <div className="relative">
                    <input
                      type="radio"
                      id="non-veg"
                      {...register("preference")}
                      value="Non-Veg"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="non-veg"
                      className="w-full h-[104px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2  box-border"
                    >
                      <img
                        src="/images/chicken.svg"
                        alt="non-veg"
                        className="w-10 h-10"
                      />
                      <span className="px-2 text-center text-black">
                        Non-Veg
                      </span>
                    </label>
                  </div>

                  {/* Eggetarian */}
                  <div className="relative">
                    <input
                      type="radio"
                      id="eggetarian"
                      {...register("preference")}
                      value="eggetarian"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="eggetarian"
                      className="w-full h-[104px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2  box-border"
                    >
                      <img
                        src="/icons/main/eggetiran.png"
                        alt="eggetiran"
                        className="w-10 h-10"
                      />
                      <span className="px-2 text-center text-black">
                        Eggetarian
                      </span>
                    </label>
                  </div>

                  {/* Mix */}
                  <div className="relative">
                    <input
                      type="radio"
                      id="mix"
                      {...register("preference")}
                      value="Mix"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="mix"
                      className="w-full max-w-[184px] h-[104px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-1 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2 box-border"
                    >
                      <img
                        src="/images/mix.svg"
                        alt="mix"
                        className="w-10 h-10"
                      />
                      <span className="px-2 text-center text-black">
                        Mix (Veg + Non-Veg)
                      </span>
                    </label>
                  </div>
                  {/* Trucker plan */}
                  <div className="relative">
                    <input
                      type="radio"
                      id="trucker"
                      {...register("preference")}
                      value="trucker"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="trucker"
                      className="w-full max-w-[184px] h-[104px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-1 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2 box-border"
                    >
                      <img
                        src="/icons/main/truck.png"
                        alt="trucker"
                        className="w-10 h-10"
                      />
                      <span className="px-2 text-center text-black">
                        Trucker Plan
                      </span>
                    </label>
                  </div>
                </div>
                {/* // meals */}
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* 2 meals */}
                  <div className="relative">
                    <input
                      type="radio"
                      id="2meals"
                      {...register("meals")}
                      value="2"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="2meals"
                      className="w-full h-[104px] bg-white border border-gray-300 rounded-md flex items-center justify-center px-3 gap-1 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2"
                    >
                      <img src="/icons/main/two-tiffin-box.png" alt="meals" className="h-10 w-10 mt-2" />
                      <span className="px-2 text-center text-black">
                        2 Meals
                      </span>
                    </label>
                  </div>
                  {/* // 3 meals */}
                  <div className="relative">
                    <input
                      type="radio"
                      id="3meals"
                      {...register("meals")}
                      value="3"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="3meals"
                      className="w-full h-[104px] bg-white border border-gray-300 rounded-md flex items-center justify-center px-3 gap-1 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2"
                    >
                      <img src="/icons/main/three-tiffin-box.png" alt="meals" className="h-10 w-10 " />
                      <span className="px-2 text-center text-black">
                        3 Meals
                      </span>
                    </label>
                  </div>
                </div>
                <span className="text-center text-[#656565]">
                  A variety of balanced, chef-prepared meals with clean
                  ingredients to fit any lifestyle.
                </span>
              </div>
            )}

            {/* // step 2 */}
            {currentStep === 2 && (
              <div className="flex flex-col gap-3">
                {/* // portion */}
                <div className="flex flex-col gap-6 items-center p-6">
                  <h3 className="flex justify-center text-2xl font-bold text-center text-black font-Arial">
                    Choose your Portion
                  </h3>

                  {/* Updated select buttons */}
                  <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                    {portion?.map((pref) => (
                      <div key={pref.label} className="relative">
                        <input
                          type="radio"
                          id={pref.label}
                          {...register("portion")}
                          value={pref.label}
                          className="hidden peer cursor-pointer"
                        />
                        <label
                          htmlFor={pref.label}
                          className="w-full h-[100px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
                  peer-checked:border-[#BF1C15] peer-checked:border-2"
                        >
                          <div className="flex gap-1">
                             <img src={pref.img} alt="icon" className="h-7 w-7" />
                            <h4 className="px- 2 text-center text-black font-medium tracking-wider text-2xl capitalize">
                              {pref.label}
                            </h4>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* // goal */}
                <div className="flex flex-col gap-6 items-center p-6">
                  <h3 className="flex justify-center text-2xl font-bold text-center text-black font-Arial">
                    Choose your Goal
                  </h3>

                  {/* Updated select buttons */}
                  <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-4">
                    {goals.map((goal, i) => (
                      <div key={i} className="relative">
                        <input
                          type="radio"
                          id={goal.title}
                          {...register("goal")}
                          value={goal.title}
                          className="hidden peer cursor-pointer"
                        />
                        <label
                          htmlFor={goal.title}
                          className="w-full h-[100px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
                  peer-checked:border-[#BF1C15] peer-checked:border-2"
                        >
                          <div className="flex gap-1">
                            <img src={goal.img} alt="icon" className="h-7 w-7" />
                            <h4 className="px- 2 text-center text-black font-medium tracking-wider text-2xl capitalize">
                              {goal.title}
                            </h4>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3*/}
            {currentStep === 3 && (
              <div className="flex flex-col gap-5">
                {/* // preferences */}
                <div className="flex flex-col gap-6 items-center p-6">
                  <h3 className="flex justify-center text-2xl font-bold text-center text-black font-Arial">
                    Choose your preferences
                  </h3>

                  {/* Updated select buttons */}
                  <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                    {preferences?.map((pref) => (
                      <div key={pref.label} className="relative">
                        <input
                          type="radio"
                          id={pref.label}
                          {...register("plan")}
                          value={pref.label}
                          className="hidden peer cursor-pointer"
                        />
                        <label
                          htmlFor={pref.label}
                          className="w-full h-[124px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
                  peer-checked:border-[#BF1C15] peer-checked:border-2"
                        >
                          {/* <div
                          className="p-[6px] rounded-full"
                          style={{ backgroundColor: pref.bgColor }}
                        >
                          <img
                            src={pref.icon}
                            alt={pref.value}
                            className="w-10 h-10"
                          />
                        </div> */}
                          <div className="">
                            <h4 className="px- 2 text-center text-black font-medium tracking-wider text-2xl">
                              {pref.label}
                            </h4>
                            <h4 className="px-2 text-center text-black font-semibold">
                              ${pref.price || 350}
                            </h4>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>

                  <span className="text-center text-[#656565]">
                    A variety of balanced, chef-prepared meals with clean
                    ingredients to fit any lifestyle.
                  </span>
                </div>

                {/* <div className="flex w-full flex-col gap-6 items-center p-6">
                
                <h3 className="flex justify-center text-2xl font-bold text-center text-black font-Arial">
                  Select meals per week
                </h3>
                
                <div className="flex flex-col items-center w-full max-w-xl">
                  <span className="text-black">Meals per week</span>
                  
                  <div className="grid w-full grid-cols-1 grid-rows-2 gap-3 p-6 sm:grid-cols-2 md:grid-cols-3">
                    <div className="relative">
                      <input
                        type="radio"
                        {...register("duration")}
                        id="option-1"
                        value="6"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="option-1"
                        className="max-w-[128px] bg-white w-full border border-[#FF0000] text-black text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md cursor-pointer transition-all peer-checked:border-[5px]"
                      >
                        6
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="radio"
                        {...register("duration")}
                        id="option-2"
                        value="8"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="option-2"
                        className="max-w-[128px] bg-white w-full border border-[#FF0000] text-black text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md cursor-pointer transition-all peer-checked:border-[5px]"
                      >
                        8
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="radio"
                        {...register("duration")}
                        id="option-3"
                        value="10"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="option-3"
                        className="max-w-[128px] bg-white w-full border border-[#FF0000] text-black text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md cursor-pointer transition-all peer-checked:border-[5px]"
                      >
                        10
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="radio"
                        {...register("duration")}
                        id="option-4"
                        value="12"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="option-4"
                        className="max-w-[128px] bg-white w-full border border-[#FF0000] text-black text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md cursor-pointer transition-all peer-checked:border-[5px]"
                      >
                        12
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="radio"
                        {...register("duration")}
                        id="option-5"
                        value="14"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="option-5"
                        className="max-w-[128px] bg-white w-full border border-[#FF0000] text-black text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md cursor-pointer transition-all peer-checked:border-[5px]"
                      >
                        14
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="radio"
                        {...register("duration")}
                        id="option-6"
                        value="18"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="option-6"
                        className="max-w-[128px] bg-white w-full border border-[#FF0000] text-black text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md cursor-pointer transition-all peer-checked:border-[5px]"
                      >
                        18
                      </label>
                    </div>
                  </div>
                </div>
                 
                <div className="flex flex-col w-full gap-4 px-3 bg-white border border-gray-300 rounded-md">
                  <div className="flex justify-between w-full px-3 py-6">
                    <div className="flex flex-col gap-3">
                      <h4 className="font-semibold text-black">
                        Chef&apos;s Choice
                      </h4>
                      <span className="text-black">
                        {selectedMeals} meals per week
                      </span>
                    </div>
                    {selectedMeals === "10" && (
                      <div className="flex items-center h-6 gap-2 p-3 bg-red-200 rounded-full">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/9484/9484251.png"
                          alt="heart"
                          className="w-4 h-4"
                        />
                        <span className="text-red-800">Most Popular</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="px-3 border border-gray-300"></div>

                  <div className="flex flex-col items-center w-full ">
                    <div className="flex justify-between w-full px-3">
                      <span className="text-lg text-black">Box price</span>
                      <span className="text-black text-md">
                        ₹{price.boxPrice}
                      </span>
                    </div>
                    <div className="flex justify-between w-full px-3">
                      <span className="text-lg text-black">
                        Price per serving
                      </span>
                      <span className="text-black text-md">
                        ₹{price.perServing}
                      </span>
                    </div>
                    <div className="flex justify-between w-full px-3">
                      <span className="text-lg text-black">Shipping</span>
                      <span className="text-black text-md">+ $9.99</span>
                    </div>
                    <div className="flex justify-between bg-[#d7d7d2] py-3 -mx-3 w-[calc(100%+1.5rem)] px-6 ">
                      <span className="text-lg font-semibold text-black">
                        First box total
                      </span>
                      <span className="font-semibold text-black text-md">
                        ₹{price.total}
                      </span>
                      <input
                        type="hidden"
                        {...register("totalPrice")}
                        value={price.total}
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
            )}

            {/* // step 4 */}
            {currentStep === 4 && (
              <div className="w-full max-w-[682px] p-6 mb-6 h-auto bg-white rounded-lg shadow-md lg:w-2/3 lg:mb-0">
                <h2 className="mb-4 text-2xl font-bold text-black">
                  Delivery Details
                </h2>
                <div className="flex flex-col gap-6">
                  {/* name section */}
                  <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                    <div>
                      <input
                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                        id="first-name"
                        type="text"
                        placeholder=" First name *"
                        {...register("address.firstName", {
                          required: "First Name is required",
                        })}
                      />
                      {errors.address?.firstName && (
                        <p className="text-red-500 text-sm mb-2">
                          {errors.address.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                        id="last-name"
                        type="text"
                        placeholder="Last name *"
                        {...register("address.lastName", {
                          required: "Last Name is required",
                        })}
                      />
                      {errors.address?.lastName && (
                        <p className="text-red-500 text-sm mb-2">
                          {errors.address.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* address section 1 */}
                  <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                    <div>
                      <input
                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                        id="street"
                        type="text"
                        placeholder=" Street *"
                        {...register("address.street", {
                          required: "Street is required",
                        })}
                      />
                      {errors.address?.street && (
                        <p className="text-red-500 text-sm mb-2">
                          {errors.address.street.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                        id="address-line-2"
                        type="text"
                        placeholder=" Address line 2"
                        {...register("address.addressLine2")}
                      />
                    </div>
                  </div>
                  {/* address section 2 */}
                  <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
                    <div>
                      <input
                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                        id="city"
                        type="text"
                        placeholder=" City *"
                        {...register("address.city", {
                          required: "City is required",
                        })}
                      />
                      {errors.address?.city && (
                        <p className="text-red-500 text-sm mb-2">
                          {errors.address.city.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <select
                        className="block outline-none w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                        id="province"
                        {...register("address.province", {
                          required: "Province is required",
                        })}
                      >
                        <option value="province">Province *</option>
                      </select>
                      {errors.address?.province && (
                        <p className="text-red-500 text-sm mb-2">
                          {errors.address.province.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                        id="postal-code"
                        type="text"
                        placeholder="Postal Code *"
                        {...register("address.postalCode", {
                          required: "Postal code is required",
                        })}
                      />
                      {errors.address?.postalCode && (
                        <p className="text-red-500 text-sm mb-2">
                          {errors.address.postalCode.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* phone number */}
                  <div className="mb-4">
                    <input
                      className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black "
                      id="phone-number"
                      type="text"
                      placeholder="Phone Number *"
                      {...register("address.phoneNumber", {
                        required: "Phone Number is required",
                      })}
                    />
                    {errors.address?.phoneNumber && (
                      <p className="text-red-500 text-sm mb-2">
                        {errors.address.phoneNumber.message}
                      </p>
                    )}
                  </div>
                  {/* delivery instructions */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Enter Delivery Instruction
                    </label>
                     <input
                      className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black "
                      id="phone-number"
                      type="text"
                      placeholder="Delivery Instructions*"
                      {...register("address.deliveryInstructions", {
                        required: "Delivery Instructions are required",
                      })}
                    />
                    {errors.address?.deliveryInstructions && (
                      <p className="text-red-500 text-sm mb-2">
                        {errors.address.deliveryInstructions.message}
                      </p>
                    )}

                    {/* <select
                      className="w-full max-w-screen outline-none p-3 mt-1  border border-gray-300 rounded-md shadow-sm text-black"
                      id="province"
                      {...register("address.deliveryInstructions", {
                        required: "Delivery Instructions are required",
                      })}
                    >
                      <div className="w-32">
                        <option className="w-20" value="Leave at front door">
                          Leave at front door
                        </option>
                        <option className="w-20" value="Leave at back door">
                          Leave at back door
                        </option>
                        <option className="w-20" value="Others">
                          Others
                        </option>
                      </div>
                    </select> */}
                    {errors.address?.deliveryInstructions && (
                      <p className="text-red-500 text-sm mb-2">
                        {errors.address.deliveryInstructions.message}
                      </p>
                    )}
                  </div>
                  {/* <button
              className="w-full px-4 py-2 font-bold text-white rounded-md bg-fit-red/50"
              type="submit"
            >
              Next
            </button> */}
                </div>
              </div>
            )}
          </div>

          {currentStep >= 4 && (
            <button
              type="submit"
              className={`bg-[#BF1C15] font-medium text-[19px] leading-[24px] w-full max-w-[307px] p-3 text-white rounded-md ${
                !selectedPreference ||
                (selectedPreference.length === 0 && "bg-gray-400")
              }`}
              disabled={!selectedPreference || selectedPreference.length === 0}
            >
              Place Order
            </button>
          )}
          {currentStep < 4 && (
            <button
              type="button"
              onClick={() => setCurrentStep(() => currentStep + 1)}
              className={`bg-[#BF1C15] font-medium text-[19px] leading-[24px] w-full max-w-[307px] p-3 text-white rounded-md `}
              // disabled={!selectedPreference || selectedPreference.length === 0}
            >
              Next Step
            </button>
          )}
        </form>
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


