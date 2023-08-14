import { LucideDice3 } from "lucide-react";
import QantasLogo from "../../assets/logos/qantas.png";
const FlightModels = ["Lion Air", "Batik Air", "Citilink"];

function ResultsCard() {
  return (
    <div className="rounded-xl w-full  bg-white p-3 space-y-5 font-semibold">
      <div className="flex justify-between items-center">
        <p className="flex gap-1 text-sm text-blue-500">
          <h4>4:20 PM</h4>-
          <span className="flex items-start">
            <h4>1:25 PM</h4>
            <h5 className="text-[9px]">+2</h5>
          </span>
        </p>
        <LucideDice3 className="w-4 h-4" />
      </div>
      <div className="flex justify-between items-center">
        <p className="flex gap-3 text-blue-500">
          <img src={QantasLogo} width={40} alt="airline-logo" />
          <p>
            <span className="font-bold text-black text-xl">Qantas AIR</span>{" "}
            <br />
            <span className="text-green-500 text-sm font-normal">
              AMS|SIN|CGK
            </span>
          </p>
        </p>
        <p className="text-xl ">
          <span className="font-bold ">$548</span> <br />
          <span className="text-slate-500 text-sm font-normal">Price</span>
        </p>
      </div>
      <div className="bg-slate-100 rounded-lg px-3 gap-4 flex justify-center py-2">
        {FlightModels.map((model, index) => (
          <span key={index} className="text-sm font-bold">
            {model}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ResultsCard;
