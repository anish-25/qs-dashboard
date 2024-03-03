import { Home, LucideIcon, PieChart } from "lucide-react";

type SidebarItem = {
  menuid: number;
  menuname: string;
  menulink: string;
  icon: LucideIcon;
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    menuid: 1,
    menuname: "Home",
    menulink: "/",
    icon: Home,
  },
  {
    menuid: 2,
    menuname: "Dashboard",
    menulink: "/dashboard",
    icon: PieChart,
  },
];
