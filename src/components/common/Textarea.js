import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";
import Text from "./Text";

const TextareaVariant = cva(
  "input input-bordered hover:border-[#7879F1] h-24 focus:border-[#7879F1] focus:outline-none",
  {
    variants: {
      size: {
        default: "w-8/12 sm:w-full max-w-xs text-sm",
        small: "w-sm text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const Textarea = ({
  size,
  className,
  label,
  value,
  onChange,
  labelClassName,
}) => {
  return (
    <>
      <label className="form-control flex w-full flex-row justify-between gap-5 md:gap-10 ">
        <div className="w-18 label p-0">
          <Text variant="text-sm" weight="semibold">
            {label}
          </Text>
        </div>

        <textarea
          value={value}
          onChange={onChange}
          className={cn(TextareaVariant({ size, className }))}
        ></textarea>
      </label>
    </>
  );
};

export default Textarea;
