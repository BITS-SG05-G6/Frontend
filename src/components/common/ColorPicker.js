import React from "react";
import Text from "./Text";

function ColorPicker({
  label,
  value,
  onChange,
}) {

  return (
    <>
      <label className="form-control w-full flex items-center flex-row gap-10 justify-around">
        <Text variant="text-sm" weight="semibold" className="label-text w-">
          {label}
        </Text>
        <div className="w-full max-w-xs text-sm flex items-center gap-6">
          <input
            type="color"
            value={value}
            onChange={onChange}
            className="focus:outline-none focus:border-none bg-transparent rounded-full w-12 h-12 cursor-pointer"
          />
          <input
            type="text"
            value={value.toUpperCase()}
            disabled
            onChange={onChange}
            className="input input-bordered"

            style={{
              backgroundColor: `${value}40`,
              color: value,}}

          />
        </div>
      </label>
    </>
  );
}

export default ColorPicker;
