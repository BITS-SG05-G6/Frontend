import React from "react";
import { cn } from "../../utils/cn";
import { formatMoney } from "../../utils/formatMoney";
import Text from "../common/Text";
import ConfirmationModal from "../common/ConfirmationModal";
import TransactionEditForm from "./TransactionEditForm";

function TransactionCard({ transaction, handleDel }) {
  return (
    <tr className="w-full">
      {/* The user can click on a transaction row to view the details */}
      <td>
        <Text
          variant="text-sm"
          className="text-[#EF5DA8]"
          href={`/transaction/${transaction._id}`}
        >
          {transaction.title}
        </Text>
      </td>
      {transaction.category ? (
        <td>
          <Text
            variant="text-sm"
            className="rounded-xl px-3 py-1"
            style={{
              backgroundColor: `${transaction.color}40`,
              color: transaction.color,
            }}
          >
            {transaction.category}
          </Text>
        </td>
      ) : (
        <td>
          <Text
            variant="text-sm"
            className="rounded-xl bg-[#FCDDEC] px-3 py-1 text-[#EF5CA8]"
          >
            None
          </Text>
        </td>
      )}
      <td
        className={cn(
          transaction.type === "Expense" ? "text-red-400" : "text-green-400",
          "w-20 text-center font-bold",
        )}
      >
        {formatMoney(transaction.amount, transaction.currency)}
      </td>
      <td className="flex flex-col justify-center gap-2 xl:flex-row">
        {/* <Button variant="blueButton">Edit</Button> */}
        <TransactionEditForm transaction={transaction} />
        {/* <Button href="/transaction" variant="redButton" onClick={openConfirmationDelete}>Delete</Button> */}
        <ConfirmationModal
          idModal={`deleteConfirmation-${transaction._id}`}
          btnName="Delete"
          btnSize="small"
          btnType="button"
          onSubmit={handleDel}
          message={`Are you sure you want to delete transaction "${transaction.title}"?`}
          variant="redButton"
        />
      </td>
    </tr>
  );
}

export default TransactionCard;
