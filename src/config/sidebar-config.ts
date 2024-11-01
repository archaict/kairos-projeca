import { Home, Inbox, Calendar, Search, Settings } from "lucide-react";

interface SidebarItem {
  title: string;
  url: string;
  icon: any;
}

export const sidebarItems: SidebarItem[] = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
