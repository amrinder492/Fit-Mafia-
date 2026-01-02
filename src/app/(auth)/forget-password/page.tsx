"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import AppCTASection from "@/components/main/AppCTASection";

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
    <div className="h-[calc(100vh-56px)] overflow-hidden flex items-center justify-center bg-[#f1f1ea] px-6 lg:px-12">
      <div className="mx-auto w-full h-full max-w-[1200px] flex items-center  gap-10 lg:gap-0 lg:justify-between justify-center px-3 py-6 flex-col lg:flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6  rounded-lg shadow-lg h-auto lg:min-h-[250px] max-w-[524px] w-full gap-3 lg:flex-[0.7] flex flex-col items-center"
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
       <AppCTASection />
      </div>
    </div>
  );
};

export default Page;
