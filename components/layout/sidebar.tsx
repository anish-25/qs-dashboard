"use client"
import Image from "next/image";
import Typography from "../typography";
import Link from "next/link";
import { Home, LayoutDashboard, PieChart } from "lucide-react";
import { SIDEBAR_ITEMS } from "@/data/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <nav className="h-screen fixed w-12 bg-[#1d1d1b] left-0 top-0 z-50 overflow-hidden 2xl:hover:w-[325px] xl:hover:w-[280px] transition-all duration-300 flex flex-col justify-start items-start pt-20">
      <span className="flex justify-start items-centers space-x-5 pl-2">
        <Image
          src={"https://www.qs.com/wp-content/uploads/2023/04/QS-Logo.svg"}
          alt="QS"
          width={30}
          height={30}
        />
        <Typography
          variant={"body2"}
          className="text-primary max-w-[80px] font-semibold">
          Quacquarelli Symonds
        </Typography>
      </span>
      <ul className="flex flex-col justify-start items-start space-y-4 mt-10 text-white w-full">
        {SIDEBAR_ITEMS.map((item) => {
          return (
            <li key={item.menuid} className="w-full">
              <Link
                className={cn(
                  "flex justify-start items-centers space-x-5 text-primary px-2 py-4 w-full",
                  pathname === item.menulink ? "bg-primary-foreground" : ""
                )}
                href={item.menulink}>
                <span>
                  <item.icon stroke="#F7A60E" size={25} />
                </span>
                <Typography variant="body2">{item.menuname}</Typography>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
