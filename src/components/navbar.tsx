import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  LucideCalendar,
  LucideHistory,
  LucideHome,
  LucideMessageSquare,
  LucideSettings,
  LucideTicket,
} from "lucide-react";

export function NavBar() {
  return (
    <div className="flex flex-col gap-96 justify-between ">
      <div>
        <p className="font-bold lowercase my-10 px-3 text-2xl">Maburo.</p>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="hover:bg-blue-500 group text-slate-500 hover:text-white">
              <LucideHome className="h-5 w-5 text-blue-500 group-hover:fill-green-400 group-hover:text-green-400 " />
              Home
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Recent Tickets <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled></MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Actions</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Notifications</MenubarItem>
                  <MenubarItem>Go to Dashboard</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hover:bg-blue-500 group text-slate-500 hover:text-white">
              <LucideTicket className="h-5 w-5 text-blue-500 group-hover:fill-green-400 group-hover:text-green-400  " />
              Ticket
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Ticket <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Book <MenubarShortcut>⇧⌘B</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Find Ticket</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hover:bg-blue-500 group text-slate-500 hover:text-white">
              <LucideCalendar className="h-5 w-5 text-blue-500 group-hover:fill-green-400 group-hover:text-green-400 " />
              Schedule
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hover:bg-blue-500 group text-slate-500 hover:text-white">
              <LucideHistory className="h-5 w-5 text-blue-500 group-hover:fill-green-400 group-hover:text-green-400  " />
              History
            </MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Daily</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Monthly</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Anually</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>
                Clear <MenubarShortcut>⇧⌘C</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hover:bg-blue-500 group text-slate-500 hover:text-white">
              <LucideMessageSquare className="h-5 w-5 text-blue-500 group-hover:fill-green-400 group-hover:text-green-400  " />
              Support
            </MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Call Center</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Message</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Email</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-blue-500 group text-slate-500 hover:text-white">
            <LucideSettings className="h-5 w-5  text-blue-500 group-hover:fill-green-400 group-hover:text-green-400" />
            Settings
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
