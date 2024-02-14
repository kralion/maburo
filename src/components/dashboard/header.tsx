import { Input } from "@/components/ui/input";
import { LucideBellDot, LucideChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { NotificationDialog } from "./notifications";
import { OptionsSheet } from "./options";

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] rounded-full px-4 lg:w-[350px]"
      />
      <div className="flex gap-2 items-center">
        <NotificationDialog
          title="You are caught up !"
          description="You've read all of your notifications, inbox empty"
          okText="Accept"
        >
          <Button variant="ghost">
            <LucideBellDot className="text-slate-500" />
          </Button>
        </NotificationDialog>
        <OptionsSheet>
          <Button
            variant="ghost"
            className="flex rounded-xl gap-2 px-2 items-center"
          >
            <div className="flex gap-2 items-center">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" />
                <AvatarFallback>BP</AvatarFallback>
              </Avatar>
              <span className="text-sm font-semibold">Serena Robert</span>
            </div>

            <LucideChevronDown className="text-slate-500 h-5 w-5" />
          </Button>
        </OptionsSheet>
      </div>
    </div>
  );
}
