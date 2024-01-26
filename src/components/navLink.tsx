import type { LinkProps } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { clsx } from "clsx";
import { Button } from "./ui/button";
export function CustomNavLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);

  return (
    <Link to={to} {...props}>
      <Button
        variant="ghost"
        className={clsx(
          "hover:bg-blue-500  flex rounded-xl justify-start gap-3 active:opacity-70 group w-full text-slate-500 hover:text-white",
          useMatch(resolved.pathname)
            ? " text-white group-default:fill-green-500 group-default:text-green-500 bg-blue-500"
            : "bg-transparent"
        )}
      >
        {children}
      </Button>
    </Link>
  );
}
