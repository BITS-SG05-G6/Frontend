import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import Box from "./Box";
import Button from "./Button";
import Text from "./Text";
import { IconList } from "../svgs/IconList";
import CategoryForm from "../Category/CategoryForm";
import WalletForm from "../Wallet/WalletForm";
import TransactionForm from "../Transaction/TransactionForm";
import { AuthContext } from "../../context/authContext";

const Card = ({ id, icon, color, add, type, name, amount, handleDel, variety}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { userInfo } = useContext(AuthContext);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <div className="">
      {add === "category" ? (
      <CategoryForm categoryType={type} />
    ) : add === "wallet" ? (
      <WalletForm/>
    ) : <Box
    className="flex justify-center items-center gap-10 flex-col h-80 max-w-sm"
    color="gray"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{
      backgroundColor: isHovered ? '#FFFFFF' : '',
      border: isHovered ? `3px solid ${color}` : '',
      transform: isHovered ? 'translate(0, -10px)' : 'translate(0,0)',
      transition: 'transform 0.5s'
    }}
  >
      <>
        <Text key={id} variant="text-lg" weight="semibold" className="text-center">
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
        <Text weight="bold">{amount} {userInfo.baseCurrency}</Text>
        <div className="flex justify-around w-full">
          {
            variety === "Category" ?
            <TransactionForm buttonName="Add" variant="blueButton" category={{id: id, name: name, type: type, amount: amount}}/>
            :
            <TransactionForm buttonName="Add" variant="blueButton" wallet={{id: id, name: name, currency: userInfo.baseCurrency, amount: amount}}/>
          }
   
      

              <Button
              size=""
              variant="redButton"
              onClick={handleDel}
              >Delete</Button>
            </div>
      </>
    {/* )} */}
  </Box>}
    </div>
    
  );
};

export default Card;
