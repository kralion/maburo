import { ChevronDown, LucideFilter } from "lucide-react";
import TravelPlane from "../../assets/icons/travel-plane.png";
import ResultsCard from "./results-card";
import QantasLogo from "../../assets/logos/qantas.png";
import ArabiaAIRLogo from "../../assets/logos/cathay-pacific.png";

function Results() {
  return (
    <div className="space-y-5 px-3">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold hover:text-slate-700 cursor-pointer ">
          Results
        </h3>
        <div className="flex gap-3">
          <h3 className=" text-sm hover:text-slate-700 cursor-pointer">
            Sort by
            <span className="font-semibold text-sm hover:text-slate-700 cursor-pointer">
              {` `}
              Lowest
            </span>
          </h3>
          <ChevronDown className="w-4 h-4 hover:text-slate-700 cursor-pointer" />
          <LucideFilter className="w-5 h-5 text-blue-500 hover:text-slate-700 cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="space-y-1 text-sm">
          <span className="font-semibold">From</span>
          <h3 className="font-semibold text-4xl hover:text-slate-700 cursor-pointer ">
            WAW
          </h3>

          <span className="text-slate-600">Warsaw</span>
        </p>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full mx-3 bg-green-200 border-2 rounded-lg border-dashed border-green-500 dark:bg-green-200" />
          <div className="absolute px-4 ">
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
      <section className="flex gap-5">
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
