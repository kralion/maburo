import { Checkbox } from "@/components/ui/checkbox";
import { LucideX } from "lucide-react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { RadioGroupDashboard } from "./radio";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

const CabinClass = ["All", "Economy", "Business", "First Class"];
const Departure = [
  "1:00 AM - 2:00 AM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
];
function Filter() {
  const { toast } = useToast();
  return (
    <div className=" bg-white rounded-2xl w-fit p-5 space-y-10 ">
      <div className="flex justify-between items-baseline">
        <LucideX className="w-4 h-4 hover:text-slate-700 cursor-pointer" />
        <h3 className="font-semibold hover:text-slate-700 cursor-pointer ">
          Filter
        </h3>
        <h4 className="font-semibold text-sm hover:text-slate-700 cursor-pointer">
          Reset
        </h4>
      </div>
      <div className="space-y-5">
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
      <div className="space-y-5">
        <h4 className="font-semibold text-sm">Price</h4>
        <div className="space-y-3">
          <p className="flex justify-between text-sm">
            <span>$600</span>
            <span>$900</span>
          </p>
          <Slider defaultValue={[28]} min={15} max={100} step={1} />
        </div>
      </div>
      <div className="space-y-5">
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
      <div className="space-y-5">
        <RadioGroupDashboard />
      </div>
      <p className="text-sm flex gap-2 items-start">
        <Checkbox
          onClick={() => {
            toast({
              title: "Could take long",
              description: "This action could take a while to complete",
              action: <ToastAction altText="Try again">Got it</ToastAction>,
            });
          }}
          color="#059669"
        />

        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="refundable"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Refundable Only
          </label>
          <p className="text-sm text-slate-500">
            Terms are applied to the selected flight.
          </p>
        </div>
      </p>
      <Button className="w-full" type="submit">
        Apply Filter
      </Button>
    </div>
  );
}

export default Filter;
