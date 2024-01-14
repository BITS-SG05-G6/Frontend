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
import { formatMoney } from "../../utils/formatMoney";
import ConfirmationModal from "./ConfirmationModal";

const Card = ({
  id,
  icon,
  color,
  add,
  type,
  name,
  amount,
  handleDel,
  variety,
  href,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { userInfo } = useContext(AuthContext);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="">
      {add === "category" ? (
        <CategoryForm categoryType={type} />
      ) : add === "wallet" ? (
        <WalletForm />
      ) : (
        <Box
          className="flex h-80 w-72 max-w-sm flex-col items-center justify-center gap-10 xl:w-64"
          color="gray"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor: isHovered ? "#FFFFFF" : "",
            border: isHovered ? `3px solid ${color}` : "",
            transform: isHovered ? "translate(0, -10px)" : "translate(0,0)",
            transition: "transform 0.5s",
          }}
        >
          <>
            <Text
              key={id}
              href={href}
              variant="text-lg"
              weight="semibold"
              className="text-center"
            >
              {name}
            </Text>
            <div
              className="rounded-xl p-4"
              style={{
                backgroundColor: `${color}30`,
              }}
            >
              {IconList.map((i) =>
                i.value === icon ? (
                  <FontAwesomeIcon icon={i.icon} size="2xl" color={color} />
                ) : null,
              )}
            </div>
            <Text weight="bold">
              {formatMoney(amount, userInfo.baseCurrency)}
            </Text>
            <div className="grid w-full grid-cols-2 justify-around">
              {variety === "Category" ? (
                <TransactionForm
                  buttonName="Add"
                  variant="blueButton"
                  category={{ id: id, name: name, type: type, amount: amount }}
                />
              ) : (
                <TransactionForm
                  buttonName="Add"
                  variant="blueButton"
                  wallet={{
                    id: id,
                    name: name,
                    currency: userInfo.baseCurrency,
                    amount: amount,
                  }}
                />
              )}

              <ConfirmationModal
                idModal={`deleteConfirmation-${id}`}
                btnName="Delete"
                // btnSize="small"
                btnType="button"
                onSubmit={handleDel}
                message={`Are you sure you want to delete this "${name}"?`}
                variant="redButton"
              />
            </div>
          </>
        </Box>
      )}
    </div>
  );
};

export default Card;
