import React from "react";
import { cn } from "../../utils/cn";
import { formatMoney } from "../../utils/formatMoney";
import Button from "../common/Button";
import Text from "../common/Text";

function TransactionCard({ title, amount, category, id, color, handleDel, type, currency}) {
  return (
    <tr className="w-full">
      {/* The user can click on a transaction row to view the details */}
      <td>
        <Text
          variant="text-sm"
          className="text-[#EF5DA8]"
          href={`/transaction/${id}`}
        >
          {title}
        </Text>
      </td>
      {category ? (
        <td>
            <Text variant="text-sm" className="rounded-xl px-3 py-1" style={{
                backgroundColor: `${color}40`,
                color: color,
              }}>{category}</Text>
        </td>
      ) : (
        <td>
            <Text variant="text-sm" className="bg-[#FCDDEC] rounded-xl px-3 py-1 text-[#EF5CA8]">None</Text>
        </td>
      )}
      <td className={cn(type === "Expense" ? "text-red-400" : "text-green-400" ,"text-center font-bold")}>{formatMoney(amount, currency)}</td>
      <td className="flex gap-1 justify-center">
        <Button variant="blueButton">Edit</Button>
        <Button href="/transaction" variant="redButton" onClick={handleDel}>Delete</Button>
      </td>
    </tr>
  );
}

export default TransactionCard;
