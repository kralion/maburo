import { ChevronDown, LucideFilter } from "lucide-react";
import TravelPlane from "../../assets/icons/travel-plane.png";
import ResultsCard from "./results-card";
import QantasLogo from "../../assets/logos/qantas.png";
import ArabiaAIRLogo from "../../assets/logos/cathay-pacific.png";
import { Button } from "../ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "../ui/menubar";

function Results() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold hover:text-slate-700 cursor-pointer ">
          Results
        </h3>
        <div className="flex items-center">
          <h3 className=" text-sm hover:text-slate-700 cursor-pointer">
            Sort by
          </h3>
          <Menubar className="w-fit">
            <MenubarMenu>
              <MenubarTrigger className="w-fit hover:opacity-80 hover:text-slate-600 ">
                <Button variant="outline" className="flex items-center gap-2">
                  <span className="font-semibold text-sm hover:text-slate-700 cursor-pointer">
                    Lowest
                  </span>
                  <ChevronDown className="w-4 h-4 hover:text-slate-700 cursor-pointer" />
                </Button>
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

          <LucideFilter className="w-5 h-5 text-blue-500 " />
        </div>
      </div>
      <div className="flex items-center">
        <p className="space-y-1 text-sm">
          <span className="font-semibold">From</span>
          <h3 className="font-semibold text-4xl hover:text-slate-700 cursor-pointer ">
            WAW
          </h3>

          <span className="text-slate-600">Warsaw</span>
        </p>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full mx-3 bg-green-200 border-2 rounded-lg border-dashed border-green-500 dark:bg-green-200" />
          <div className="absolute px-4 flex-1 ">
            <img
              src={TravelPlane}
              alt="icon"
              width={24}
              className="rotate-45"
            />
          </div>
        </div>

        <p className="space-y-1 text-sm">
          <span className="font-semibold">To</span>
          <h3 className="font-semibold text-4xl hover:text-slate-700 cursor-pointer ">
            YIA
          </h3>
          <span className="text-slate-600">Yogyakarta</span>
        </p>
      </div>
      <section className="grid grid-flow-row grid-cols-2 gap-5">
        <ResultsCard
          name="Qantas"
          logo={QantasLogo}
          services={["AMS", "CGK", "SIN"]}
          price={485}
          flightModels={["SN 0861584", "Fart WULAD", "DOR 007"]}
        />
        <ResultsCard
          name="Arabia AIR"
          logo={ArabiaAIRLogo}
          services={["AMS", "CGK", "SIN"]}
          price={570}
          flightModels={["Boeing 737", "Boeing 747", "JK-AAB"]}
        />
        <ResultsCard
          name="Qantas"
          logo={QantasLogo}
          services={["AMS", "CGK", "SIN"]}
          price={485}
          flightModels={["SN 0861584", "Fart WULAD", "DOR 007"]}
        />
        <ResultsCard
          name="Arabia AIR"
          logo={ArabiaAIRLogo}
          services={["AMS", "CGK", "SIN"]}
          price={570}
          flightModels={["Boeing 737", "Boeing 747", "JK-AAB"]}
        />
      </section>
    </div>
  );
}

export default Results;
