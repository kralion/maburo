import { Input } from "@/components/ui/input";
import { LucideBellDot, LucideChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] rounded-full bg-slate-200 lg:w-[250px]"
      />
      <div className="flex gap-5 items-end">
        <LucideBellDot className="text-slate-500" />
        <p className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" />
            <AvatarFallback>BP</AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold">Serena Robert</span>
        </p>
        <LucideChevronDown className="text-slate-500 h-5 w-5" />
      </div>
    </div>
  );
}