"use client";

import { IdCard, LayoutDashboard, ListOrdered, Menu, MenuSquare, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button (visible only on small screens) */}
      {!isOpen && <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden ml-3 mt-3 w-fit h-fit z-50 p-2 text-black bg-slate-400 rounded-md"
      >
        <Menu />
      </button>}

      {/* Sidebar */}
      <aside
        className={`fixed md:top-0 left-0 z-40 h-[calc(100vh-56px)] px-5 w-fit bg-[#242c40] transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full mr-1"
        } md:translate-x-0 md:static md:inset-auto`}
      >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden ml-3 mt-[14px] z-50 p-2 text-black bg-white rounded-md shadow-md"
              >
                <Menu />
              </button>
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="flex flex-col gap-3  text-white font-extralight">
            
            <li className="cursor-pointer flex gap-2">
                <LayoutDashboard strokeWidth={1.2}/>
                <Link href={'/dashboard'} onClick={()=> setIsOpen(!isOpen)}>
                Dashboard
                </Link>
            </li>
            {/* <div className="w-full bg-white h-[0.5px]"></div> */}
            <li className="cursor-pointer flex items-center gap-2">
                <ListOrdered strokeWidth={1.2}/>
                <Link href={'/order-mgt'} onClick={()=> setIsOpen(!isOpen)}>
                Order <br/> Management
                </Link>
            </li>
            <li className="cursor-pointer flex items-center gap-2">
                <IdCard strokeWidth={1.2}/>
                <Link href={'/subscription-mgt'} onClick={()=> setIsOpen(!isOpen)}>
                Subscription <br/> Management
                </Link>
            </li>
            <li className="cursor-pointer flex items-center gap-2">
                <MenuSquare strokeWidth={1.2}/>
                <Link href={'/menu-mgt'} onClick={()=> setIsOpen(!isOpen)}>
                Menu <br/> Management
                </Link>
            </li>
            <li className="cursor-pointer flex items-center gap-2">
                <User strokeWidth={1.2}/>
                <Link href={'/user-mgt'} onClick={()=> setIsOpen(!isOpen)}>
                User <br/> Management
                </Link>
            </li>

          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
