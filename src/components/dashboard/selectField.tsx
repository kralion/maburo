import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
type SelectFormProps = {
  placeholder: string;
  values: string[];
};

export default function SelectField({ placeholder, values }: SelectFormProps) {
  return (
    <Select>
      <SelectTrigger className="w-auto ">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {values.map((value) => (
          <SelectItem key={value} value={value}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
