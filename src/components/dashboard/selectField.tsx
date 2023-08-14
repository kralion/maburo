import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as React from "react";

interface SelectFormProps
  extends React.HTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof SelectTriggerVariants> {
  values: string[];
  asChild?: boolean;
  variant?: "default";
  size?: "default" | "medium" | "large";
}

const SelectTriggerVariants = cva({
  variants: {
    variant: {
      default: {
        field: "border border-gray-300 rounded-md",
        trigger: "bg-white",
        content: "bg-white",
        item: "hover:bg-gray-100",
      },
    },
    size: {
      default: {
        field: "h-10 px-4 py-2",
        trigger: "h-full",
        content: "h-full",
        item: "h-full",
      },
      medium: {
        field: "h-9 rounded-md px-3",
        trigger: "h-full",
        content: "h-full",
        item: "h-full",
      },
      large: {
        field: "h-11 rounded-md px-8",
        trigger: "h-full",
        content: "h-full",
        item: "h-full",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export default function SelectField({
  placeholder,
  values,
  variant,
  size,
  className,
}: SelectFormProps) {
  return (
    <Select>
      <SelectTrigger
        className={cn(SelectTriggerVariants({ variant, size, className }))}
      >
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
