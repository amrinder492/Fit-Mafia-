"use client";

import axios from "axios";
import {
  AlignJustify, X
} from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProfilePopover from "../main/ProfilePopover";

const Header = () => {
  axios.defaults.validateStatus = (status: number) => status < 500;
  const { data: status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[110] flex justify-between items-center px-5 w-full h-[56px] shadow-lg border-b border-[#0000001c] bg-[#fff] font-medium">
      <div className="w-full hidden md:block">
        <div className="w-full flex justify-between items-center">
          {/* // first part of the header */}
          <div className="flex items-center gap-4 w-full ">
            <Link href={'/'} className="relative h-10 w-16 rounded-lg overflow-hidden">
              <Image
                src={"/icons/header/logo.png"}
                alt="logo"
                fill
                style={{ objectFit: "cover" }}
              />
            </Link>
            <div className="w-fit">
              <ul className="flex gap-3 lg:gap-4 items-center w-full text-black ">
                <li className="w-full min-w-24 flex items-center gap-1 text-black group hover:text-red-700 duration-300 cursor-pointer">
                  <Link href={"/weekly-menu"}>Weekly Menu</Link>
                </li>
                <li className="w-full min-w-[80px] flex items-center gap-1 group hover:text-red-700 duration-300 cursor-pointer">
                  <Link href={"/our-plans"} className=" w-full min-w-[80px]">
                    Our Plans
                  </Link>
                </li>
                <li className="w-full min-w-[110px] flex items-center gap-1 group hover:text-red-700 duration-300 cursor-pointer">
                  {/* About Us */}
                  <Link href={"/how-it-works"} className=" w-full min-w-[80px]">
                    How it Works
                  </Link>
                  {/* <ChevronDown className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-[400] ease-linear" /> */}
                </li>
                <li className="w-full min-w-[82px] flex items-center gap-1 group hover:text-red-700 duration-300 cursor-pointer">
                  <Link href={"/contact-us"} className=" w-full min-w-[82px]">
                    Contact Us
                  </Link>
                </li>
                <li className="w-full  flex items-center gap-1 group hover:text-red-700 duration-300 cursor-pointer">
                  <Link href={"/faqs"}>FAQs</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* // Second part of the header */}
          <div className="flex justify-end items-center gap-4 w-full  ">
            <div className="hover:text-red-700 duration-300">
              {/* {status && <User />} */}
              {status && <ProfilePopover/>}
            </div>
            {!status && (
              <Link
                href={"/sign-in"}
                className="px-3 py-1 border border-fit-red rounded-md "
              >
                Login
              </Link>
            ) 
            // : (
            //   <button
            //     onClick={() => signOut()}
            //     className="px-3 py-1 border border-fit-red rounded-md "
            //   >
            //     Log out
            //   </button>)
              }
          </div>
        </div>
      </div>

      {/* // Mobile Header */}
      <div className="w-full hidden max-md:block ">
        <div className="w-full flex justify-between items-center gap-4 ">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-red-700" /> : <AlignJustify />}
          </button>
          <Link href={'/'} className="relative h-10 w-16 rounded-lg overflow-hidden">
            <Image
              src={"/icons/header/logo.png"}
              alt="logo"
              fill
              style={{ objectFit: "cover" }}
            />
          </Link>
          {status ? <ProfilePopover/> 
          : <Link href={"/sign-in"} className="px-3 py-1 border border-fit-red rounded-md " >
            Login
          </Link>}
        </div>

        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#d9d9d6] text-black absolute top-[56px] left-0 px-8 py-5 text-left z-50"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="flex flex-col gap-2 items-center w-full"
            >
              {[
                { href: "/weekly-menu", label: "Weekly Menu" },
                { href: "/our-plans", label: "Our Plans" },
                { href: "/how-it-works", label: "How it Works" },
                { href: "/contact-us", label: "Contact Us" },
                { href: "/faqs", label: "FAQs" },
              ].map(({ href, label }) => (
                <motion.li
                  key={href}
                  variants={{
                    hidden: { opacity: 0, y: -30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full min-w-24 flex flex-col gap-1 group duration-300 cursor-pointer"
                >
                  <Link href={href}>{label}</Link>
                  <div className="w-0 duration-300 rounded-lg h-[2px] bg-fit-red group-hover:w-full"></div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Header;
