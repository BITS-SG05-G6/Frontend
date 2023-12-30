import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";
import Text from "./Text";

const TextareaVariant = cva(
  "input input-bordered hover:border-[#7879F1] h-24 focus:border-[#7879F1] focus:outline-none",
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

const Textarea = ({
  size,
  className,
  label,
  value,
  onChange,
}) => {
  return (
    <>
      <label className="form-control w-full flex flex-row gap-10 justify-around">
        <div className="label w-18">
          <Text variant="text-sm" weight="semibold" className="label-text w-18">
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
