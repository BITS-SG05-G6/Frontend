import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import Text from "../common/Text";

function TransactionCard({ title, amount, category, id, color}) {
  return (
    <tr className="w-full">
      {/* The user can click on a transaction row to view the details */}
      {/* <td>{title}</td> */}
      <td>
        <Text
          variant="text-sm"
          className="text-[#EF5DA8]"
          href={`/transaction/${id}`}
        >
          {title}
          {/* {id} */}
        </Text>
      </td>
      {category ? (
        <td>
            <Text variant="text-sm" className="rounded-xl px-3 py-1" style={{
                backgroundColor: `${color}40`,
                color: color,
              }}>{color}</Text>
          {/* <span className="bg-[#FCDDEC] rounded-xl px-3 py-1">{category}</span> */}
        </td>
      ) : (
        <td>
            <Text variant="text-sm" className="bg-[#FCDDEC] rounded-xl px-3 py-1">None</Text>
        </td>
      )}
      <td className="font-bold">{amount} VND</td>
      <td className="flex gap-1 justify-center">
        <Button variant="blueButton">Edit</Button>
        <Button variant="redButton">Delete</Button>
      </td>
    </tr>
    // <div className="flex w-full">
    //     <Text>{title}</Text>
    //     <Text>{category}</Text>
    //     <Text>{amount} VND</Text>
    //     <div>
    //     <Button variant="blueButton">Edit</Button>
    // <Button variant="redButton">Delete</Button></div>
    // </div>
  );
}

export default TransactionCard;
