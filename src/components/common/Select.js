import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";
import Text from "./Text";

const SelectVariant = cva(
  "input input-bordered hover:border-[#7879F1] focus:border-[#7879F1] focus:outline-none",
  {
    variants: {
      size: {
        default: "w-full max-w-xs text-sm",
        small: "w-sm text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const Select = ({
  size,
  className,
  label,
  value,
  onChange,
  options}) => {
    return (
      <>
        <label className="form-control w-full flex flex-row gap-10 justify-around ">
          <div className="label w-12">
            <Text variant="text-sm" weight="semibold" className="label-text w-12">
              {label}
            </Text>
          </div>
            <select
            value={value}
            onChange={onChange}
            className={cn(SelectVariant({ size, className }))}
            >
              {
                options.map((option) => {
                  return <option key={option.id} value={option.id}>{option.name}</option>
                })
              }
            </select>
          
        </label>
      </>
    );
}
export default Select;