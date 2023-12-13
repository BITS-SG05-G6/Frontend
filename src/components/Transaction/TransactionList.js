import TransactionCard from "./TransactionCard";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as axiosInstance from '../../services/transactions'

function TransactionList({ selectedDate }) {
  // Set transaction list
  const [transactions, setTransactions] = useState([
    {
      title: "Title",
      category: "Category",
      amount: 10,
    },
    {
      title: "Title",
      category: "Category",
      amount: 10,
    },
    {
      title: "Title",
      category: "Category",
      amount: 10,
    },
  ]);
  const [transaction, setTransaction] = useState(null);
  

  // Fetch transactions
  // useEffect(() => {
  //   // Fetch transactions based on user Id and date
  //   let date = selectedDate;
  //   const fetchData = async () => {
  //     try {
  //       console.log('Date: ', selectedDate);
  //       // Recieve response
  //       let res = await axiosInstance.getTransactions( date );
  //       setTransactions(res);
  //     }
  //     catch (error) {
  //       console.log(error.response.data.message.error);
  //     }
  //   }
 
      
  //   fetchData();

  // }, [selectedDate]);

  return (
    <div className="px-10">
      <table className="table table-sm text-center">
        <thead>
          <tr className="text-[#78778B] uppercase">
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TransactionCard
              key={transaction._id}
              title={transaction.title}
              category={transaction.category}
              amount={transaction.amount}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
