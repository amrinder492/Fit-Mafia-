"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

type Inputs = {
  email: string;
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
      router.push("/reset-password");
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
            Forgot your password?
          </h2>
          <span className="text-[#4b4d4c]">
            No problem! Enter your email address and we&apos;ll send password reset
            instructions to your inbox.
          </span>

          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#206b1966] p-2 rounded-md text-lg text-white"
          >
            Reset my password
          </button>
          <a className="mt-4 text-center text-[#13400f]" href="/sign-in">
            Back to log in
          </a>
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
              <img
                src="/temp/appstore-badge-en.png"
                alt="appstore"
                className="w-30 h-10"
              />
              <img
                src="/temp/playstore-badge-en.png"
                alt="playstore"
                className="w-30 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
