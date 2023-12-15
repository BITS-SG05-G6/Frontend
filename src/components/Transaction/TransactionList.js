import TransactionCard from "./TransactionCard";
import React, { useState, useEffect } from "react";
import Text from "../common/Text";
import * as axiosInstance from "../../services/transactions";

function TransactionList({ transactions }) {
  // Set transaction list
  // const [transactions, setTransactions] = useState([]);
  // console.log(transactions[0])
  return (
    <div className="px-10">
      {transactions ? (
        <table className="table table-sm text-center">
          <thead>
            <tr className="text-[#78778B] uppercase">
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionCard
                id={transaction._id}
                title={transaction.title}
                category={transaction.category}
                amount={transaction.amount}
                color={transaction.color}
              />
            ))}
          </tbody>
        </table>
      ) :
        (
          <div className="flex flex-col justify-center items-center">
            <img src={require("../../assets/notransaction.png")} width='15%' height='15%' alt="no transaction" className=""></img>
            <div>
              <Text className='text-slate-400' variant='text-sm'>No transaction for today!</Text>
            </div>
          </div>
        )}

    </div>
  );
}

export default TransactionList;
