"use client";

import { useState, useRef, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { LogOut, User2Icon } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";

const ProfilePopover = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOffDay = async (days: number) => {
    const loadingToast = toast.loading("Processing...");
    try {
      if (!session?.user?.email) {
        toast.error("Email is required.");
        return;
      }
      setLoading(true);

      const res = await axios.post("/api/v1/off-day", {
        email: session?.user?.email,
        days: days,
      });

      if (res.status === 400 || res.status === 404) {
        setLoading(false);
        return toast.update(loadingToast, {
          render: res.data.message || "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }

      if (res.status === 200) {
        setLoading(false);
        return toast.update(loadingToast, {
          render: res.data.message,
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      }
      setLoading(false);
      console.log("Success:", res.data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error:",
          error.response?.data?.message || "Something went wrong"
        );
        toast.error(error.response?.data?.message || "Something went wrong");
      } else {
        console.error("Error:", "Something went wrong", error);
        toast.update(loadingToast, {
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }
      setLoading(false);
      return;
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
        email: session?.user?.email,
      });

      if (res.status === 400 || res.status === 404) {
        setLoading(false);
        return toast.update(loadingToast, {
          render: res.data.message || "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }

      if (res.status === 200) {
        setLoading(false);
        return toast.update(loadingToast, {
          render: res.data.message,
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      }
      console.log("Success:", res.data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error:",
          error.response?.data?.message || "Something went wrong"
        );
        toast.error(error.response?.data?.message || "Something went wrong");
      } else {
        console.error("Error:", "Something went wrong", error);
        toast.update(loadingToast, {
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }
      setLoading(false);
      return;
    }
  };

  return (
    <div className="text-black relative" ref={popoverRef}>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full border border-gray-300 p-2 hover:ring-2 hover:ring-fit-red transition"
      >
        <User2Icon size={24} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-xl shadow-lg z-50 animate-fade-in">
          <div className="p-4 border-b">
            <div className="font-semibold text-gray-800">
              {session?.user?.userName || "User"}
            </div>
            <div className="text-sm text-gray-500 truncate">
              {session?.user?.email}
            </div>
          </div>

          <div className="flex flex-col p-2 text-sm">
            <Link
              href="/profile"
              className="px-3 py-2 rounded-md hover:bg-gray-100 transition"
            >
              My Profile
            </Link>

            <div className="px-3 py-2 rounded-md hover:bg-gray-100 transition">
              <div className="font-medium">Current Plan</div>
              <div className="text-sm text-gray-600">
                - {session?.user?.currentSubscribedPlan?.plan || "No Plan"}
              </div>
            </div>

            <div className="relative group px-3 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer">
              <div className="font-medium">Pause Plan</div>
              <div className="mt-1 hidden group-hover:flex flex-col bg-white border shadow-md rounded-md w-40 z-10">
                <button
                  onClick={() => handleOffDay(1)}
                  disabled={loading}
                  className="px-3 py-2 text-left text-sm hover:bg-gray-100"
                >
                  - Today
                </button>
                <button
                  onClick={() => handleOffDay(2)}
                  disabled={loading}
                  className="px-3 py-2 text-left text-sm hover:bg-gray-100"
                >
                  - Next day
                </button>
              </div>
            </div>
            <button
              onClick={() => handlePauseSubscription()}
              className="px-3 py-2 text-left text-sm hover:bg-gray-100"
              disabled={loading}
            >
              Subscription Pause
            </button>

            <Link
              href="/our-plans"
              className="px-3 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Upgrade Plan
            </Link>

            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 text-red-600 px-3 py-2 rounded-md hover:bg-gray-100 transition"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePopover;
