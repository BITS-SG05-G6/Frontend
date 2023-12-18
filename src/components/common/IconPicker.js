import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconList } from "../svgs/IconList";
import Text from "./Text";
import { cn } from "../../utils/cn";

const IconPicker = ({ value, onChange }) => {
  return (
    <div className="form-control w-full flex items-center flex-row gap-12 justify-around">
      <Text variant="text-sm" weight="semibold" className="label-text w-">
        Icon
      </Text>

      <div className="w-full max-w-xs text-sm flex items-center gap-6">
        <div color="pink" className="dropdown overflow-visible">
          <div tabIndex={0} className="btn input-bordered bg-transparent hover:bg-transparent hover:border-[#7879F1] focus:border-[#7879F1] focus:outline-none">
            {IconList.map((i) =>
              (i.value === value) ?
                <FontAwesomeIcon icon={i.icon} /> :null
            )}
          </div>
          <div tabIndex={0} className="p-2 menu dropdown-content bg-white rounded-box w-96">
            <div className="h-72 overflow-scroll flex flex-col gap-3">
              <div className="flex gap-3 flex-wrap flex-col">
                <Text variant="text-sm" weight="semibold">
                  Lifestyle
                </Text>
                <div className="flex gap-4 flex-wrap">
                {IconList.map((i) => (
                    i.category === "Lifestyle") ?
                    
                        <label
                          className={cn(
                            value === i.value ? "bg-pink-300" : "bg-gray-200",
                            "rounded-full w-8 h-8 flex justify-center items-center", "cursor-pointer"
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
                        </label> : null
                      )
                    }
                </div>
              </div>

              <div className="flex gap-3 flex-wrap flex-col">
                <Text variant="text-sm" weight="semibold">
                  Food & Drink
                </Text>
                <div className="flex gap-4 flex-wrap">
                {IconList.map((i) => (
                    i.category === "Food & Drink") ?
                    
                        <label
                          className={cn(
                            value === i.value ? "bg-pink-300" : "bg-gray-200",
                            "rounded-full w-8 h-8 flex justify-center items-center", "cursor-pointer"
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
                        </label> : null
                      )
                    }
                </div>
              </div>

              <div className="flex gap-3 flex-wrap flex-col">
                <Text variant="text-sm" weight="semibold">
                  Transportation
                </Text>
                <div className="flex gap-4 flex-wrap">
                {IconList.map((i) => (
                    i.category === "Transportation") ?
                    
                        <label
                          className={cn(
                            value === i.value ? "bg-pink-300" : "bg-gray-200",
                            "rounded-full w-8 h-8 flex justify-center items-center", "cursor-pointer"
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
                        </label> : null
                      )
                    }
                </div>
              </div>

              <div className="flex gap-3 flex-wrap flex-col">
                <Text variant="text-sm" weight="semibold">
                  Travel
                </Text>
                <div className="flex gap-4 flex-wrap">
                {IconList.map((i) => (
                    i.category === "Travel") ?
                    
                        <label
                          className={cn(
                            value === i.value ? "bg-pink-300" : "bg-gray-200",
                            "rounded-full w-8 h-8 flex justify-center items-center", "cursor-pointer"
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
                        </label> : null
                      )
                    }
                </div>
              </div>

              <div className="flex gap-3 flex-wrap flex-col">
                <Text variant="text-sm" weight="semibold">
                  Family
                </Text>
                <div className="flex gap-4 flex-wrap">
                  {IconList.map((i) => (
                    i.category === "Family") ?
                    
                        <label
                          className={cn(
                            value === i.value ? "bg-pink-300" : "bg-gray-200",
                            "rounded-full w-8 h-8 flex justify-center items-center", "cursor-pointer"
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
                        </label> : null
                      )
                    }

                </div>
              </div>

              <div className="flex gap-3 flex-wrap flex-col">
                <Text variant="text-sm" weight="semibold">
                  Shopping
                </Text>
                <div className="flex gap-4 flex-wrap">
                  {IconList.map((i) => (
                    i.category === "Shopping") ?
              
                        <label
                          className={cn(
                            value === i.value ? "bg-pink-300" : "bg-gray-200",
                            "rounded-full w-8 h-8 flex justify-center items-center", "cursor-pointer"
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
                        </label> : null
                      )
                    }
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
