import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import Text from "./Text";

const InputVariants = cva(
  "input input-bordered hover:border-[#7879F1] focus:border-[#7879F1] focus:outline-none",
  {
    variants: {
      size: {
        default: "w-full max-w-xs text-sm",
        small: "w-full max-w-sm text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const LabelVariants = cva(
  "form-control w-full", 
  {
    variants: {
      labelType: {
        side: "form-control w-full flex flex-row gap-10 justify-around ",
        up: "form-control w-full"
      }
    },
    defaultVariants: {
      labelType: "up"
    }
  }
)

function FormInput({
  type,
  placeholder,
  size,
  className,
  label,
  value,
  onChange,
  labelType
}) {
  return (
    <>
      <label className={cn(LabelVariants({labelType}))}>
        <div className="label w-12">
          <Text variant="text-sm" weight="semibold" className="label-text w-12">
            {label}
          </Text>
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(InputVariants({ size, className }))}
        />
      </label>
    </>
  );
}

export default FormInput;
