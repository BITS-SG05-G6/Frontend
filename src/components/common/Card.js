import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Box from "./Box";
import Text from "./Text";
import { IconList } from "../svgs/IconList";
import Button from "./Button";
import CategoryForm from "../Category/CategoryForm";
import WalletForm from "../Wallet/WalletForm";
import TransactionForm from "../Transaction/TransactionForm";

const Card = ({ id, icon, color, add, type, name, amount, handleDel, variety }) => {
  // console.log(type);
  return (
    <Box
      className="flex justify-center items-center gap-10 flex-col h-80 max-w-xs"
      color="gray"
    >
      {add === "category" ? (
        <CategoryForm categoryType={type} />
      ) : add === "wallet" ? (
        <WalletForm/>
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
          <div className="flex justify-around w-full">
            {
              variety === "Category" ?
              // <CategoryForm/>
              <TransactionForm buttonName="Add" variant="blueButton" category={{id: id, name: name}}/>
              :
              <TransactionForm buttonName="Add" variant="blueButton" wallet={{id: id, name: name}}/>
            }
     
          

         
                {/* <Button
                  // size="xl"
                  size=""
                  variant="blueButton"
                  // onClick={handleSubmit(onSubmit)}
                >
                  Add
                </Button> */}

                <Button
                size=""
                variant="redButton"
                onClick={handleDel}
                >Delete</Button>
              </div>
        </>
      )}
    </Box>
  );
};

export default Card;
