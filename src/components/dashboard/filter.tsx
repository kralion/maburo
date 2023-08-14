import { CheckSquare, LucideX } from "lucide-react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { RadioGroupDashboard } from "./radio";

const CabinClass = ["All", "Economy", "Business", "First Class"];
const Departure = [
  "1:00 AM - 2:00 AM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
];

function Filter() {
  return (
    <div className=" bg-white rounded-2xl w-fit p-5 space-y-7 ">
      <div className="flex justify-between items-baseline">
        <LucideX className="w-4 h-4 hover:text-slate-700 cursor-pointer" />
        <h3 className="font-semibold hover:text-slate-700 cursor-pointer ">
          Filter
        </h3>
        <h4 className="font-semibold text-sm hover:text-slate-700 cursor-pointer">
          Reset
        </h4>
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold text-sm">Cabin Class</h4>
        <div className="space-y-3">
          <div className="flex gap-2  items-baseline">
            {CabinClass.map((cabin) => (
              <Button
                size="sm"
                key={cabin}
                className="text-[11px]"
                variant="outline"
              >
                {cabin}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold text-sm">Price</h4>
        <div className="space-y-3">
          <p className="flex justify-between text-sm">
            <span>$600</span>
            <span>$900</span>
          </p>
          <Slider defaultValue={[28]} min={15} max={100} step={1} />
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold text-sm">Departure</h4>
        <div className="space-y-3 ">
          <div className="flex gap-2  items-baseline">
            {Departure.slice(0, 2).map((departure) => (
              <Button
                key={departure}
                className="text-[11px]"
                variant="secondary"
              >
                {departure}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <p className="flex justify-between font-semibold">
          <span>Airline</span>
          <span>Select All</span>
        </p>
        <div>
          <RadioGroupDashboard />
        </div>
      </div>
      <p className="text-sm flex items-center">
        <CheckSquare className="inline-block w-4 h-4 mr-2 text-green-700 bg-green-200" />
        <strong>Flexible </strong> tickets that are free for
        <strong> reschedule.</strong>
      </p>
      <Button className="w-full" type="submit">
        Apply Filter
      </Button>
    </div>
  );
}

export default Filter;
