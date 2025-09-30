"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

type Inputs = {
  email: string;
};

const Page = () => {
  const redirect = useRouter();
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    console.log(data);
    try {
      const res = await axios.post("api/v1/register", data);
      console.log(res);
      redirect.push("/address");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full bg-[#f1f1ea] p-12">
      {/* main component */}
      <div className="max-w-[1144px] min-h-[810px] flex flex-col bg-white mx-auto p-6 justify-between">
        {/* upper section */}
        <div className="flex flex-col w-full gap-12 p-6">
          <h2 className="flex justify-center text-4xl font-bold text-center text-[#4b4d4c] font-Arial">
            Get Started
          </h2>
          <div className="flex flex-col items-center justify-center w-full gap-12 sm:flex-row">
            <img
              src="/temp/NutritionIngredient.avif"
              alt="temp"
              className="h-[161px] w-[161px] lg:h-[218px] lg:w-[218px] rounded-full"
            />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center gap-6"
            >
              <input
                type="text"
                className="w-full max-w-[376px] border border-gray-300 p-3 text-black"
                placeholder="Email"
                {...register("email")}
                required
              />
              <button
                type="submit"
                className="bg-[#1A5614] font-bold text-[16px] leading-[24px] w-full max-w-[307px] p-3 text-white rounded-md"
              >
                Continue
              </button>
              <span className="text-black max-w-[380px] text-center">
                By continuing, you agree to receive marketing emails and our
                Terms and Privacy Policy. Unsubscribe at any time.
              </span>
              <span className="text-black max-w-[376px] text-center">
                Already have an account?
                <a href="#" className="underline text-[#1a5614]">
                  Log in
                </a>
              </span>
            </form>
          </div>
        </div>

        {/* lower section */}
        <div className="flex flex-col w-full gap-6">
          <h2 className="flex justify-center text-4xl font-bold text-center text-black font-Arial">
            Tailor your Factor experience
          </h2>
          <div className="flex items-center justify-center w-full">
            <div className="text-center max-w-[328px] w-full p-3 min-h-[113px]">
              <div className="flex items-center justify-center mb-2 space-x-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2886/2886665.png"
                  alt="calander"
                  className="w-5 h-5"
                />
                <h2 className="flex justify-center text-xl font-bold text-center text-black font-Arial">
                  Create your personal account
                </h2>
              </div>
              <p className="pl-8 text-left text-black">
                Choose your first delivery date, complete checkout, and review
                your new Factor plan!
              </p>
            </div>
            <div className="text-center max-w-[328px] w-full p-3 min-h-[113px]">
              <div className="flex items-center justify-center mb-2 space-x-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2886/2886665.png"
                  alt="calander"
                  className="w-5 h-5"
                />
                <h2 className="flex justify-center text-xl font-bold text-center text-black font-Arial">
                  Customize your weekly box
                </h2>
              </div>
              <p className="pl-8 text-left text-black">
                Choose from a new menu each week with 30+ chef-crafted and
                dietitian-approved meals.
              </p>
            </div>
            <div className="text-center max-w-[328px] w-full p-3 min-h-[113px]">
              <div className="flex items-center justify-center mb-2 space-x-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2886/2886665.png"
                  alt="calander"
                  className="w-5 h-5"
                />
                <h2 className="flex justify-center text-xl font-bold text-center text-black font-Arial">
                  Manage your deliveries
                </h2>
              </div>
              <p className="pl-8 text-left text-black">
                You can skip a week, change future delivery days, and cancel any
                time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
