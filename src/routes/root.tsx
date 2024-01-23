import { NavBar } from "@/components/navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

export default function Root() {
  return (
    <div className="font-Montserrat">
      <div className="flex ">
        <aside className="px-2">
          <div className="sticky  top-7 w-full">
            <NavBar />
          </div>
        </aside>
        <main
          role="main"
          className="w-full min-h-screen flex gap-4 justify-center items-center bg-slate-200/50  p-8 rounded-3xl"
        >
          <Outlet />
        </main>
      </div>

      <footer className="mt-auto"></footer>
      <Toaster />
    </div>
  );
}
