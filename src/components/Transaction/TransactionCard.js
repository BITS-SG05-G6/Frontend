import React from "react";
import Button from "../common/Button";

function TransactionCard({title, amount, category}) {
    return (
        <tr>
           <td>{title}</td>
           <td><span className="bg-[#FCDDEC] rounded-[10px] px-3 py-1">{category}</span></td>
           <td className="font-bold">{amount}</td> 
           <td><Button children='View' variant='cirFill' size='sm'/></td>
        </tr>
    )
}

export default TransactionCard;