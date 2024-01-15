import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import Text from "./Text";

const InputVariants = cva(
  "input input-bordered hover:border-[#7879F1] focus:border-[#7879F1] focus:outline-none",
  {
    variants: {
      size: {
        default: "w-8/12 sm:w-full max-w-xs text-sm",
        small: "w-8/12 sm:w-full max-w-sm text-sm",
        noMaxWidth: "w-8/12 sm:w-full text-sm pr-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const LabelVariants = cva("form-control w-full", {
  variants: {
    labelType: {
      side: "form-control w-full flex flex-row gap-5 md:gap-10 justify-between ",
      up: "form-control w-full",
    },
  },
  defaultVariants: {
    labelType: "up",
  },
});

function FormInput({
  type,
  placeholder,
  size,
  className,
  label,
  value,
  onChange,
  labelType,
  disabled,
}) {
  return (
    <>
      <label className={cn(LabelVariants({ labelType }))}>
        {labelType === "side" ? (
          <>
            <div className="w-18 label">
              <Text variant="text-sm" weight="semibold" className="label-text ">
                {label}
              </Text>
            </div>
            <input
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={cn(InputVariants({ size, className }))}
              disabled={disabled}
            />
          </>
        ) : (
          <>
            <div className="label w-full">
              <Text variant="text-sm" weight="semibold" className="label-text">
                {label}
              </Text>
            </div>
            <input
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={cn(InputVariants({ size, className }))}
              disabled={disabled}
            />
          </>
        )}
      </label>
    </>
  );
}

export default FormInput;
