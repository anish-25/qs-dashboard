"use client";
import React, { useState } from "react";
import Typography from "../typography";
import { cn } from "@/lib/utils";
import { ArrowRightCircle, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const SubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={cn(
          " xl:w-[18%] max-w-[80%] w-0 flex z-20 overflow-hidden text-white transition-all duration-200 flex-col space-y-10  py-7 h-screen fixed bg-secondary-foreground left-10 top-[59px]",
          isOpen ? "w-[85%] lg:w-[20%] md:w-[30%]" : ""
        )}>
        <span className="flex justify-between items-center px-6">
          <Typography className="text-primary" variant={"body1"}>
            PERFORMANCE
          </Typography>
          <LayoutDashboard fill="white" />
        </span>
        <ul className="flex flex-col space-y-2 whitespace-nowrap justify-start items-start">
          <li className="w-full bg-primary-foreground px-6 py-3 font-semibold">
            <Link href={"/dashboard"}>Summary</Link>
          </li>
          <li className="w-full  px-6 py-3">
            <Link href={"/"}>Rankings</Link>
          </li>
          <li className="w-full  px-6 py-3">
            <Link href={"/"}>Student Recruitment</Link>
          </li>
        </ul>
      </div>
      <span
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "fixed xl:hidden text-white flex left-10 top-1/2 z-[100] cursor-pointer hover:left-12 hover:scale-125 transition-all duration-300",
          isOpen ? "rotate-180 lg:!left-[22%] md:!left-[32%] !left-[88%]" : ""
        )}>
        <ArrowRightCircle fill="#F7A60E" size={35} />
      </span>
    </>
  );
};

export default SubNavbar;
