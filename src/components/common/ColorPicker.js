import React from "react";
import Text from "./Text";

function ColorPicker({ label, value, onChange }) {
  return (
    <>
      <label className="form-control flex w-full flex-row items-center justify-between gap-10">
        <Text
          variant="text-sm"
          weight="semibold"
          className="label-text w-16 text-start"
        >
          {label}
        </Text>
        <div className="flex w-full max-w-xs items-center gap-6 text-sm">
          <input
            type="color"
            value={value}
            onChange={onChange}
            className="h-12 w-12 cursor-pointer rounded-full bg-transparent focus:border-none focus:outline-none"
          />
          <input
            type="text"
            value={value.toUpperCase()}
            disabled
            onChange={onChange}
            className="input input-bordered w-36 md:w-auto"
            style={{
              backgroundColor: `${value}40`,
              color: value,
            }}
          />
        </div>
      </label>
    </>
  );
}

export default ColorPicker;
