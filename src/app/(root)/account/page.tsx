"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { UserType } from "@/lib/types";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AccountPage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const user = session?.user as UserType

  const handleOffDay = async (days: number) => {
    const loadingToast = toast.loading("Processing...");
    try {
      if (!session?.user?.email) {
        toast.error("Email is required.");
        return;
      }

      setLoading(true);
      const res = await axios.post("/api/v1/off-day", {
        email: session.user.email,
        days,
      });

      toast.update(loadingToast, {
        render: res.data.message || "Success",
        type: res.status === 200 ? "success" : "error",
        isLoading: false,
        autoClose: 2000,
      });
    } catch (error) {
      const err = axios.isAxiosError(error) ? error.response?.data?.message : "Something went wrong";
      toast.update(loadingToast, {
        render: err,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePauseSubscription = async () => {
    const loadingToast = toast.loading("Processing...");
    try {
      if (!session?.user?.email) {
        toast.error("Email is required.");
        return;
      }

      setLoading(true);
      const res = await axios.post("/api/v1/subscription-pause", {
        email: session.user.email,
      });

      toast.update(loadingToast, {
        render: res.data.message || "Success",
        type: res.status === 200 ? "success" : "error",
        isLoading: false,
        autoClose: 2000,
      });
    } catch (error) {
      const err = axios.isAxiosError(error) ? error.response?.data?.message : "Something went wrong";
      toast.update(loadingToast, {
        render: err,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full py-3 bg-[#d9dfc685] ">
        <div className="max-w-2xl mx-auto p-6 my-10 bg-white shadow rounded-md">
        <h1 className="text-2xl font-bold mb-4">My Account</h1>

        {/* Basic Info */}
        <div className="mb-6">
            <p className="text-lg font-semibold">{user?.userName || "User"}</p>
            <p className="text-sm text-gray-600">{user?.email}</p>
            {/* <p className="text-sm text-gray-500">Role: {user?.role || "user"}</p> */}
        </div>

        {/* Subscription Plan Info */}
        <div className="mb-6">
            <h2 className="font-semibold text-gray-800 mb-2">Current Plan</h2>
            {user?.currentSubscribedPlan ? (
            <>
                <p className="text-sm">Plan: {user.currentSubscribedPlan.plan}</p>
                <p className="text-sm">Duration: {user.currentSubscribedPlan.duration}</p>
                <p className="text-sm">Preference: {user.currentSubscribedPlan.preference}</p>
            </>
            ) : (
            <p className="text-sm text-gray-500">No plan selected.</p>
            )}
        </div>

        {/* Delivery Address */}
        <div className="mb-6">
            <h2 className="font-semibold text-gray-800 mb-2">Delivery Address</h2>
            {user?.deliveryAddress ? (
            <>
                <p>{user?.deliveryAddress?.firstName} {user.deliveryAddress.lastName}</p>
                <p>{user?.deliveryAddress?.street}</p>
                <p>{user?.deliveryAddress?.city}, {user.deliveryAddress.province} {user.deliveryAddress.postalCode}</p>
                <p>Phone: {user.deliveryAddress.phoneNumber}</p>
                <p>Instructions: {user?.deliveryAddress?.enterDeliveryInstruction || "None"}</p>
            </>
            ) : (
            <p className="text-sm text-gray-500">No delivery address saved.</p>
            )}
        </div>

        <div className="mb-6 rounded-lg space-y-2">
            <div className="font-medium">Pause Plan (Off Days)</div>
            <div className="flex gap-4">
                <button
                disabled={loading}
                onClick={() => handleOffDay(1)}
                className=" bg-gray-500 text-white px-4 py-1 rounded-2xl 
                hover:bg-gray-600 hover: transition-all duration-200 ease-in-out 
                active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400
                shadow-md hover:shadow-lg 
                disabled:opacity-50 disabled:cursor-not-allowed
                transform"
                >
                Today
                </button>
                <button
                disabled={loading}
                onClick={() => handleOffDay(2)}
                className=" bg-gray-500 text-white px-4 py-1 rounded-2xl 
                hover:bg-gray-600 hover: transition-all duration-200 ease-in-out 
                active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400
                shadow-md hover:shadow-lg 
                disabled:opacity-50 disabled:cursor-not-allowed
                transform"
                >
                Next Day
                </button>
            </div>
        </div>

        <div className="mb-6 rounded-lg">
        <div className="font-medium mb-2">Pause Subscription</div>
        <button
            onClick={handlePauseSubscription}
            disabled={loading}
            className={`
                bg-red-500 text-white px-4 py-2 rounded-2xl 
                hover:bg-red-600 transition-all duration-200 ease-in-out 
                active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400
                shadow-md hover:shadow-lg 
                disabled:opacity-50 disabled:cursor-not-allowed
                transform
            `}
            >
            {loading ? "Pausing..." : "Pause Entire Subscription"}
        </button>

        </div>
       {/* <div className="py-4 rounded-lg">
        <div className="font-medium mb-2">Change Password</div>
        <Link href="/" 
                className=" bg-red-500 text-white px-4 py-2 rounded-2xl 
                hover:bg-red-600 transition-all duration-200 ease-in-out 
                active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400
                shadow-md hover:shadow-lg 
                disabled:opacity-50 disabled:cursor-not-allowed
                transform">
        Change Password
        </Link>
        </div> */}
        {/* Actions */}
        <div className="flex items-center justify-between mt-8">
            <Link href="/our-plans" className="text-blue-600 hover:underline text-sm">
            Change Plan
            </Link>
            <button
            onClick={() => signOut()}
            className="text-red-600 text-sm hover:underline flex items-center gap-1"
            >
            <LogOut size={14} /> Logout
            </button>
        </div>
        </div>
    </div>
  );
}
