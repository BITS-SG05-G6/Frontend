import React from "react";
import Text from "../common/Text";
import Icon from "../common/Icon";
import Box from "../common/Box";
import { WalletIcon } from "../svgs/sidebarIcons";
import { Progress } from "@material-tailwind/react";

const WalletCard = ({ title, amount, used, color }) => {
  return (
    <Box
      className="w-30 flex h-60 flex-col items-center justify-center gap-10"
      color={"gray"}
    >
      <>
        <Text weight="semibold" variant="text-base" className="pt-10">
          {title}
        </Text>
        <div
          className="rounded-xl p-4"
          style={{ backgroundColor: `${color}30` }}
        >
          <Icon
            svg={<WalletIcon />}
            className="item-center flex"
            isHovered={"isHovered"}
            fillColor={color}
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
        <div>
          <Progress value={(used / amount) * 100} color="black" />
        </div>
      </>
    </Box>
  );
};

export default WalletCard;
