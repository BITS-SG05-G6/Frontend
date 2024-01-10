import React from "react";
import { cn } from "../../utils/cn";
import Text from "./Text";

function Toggle({
  placeholder,
  value,
  label,
  onChange,
  disabled
}) {
  return (
    <>
      <div className="w-full flex flex-row gap-10 justify-between items-center">
        <div className="label w-18 p-0">
          <Text variant="text-sm" weight="semibold" className="label-text">
            {label}
          </Text>
        </div>
        <div className="w-full max-w-xs text-sm flex">
          <input
            type="checkbox"
            className={cn("toggle cursor-pointer bg-transparent border-none hover:bg-transparent", value === true ? "[--tglbg:#EF5DA8]" : "[--tglbg:gray]")}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
          />
        </div>
      </div>
    </>
  );
}

export default Toggle;
