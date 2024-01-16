import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconList } from "../svgs/IconList";
import Text from "./Text";
import { cn } from "../../utils/cn";

const IconPicker = ({ value, onChange }) => {
  return (
    <div className="form-control flex w-full flex-row items-center justify-between gap-20 md:gap-12">
      <Text variant="text-sm" weight="semibold" className="w-18 label-text">
        Icon
      </Text>

      <div className="flex w-full max-w-xs items-center gap-6 text-sm">
        <div color="pink" className="dropdown overflow-visible">
          <div
            tabIndex={0}
            className="btn input-bordered bg-transparent hover:border-[#7879F1] hover:bg-transparent focus:border-[#7879F1] focus:outline-none"
          >
            {IconList.map((i, index) =>
              i.value === value ? (
                <FontAwesomeIcon key={index} icon={i.icon} />
              ) : null,
            )}
          </div>
          <div
            tabIndex={0}
            className="menu dropdown-content w-96 rounded-box bg-white p-2"
          >
            <div className="flex h-72 flex-col gap-3 overflow-scroll">
              <div className="flex flex-col flex-wrap gap-3">
                <Text variant="text-sm" weight="semibold">
                  Lifestyle
                </Text>
                <div className="flex flex-wrap gap-4">
                  {IconList.map((i) =>
                    i.category === "Lifestyle" ? (
                      <label
                        className={cn(
                          value === i.value ? "bg-pink-300" : "bg-gray-200",
                          "flex h-8 w-8 items-center justify-center rounded-full",
                          "cursor-pointer",
                        )}
                      >
                        <input
                          type="radio"
                          value={i.value}
                          checked={value === i.value}
                          onChange={onChange}
                          className="hidden"
                        />
                        <FontAwesomeIcon
                          icon={i.icon}
                          style={{
                            color: value === i.value ? "white" : "gray",
                          }}
                        />
                      </label>
                    ) : null,
                  )}
                </div>
              </div>

              <div className="flex flex-col flex-wrap gap-3">
                <Text variant="text-sm" weight="semibold">
                  Food & Drink
                </Text>
                <div className="flex flex-wrap gap-4">
                  {IconList.map((i) =>
                    i.category === "Food & Drink" ? (
                      <label
                        className={cn(
                          value === i.value ? "bg-pink-300" : "bg-gray-200",
                          "flex h-8 w-8 items-center justify-center rounded-full",
                          "cursor-pointer",
                        )}
                      >
                        <input
                          type="radio"
                          value={i.value}
                          checked={value === i.value}
                          onChange={onChange}
                          className="hidden"
                        />
                        <FontAwesomeIcon
                          icon={i.icon}
                          style={{
                            color: value === i.value ? "white" : "gray",
                          }}
                        />
                      </label>
                    ) : null,
                  )}
                </div>
              </div>

              <div className="flex flex-col flex-wrap gap-3">
                <Text variant="text-sm" weight="semibold">
                  Transportation
                </Text>
                <div className="flex flex-wrap gap-4">
                  {IconList.map((i) =>
                    i.category === "Transportation" ? (
                      <label
                        className={cn(
                          value === i.value ? "bg-pink-300" : "bg-gray-200",
                          "flex h-8 w-8 items-center justify-center rounded-full",
                          "cursor-pointer",
                        )}
                      >
                        <input
                          type="radio"
                          value={i.value}
                          checked={value === i.value}
                          onChange={onChange}
                          className="hidden"
                        />
                        <FontAwesomeIcon
                          icon={i.icon}
                          style={{
                            color: value === i.value ? "white" : "gray",
                          }}
                        />
                      </label>
                    ) : null,
                  )}
                </div>
              </div>

              <div className="flex flex-col flex-wrap gap-3">
                <Text variant="text-sm" weight="semibold">
                  Travel
                </Text>
                <div className="flex flex-wrap gap-4">
                  {IconList.map((i) =>
                    i.category === "Travel" ? (
                      <label
                        className={cn(
                          value === i.value ? "bg-pink-300" : "bg-gray-200",
                          "flex h-8 w-8 items-center justify-center rounded-full",
                          "cursor-pointer",
                        )}
                      >
                        <input
                          type="radio"
                          value={i.value}
                          checked={value === i.value}
                          onChange={onChange}
                          className="hidden"
                        />
                        <FontAwesomeIcon
                          icon={i.icon}
                          style={{
                            color: value === i.value ? "white" : "gray",
                          }}
                        />
                      </label>
                    ) : null,
                  )}
                </div>
              </div>

              <div className="flex flex-col flex-wrap gap-3">
                <Text variant="text-sm" weight="semibold">
                  Family
                </Text>
                <div className="flex flex-wrap gap-4">
                  {IconList.map((i) =>
                    i.category === "Family" ? (
                      <label
                        className={cn(
                          value === i.value ? "bg-pink-300" : "bg-gray-200",
                          "flex h-8 w-8 items-center justify-center rounded-full",
                          "cursor-pointer",
                        )}
                      >
                        <input
                          type="radio"
                          value={i.value}
                          checked={value === i.value}
                          onChange={onChange}
                          className="hidden"
                        />
                        <FontAwesomeIcon
                          icon={i.icon}
                          style={{
                            color: value === i.value ? "white" : "gray",
                          }}
                        />
                      </label>
                    ) : null,
                  )}
                </div>
              </div>

              <div className="flex flex-col flex-wrap gap-3">
                <Text variant="text-sm" weight="semibold">
                  Shopping
                </Text>
                <div className="flex flex-wrap gap-4">
                  {IconList.map((i) =>
                    i.category === "Shopping" ? (
                      <label
                        className={cn(
                          value === i.value ? "bg-pink-300" : "bg-gray-200",
                          "flex h-8 w-8 items-center justify-center rounded-full",
                          "cursor-pointer",
                        )}
                      >
                        <input
                          type="radio"
                          value={i.value}
                          checked={value === i.value}
                          onChange={onChange}
                          className="hidden"
                        />
                        <FontAwesomeIcon
                          icon={i.icon}
                          style={{
                            color: value === i.value ? "white" : "gray",
                          }}
                        />
                      </label>
                    ) : null,
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* <p>Selected option: {value}</p> */}
        </div>
      </div>
    </div>
  );
};

export default IconPicker;
