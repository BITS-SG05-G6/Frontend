import React from "react";
import Button from "../common/Button";

function TransactionCard({title, amount, category}) {
    return (
        <tr className="w-full">
           <td>{title}</td>
           <td><span className="bg-[#FCDDEC] rounded-[10px] px-3 py-1">{category}</span></td>
           <td className="font-bold">{amount} VND</td> 
           <td><Button className="px-6 h-5">View</Button></td>
        </tr>
    )
}

export default TransactionCard;