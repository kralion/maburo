import {
  LucideCalendar,
  LucideHistory,
  LucideHome,
  LucideMessageSquare,
  LucideSettings,
  LucideTicket,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
const navLinks = [
  {
    title: "Home",
    icon: LucideHome,
    href: "/dashboard",
  },
  {
    title: "Ticket",
    icon: LucideTicket,
    href: "/ticket",
  },
  {
    title: "Schedule",
    icon: LucideCalendar,
    href: "/schedule",
  },
  {
    title: "History",
    icon: LucideHistory,
    href: "/history",
  },
  {
    title: "Support",
    icon: LucideMessageSquare,
    href: "/support",
  },
];

export function NavBar() {
  return (
    <div className="flex flex-col gap-[450px] w-44 justify-between ">
      <div>
        <p className="font-bold lowercase my-10 px-3 text-2xl">Maburo.</p>

        {navLinks.map((link) => (
          <Link to={link.href}>
            <Button
              variant="ghost"
              className="hover:bg-blue-500 flex my-2 justify-start gap-3 active:opacity-70 group w-full text-slate-500 hover:text-white"
            >
              {
                <link.icon className="h-5 w-5 text-blue-500 group-hover:fill-green-400 group-hover:text-green-400 " />
              }
              {link.title}
            </Button>
          </Link>
        ))}
      </div>

      <Link to="/settings">
        <Button
          variant="ghost"
          className="hover:bg-blue-500 flex  justify-start gap-3 active:opacity-70 group w-full text-slate-500 hover:text-white"
        >
          {
            <LucideSettings className="h-5 w-5 text-blue-500 group-hover:fill-green-400 group-hover:text-green-400 " />
          }
          Settings
        </Button>
      </Link>
    </div>
  );
}
