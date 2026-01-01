"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Inputs = {
  newPassword: string;
  confirmPassword: string;
};

const Page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  async function onSubmit(data: Inputs) {
    console.log(data);
    try {
      const res = await axios.post("api/v1/forget-pw", data);
      console.log(res);
      router.push("/sign-in");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f1ea] px-12 ">
      <div className="mx-auto w-full min-h-[643px] max-w-[1100px] flex items-center lg:items-start gap-6 justify-center px-3 py-6 flex-col lg:flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-white rounded-lg shadow-lg h-auto min-h-[250px] max-w-[424px] w-full gap-3 flex-[0.5] flex flex-col items-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-black">
            Change Your Password
          </h2>

          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="New Password"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              {...register("newPassword", { required: "Enter New Password" })}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm mb-2">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Confirm New Password"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              {...register("confirmPassword", {
                required: "Enter Confirm Password",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mb-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#206b1966] p-2 rounded-md text-lg text-white"
          >
            Change my password
          </button>
        </form>
        {/* image section */}
        <div className="flex-[0.5]  flex gap-3 h-auto min-h-[360px] w-full">
          {/* image */}
          <div className="flex-[0.3] w-full border border-black"></div>
          {/* content */}
          <div className="flex-[0.6] max-w-[495px] w-full flex flex-col gap-3 py-3">
            <span className="font-normal text-[18px] leading-[24px] text-[#13400f] font-Helvetica">
              The Factor App
            </span>
            <h1 className="font-semibold text-[40px] text-[#333] w-full">
              Meals at Your Fingertips
            </h1>
            <span className="font-normal text-[16px] leading-[24px] text-black font-Helvetica">
              With our app you can view menus, select meals, and see your
              scheduled deliveries.
            </span>
            <div className="w-full flex sm:flex-row flex-col gap-3">
              <div className="w-30 h-10 relative">
              <Image
                src="/temp/appstore-badge-en.png"
                alt="appstore"
                fill
                className="object-contain"
                sizes="120px"
              />
              </div>
             <div className="w-30 h-10 relative">
              <Image
                src="/temp/playstore-badge-en.png"
                alt="appstore"
                fill
                className="object-contain"
                sizes="120px"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
