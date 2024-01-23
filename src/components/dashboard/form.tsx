"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Flight from "@/assets/images/banner_dashboard.png";
import { DatePicker } from "./datepicker";
import SelectField from "./selectField";
import { ToastAction } from "../ui/toast";
const formSchema = z.object({
  from: z.string().min(2).max(50),
  to: z.string().min(2).max(50),
  date: z.date(),
  passenger: z.string().min(1).max(50),
  quantity: z.number().min(1).max(50),
});

function DashboardForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  const { toast } = useToast();
  return (
    <Form {...form}>
      <div className="flex p-5 rounded-2xl items-center justify-between  bg-white ">
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">
            Where would you want to go ?
          </h4>
          <h1 className="text-4xl font-semibold">Book a Flight</h1>
          <img src={Flight} className="rounded-xl" alt="flight" width={350} />
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="from"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">From</FormLabel>
                <FormControl>
                  <SelectField
                    values={[
                      "Warsaw Chopin Airport",
                      "New Yogyyakarta Airport",
                      "London Heathrow Airport",
                      "Paris Charles de Gaulle Airport",
                      "Frankfurt Airport",
                      "Amsterdam Airport Schiphol",
                      "Madrid Barajas Airport",
                    ]}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="to"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">To</FormLabel>
                <FormControl>
                  <SelectField
                    values={[
                      "Warsaw Chopin Airport",
                      "New Yogyyakarta Airport",
                      "London Heathrow Airport",
                      "Paris Charles de Gaulle Airport",
                      "Frankfurt Airport",
                      "Amsterdam Airport Schiphol",
                      "Madrid Barajas Airport",
                    ]}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-5">
            <FormField
              control={form.control}
              name="date"
              render={() => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="font-semibold">Date</FormLabel>
                  <FormControl>
                    <DatePicker />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="from"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Passenger</FormLabel>
                  <FormControl>
                    <SelectField
                      values={["Male", "Female", "Other"]}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Quantity</FormLabel>
                  <FormControl>
                    <SelectField
                      values={["1", "2", "3", "4", "5", "6", "7"]}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            onClick={() => {
              toast({
                variant: "destructive",
                title: "Fill the form",
                description: "Please fill the required fields",
                action: <ToastAction altText="Try again">Close</ToastAction>,
              });
            }}
            className="w-full"
            type="submit"
          >
            Search
          </Button>
        </form>
      </div>
    </Form>
  );
}

export default DashboardForm;
