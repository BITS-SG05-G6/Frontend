import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Box from "./Box";
import Text from "./Text";
import { IconList } from "../svgs/IconList";
import CategoryForm from "../Category/CategoryForm";

const Card = ({ icon, color, add, type, name, amount, }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <Box
      className='flex justify-center items-center gap-20 flex-col h-80 max-w-xs '
      color="gray"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovered ? '#FFFFFF' : '',
        border: isHovered ? `3px solid ${color}` : '',
        transform: isHovered ? 'translate(20px, -10px)' : 'translate(0,0)',
        transition: 'transform 0.5s'
      }}
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
            style={{
              backgroundColor: `${color}30`
            }}
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
