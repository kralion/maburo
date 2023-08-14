"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DatePicker } from "./datepicker";
import SelectField from "./selectField";
import Flight from "@/assets/images/flight.jpg";
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
  return (
    <Form {...form}>
      <div className="flex p-5 rounded-2xl w-fit gap-5 bg-white ">
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">
            Where would you want to go ?
          </h4>
          <h1 className="text-4xl font-semibold">Book a Flight</h1>
          <img src={Flight} className="rounded" alt="flight" width={360} />
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
                    placeholder="Select a origin"
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
                    placeholder="Select a destination"
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
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="font-semibold">Date</FormLabel>
                  <FormControl>
                    <DatePicker {...field} />
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
                      placeholder={"Gender"}
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
                      placeholder={"Qty."}
                      values={["1", "2", "3", "4", "5", "6", "7"]}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full" type="submit">
            Search
          </Button>
        </form>
      </div>
    </Form>
  );
}

export default DashboardForm;
