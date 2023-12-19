import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Box from "./Box";
import Text from "./Text";
import { IconList } from "../svgs/IconList";
import Button from "./Button";
import WalletForm from "../Wallet/WalletForm";

const ProgressCard = ({ icon, color, add, name, amount, used }) => {
  // console.log(type);
  console.log((used / amount) * 100);
  return (
    <Box
      className="flex justify-center items-center gap-10 flex-col h-80 max-w-xs"
      color="gray"
    >
      {add ? (
        <WalletForm />
      ) : (
        <>
          <Text variant="text-lg" weight="semibold">
            {name}
          </Text>
          <div
            className="p-4 rounded-xl"
            style={{ backgroundColor: `${color}30` }}
          >
            {IconList.map((i) =>
              i.value === icon ? (
                <FontAwesomeIcon icon={i.icon} size="2xl" color={color} />
              ) : null
            )}
          </div>
          <Text weight="bold">{used}/{amount} VND</Text>
          <div className="w-40 rounded-lg" style={{background: `${color}30`}}>
            <div
              className={`h-3 bg-purple-200 rounded-lg`}
              style={{ width: `${(used / amount) * 100}%`, background: `${color}`}}
            ></div>
          </div>
        </>
      )}
    </Box>
  );
};

export default ProgressCard;
