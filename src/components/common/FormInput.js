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
        small: "w-sm text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

function FormInput({
  type,
  placeholder,
  size,
  className,
  label,
  value,
  onChange,
}) {
  // const {register} = useForm();
  return (
    <>
      <label className="form-control w-full flex flex-row gap-10 justify-around ">
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
