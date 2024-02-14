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
import { CustomNavLink } from "./navLink";
import { useMatch, useResolvedPath } from "react-router-dom";
import clsx from "clsx";

const navLinks = [
  {
    title: "Home",
    icon: LucideHome,
    href: "/",
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
  const resolved = useResolvedPath("/settings");
  return (
    <div className="flex flex-col gap-[470px] w-44 justify-between ">
      <div className="flex flex-col gap-8">
        <Link className="font-bold lowercase px-3 text-2xl" to="/">
          <span>Maburo.</span>
        </Link>
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <CustomNavLink to={link.href}>
              <link.icon className="h-5 w-5 " />
              {link.title}
            </CustomNavLink>
          ))}
        </div>
      </div>

      <Link to="/settings">
        <Button
          variant="ghost"
          className={clsx(
            "hover:bg-blue-500  flex rounded-xl justify-start gap-3 active:opacity-70  w-full text-slate-500 hover:text-white",
            useMatch(resolved.pathname)
              ? " text-white bg-blue-500"
              : "bg-transparent"
          )}
        >
          {<LucideSettings />}
          Settings
        </Button>
      </Link>
    </div>
  );
}
