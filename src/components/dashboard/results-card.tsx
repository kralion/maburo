import { LucideMoreHorizontal } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "../ui/menubar";
type ResultsCardProps = {
  name: string;
  services: string[];
  price: number;
  flightModels: string[];
  logo: string;
};

function ResultsCard({
  name,
  services,
  price,
  flightModels,
  logo,
}: ResultsCardProps) {
  return (
    <div className="rounded-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-lg  bg-white p-5 space-y-7 font-semibold">
      <div className="flex justify-between items-center">
        <p className="flex gap-1 text-sm text-blue-500">
          <h4>4:20 PM</h4>-
          <span className="flex items-start">
            <h4>1:25 PM</h4>
            <h5 className="text-[9px]">+2</h5>
          </span>
        </p>
        <Menubar className="w-fit">
          <MenubarMenu>
            <MenubarTrigger className="w-fit">
              <LucideMoreHorizontal className="w-5 h-5" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Save</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Contact</MenubarRadioItem>
                <MenubarRadioItem value="Luis">
                  Register Ticket
                </MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="flex justify-between items-center">
        <p className="flex gap-2 text-blue-500">
          <img src={logo} width={40} alt="airline-logo" />
          <p>
            <span className="font-bold text-black text-xl">{name}</span> <br />
            <span className="text-green-500 text-sm font-normal ">
              {services.join(" ・")}
            </span>
          </p>
        </p>
        <p className="text-xl ">
          <span className="font-bold ">${price}</span> <br />
          <span className="text-slate-500 text-sm font-normal">Price</span>
        </p>
      </div>
      <div className="bg-slate-100 rounded-lg px-5 gap-10 flex justify-between py-2">
        {flightModels.map((model, index) => (
          <span key={index} className="text-sm font-bold">
            {model}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ResultsCard;
