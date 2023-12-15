import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Box from "./Box";
import Text from "./Text";
import { IconList } from "../svgs/IconList";
import Button from "./Button";
import CategoryForm from "../Category/CategoryForm";

const Card = ({ icon, color, add, type, name, amount }) => {
  // console.log(type);
  return (
    <Box
      className="flex justify-center items-center gap-20 flex-col h-80 max-w-xs"
      color="gray"
    >
      {add ? (
        <CategoryForm categoryType={type} />
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
          <Text weight="bold">{amount} VND</Text>
        </>
      )}
    </Box>
  );
};

export default Card;
