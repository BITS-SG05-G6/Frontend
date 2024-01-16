import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";
import Text from "./Text";

const SelectVariant = cva(
  "select select-bordered  hover:border-[#7879F1] focus:border-[#7879F1] focus:outline-none cursor-pointer",
  {
    variants: {
      size: {
        default: "w-8/12 sm:w-full lg:max-w-xs text-sm",
        small: "w-sm text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const Select = ({
  size,
  className,
  label,
  value,
  onChange,
  options,
  disabled,
  placeholder,
  none = true,
  labelType,
}) => {
  return (
    <>
      {labelType === "up" ? (
        <label className="form-control w-full">
          <div className="label w-full">
            <Text variant="text-sm" weight="semibold" className="label-text">
              {label}
            </Text>
          </div>
          <select
            value={value}
            onChange={onChange}
            className={cn(SelectVariant({ size, className }))}
            disabled={disabled}
          >
            <option disabled selected={value === undefined}>
              {placeholder}
            </option>
            {none === true ? (
              <option key="none" value="none">
                None
              </option>
            ) : null}
            {options.length > 1 &&
              options.map((option) => {
                if (option.id) {
                  //  return <div>{option.name}</div>
                  return (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  );
                } else if (option._id) {
                  return (
                    <option key={option._id} value={option._id}>
                      {option.name}
                    </option>
                  );
                } else {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                }
              })}
          </select>
        </label>
      ) : (
        <>
          <label className="form-control flex w-full flex-row justify-between gap-5 md:gap-10 ">
            <div className="w-18 label p-0 text-start">
              <Text
                variant="text-sm"
                weight="semibold"
                className="w-18 label-text"
              >
                {label}
              </Text>
            </div>
            <select
              value={value}
              onChange={onChange}
              className={cn(SelectVariant({ size, className }))}
              disabled={disabled}
            >
              <option disabled selected={value === undefined}>
                {placeholder}
              </option>
              {none === true ? (
                <option key="none" value="none">
                  None
                </option>
              ) : null}
              {options.length > 1 &&
                options.map((option) => {
                  if (option.id) {
                    //  return <div>{option.name}</div>
                    return (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    );
                  } else if (option._id) {
                    return (
                      <option key={option._id} value={option._id}>
                        {option.name}
                      </option>
                    );
                  } else {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  }
                })}
            </select>
          </label>
        </>
      )}
    </>
  );
};
export default Select;
