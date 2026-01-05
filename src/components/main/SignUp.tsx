"use client";

import axios from "axios";
import { LoaderIcon } from "lucide-react";
// import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormData = {
  userName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // debugger
    try {
      console.log("Submitting data:", data);
      const res = await axios.post("/api/v1/register", data);
      console.log(res)

      if (res.data.statusCode == 201) {
        console.log("Registration successful:", res.data);
        // You can redirect or show a success message here
        toast.success("Registration successful! Welcome to Fit Mafia.");
        // Example redirect:
        setLoading(false);
        router.push("/sign-in");
        return
      }


      if (res.data.statusCode == 400) {
        console.error("Unexpected response:", res.data);
        toast.error("All fields are required");
        setLoading(false);
        return
      }
      if (res.data.statusCode == 409) {
        console.error("Unexpected response:", res.data);
        toast.error("User already exist");
        setLoading(false);
        return
      }
      console.error("Unexpected response:", res.data);
      setLoading(false);
      return

    } catch (error) {
      console.error("An error occurred during registration:", error);
      // toast.error(error?.response?.data?.message
        // "Could not register. Please check your details and try again."
      // );
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-56px)] flex items-start justify-center bg-[#f1f1ea]">
      <div className="max-w-[1100px] w-full h-full flex items-center gap-6 justify-center px-3 py-6 flex-col lg:flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-white rounded-lg shadow-lg h-auto min-h-[432px] max-w-[424px] w-full gap-3 flex-[0.5] flex flex-col items-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-black">Create Account</h2>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-black">
              User Name
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black outline-none"
              {...register("userName", { required: "Username is required" })}
            />
            {errors.userName && (
              <p className="text-red-500 text-sm mb-2">
                {errors.userName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-black">
              Email
            </label>
            <input
              type="text"
              placeholder="email"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
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
              {/* <a className="" href="/forget-password">
                Forgot your password?
              </a> */}
            </div>
          </div>

          <button
            type="submit"
            className="btn w-full bg-fit-red/90 p-2 rounded-md text-lg text-center flex gap-2 justify-center items-center text-white"
            disabled={loading}
          >
            {!loading ? (
              "Create"
            ) : (<>
              <LoaderIcon className="animate-[spin_2s_linear_infinite]" />
              Loading
              </>
            )}
          </button>
          <p className="mt-4 text-center text-black">
            Already know Fit Mafia?
            <Link className="text-fit-red/80" href="/sign-in">
              Sign In Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
