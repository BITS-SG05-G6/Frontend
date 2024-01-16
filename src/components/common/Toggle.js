import React from "react";
import { cn } from "../../utils/cn";
import Text from "./Text";

function Toggle({ placeholder, value, label, onChange, disabled }) {
  return (
    <>
      <div className="flex w-full flex-row items-center justify-between gap-12 md:gap-10">
        <div className="w-18 label p-0">
          <Text variant="text-sm" weight="semibold" className="label-text">
            {label}
          </Text>
        </div>
        <div className="flex w-full max-w-xs text-sm">
          <input
            type="checkbox"
            className={cn(
              "toggle cursor-pointer border-none bg-transparent hover:bg-transparent",
              value === true ? "[--tglbg:#EF5DA8]" : "[--tglbg:gray]",
            )}
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
