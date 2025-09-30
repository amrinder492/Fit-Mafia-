"use client";

import { LoaderIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormData = {
  email: string;
  password: string;
};

const SignInPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    console.log(data);
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    
    if (res?.ok) {
      toast.success("Welcome back to Fit Mafia!")
      router.push("/");
    } 

    if(res?.status === 401) {
      toast.error("Incorrect Id and password. Please try again.");
    }

    setLoading(false)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f1ea]">
      <div className="max-w-[1100px] w-full min-h-[643px] flex items-center lg:items-start gap-6 justify-center px-3 py-6 flex-col lg:flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-white rounded-lg shadow-lg h-auto min-h-[432px] max-w-[424px] w-full gap-3 flex-[0.5] flex flex-col items-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-black">
              Email
            </label>
            <input
              type="text"
              placeholder="email"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-black">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black outline-none"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-2">
                {errors.password.message}
              </p>
            )}
            <div className="m-3 text-right ">
              <a className="" href="/forget-password">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="btn w-full bg-fit-red/90 p-2 rounded-md text-lg text-white flex gap-2 justify-center items-center text-center"
            disabled={loading}
          >
            {!loading ? (
              "Login"
            ) : (
              <>
                <LoaderIcon className="animate-[spin_2s_linear_infinite]" />
                Loading
              </>
            )}
          </button>
          <p className="mt-4 text-center text-black">
            New to Fit Mafia?
            <Link className="text-fit-red/80" href="/sign-up">
              Sign Up Here
            </Link>
          </p>
        </form>
        {/* image section */}
        <div className="hidden flex-[0.5]  fl ex gap-3 h-auto min-h-[360px] w-full">
          {/* image */}
          <div className="flex-[0.3] w-full border border-black"></div>
          {/* content */}
          <div className="flex-[0.6] w-full flex flex-col gap-3 py-3">
            <span className="font-normal text-[18px] leading-[24px] text-[#13400f] font-Helvetica">
              The Fit Mafia App
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
        </div>{" "}
      </div>
    </div>
  );
};

export default SignInPage;
