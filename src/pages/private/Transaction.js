import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TransactionCalendar from "../../components/Transaction/TransactionCalendar";
import TransactionDetails from "../../components/Transaction/TransactionDetails";
import TransactionForm from "../../components/Transaction/TransactionForm";
import TransactionList from "../../components/Transaction/TransactionList";
import { TransactionContext } from "../../context/transactionContext";
import * as axiosInstance from "../../services/transactions";

const Transaction = () => {
  const { setPage, selectedDate, setSelectedDate, transactions } = useContext(TransactionContext);
  setPage('transaction');
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);

  function handleDateChange(date) {
    setSelectedDate(date);
  }
  console.log(id);

  useEffect(() => {
    async function fetchTransaction() {
      await axiosInstance.getTransactionDetail(id)
        .then((res) => {
          console.log(res);
          setTransaction(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    fetchTransaction();
  }, [id])

  return (
    <>
      <div className="flex justify-end px-6">
        <TransactionForm buttonName="Create Transaction" icon="file-invoice-dollar" />
      </div>
      <div className="flex justify-between px-10">
        <div className="flex flex-col flex-1 gap-10 pr-5">
          <TransactionCalendar
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
            className="flex justify-center"
          />
          <TransactionList transactions={transactions} />
        </div>

        <TransactionDetails transaction={transaction} />
      </div>
    </>
  );
};

export default Transaction;
