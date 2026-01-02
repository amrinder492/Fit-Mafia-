"use client";
import TimerCountDown from "@/components/main/TimerCountDown";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import AppCTASection from "@/components/main/AppCTASection";

type Inputs = {
  otp: string;
};

// otp countdown time
const time = new Date();
time.setSeconds(time.getSeconds() + 300);

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
      const res = await axios.post("/api/v1/verify-otp", data);
      console.log(res);
      router.push('/change-password');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-[calc(100vh-56px)] overflow-hidden flex items-center justify-center bg-[#f1f1ea] px- 12 ">
      <div className="mx-auto w-fit h-full max-w-[1200px] flex items-center gap-6 lg:gap-0 justify-center lg:justify-between p-3 lg:p-10 flex-col lg:flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-white rounded-lg shadow-lg h-auto min-h-[250px] max-w-[424px] w-full gap-3 flex-[0.7] flex flex-col items-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-black">
            We&apos;ve sent you an Email
          </h2>
          <span className="text-[#4b4d4c]">
            Please enter the Otp sent on the Email to reset Your Password
          </span>

          <TimerCountDown expiryTimestamp={time} />

          <div className="flex flex-col w-full">
            <input
              type="number"
              placeholder="Enter OTP"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              {...register("otp", { required: "Otp is required" })}
            />
            {errors.otp && (
              <p className="text-red-500 text-sm mb-2">{errors.otp.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn w-full bg-red-500  p-2 rounded-md text-lg text-white"
          >
            Submit
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
