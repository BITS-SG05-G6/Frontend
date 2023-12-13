import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Box from "./Box";
import Text from "./Text";
import { IconList } from "../svgs/IconList";
import Button from "./Button";
import CategoryForm from "../Category/CategoryForm";

const Card = ({ icon, color, add }) => {
  return (
    <Box
      className="flex justify-center items-center gap-20 flex-col h-80"
      color="gray"
    >
      {add ? (
        <CategoryForm/>
      ) : (
        <>
          <Text variant="text-lg" weight="semibold">
            Transportation
          </Text>
          <div
            className="p-4 rounded-xl"
            style={{ backgroundColor: `${color}30` }}
          >
            {IconList.map((i) => {
              if (i.value === icon) {
                return (
                  <FontAwesomeIcon icon={i.icon} size="2xl" color={color} />
                );
              }
            })}
          </div>
          <Text weight="bold">300$</Text>
        </>
      )}
    </Box>
  );
};

export default Card;
