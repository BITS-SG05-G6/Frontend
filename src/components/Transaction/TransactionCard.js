import React from "react";
import Button from "../common/Button";

function TransactionCard({title, amount, category}) {
    return (
        <tr onClick={''} className="w-full">
            {/* The user can click on a transaction row to view the details */}
           <td>{title}</td>
           <td><span className="bg-[#FCDDEC] rounded-[10px] px-3 py-1">{category}</span></td>
           <td className="font-bold">{amount} VND</td> 
           <td className="flex gap-1 justify-center">
            <Button variant='blueButton'>Edit</Button>
            <Button variant='redButton'>Delete</Button>
            </td>
        </tr>
    )
}

export default TransactionCard;