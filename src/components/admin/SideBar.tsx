"use client";

import { sidebarLinks } from "@/constants/data";
import { House, IdCard, LayoutDashboard, ListOrdered, MenuSquare, User, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
const iconMap = {
  LayoutDashboard,
  ListOrdered,
  IdCard,
  MenuSquare,
  User,
};
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button (visible only on small screens) */}
      {!isOpen && <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden ml-3 mt-3 w-fit h-fit z-50 p-2 text-black bg-[#242c40] rounded-md"
      >
        <House className="text-white" />
      </button>}

      {/* Sidebar */}
      <aside
        className={`fixed md:top-0 left-0 z-40 h-[calc(100vh-56px)] px-5 w-3/4 lg-tall:w-full bg-[#242c40] transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full mr-1"
        } md:translate-x-0 md:static md:inset-auto`}
      >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden  mt-[14px] z-50 p-2 text-black bg-white rounded-md shadow-md"
              >
                <X />
              </button>
        <div className="h-full py-8 w-full overflow-y-auto">
          <ul className="flex flex-col gap-6 w-full text-white font-extralight">
            {sidebarLinks?.map((menu) => {
              const Icon = iconMap[menu.icon as keyof typeof iconMap];
              return (
            <li key={menu?.title} className="cursor-pointer flex gap-2">
                <Icon strokeWidth={1.2} className=""/>
                <Link href={menu?.link} onClick={()=> setIsOpen(!isOpen)}>
                {menu?.title}
                </Link>
            </li>
            )})}
          

          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
