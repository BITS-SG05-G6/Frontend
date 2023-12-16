import React from "react";
import Text from "../common/Text";
import Icon from "../common/Icon";
import Box from "../common/Box";
import { WalletIcon } from "../svgs/sidebarIcons";
import { Progress } from "@material-tailwind/react";

const WalletCard = ({ title, amount, used, color }) => {
  return (
    <div
      className="flex justify-center items-center flex-col gap-11 border rounded-lg shadow sm:p-8"
      style={{ backgroundColor: `${color}30` }}
    >
      <div>
        <Text className=" " weight="semibold" variant="text-md">
          {title}
        </Text>
      </div>
      <div className="p-4 rounded-xl" style={{ backgroundColor: `${color}30` }}>
        <Icon
          svg={<WalletIcon />}
          isHovered={"isHovered"}
          hoverColor={{ color }}
          fillColor={"#FFFFFF"}
        />
      </div>
      <div>
        <Text weight={"bold"} variant={"text-base"}>
          {used}$ /
        </Text>
        <Text weight={"bold"} variant={"text-base"}>
          {amount}${" "}
        </Text>
      </div>
      <Progress
        value={(used / amount) * 100}
        size="lg"
        color="blue"
        // color={{ backgroundColor: `${color}` }}
      />
    </div>
  );
};

export default WalletCard;
