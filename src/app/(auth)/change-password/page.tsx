"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AppCTASection from "@/components/main/AppCTASection";

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
    <div className="h-[calc(100vh-56px)] overflow-hidden flex items-center justify-center bg-[#f1f1ea] px-12 ">
      <div className="mx-auto w-full h-full max-w-[1200px] flex items-center gap-6 lg:gap-0 justify-center lg:justify-between px-3 py-6 flex-col lg:flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-white rounded-lg shadow-lg h-auto min-h-[250px] max-w-[424px] w-full gap-3 flex-[0.7] flex flex-col items-center"
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
      <AppCTASection />
      </div>
    </div>
  );
};

export default Page;
